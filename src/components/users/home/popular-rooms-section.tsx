"use client";
import { Suspense } from "react";
import { useFloorFilter } from "./use-floor-filter";
import FloorChips from "./floor-chips"
import { RoomList } from "./room-list";
import LoadingUserHomePage from "@/app/(user)/_component/loading";

export function PopularRoomsSection() {
  const { selectedFloor, handleFloorClick } = useFloorFilter();

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4"> PopularRooms in Another Building</h2>
      <FloorChips 
        selectedFloor={selectedFloor} 
        onFloorClick={handleFloorClick} 
      />
      <Suspense fallback={<LoadingUserHomePage />}>
        <RoomList floor={selectedFloor} />
      </Suspense>
    </section>
  );
}
