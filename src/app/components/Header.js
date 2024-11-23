'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-item"><Link href="#summary">Summary</Link></li>
                    <li className="nav-item"><Link href="#projects">Projects</Link></li>
                    <li className="nav-item"><Link href="#contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
