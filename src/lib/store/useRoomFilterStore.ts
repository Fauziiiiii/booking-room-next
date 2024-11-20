import { create } from 'zustand';

interface RoomFilterState {
  category: string | null;
  categoryValue: string | null;
  date: string | null;
  attendees: number | null;
  setCategory: (category: string, value: string) => void;
  setDate: (date: string) => void;
  setAttendees: (attendees: number) => void;
}

const useRoomFilterStore = create<RoomFilterState>((set) => ({
  category: null,
  categoryValue: null,
  date: null,
  attendees: null,
  setCategory: (category, value) => set({ category, categoryValue: value }),
  setDate: (date) => set({ date }),
  setAttendees: (attendees) => set({ attendees }),
}));

export default useRoomFilterStore;
