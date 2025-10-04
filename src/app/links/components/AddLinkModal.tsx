'use client';

import { useState, useEffect } from 'react';
import { FiX, FiExternalLink } from 'react-icons/fi';

interface LinkItem {
  id?: string;
  title: string;
  url: string;
  category?: string;
}

interface AddLinkModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (link: Omit<LinkItem, 'id' | 'createdAt'>) => void;
  initialData?: LinkItem | null;
  existingCategories?: string[];
}

export default function AddLinkModal({ isOpen, onClose, onSave, initialData, existingCategories = [] }: AddLinkModalProps) {
  const [formData, setFormData] = useState<Omit<LinkItem, 'id' | 'createdAt'>>({ 
    title: '', 
    url: '',
    category: ''
  });
  const [urlError, setUrlError] = useState('');
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [categoryInput, setCategoryInput] = useState('');
  const [filteredCategories, setFilteredCategories] = useState<string[]>([]);

  // Update filtered categories when input changes
  useEffect(() => {
    if (categoryInput) {
      const filtered = existingCategories.filter(cat => 
        cat.toLowerCase().includes(categoryInput.toLowerCase())
      );
      setFilteredCategories(filtered);
    } else {
      setFilteredCategories(existingCategories);
    }
  }, [categoryInput, existingCategories]);

  // Load existing categories from props
  useEffect(() => {
    setFilteredCategories(existingCategories);
  }, [existingCategories]);

  // Initialize form with initialData
  useEffect(() => {
    if (initialData) {
      const category = initialData.category || '';
      setFormData({
        title: initialData.title,
        url: initialData.url,
        category: category
      });
      setCategoryInput(category);
    } else {
      setFormData({
        title: '',
        url: '',
        category: ''
      });
      setCategoryInput('');
    }
    setShowCategoryDropdown(false);
  }, [initialData, isOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear URL error when user types
    if (name === 'url' && urlError) {
      setUrlError('');
    }
  };

  const validateUrl = (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch (e) {
      return false;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate URL
    try {
      new URL(formData.url);
      setUrlError('');
    } catch (err) {
      setUrlError('Please enter a valid URL (include http:// or https://)');
      return;
    }
    
    // Process the URL to ensure it has http/https
    let processedUrl = formData.url.trim();
    if (!processedUrl.startsWith('http://') && !processedUrl.startsWith('https://')) {
      processedUrl = 'https://' + processedUrl;
    }
    
    const finalData = {
      ...formData,
      url: processedUrl,
      title: formData.title.trim() || new URL(processedUrl).hostname.replace('www.', ''),
      category: formData.category?.trim() || undefined
    };
    
    onSave(finalData);
    onClose();
  };

  const handleCategorySelect = (category: string) => {
    setFormData(prev => ({ ...prev, category }));
    setCategoryInput(category);
    setShowCategoryDropdown(false);
  };

  const handleAddNewCategory = () => {
    if (categoryInput.trim() && !existingCategories.includes(categoryInput.trim())) {
      handleCategorySelect(categoryInput.trim());
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl w-full max-w-md relative max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">
              {initialData ? 'Edit Link' : 'Add New Link'}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500"
              aria-label="Close modal"
            >
              <FiX size={24} />
            </button>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                Title <span className="text-gray-400">(optional)</span>
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="e.g. Google"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <p className="mt-1 text-xs text-gray-500">
                Leave blank to use the domain name as the title
              </p>
            </div>
            
            <div className="mb-4">
              <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-1">
                URL <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiExternalLink className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="url"
                  id="url"
                  name="url"
                  value={formData.url}
                  onChange={handleInputChange}
                  placeholder="https://example.com"
                  className="w-full pl-10 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              {urlError && <p className="mt-1 text-sm text-red-600">{urlError}</p>}
            </div>
            
            <div className="mb-4">
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="category"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  value={categoryInput}
                  onChange={(e) => {
                    setCategoryInput(e.target.value);
                    setFormData(prev => ({ ...prev, category: e.target.value }));
                  }}
                  onFocus={() => setShowCategoryDropdown(true)}
                  placeholder="Select or type a new category"
                />
                {showCategoryDropdown && (
                  <div className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                    {filteredCategories.length > 0 ? (
                      filteredCategories.map((category) => (
                        <div
                          key={category}
                          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                          onClick={() => handleCategorySelect(category)}
                        >
                          {category}
                        </div>
                      ))
                    ) : (
                      <div className="px-4 py-2 text-sm text-gray-500">
                        No categories found
                      </div>
                    )}
                    {categoryInput && !existingCategories.includes(categoryInput) && (
                      <div 
                        className="px-4 py-2 text-sm text-blue-600 font-medium hover:bg-blue-50 cursor-pointer"
                        onClick={handleAddNewCategory}
                      >
                        + Create "{categoryInput}"
                      </div>
                    )}
                  </div>
                )}
              </div>
              <p className="mt-1 text-xs text-gray-500">
                Type to select an existing category or create a new one
              </p>
            </div>
            
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {initialData ? 'Update Link' : 'Add Link'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
