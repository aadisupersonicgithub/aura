'use client';

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Link from 'next/link';
import { FiPlus, FiExternalLink, FiTrash2, FiEdit2 } from 'react-icons/fi';
import { DEFAULT_LINKS } from '@/constants/links';
import AddLinkModal from './components/AddLinkModal';

// Unique icons for each card
const CARD_ICONS = [
  '⚡', '🎯', '🌱', '🌅', '👑', '🐠', '🧿', '✨',
  '🚀', '💡', '🔧', '📊', '📚', '🎨', '🔍', '📱',
  '💻', '🎮', '📈', '🔒', '🎯', '🎲', '🎨', '📝',
  '🔑', '💎', '📌', '🔔', '🎁', '🏆', '💫', '🌐'
];

// Color themes
const CARD_COLORS = [
  { 
    bg: 'bg-[#3B82F6]', // Electric Blue
    lightBg: 'bg-blue-500/20',
    border: 'border-blue-400',
    hoverBg: 'hover:bg-[#3B82F6] hover:text-white'
  },
  { 
    bg: 'bg-[#EC4899]', // Neon Pink
    lightBg: 'bg-pink-500/20',
    border: 'border-pink-400',
    hoverBg: 'hover:bg-[#EC4899] hover:text-white'
  },
  { 
    bg: 'bg-[#10B981]', // Vivid Green
    lightBg: 'bg-green-500/20',
    border: 'border-green-400',
    hoverBg: 'hover:bg-[#10B981] hover:text-white'
  },
  { 
    bg: 'bg-[#F97316]', // Sunset Orange
    lightBg: 'bg-orange-500/20',
    border: 'border-orange-400',
    hoverBg: 'hover:bg-[#F97316] hover:text-white'
  },
  { 
    bg: 'bg-[#8B5CF6]', // Royal Purple
    lightBg: 'bg-purple-500/20',
    border: 'border-purple-400',
    hoverBg: 'hover:bg-[#8B5CF6] hover:text-white'
  },
  { 
    bg: 'bg-[#F43F5E]', // Coral
    lightBg: 'bg-rose-500/20',
    border: 'border-rose-400',
    hoverBg: 'hover:bg-[#F43F5E] hover:text-white'
  },
  { 
    bg: 'bg-[#14B8A6]', // Teal
    lightBg: 'bg-teal-500/20',
    border: 'border-teal-400',
    hoverBg: 'hover:bg-[#14B8A6] hover:text-white'
  },
  { 
    bg: 'bg-[#F59E0B]', // Amber
    lightBg: 'bg-amber-500/20',
    border: 'border-amber-400',
    hoverBg: 'hover:bg-[#F59E0B] hover:text-white'
  }
];

// Function to get consistent colors and unique icons for each card
const getCardProps = (title: string, category?: string) => {
  // Simple hash function to get consistent values
  const hash = (str: string) => {
    let h = 0;
    for (let i = 0; i < str.length; i++) {
      h = str.charCodeAt(i) + ((h << 5) - h);
    }
    return Math.abs(h);
  };

  // Get color based on category or title
  const colorIndex = category 
    ? hash(category) % CARD_COLORS.length 
    : hash(title) % CARD_COLORS.length;
    
  // Get unique icon based on title
  const iconIndex = hash(title) % CARD_ICONS.length;
  
  return {
    ...CARD_COLORS[colorIndex],
    text: 'text-white',
    icon: CARD_ICONS[iconIndex]
  };
};

interface LinkItem {
  id: string;
  title: string;
  url: string;
  category?: string;
  createdAt: number;
}

const LinksPage = () => {
  const [links, setLinks] = useState<LinkItem[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingLink, setEditingLink] = useState<LinkItem | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  // Use default links from constants

  // Load links from localStorage on component mount
  useEffect(() => {
    console.log('Loading links...');
    const savedLinks = localStorage.getItem('savedLinks');
    console.log('Saved links from localStorage:', savedLinks);
    
    if (savedLinks) {
      try {
        const parsedLinks = JSON.parse(savedLinks);
        console.log('Parsed links:', parsedLinks);
        setLinks(parsedLinks);
      } catch (error) {
        console.error('Error parsing saved links:', error);
        console.log('Falling back to default links');
        setLinks([...DEFAULT_LINKS]);
      }
    } else {
      console.log('No saved links found, using default links');
      setLinks([...DEFAULT_LINKS]);
    }
  }, []);

  // Save links to localStorage whenever they change
  useEffect(() => {
    if (links.length > 0) {
      localStorage.setItem('savedLinks', JSON.stringify(links));
    }
  }, [links]);

  const addLink = (newLink: Omit<LinkItem, 'id' | 'createdAt'>) => {
    const linkWithId: LinkItem = {
      ...newLink,
      id: Date.now().toString(),
      createdAt: Date.now(),
    };
    setLinks(prevLinks => [...prevLinks, linkWithId]);
  };

  const updateLink = (updatedLink: Omit<LinkItem, 'id' | 'createdAt'> & { id?: string }) => {
    if (!editingLink) {
      return;
    }
    
    const updatedLinkWithId = {
      ...updatedLink,
      id: editingLink.id,
      createdAt: editingLink.createdAt
    };
    
    setLinks(links.map(link => 
      link.id === editingLink.id ? updatedLinkWithId : link
    ));
    setEditingLink(null);
  };

  const deleteLink = (id: string) => {
    setLinks(links.filter(link => link.id !== id));
  };

  const handleEdit = (link: LinkItem) => {
    setEditingLink(link);
    setIsModalOpen(true);
  };

  // Get unique categories for filtering (excluding undefined and empty strings)
  const categories = ['All', ...new Set(links
    .map(link => link.category)
    .filter((category): category is string => Boolean(category))
  )];

  // Group and filter links by category
  const groupedLinks = useMemo(() => {
    const filtered = links.filter(link => 
      (activeCategory === 'All' || link.category === activeCategory) &&
      (link.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
       link.url.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    const grouped = filtered.reduce((acc, link) => {
      const category = link.category || 'Uncategorized';
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(link);
      return acc;
    }, {} as Record<string, LinkItem[]>);

    return Object.entries(grouped).map(([category, items]) => ({
      category,
      items: items.sort((a, b) => b.createdAt - a.createdAt)
    }));
  }, [links, activeCategory, searchQuery]);

  // Auto-focus search input on mount, when modal closes, and on tab focus
  const searchInputRef = React.useRef<HTMLInputElement>(null);
  
  const focusSearch = useCallback((): void => {
    const input = searchInputRef.current;
    if (!input) {
      return;
    }
    // Force focus and prevent default behavior that might steal focus
    const { readOnly, value } = input;
    input.readOnly = true;
    input.focus({ preventScroll: true });
    // Move cursor to end of input if there's text
    const length = value.length;
    input.setSelectionRange(length, length);
    input.readOnly = readOnly;
  }, []);
  
  useEffect(() => {
    // Initial focus with a small delay
    const timer1 = setTimeout(focusSearch, 50);
    
    // Try again after a longer delay in case of browser focus stealing
    const timer2 = setTimeout(focusSearch, 200);
    
    // Focus when the window regains focus (e.g., after opening in a new tab)
    const handleFocus = () => {
      if (document.visibilityState === 'visible') {
        focusSearch();
      }
    };
    
    window.addEventListener('focus', handleFocus);
    document.addEventListener('visibilitychange', handleFocus);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      window.removeEventListener('focus', handleFocus);
      document.removeEventListener('visibilitychange', handleFocus);
    };
  }, [focusSearch, isModalOpen]);

  return (
    <div className="min-h-screen bg-gray-50 p-2 sm:p-3">
      <AddLinkModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingLink(null);
        }}
        onSave={editingLink ? updateLink : addLink}
        initialData={editingLink}
        existingCategories={categories.filter(cat => cat !== 'All')}
      />
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-3">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3 py-1 text-sm rounded-full transition-colors ${
                  activeCategory === category
                    ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-100'
                    : 'bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="relative w-full sm:w-auto">
            <div className="relative">
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search..."
                className="w-full sm:w-48 pl-8 pr-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent h-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
              <div className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>

        {groupedLinks.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
            {groupedLinks.flatMap(({ items }) => 
              items.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block transition-all duration-200 relative overflow-hidden hover:shadow-lg hover:-translate-y-0.5 rounded-full mx-1 my-1"
                onContextMenu={(e) => {
                  e.preventDefault();
                  handleEdit(link);
                }}
              >
                {(() => {
                  const { text, icon, lightBg, hoverBg, border } = getCardProps(link.title, link.category);
                  return (
                    <div className={`flex items-center px-5 py-3 rounded-full ${lightBg} ${hoverBg} transition-all duration-300 border ${border} hover:shadow-lg`}>
                      <span className="text-2xl mr-3">{icon}</span>
                      <div className="text-sm font-semibold tracking-wide truncate">
                        {link.title}
                      </div>
                    </div>
                  );
                })()}
              </a>
              ))
            )}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
            <div className="mx-auto w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center mb-2">
              <FiPlus className="text-gray-400" />
            </div>
            <h3 className="text-sm font-medium text-gray-900 mb-1">No links found</h3>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('All');
                setEditingLink(null);
                setIsModalOpen(true);
              }}
              className="text-sm text-blue-600 hover:text-blue-800 font-medium"
            >
              Add your first link
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LinksPage;
