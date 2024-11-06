"use client"

import { useState } from "react";

export function useFloorFilter() {
  const [selectedFloor, setSelectedFloor] = useState("a18018a2-3081-40c8-9854-8ef52519fc9b");

  const handleFloorClick = (floor: string) => {
    setSelectedFloor(floor);
  };

  return {
    selectedFloor,
    handleFloorClick,
  };
}