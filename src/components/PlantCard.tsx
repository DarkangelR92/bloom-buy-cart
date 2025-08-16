import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus } from 'lucide-react';
import { Plant } from '@/store/cartSlice';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/store/cartSlice';
import { toast } from '@/hooks/use-toast';

interface PlantCardProps {
  plant: Plant;
}

const PlantCard = ({ plant }: PlantCardProps) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(plant));
    toast({
      title: "¡Agregado al carrito!",
      description: `${plant.name} se ha agregado exitosamente.`,
    });
  };

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-border/50">
      <div className="relative overflow-hidden">
        <img
          src={plant.image}
          alt={plant.name}
          className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <Badge 
          variant="secondary" 
          className="absolute top-2 right-2 bg-white/90 text-nature-primary"
        >
          ${plant.price}
        </Badge>
      </div>
      
      <CardHeader className="pb-2">
        <CardTitle className="text-lg text-nature-primary">{plant.name}</CardTitle>
      </CardHeader>
      
      <CardContent className="pb-2">
        <CardDescription className="text-sm text-muted-foreground line-clamp-3">
          {plant.description}
        </CardDescription>
      </CardContent>
      
      <CardFooter>
        <Button 
          onClick={handleAddToCart}
          className="w-full bg-gradient-to-r from-nature-primary to-nature-secondary hover:from-nature-primary/90 hover:to-nature-secondary/90 text-white shadow-md transition-all duration-300"
          size="sm"
        >
          <Plus className="h-4 w-4 mr-2" />
          Agregar al carrito
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PlantCard;