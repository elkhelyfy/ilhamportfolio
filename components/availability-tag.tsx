export default function AvailabilityTag() {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-md text-sm" role="status" aria-label="Availability status">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
      </span>
      <span className="text-sm font-semibold">Looking for Internship</span>
    </div>
  );
}
