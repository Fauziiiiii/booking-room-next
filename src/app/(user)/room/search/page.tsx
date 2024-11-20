"use client"

import { useEffect, useState } from 'react';
import UserRoomCardFilter from '@/components/users/room/user-room-card-filter';
import UserRoomCardSearch from '@/components/users/room/user-room-card-search';
import UserRoomMainContent from '@/components/users/room/user-room-main-content';
import { useSearchParams } from 'next/navigation';

const UserRoomSearchPage = () => {
    const [isSticky, setIsSticky] = useState(false);
    const searchParams = useSearchParams();

    const city = searchParams.get("city");

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            setIsSticky(offset > 56);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className={`main-container-search-filter-room w-full transition-all duration-150 sticky top-0 pt-0 md:pt-4 z-50 ${isSticky ? 'bg-white shadow-md' : 'bg-white md:bg-transparent'}`}>
                <UserRoomCardSearch />
                <UserRoomCardFilter />
            </div>
            <UserRoomMainContent />
        </>
    );
};

export default UserRoomSearchPage;