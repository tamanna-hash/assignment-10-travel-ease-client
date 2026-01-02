const VehicleCardSkeleton = () => {
  return (
    <div className="card h-62 m-2 rounded-lg shadow-sm">
      {/* Image Skeleton */}
      <figure className="h-32 overflow-hidden">
        <div className="w-full h-full skeleton" />
      </figure>

      {/* Body */}
      <div className="card-body -m-4 rounded-none">
        {/* Title + Badge */}
        <div className="flex gap-2 items-center">
          <div className="h-4 w-32 skeleton" />
          <div className="h-4 w-14 skeleton rounded-full" />
        </div>

        {/* Location + Rating */}
        <div className="flex justify-between items-center">
          <div className="h-3 w-24 skeleton" />
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-3 w-3 skeleton rounded-sm" />
            ))}
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mt-1">
          <div className="h-4 w-20 skeleton" />
          <div className="h-3 w-12 skeleton" />
        </div>

        {/* Button */}
        <div className="card-actions justify-between items-center mt-2">
          <div className="h-7 w-24 skeleton rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default VehicleCardSkeleton;
