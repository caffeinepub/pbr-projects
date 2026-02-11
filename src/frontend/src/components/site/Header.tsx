import { Building2 } from 'lucide-react';
import { getAssetPath } from '@/lib/assetPaths';

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={getAssetPath('assets/generated/pbr-projects-logo.dim_800x800.png')}
            alt="PBR Projects"
            className="h-12 w-auto"
          />
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('enquiry')}
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Contact
          </button>
        </nav>
        <button
          onClick={() => scrollToSection('enquiry')}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
        >
          <Building2 className="h-4 w-4" />
          Enquire Now
        </button>
      </div>
    </header>
  );
}
