import { useState, useEffect } from 'react';

export function useImageSearch(query: string): string {
  const [imageUrl, setImageUrl] = useState<string>('');

  useEffect(() => {
    // Clean and encode the query for better results
    const cleanQuery = query
      .split(' ')
      .filter(Boolean)
      .join(',');
    
    // Using a more specific query with technology-related keywords
    const searchQuery = `${cleanQuery},technology,programming,computer`;
    const url = `https://source.unsplash.com/800x600/?${encodeURIComponent(searchQuery)}`;
    
    setImageUrl(url);
  }, [query]);

  return imageUrl;
}