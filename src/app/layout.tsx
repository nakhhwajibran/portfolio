'use client';
import './globals.css';
import {Navbar} from './components/Navbar';
import { useEffect } from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  return (
    <html lang="en">
      <head>
      <title>Adnan Ali</title>
      <link rel="icon" href="/logo.png" type="image/png" />
      </head>
      <body className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors">
        <Navbar/>
        <main>{children}</main>
      </body>
    </html>
  );
}

