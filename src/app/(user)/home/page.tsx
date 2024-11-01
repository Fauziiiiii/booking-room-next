import { Skeleton } from "@/components/ui/skeleton";

export default function RoomListSkeleton() {
  return (
    <>
      <div className="space-y-8 w-full mb-4">
        {/* Section 1: List Room sesuai Building dan Floor User */}
        <section>
          <div className="grid grid-cols-2 gap-6">
            <Skeleton className="h-[125px] w-full rounded-xl" />
            <Skeleton className="h-[125px] w-full rounded-xl" />
          </div>
        </section>
      </div>
      <div className="space-y-8 w-full">
        {/* Section 1: List Room sesuai Building dan Floor User */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Rooms in Your Building</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={`room-user-${index}`} className="flex flex-col space-y-3">
                <Skeleton className="h-[125px] w-full rounded-xl" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Popular Rooms in Other Buildings */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Popular Rooms in Other Buildings</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={`room-popular-${index}`} className="flex flex-col space-y-3">
                <Skeleton className="h-[125px] w-full rounded-xl" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Section 2: Popular Rooms in Other Buildings */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Popular Rooms in Other Buildings</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={`room-popular-${index}`} className="flex flex-col space-y-3">
                <Skeleton className="h-[125px] w-full rounded-xl" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Section 2: Popular Rooms in Other Buildings */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Popular Rooms in Other Buildings</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={`room-popular-${index}`} className="flex flex-col space-y-3">
                <Skeleton className="h-[125px] w-full rounded-xl" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
