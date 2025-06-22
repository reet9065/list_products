import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function ItemForm({ onSubmit, isSubmitting }) {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    description: '',
    coverImage: null,
    additionalImages: [],
  });
  
  const additionalImagesRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (name === 'coverImage') {
      setFormData(prev => ({ ...prev, [name]: files[0] }));
    }
  };

  const handleAdditionalImages = (e) => {
    setFormData(prev => ({ 
      ...prev, 
      additionalImages: Array.from(e.target.files) 
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="name">Item Name</Label>
        <Input
          id="name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div>
        <Label htmlFor="type">Item Type</Label>
        <Select 
          name="type" 
          required 
          value={formData.type} 
          onValueChange={(value) => setFormData(prev => ({ ...prev, type: value }))}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select a type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Shirt">Shirt</SelectItem>
            <SelectItem value="Pant">Pant</SelectItem>
            <SelectItem value="Shoes">Shoes</SelectItem>
            <SelectItem value="Sports Gear">Sports Gear</SelectItem>
            <SelectItem value="Other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          name="description"
          required
          value={formData.description}
          onChange={handleChange}
          rows={4}
        />
      </div>

      <div>
        <Label htmlFor="coverImage">Cover Image</Label>
        <Input
          id="coverImage"
          name="coverImage"
          type="file"
          required
          accept="image/*"
          onChange={handleFileChange}
        />
      </div>

      <div>
        <Label htmlFor="additionalImages">Additional Images</Label>
        <Input
          id="additionalImages"
          name="additionalImages"
          type="file"
          multiple
          accept="image/*"
          onChange={handleAdditionalImages}
          ref={additionalImagesRef}
        />
        {formData.additionalImages.length > 0 && (
          <div className="mt-2 text-sm text-gray-500">
            {formData.additionalImages.length} files selected
          </div>
        )}
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? 'Adding Item...' : 'Add Item'}
      </Button>
    </form>
  );
}