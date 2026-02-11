import { Dispatch, SetStateAction } from 'react';
import CategoryToggle from './CategoryToggle';
import LocationFilter from './LocationFilter';
import ProjectsList from './ProjectsList';
import { sampleProjects } from '../../data/sampleProjects';

interface ProjectsSectionProps {
  selectedCategory: 'Residential' | 'Commercial';
  setSelectedCategory: Dispatch<SetStateAction<'Residential' | 'Commercial'>>;
  selectedLocation: string | null;
  setSelectedLocation: Dispatch<SetStateAction<string | null>>;
}

export default function ProjectsSection({
  selectedCategory,
  setSelectedCategory,
  selectedLocation,
  setSelectedLocation,
}: ProjectsSectionProps) {
  const filteredProjects = sampleProjects.filter((project) => {
    const categoryMatch = project.category === selectedCategory;
    const locationMatch = !selectedLocation || project.location === selectedLocation;
    return categoryMatch && locationMatch;
  });

  return (
    <section id="projects" className="py-20 bg-muted/20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Our Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of premium properties across Kerala's major cities
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-6 mb-10 items-center justify-center">
          <CategoryToggle
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <LocationFilter
            selectedLocation={selectedLocation}
            setSelectedLocation={setSelectedLocation}
          />
        </div>
        <ProjectsList projects={filteredProjects} />
      </div>
    </section>
  );
}
