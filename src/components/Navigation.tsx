'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPrivateMode, setIsPrivateMode] = useState(false);

  // Initialize private mode from localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('privateMode') === 'true';
      setIsPrivateMode(savedMode);
      
      if (savedMode) {
        document.body.classList.add('private-mode');
      }
      
      // Remove focus from search input
      const searchInput = document.querySelector('input[type="search"]') as HTMLInputElement;
      if (searchInput) {
        searchInput.blur();
      }
    }
  }, []);

  const togglePrivateMode = () => {
    const newMode = !isPrivateMode;
    setIsPrivateMode(newMode);
    localStorage.setItem('privateMode', String(newMode));
  };

  // Add keyboard shortcut (Cmd+Shift+P or Ctrl+Shift+P to toggle privacy mode)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.shiftKey && e.key.toLowerCase() === 'y') {
        e.preventDefault();
        togglePrivateMode();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPrivateMode]);

  // Toggle body class when privacy mode changes
  useEffect(() => {
    if (isPrivateMode) {
      document.body.classList.add('private-mode');
    } else {
      document.body.classList.remove('private-mode');
    }
    
    return () => {
      document.body.classList.remove('private-mode');
    };
  }, [isPrivateMode]);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Ecosystem', href: '/ecosystem' },
    { name: 'Links', href: '/links' },
    { name: 'Mindset Hub', href: '/mindset' },
    { name: 'Reels', href: '/reels' },
    { name: 'Shop', href: '/shop' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Modern Privacy Mode Overlay */}
      <div className="privacy-overlay">
        <div className="privacy-content">
          <span className="fire-emoji">🔥</span>
          <span className="aura-text">AURA</span>
        </div>
      </div>
      
      {/* Privacy Toggle Button */}
      <button
        onClick={togglePrivateMode}
        className={`fixed bottom-6 right-6 z-[10001] px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-300 ${
          isPrivateMode 
            ? 'bg-white/90 text-gray-900 shadow-lg' 
            : 'bg-black/80 text-white hover:bg-black/90'
        }`}
        aria-label={isPrivateMode ? 'Disable privacy mode' : 'Enable privacy mode'}
      >
        <svg 
          className="w-5 h-5" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" 
          />
        </svg>
        <span className="font-medium">
          {isPrivateMode ? 'Privacy On' : 'Privacy Off'}
        </span>
      </button>
      
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo/Brand */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold text-gray-900">
                AURA
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:ml-6 md:flex md:items-center md:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            
            {/* Desktop Auth/Profile */}
            <div className="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center">
              <button
                onClick={togglePrivateMode}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                title={`Toggle Privacy Mode (${isPrivateMode ? 'On' : 'Off'}) - ${navigator.platform.includes('Mac') ? '⌘' : 'Ctrl'}+Shift+P`}
                aria-label={`${isPrivateMode ? 'Disable' : 'Enable'} privacy mode`}
              >
                {isPrivateMode ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                )}
              </button>
              <span className="ml-2 text-sm text-gray-500">
                {isPrivateMode ? 'Privacy On' : 'Privacy Off'}
              </span>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-purple-600 focus:outline-none"
                aria-label="Toggle menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-md font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <button
                  onClick={() => {
                    togglePrivateMode();
                    setIsMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-between px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-md font-medium"
                >
                  <span>Privacy Mode</span>
                  <span className="text-sm text-gray-500">
                    {isPrivateMode ? 'On' : 'Off'}
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
