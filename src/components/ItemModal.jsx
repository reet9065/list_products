import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import ImageCarousel from './ImageCarousel';
import EnquiryForm from './EnquiryForm';
import emailjs from 'emailjs-com';
import {toast} from 'sonner';

export default function ItemModal({ item, onClose }) {
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const allImages = [item.coverImage, ...item.additionalImages];

  const handleEnquirySubmit = async (userEmail) => {
    setIsSending(true);

    try {
      console.log(`Sending enquiry for ${item.name} from ${userEmail}`);

      // Prepare template parameters for EmailJS
      const templateParams = {
        user_email: userEmail,
        product_name: item.name,
        product_discription: item.description
      };

      // Send the email
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,     
        import.meta.env.VITE_TEMPLATE_ID,    
        templateParams,
        import.meta.env.VITE_PUBLIC_KEY      
      );

      console.log('Enquiry email sent successfully!');
      toast("Success!", { 
        description: "Enquiry sended for this product"
      });
      onClose();
    } catch (error) {
      console.error('Enquiry failed:', error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{item.name}</DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <ImageCarousel images={allImages} />
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-medium text-gray-500">Type</h3>
              <p className="text-lg">{item.type}</p>
            </div>

            <div>
              <h3 className="font-medium text-gray-500">Description</h3>
              <p className="whitespace-pre-line">{item.description}</p>
            </div>

            {showEnquiryForm ? (
              <EnquiryForm
                onSubmit={handleEnquirySubmit}
                onCancel={() => setShowEnquiryForm(false)}
                isSubmitting={isSending}
              />
            ) : (
              <Button
                onClick={() => setShowEnquiryForm(true)}
                className="w-full mt-4"
              >
                Enquire About This Item
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}