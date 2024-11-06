"use client"

import { useParams, useSearchParams } from 'next/navigation'
import React from 'react'

export default function UserRoomSearchPage() {
    const searchParams = useSearchParams(); 

    const roomId = searchParams.get('roomId') ?? 'null params';

    return (
        <div>
            <h1>User Room Search Page {roomId}</h1>
        </div>
    )
}
