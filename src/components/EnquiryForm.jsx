import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function EnquiryForm({ onSubmit, onCancel, isSubmitting }) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && validateEmail(email)) {
      onSubmit(email);
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  return (
    <div className="border-t pt-4 mt-4">
      <h3 className="font-medium text-lg mb-4">Send Enquiry</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="email">Your Email Address</Label>
          <Input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
          />
          {email && !validateEmail(email) && (
            <p className="text-sm text-red-500 mt-1">Please enter a valid email</p>
          )}
        </div>
        
        <div className="flex gap-2">
          <Button 
            type="submit" 
            disabled={isSubmitting || !validateEmail(email)}
            className="flex-1"
          >
            {isSubmitting ? 'Sending...' : 'Submit Enquiry'}
          </Button>
          <Button 
            variant="outline" 
            onClick={onCancel} 
            type="button"
            disabled={isSubmitting}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
} 