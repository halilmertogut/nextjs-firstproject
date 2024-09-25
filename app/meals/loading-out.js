import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Meals Grid Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="flex flex-col">
            {/* Image Skeleton */}
            <Skeleton className="h-56 w-full rounded-t-lg mb-4" />
            {/* Title Skeleton */}
            <Skeleton className="h-6 w-3/4 mb-2 rounded" />
            {/* Description Skeleton */}
            <Skeleton className="h-4 w-full mb-2 rounded" />
            <Skeleton className="h-4 w-2/3 mb-4 rounded" />
            {/* Button Skeleton */}
            <Skeleton className="h-10 w-full rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  );
}
