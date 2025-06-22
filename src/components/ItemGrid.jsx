import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function ItemGrid({ items, onItemClick }) {
  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No items found</p>
        <p className="text-sm mt-2">Add your first item using the "Add Items" page</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {items.map((item) => (
        <Card key={item.id} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="p-0">
            <div className="aspect-square overflow-hidden">
              <img 
                src={item.coverImage} 
                alt={item.name} 
                className="w-full h-full object-cover transition-transform hover:scale-105"
              />
            </div>
          </CardHeader>
          <CardContent className="p-4">
            <h3 className="font-semibold text-lg truncate">{item.name}</h3>
            <p className="text-sm text-gray-500">{item.type}</p>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => onItemClick(item)}
            >
              View Details
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}