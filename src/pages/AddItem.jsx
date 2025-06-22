import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ItemsContext } from '@/context/ItemsContext';
import { toast } from 'sonner';
import ItemForm from '@/components/ItemForm';

export default function AddItem() {
  const { addItem } = useContext(ItemsContext);
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (formData) => {
    setIsSubmitting(true);
    
    try {

      const coverUrl = URL.createObjectURL(formData.coverImage);
      
      const additionalUrls = await Promise.all(
        formData.additionalImages.map(file => URL.createObjectURL(file))
      );
      
      const newItem = {
        ...formData,
        id: Date.now(),
        coverImage: coverUrl,
        additionalImages: additionalUrls,
      };
      
      addItem(newItem);
      toast("Success!", { 
        description: "Item has been added successfully"
      });
      navigate('/');
    } catch (error) {
      toast("Error",{
        description: "Failed to add item. Please try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Add New Item</h1>
        <p className="text-gray-500">Fill in the details below to add a new item</p>
      </div>
      <ItemForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
    </div>
  );
}