import { useState } from 'react';
import Header from './components/site/Header';
import Footer from './components/site/Footer';
import HeroSection from './components/site/HeroSection';
import ProjectsSection from './components/projects/ProjectsSection';
import EnquirySection from './components/enquiry/EnquirySection';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<'Residential' | 'Commercial'>('Residential');
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ProjectsSection
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
        />
        <EnquirySection
          selectedCategory={selectedCategory}
          selectedLocation={selectedLocation}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
