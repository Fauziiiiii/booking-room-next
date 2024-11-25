import Link from 'next/link';
import { LuSearch, LuArrowLeft } from 'react-icons/lu';
import { useSearchParams } from 'next/navigation';
import useRoomFilterStore from '@/lib/store/useRoomFilterStore';
import { convertToUtcFormat, formatDateToID } from '@/lib/utils/dateUtils';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import React from 'react';
import { Calendar } from '@/components/ui/calendar';

export default function UserRoomCardSearch() {
  const [dateInput, setDateInput] = React.useState<Date>();
  const searchParams = useSearchParams();
  const {
    category,
    categoryValue,
    date,
    attendees,
    setCategory,
    setDate,
    setAttendees,
  } = useRoomFilterStore();

  // Identify category and value dynamically
  const dynamicCategoryMapping = ['room', 'floor', 'building', 'city'];
  let detectedCategory: string | null = null;
  let detectedValue: string | null = null;

  for (const key of dynamicCategoryMapping) {
    const value = searchParams.get(key);
    if (value) {
      detectedCategory = key;
      detectedValue = value;
      break;
    }
  }

  const dateParam = searchParams.get('date');
  const attendeesParam = searchParams.get('attendees') || '1';

  const dateParamUtc = dateParam ? convertToUtcFormat(dateParam) : '';
  const formattedDate = dateParam ? formatDateToID(dateParam) : '';

  // Update Zustand only when values change
  if (detectedCategory !== category || detectedValue !== categoryValue) {
    setCategory(detectedCategory || 'Unknown', detectedValue || 'N/A');
  }
  if (dateParamUtc !== date) setDate(dateParamUtc);
  if (attendeesParam !== attendees?.toString()) setAttendees(Number(attendeesParam));

  return (
    <div className="main-room-search-container w-full max-w-screen-xl mx-auto mb-1 md:mb-5 md:px-4">
      {/* Desktop Version */}
      <div className="hidden md:flex flex-row items-center w-full shadow-md bg-white border border-slate-200 h-14 rounded-md py-2 px-4 space-y-0">
        <div className="main-room-search-content flex flex-wrap h-full items-center gap-2 sm:gap-4 w-full sm:w-auto">
          <div className="icon-search w-6">
            <LuSearch size={16} />
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <div className="min-w-24 py-2 px-3 hover:bg-[#e8ebef] hover:text-[#1e3a5f] rounded-lg transition-all duration-300">
                <span className="text-base font-semibold">
                  {categoryValue || 'Going Anywhere?'}
                </span>
              </div>
            </DialogTrigger>
            <DialogContent>
              <Calendar
                mode="single"
                selected={dateInput}
                onSelect={setDateInput}
                initialFocus
                disabled={(date) => date < new Date()}
              />
            </DialogContent>
          </Dialog>
          
          <div className="divider-vertical mx-4">
            <div className="h-5 w-[1px] bg-slate-300 rounded-md"></div>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <div className="min-w-24 py-2 px-3 hover:bg-[#e8ebef] hover:text-[#1e3a5f] rounded-lg transition-all duration-300">
                <span className="text-base font-semibold">
                  {formattedDate || 'Select a Date'}
                </span>
              </div>
            </DialogTrigger>
            <DialogContent>
              <Calendar
                mode="single"
                selected={dateInput}
                onSelect={setDateInput}
                initialFocus
                numberOfMonths={2}
                disabled={(date) => date < new Date()}
              />
            </DialogContent>
          </Dialog>
          <div className="divider-vertical mx-4">
            <div className="h-5 w-[1px] bg-slate-300 rounded-md"></div>
          </div>
          <div className="min-w-24 py-2 px-3 hover:bg-[#e8ebef] hover:text-[#1e3a5f] rounded-lg transition-all duration-300">
            <span className="txt-base font-semibold">
              {attendees} Attendees
            </span>
          </div>
        </div>
        <div className="main-room-filter-button flex h-full items-center justify-center min-w-24 bg-[#e8ebef] rounded-md ml-auto text-[#1e3a5f]">
          <button
            className="text-base font-semibold"
            onClick={() =>
              console.log(
                `Filter: category=${category}, value=${categoryValue}, date=${date}, attendees=${attendees}`
              )
            }
          >
            Search
          </button>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="md:hidden bg-white p-4">
        <div className="flex items-center justify-between">
          <button className="text-[#1e3a5f]">
            <Link href="/home">
              <LuArrowLeft size={20} />
            </Link>
          </button>

          <div className="flex-1 ml-2 space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold text-[#1e3a5f]">
                {categoryValue || 'Going Anywhere?'}
              </span>
            </div>
            <div className="text-xs text-slate-600">
              {formattedDate} • {attendees} Attendees
            </div>
          </div>

          <button
            className="flex items-center gap-1 px-3 py-2 bg-[#e8ebef] text-[#1e3a5f] rounded-lg"
            onClick={() => console.log('Open drawer')}
          >
            <span className="text-xs font-semibold">Change</span>
          </button>
        </div>
      </div>
    </div>
  );
}
