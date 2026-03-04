import { Skeleton } from "@/components/ui/skeleton";

export default function CategoryLoading() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-6 flex items-center space-x-2">
        <Skeleton className="h-5 w-16" />
        <Skeleton className="h-4 w-4 rounded-full" />
        <Skeleton className="h-5 w-24" />
      </div>

      <Skeleton className="mb-8 h-10 w-1/3" />

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 md:gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="space-y-2">
            <Skeleton className="aspect-square w-full" />
            <Skeleton className="h-5 w-5/6" />
            <Skeleton className="h-4 w-1/3" />
            <Skeleton className="h-6 w-1/2" />
          </div>
        ))}
      </div>
    </div>
  );
}
