import { useState, FormEvent } from 'react';
import { useSubmitEnquiry } from '../../hooks/useQueries';
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

interface EnquiryFormProps {
  selectedCategory: 'Residential' | 'Commercial';
  selectedLocation: string | null;
}

export default function EnquiryForm({
  selectedCategory,
  selectedLocation,
}: EnquiryFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const submitEnquiry = useSubmitEnquiry();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    const contextMessage = `${message}\n\nInterested in: ${selectedCategory}${
      selectedLocation ? ` in ${selectedLocation}` : ''
    }`;

    try {
      await submitEnquiry.mutateAsync({
        name,
        email,
        message: contextMessage,
      });
      
      setName('');
      setEmail('');
      setMessage('');
      setShowSuccess(true);
      
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      console.error('Failed to submit enquiry:', error);
    }
  };

  const isValid = name.trim() && email.trim() && email.includes('@');

  return (
    <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
      <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>
      
      {showSuccess && (
        <div className="mb-6 rounded-lg bg-primary/10 border border-primary/20 p-4 flex items-start gap-3">
          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
          <div>
            <div className="font-medium text-primary">Enquiry submitted successfully!</div>
            <div className="text-sm text-muted-foreground mt-1">
              We'll get back to you shortly.
            </div>
          </div>
        </div>
      )}

      {submitEnquiry.isError && (
        <div className="mb-6 rounded-lg bg-destructive/10 border border-destructive/20 p-4 flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
          <div>
            <div className="font-medium text-destructive">Failed to submit enquiry</div>
            <div className="text-sm text-muted-foreground mt-1">
              Please try again later.
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Full Name <span className="text-destructive">*</span>
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="flex h-11 w-full rounded-lg border border-input bg-background px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email Address <span className="text-destructive">*</span>
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex h-11 w-full rounded-lg border border-input bg-background px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            className="flex w-full rounded-lg border border-input bg-background px-4 py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
            placeholder="Tell us about your requirements..."
          />
        </div>

        {(selectedCategory || selectedLocation) && (
          <div className="rounded-lg bg-muted/50 p-4 text-sm">
            <div className="font-medium mb-1">Your Interest:</div>
            <div className="text-muted-foreground">
              {selectedCategory}
              {selectedLocation && ` in ${selectedLocation}`}
            </div>
          </div>
        )}

        <button
          type="submit"
          disabled={!isValid || submitEnquiry.isPending}
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitEnquiry.isPending ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            'Submit Enquiry'
          )}
        </button>
      </form>
    </div>
  );
}
