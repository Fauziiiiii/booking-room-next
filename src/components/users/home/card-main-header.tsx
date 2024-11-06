import { Skeleton } from "@/components/ui/skeleton";

export function CardMainHeader() {
  return (
    <section>
      <div className="grid grid-cols-2 gap-6">
        <Skeleton className="h-[125px] w-full rounded-xl" />
        <Skeleton className="h-[125px] w-full rounded-xl" />
      </div>
    </section>
  );
}