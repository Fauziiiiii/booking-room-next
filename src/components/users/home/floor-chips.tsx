import { useGetAllFloorByIdBuilding } from "@/lib/building/hooks/useGetAllFloorByIdBuilding";
import { useGetAllFloor } from "@/lib/floor/hooks/useGetAllFloor";

interface FloorChipsProps {
    selectedFloor: string;
    onFloorClick: (floor: string) => void;
}

export default function FloorChips({ selectedFloor, onFloorClick }: FloorChipsProps) {
    const { data: floors, isLoading } = useGetAllFloorByIdBuilding("495b76cf-0920-46c0-8132-242b85f5d407")

    if (isLoading) {
        return (
          <div className="flex flex-nowrap overflow-x-auto gap-3 pb-2 mb-1 no-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
            {[1, 2, 3, 4, 5].map((_, index) => (
              <div
                key={`skeleton-chips-${index}`}
                className={`flex-none whitespace-nowrap rounded-3xl px-2 lg:px-3 py-2 text-center border transition-all duration-500 bg-slate-100`}
              >
                <p className="text-sm lg:text-md" style={{ fontWeight: 450 }}>
                  <span className="animate-pulse">Loading...</span>
                </p>
              </div>
            ))}
          </div>
        );
      }

    return (
        <div className="flex flex-nowrap overflow-x-auto gap-3 pb-2 mb-1 no-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
            {floors?.map((floor) => (
            <button
                key={`chips-floor-${floor.id}`}
                onClick={() => onFloorClick(floor.id)}
                className={`flex-none whitespace-nowrap rounded-3xl px-2 lg:px-3 py-2 text-center border transition-all duration-200 ${
                selectedFloor === floor.id
                    ? "bg-[#e8ebef] border-[#1e3a5f] text-[#1e3a5f]"
                    : "border-slate-200 text-slate-600 hover:bg-slate-100"
                }`}
            >
                <p className="text-sm lg:text-md" style={{fontWeight: 450}}>{floor.name}</p>
            </button>
            ))}
        </div>
    );
}