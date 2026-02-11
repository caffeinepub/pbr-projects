import { Dispatch, SetStateAction } from 'react';
import { MapPin, X } from 'lucide-react';

interface LocationFilterProps {
  selectedLocation: string | null;
  setSelectedLocation: Dispatch<SetStateAction<string | null>>;
}

const locations = ['Kochi', 'Trivandrum', 'Calicut'];

export default function LocationFilter({
  selectedLocation,
  setSelectedLocation,
}: LocationFilterProps) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
        <MapPin className="h-4 w-4" />
        Location:
      </div>
      {locations.map((location) => (
        <button
          key={location}
          onClick={() =>
            setSelectedLocation(selectedLocation === location ? null : location)
          }
          className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
            selectedLocation === location
              ? 'bg-primary text-primary-foreground shadow-sm'
              : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
          }`}
        >
          {location}
        </button>
      ))}
      {selectedLocation && (
        <button
          onClick={() => setSelectedLocation(null)}
          className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="h-3.5 w-3.5" />
          Clear
        </button>
      )}
    </div>
  );
}
