import { useState, useContext } from 'react';
import ItemGrid from '@/components/ItemGrid';
import ItemModal from '@/components/ItemModal';
import { ItemsContext } from '@/context/ItemsContext';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';

export default function ViewItems() {
  const { items } = useContext(ItemsContext);
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold">View Items</h1>
          <p className="text-gray-500">
            {items.length} item{items.length !== 1 ? 's' : ''} available
          </p>
        </div>
        <Link to="/add">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Add New Item
          </Button>
        </Link>
      </div>
      
      <ItemGrid items={items} onItemClick={setSelectedItem} />
      
      {selectedItem && (
        <ItemModal 
          item={selectedItem} 
          onClose={() => setSelectedItem(null)} 
        />
      )}
    </div>
  );
}