import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Leaf } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

const Navbar = () => {
  const location = useLocation();
  const totalQuantity = useSelector((state: RootState) => state.cart.totalQuantity);

  const isActivePath = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-nature-primary to-nature-secondary">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-nature-primary to-nature-secondary bg-clip-text text-transparent">
              Paradise Nursery
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-nature-primary ${
                isActivePath('/') ? 'text-nature-primary' : 'text-foreground'
              }`}
            >
              Inicio
            </Link>
            <Link
              to="/productos"
              className={`text-sm font-medium transition-colors hover:text-nature-primary ${
                isActivePath('/productos') ? 'text-nature-primary' : 'text-foreground'
              }`}
            >
              Productos
            </Link>
          </div>

          {/* Cart Button */}
          <Link to="/carrito">
            <Button
              variant={isActivePath('/carrito') ? 'default' : 'outline'}
              size="sm"
              className="relative"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Carrito
              {totalQuantity > 0 && (
                <Badge 
                  variant="destructive" 
                  className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
                >
                  {totalQuantity}
                </Badge>
              )}
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;