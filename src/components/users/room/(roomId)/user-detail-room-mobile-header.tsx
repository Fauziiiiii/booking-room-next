"use client"

import React, { useEffect, useState } from 'react'
import { ChevronLeft, Share2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function UserDetailRoomMobileHeader({ title = "Heading Title Office Space Building" }) {
    const [scrollPosition, setScrollPosition] = useState(0);
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            setScrollPosition(position);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const threshold = 300;
    const headerOpacity = Math.min(scrollPosition / threshold, 1);
    
    const handleBack = () => {
        router.back();
    };

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: title,
                url: window.location.href,
            }).catch((error) => console.log('Error sharing:', error));
        }
    };
    
    return (
        <div 
            className={`fixed top-0 left-0 right-0 z-30 md:hidden transition-all duration-200 ease-in-out
                ${headerOpacity > 0.5 ? 'border-b border-gray-200' : ''}`}
        >
            {/* Background with dynamic opacity */}
            <div 
                className="absolute inset-0 bg-white transition-opacity duration-200 ease-in-out"
                style={{ opacity: headerOpacity }}
            />
            
            {/* Header Content */}
            <div className="relative px-4 py-4 flex items-center justify-between">
                {/* Left side with back button and title */}
                <div className="flex items-center flex-1 min-w-0"> {/* min-w-0 ensures proper text truncation */}
                    <Link href={"/room/search"}>
                        <button 
                            onClick={handleBack}
                            className="p-2 rounded-full transition-all duration-200 hover:bg-gray-100 active:bg-gray-200
                                bg-white/90 shadow-sm flex-shrink-0" // flex-shrink-0 prevents button from shrinking
                            aria-label="Go back"
                        >
                            <ChevronLeft className="w-5 h-5 text-gray-700" />
                        </button>
                    </Link>

                    {/* Title container with proper truncation */}
                    <div className="ml-3 flex-1 min-w-0"> {/* min-w-0 needed for text-truncate to work */}
                        <h1 
                            className={`text-gray-800 font-bold transition-all duration-200 whitespace-nowrap overflow-hidden text-ellipsis
                                ${headerOpacity > 0.1 ? 'opacity-100' : 'opacity-0'}`}
                            style={{ maxWidth: '100%' }}
                        >
                            {title}
                        </h1>
                    </div>
                </div>

                {/* Share button */}
                <button 
                    onClick={handleShare}
                    className="p-2 rounded-full transition-all duration-200 hover:bg-gray-100 active:bg-gray-200
                        bg-white/90 shadow-sm ml-2 flex-shrink-0" // flex-shrink-0 prevents button from shrinking
                    aria-label="Share"
                >
                    <Share2 className="w-5 h-5 text-gray-700" />
                </button>
            </div>
        </div>
    )
}