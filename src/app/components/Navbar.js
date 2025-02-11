'use client';

import React, { useState, useEffect } from 'react';
import { GitHubLogoIcon, LinkedInLogoIcon, VercelLogoIcon } from '@radix-ui/react-icons';
import { ModeToggle } from './ModeToggle'; // Ensure ModeToggle is correctly imported
import { cn } from '@/app/lib/utils'; // Utility function for merging class names

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById('hero-section')?.offsetHeight || 0;
      setIsScrolled(window.scrollY > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative flex w-full">
      <NavbarComponent isScrolled={isScrolled} />
    </div>
  );
}

function NavbarComponent({ isScrolled }) {
  const [active, setActive] = useState(null);

  return (
    <div
      className={cn(
        'fixed z-50 px-6 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-full shadow-lg transition-all duration-500',
        {
          'top-10 inset-x-0 max-w-2xl mx-auto': !isScrolled, // Centered when at top
          'top-4 right-4 max-w-sm': isScrolled, // Moves to the right after scrolling
        }
      )}
    >
      <Menu setActive={setActive}>
        {/* Navigation Menu */}
        <MenuItem setActive={setActive} active={active} item="Navigation">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#summary">Summary</HoveredLink>
            <HoveredLink href="#experience">Experience</HoveredLink>
            <HoveredLink href="#projects">Projects</HoveredLink>
            <HoveredLink href="#skills">Skills</HoveredLink>
            <HoveredLink href="#education">Education</HoveredLink>
            <HoveredLink href="#contact">Contact</HoveredLink>
          </div>
        </MenuItem>

        {/* Social Links */}
        <MenuItem setActive={setActive} active={active} item="Social">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="https://github.com/nakhhwajibran" target="_blank">
              <GitHubLogoIcon className="mr-1" /> GitHub
            </HoveredLink>
            <HoveredLink href="https://www.linkedin.com/in/jibran-siraj-nakhwa-5a6004168" target="_blank">
              <LinkedInLogoIcon className="mr-1" /> LinkedIn
            </HoveredLink>
            <HoveredLink href="https://vercel.com" target="_blank">
              <VercelLogoIcon className="mr-1" /> Portfolio Hosting
            </HoveredLink>
          </div>
        </MenuItem>

        {/* Dark Mode Toggle */}
        <ModeToggle />
      </Menu>
    </div>
  );
}

export const HoveredLink = ({ href, children, ...props }) => (
  <a
    href={href}
    className="hover:text-blue-500 hover:underline transition-all duration-300 flex items-center"
    {...props}
  >
    {children}
  </a>
);

export const Menu = ({ children }) => (
  <div className="flex justify-between items-center space-x-8">{children}</div>
);

export const MenuItem = ({ setActive, active, item, children }) => (
  <div
    onMouseEnter={() => setActive(item)} // Show the dropdown on hover
    onMouseLeave={() => setActive(null)} // Hide the dropdown when leaving the area
    className="relative group"
  >
    {/* Parent button */}
    <button className="text-lg font-semibold text-gray-800 dark:text-gray-200 transition-colors duration-300">
      {item}
    </button>

    {/* Dropdown Menu */}
    <div
      className={`absolute top-10 left-0 min-w-[100px] bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 ${
        active === item ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
      }`}
    >
      {children}
    </div>
  </div>
);


