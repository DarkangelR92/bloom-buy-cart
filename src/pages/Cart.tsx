import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '@/store/cartSlice';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';

const Cart = () => {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalAmount } = useSelector((state: RootState) => state.cart);

  const handleIncreaseQuantity = (id: string) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecreaseQuantity = (id: string) => {
    dispatch(decreaseQuantity(id));
  };

  const handleRemoveItem = (id: string, name: string) => {
    dispatch(removeFromCart(id));
    toast({
      title: "Producto eliminado",
      description: `${name} se ha eliminado del carrito.`,
    });
  };

  const handleCheckout = () => {
    toast({
      title: "¡Gracias por tu compra!",
      description: "Tu pedido ha sido procesado exitosamente.",
    });
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center py-16">
            <ShoppingBag className="h-24 w-24 text-muted-foreground mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-nature-primary mb-4">
              Tu carrito está vacío
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              ¡Descubre nuestras hermosas plantas y comienza a crear tu jardín ideal!
            </p>
            <Link to="/productos">
              <Button size="lg" className="bg-gradient-to-r from-nature-primary to-nature-secondary text-white">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Explorar Productos
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-nature-primary mb-2">
              Carrito de Compras
            </h1>
            <p className="text-muted-foreground">
              {totalQuantity} {totalQuantity === 1 ? 'producto' : 'productos'} en tu carrito
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row gap-4">
                      {/* Plant Image */}
                      <div className="flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-24 w-24 rounded-lg object-cover border border-border"
                        />
                      </div>

                      {/* Plant Details */}
                      <div className="flex-grow">
                        <h3 className="text-lg font-semibold text-nature-primary mb-1">
                          {item.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                          {item.description}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <span className="text-sm text-muted-foreground">Precio unitario:</span>
                            <span className="font-medium">${item.price}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm text-muted-foreground">Total:</span>
                            <span className="font-bold text-nature-primary">
                              ${(item.price * item.quantity).toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex flex-col items-end space-y-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleRemoveItem(item.id, item.name)}
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                        
                        <div className="flex items-center space-x-1 border rounded-lg">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDecreaseQuantity(item.id)}
                            disabled={item.quantity <= 1}
                            className="h-8 w-8 p-0"
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="px-3 py-1 text-sm font-medium min-w-[2rem] text-center">
                            {item.quantity}
                          </span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleIncreaseQuantity(item.id)}
                            className="h-8 w-8 p-0"
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="text-xl text-nature-primary">
                    Resumen del Pedido
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Subtotal ({totalQuantity} productos)</span>
                      <span>${totalAmount.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Envío</span>
                      <span className="text-nature-secondary">Gratis</span>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-nature-primary">${totalAmount.toFixed(2)}</span>
                  </div>
                  
                  <div className="space-y-3 pt-4">
                    <Button 
                      onClick={handleCheckout}
                      className="w-full bg-gradient-to-r from-nature-primary to-nature-secondary text-white shadow-lg hover:shadow-xl transition-all duration-300"
                      size="lg"
                    >
                      Pagar Ahora
                    </Button>
                    
                    <Link to="/productos" className="block">
                      <Button variant="outline" className="w-full" size="lg">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Continuar Comprando
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;