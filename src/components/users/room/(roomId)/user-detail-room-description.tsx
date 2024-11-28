'use client';

import { useState } from 'react';

interface RoomDescriptionProps {
  title: string;
  description: string;
  maxChars?: number;
}

export default function RoomDescription({ 
  title, 
  description, 
  maxChars = 250 
}: RoomDescriptionProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLongText = description.length > maxChars;
  const displayedText = isExpanded ? description : `${description.slice(0, maxChars)}...`;

  return (
    <div className="container-description w-full p-4">
      <div className="md:max-w-screen-xl md:px-4 mx-auto border-b border-gray-300 pb-4">
        <div className="flex flex-wrap items-start gap-2 mb-4">
          <div className="flex-1 min-w-0 pr-4">
            <h2 className="text-xl font-semibold truncate">{title}</h2>
          </div>
          
          {isLongText && (
            <div className="flex-shrink-0">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-[#1e3a5f] text-sm font-semibold hover:text-[#2c578f] transition-colors
                  whitespace-nowrap px-2 py-1 rounded"
              >
                {isExpanded ? 'Show Less' : 'Show More'}
              </button>
            </div>
          )}
        </div>

        <div className="prose max-w-none">
          <p className="text-gray-700 text-base leading-relaxed">
            {displayedText}
          </p>
        </div>
      </div>
    </div>
  );
}
