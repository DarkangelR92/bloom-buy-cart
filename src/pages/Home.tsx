import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Leaf, Heart, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-greenhouse.jpg';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Bienvenido a
            <span className="block bg-gradient-to-r from-nature-secondary to-nature-accent bg-clip-text text-transparent">
              Paradise Nursery
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Descubre la belleza natural con nuestra colección curada de plantas aromáticas y medicinales
          </p>
          <Link to="/productos">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-nature-primary to-nature-secondary hover:from-nature-primary/90 hover:to-nature-secondary/90 text-white shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Explorar Productos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-nature-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-nature-primary mb-4">
              ¿Por qué elegir Paradise Nursery?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ofrecemos plantas de la más alta calidad para transformar tu hogar en un oasis natural
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="h-16 w-16 bg-gradient-to-r from-nature-primary to-nature-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-nature-primary mb-2">Calidad Premium</h3>
                <p className="text-muted-foreground">
                  Seleccionamos cuidadosamente cada planta para garantizar la máxima calidad y salud
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="h-16 w-16 bg-gradient-to-r from-nature-secondary to-nature-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-nature-primary mb-2">Cuidado Experto</h3>
                <p className="text-muted-foreground">
                  Nuestro equipo de especialistas cuida cada planta con dedicación y conocimiento
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="h-16 w-16 bg-gradient-to-r from-nature-accent to-nature-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-nature-primary mb-2">Garantía Total</h3>
                <p className="text-muted-foreground">
                  Garantizamos la salud de nuestras plantas con soporte completo post-compra
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-nature-primary to-nature-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Listo para comenzar tu jardín?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Explora nuestra colección completa de plantas aromáticas y medicinales
          </p>
          <Link to="/productos">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-nature-primary hover:bg-white/90 shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Ver Todas las Plantas
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;