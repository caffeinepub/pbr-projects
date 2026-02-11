import { Dispatch, SetStateAction } from 'react';
import { Building2, Home } from 'lucide-react';

interface CategoryToggleProps {
  selectedCategory: 'Residential' | 'Commercial';
  setSelectedCategory: Dispatch<SetStateAction<'Residential' | 'Commercial'>>;
}

export default function CategoryToggle({
  selectedCategory,
  setSelectedCategory,
}: CategoryToggleProps) {
  return (
    <div className="inline-flex items-center rounded-lg bg-muted p-1 shadow-sm">
      <button
        onClick={() => setSelectedCategory('Residential')}
        className={`inline-flex items-center gap-2 rounded-md px-6 py-2.5 text-sm font-medium transition-all ${
          selectedCategory === 'Residential'
            ? 'bg-background text-foreground shadow-sm'
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        <Home className="h-4 w-4" />
        Residential
      </button>
      <button
        onClick={() => setSelectedCategory('Commercial')}
        className={`inline-flex items-center gap-2 rounded-md px-6 py-2.5 text-sm font-medium transition-all ${
          selectedCategory === 'Commercial'
            ? 'bg-background text-foreground shadow-sm'
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        <Building2 className="h-4 w-4" />
        Commercial
      </button>
    </div>
  );
}
