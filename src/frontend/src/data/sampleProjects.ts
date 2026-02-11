export interface Project {
  id: string;
  name: string;
  category: 'Residential' | 'Commercial';
  location: 'Kochi' | 'Trivandrum' | 'Calicut';
  description: string;
  image: string;
  status?: string;
}

export const sampleProjects: Project[] = [
  {
    id: '1',
    name: 'Marina Heights',
    category: 'Residential',
    location: 'Kochi',
    description: 'Luxury waterfront apartments with stunning views of the Arabian Sea. Features modern amenities, spacious layouts, and premium finishes throughout.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
    status: 'Ready to Move',
  },
  {
    id: '2',
    name: 'Tech Park Plaza',
    category: 'Commercial',
    location: 'Trivandrum',
    description: 'State-of-the-art commercial complex in the heart of Technopark. Ideal for IT companies and startups with modern infrastructure and connectivity.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
    status: 'Under Construction',
  },
  {
    id: '3',
    name: 'Green Valley Villas',
    category: 'Residential',
    location: 'Calicut',
    description: 'Premium gated community with independent villas surrounded by lush greenery. Perfect blend of modern living and natural serenity.',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop',
    status: 'Launching Soon',
  },
  {
    id: '4',
    name: 'Skyline Towers',
    category: 'Residential',
    location: 'Kochi',
    description: 'Contemporary high-rise apartments in the prime location of Marine Drive. Offering panoramic city and sea views with world-class amenities.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
    status: 'Ready to Move',
  },
  {
    id: '5',
    name: 'Business Hub',
    category: 'Commercial',
    location: 'Kochi',
    description: 'Premium office spaces designed for modern businesses. Strategic location with excellent connectivity and parking facilities.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
    status: 'Ready to Move',
  },
  {
    id: '6',
    name: 'Palm Residency',
    category: 'Residential',
    location: 'Trivandrum',
    description: 'Elegant apartments in a serene neighborhood. Thoughtfully designed spaces with modern amenities and excellent connectivity to the city center.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
    status: 'Under Construction',
  },
  {
    id: '7',
    name: 'Retail Square',
    category: 'Commercial',
    location: 'Calicut',
    description: 'Modern retail and commercial complex in a high-footfall area. Perfect for retail outlets, restaurants, and service businesses.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
    status: 'Launching Soon',
  },
  {
    id: '8',
    name: 'Coastal Breeze',
    category: 'Residential',
    location: 'Calicut',
    description: 'Beachside residential project offering a perfect coastal lifestyle. Spacious apartments with sea-facing balconies and resort-style amenities.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
    status: 'Ready to Move',
  },
  {
    id: '9',
    name: 'Corporate Center',
    category: 'Commercial',
    location: 'Trivandrum',
    description: 'Grade-A office building with cutting-edge facilities. Designed to meet the needs of multinational corporations and large enterprises.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
    status: 'Under Construction',
  },
];
