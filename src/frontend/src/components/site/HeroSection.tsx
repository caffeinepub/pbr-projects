import { Building2, MapPin, Home } from 'lucide-react';

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/assets/generated/pbr-hero-bg.dim_1920x1080.png)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>
      <div className="container relative z-10 py-20">
        <div className="max-w-3xl">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            <span className="block text-primary">PBR Projects</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
            Your dream property awaits in Kerala. Discover premium residential and commercial properties across Kochi, Trivandrum, and Calicut. 
            Quality construction, prime locations, and exceptional value.
          </p>
          <div className="flex flex-wrap gap-4 mb-12">
            <button
              onClick={() => scrollToSection('projects')}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground shadow-lg hover:bg-primary/90 transition-all hover:shadow-xl"
            >
              <Building2 className="h-5 w-5" />
              View Projects
            </button>
            <button
              onClick={() => scrollToSection('enquiry')}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-secondary px-8 py-3.5 text-base font-semibold text-secondary-foreground shadow-sm hover:bg-secondary/80 transition-colors"
            >
              Contact Us
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Home className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="font-semibold">Premium Quality</div>
                <div className="text-sm text-muted-foreground">Top-tier construction</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="font-semibold">Prime Locations</div>
                <div className="text-sm text-muted-foreground">Strategic positioning</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="font-semibold">Trusted Brand</div>
                <div className="text-sm text-muted-foreground">Years of excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
