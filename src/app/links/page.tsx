'use client';

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Link from 'next/link';
import { FiPlus, FiExternalLink, FiTrash2, FiEdit2 } from 'react-icons/fi';
import AddLinkModal from './components/AddLinkModal';

// Function to generate a consistent, vibrant color from a string
const getCategoryColor = (str: string, opacity: number = 0.2): string => {
  if (!str) return 'rgba(243, 244, 246, 0.2)';
  
  // Simple hash function
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  
  // Generate vibrant colors with good contrast
  const hue = Math.abs(hash) % 360;
  const saturation = 70 + (Math.abs(hash) % 26);  // 70-95%
  const lightness = 50 + (Math.abs(hash) % 16);   // 50-65%
  
  // More vibrant colors with better contrast
  return `hsla(${hue}, ${saturation}%, ${lightness}%, ${opacity * 1.5})`;
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

  // Default links to show when no links exist
  const defaultLinks: LinkItem[] = [
    {
      id: '1',
      title: 'Chrome Extensions',
      url: 'chrome://extensions/',
      category: 'Productivity',
      createdAt: Date.now() - 1000 * 60 * 60 * 24 * 7
    },
    {
      id: '2',
      title: 'Notion Workspace',
      url: 'https://www.notion.so/258a0fbd0e048046819ac807d970937b',
      category: 'Productivity',
      createdAt: Date.now() - 1000 * 60 * 60 * 24 * 6
    },
    {
      id: '3',
      title: 'DevSNC Code',
      url: 'https://code.devsnc.com/',
      category: 'Development',
      createdAt: Date.now() - 1000 * 60 * 60 * 24 * 5
    },
    {
      id: '4',
      title: 'Thomas Frank Brain',
      url: 'https://thomasjfrank.com/brain/',
      category: 'Productivity',
      createdAt: Date.now() - 1000 * 60 * 60 * 24 * 4
    },
    {
      id: '5',
      title: 'ChatGPT',
      url: 'https://chatgpt.com/',
      category: 'AI',
      createdAt: Date.now() - 1000 * 60 * 60 * 24 * 3
    },
    {
      id: '6',
      title: 'Codeforces',
      url: 'https://codeforces.com/',
      category: 'Coding',
      createdAt: Date.now() - 1000 * 60 * 60 * 24 * 2
    },
    {
      id: '7',
      title: 'Discord Channel',
      url: 'https://discord.com/channels/1346677905970692146/1347243291862892544',
      category: 'Communication',
      createdAt: Date.now() - 1000 * 60 * 60 * 24 * 1
    },
    {
      id: '8',
      title: 'Notion Formula Reference',
      url: 'https://thomasjfrank.com/formulas/notion-formula-reference/',
      category: 'Productivity',
      createdAt: Date.now()
    },
    {
      id: '9',
      title: 'Thomas Frank YouTube',
      url: 'https://www.youtube.com/@ThomasFrankExplains',
      category: 'Productivity',
      createdAt: Date.now()
    },
    {
      id: '10',
      title: 'Chrome Web Store',
      url: 'https://chromewebstore.google.com/',
      category: 'Productivity',
      createdAt: Date.now()
    },
    {
      id: '11',
      title: 'Power of Aura',
      url: 'http://thepowerofaura.com/',
      category: 'Personal',
      createdAt: Date.now()
    },
    {
      id: '12',
      title: 'YouTube Video',
      url: 'https://www.youtube.com/watch?v=g1maiGeki6I',
      category: 'Productivity',
      createdAt: Date.now()
    },
    {
      id: '13',
      title: 'Emojipedia',
      url: 'https://emojipedia.org/link',
      category: 'Reference',
      createdAt: Date.now()
    },
    {
      id: '14',
      title: 'Asset Yogi Playlists',
      url: 'https://www.youtube.com/@AssetYogi/playlists',
      category: 'Education',
      createdAt: Date.now()
    },
    {
      id: '15',
      title: 'Aadi AURA Notion',
      url: 'https://www.notion.so/Aadi-AURA-1f5a0fbd0e0480f0b9a7f3bd28670004',
      category: 'Productivity',
      createdAt: Date.now()
    },
    {
      id: '16',
      title: 'Timeline Brain Dump',
      url: 'https://www.notion.so/native/Timeline-Brain-dump-27ba0fbd0e048069a578cb7eda7d138a',
      category: 'Productivity',
      createdAt: Date.now()
    },
    {
      id: '17',
      title: 'Outlook Inbox',
      url: 'https://outlook.office.com/mail/inbox/id/AAQkADhjZjVjMTdjLWUyZWItNGQ3NC05ZWEyLTdiYWIxOTE5ODZkZgAQAM94M1iuoXxKu4vh8e9jsnk%3D',
      category: 'Email',
      createdAt: Date.now()
    },
    {
      id: '18',
      title: 'Agentic AI Course',
      url: 'https://servicenow.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49739779#overview',
      category: 'Education',
      createdAt: Date.now()
    }
  ];

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
        setLinks(defaultLinks);
      }
    } else {
      console.log('No saved links found, using default links');
      setLinks(defaultLinks);
    }
  }, []);

  // Save links to localStorage whenever they change
  useEffect(() => {
    if (links.length > 0) {
      localStorage.setItem('savedLinks', JSON.stringify(links));
    }
  }, [links]);

  const addLink = (newLink: Omit<LinkItem, 'id' | 'createdAt'>) => {
    const linkWithId = {
      ...newLink,
      id: Date.now().toString(),
      createdAt: Date.now(),
    };
    setLinks([...links, linkWithId]);
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
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3 gap-2">
          <h1 className="text-xl font-bold text-gray-900">Links</h1>
          <div className="w-full sm:w-auto flex gap-2">
            <div className="relative flex-1 sm:w-48">
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search links..."
                className="w-full px-2 py-1 text-xs border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-transparent h-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                onBlur={(e) => {
                  // Re-focus if blur was not caused by clicking on the modal
                  if (!isModalOpen) {
                    e.target.focus();
                  }
                }}
              />
              <svg
                className="absolute right-2 top-1.5 h-3.5 w-3.5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <button
              onClick={() => {
                setEditingLink(null);
                setIsModalOpen(true);
              }}
              className="flex items-center px-2.5 py-1 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md h-8 whitespace-nowrap"
            >
              <FiPlus className="mr-1 h-3 w-3" />
              Add Link
            </button>
          </div>
        </div>

        {/* Category filter pills */}
        {categories.length > 1 && (
          <div className="mb-3 overflow-x-auto pb-1">
            <div className="flex space-x-1.5">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-2.5 py-0.5 rounded-full text-xs whitespace-nowrap ${
                    activeCategory === category
                      ? 'bg-blue-100 text-blue-700 font-medium'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        )}

        {groupedLinks.length > 0 ? (
          <div className="space-y-4">
            {groupedLinks.map(({ category, items }) => (
              <div key={category} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
                {items.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-3 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-150 relative overflow-hidden"
                onContextMenu={(e) => {
                  e.preventDefault();
                  handleEdit(link);
                }}
                style={{
                  backgroundColor: link.category ? getCategoryColor(link.category, 0.3) : '#f9fafb',
                  borderLeft: link.category ? `4px solid ${getCategoryColor(link.category, 0.8)}` : '1px solid #e5e7eb',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
                }}
              >
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-all duration-200 pointer-events-none"
                  style={{
                    background: link.category 
                      ? `linear-gradient(135deg, ${getCategoryColor(link.category, 0.8)} 0%, ${getCategoryColor(link.category, 0.4)} 100%)` 
                      : '#e5e7eb',
                  }}
                />
                <div className="font-medium text-sm text-gray-900 truncate group-hover:text-gray-800">
                  {link.title}
                </div>
                  </a>
                ))}
              </div>
            ))}
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
