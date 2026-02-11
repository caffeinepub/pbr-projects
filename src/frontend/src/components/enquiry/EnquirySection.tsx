import EnquiryForm from './EnquiryForm';
import { Mail, Phone, MapPin } from 'lucide-react';

interface EnquirySectionProps {
  selectedCategory: 'Residential' | 'Commercial';
  selectedLocation: string | null;
}

export default function EnquirySection({
  selectedCategory,
  selectedLocation,
}: EnquirySectionProps) {
  return (
    <section id="enquiry" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Interested in our projects? Fill out the form below and our team will get back to you shortly.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium mb-1">Phone</div>
                    <div className="text-sm text-muted-foreground">+91 1234567890</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium mb-1">Email</div>
                    <div className="text-sm text-muted-foreground">info@pbrprojects.com</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium mb-1">Locations</div>
                    <div className="text-sm text-muted-foreground">
                      Kochi, Trivandrum, Calicut
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-border">
                <h4 className="font-medium mb-3">Office Hours</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <div>Monday - Friday: 9:00 AM - 6:00 PM</div>
                  <div>Saturday: 9:00 AM - 2:00 PM</div>
                  <div>Sunday: Closed</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <EnquiryForm
              selectedCategory={selectedCategory}
              selectedLocation={selectedLocation}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
