import React from 'react'

export default function UserDetailRoomPage({ params }: { params: { roomId: string}}) {
  return (
    <div>UserDetailRoomPage {params.roomId}</div>
  )
}
