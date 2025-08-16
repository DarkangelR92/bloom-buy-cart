import { plants, plantCategories } from '@/data/plants';
import PlantCard from '@/components/PlantCard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Products = () => {
  const aromaticPlants = plants.filter(plant => plant.category === 'aromatic');
  const medicinalPlants = plants.filter(plant => plant.category === 'medicinal');

  return (
    <div className="min-h-screen py-8 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-nature-primary mb-4">
            Nuestras Plantas
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre nuestra cuidadosa selección de plantas aromáticas y medicinales, 
            perfectas para tu hogar y bienestar
          </p>
        </div>

        {/* Plantas Aromáticas Section */}
        <section className="mb-16">
          <Card className="mb-8 border-l-4 border-l-nature-primary bg-nature-light/30">
            <CardHeader>
              <CardTitle className="text-2xl text-nature-primary">
                {plantCategories.aromatic.title}
              </CardTitle>
              <CardDescription className="text-base">
                {plantCategories.aromatic.description}
              </CardDescription>
            </CardHeader>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {aromaticPlants.map((plant) => (
              <PlantCard key={plant.id} plant={plant} />
            ))}
          </div>
        </section>

        {/* Plantas Medicinales Section */}
        <section>
          <Card className="mb-8 border-l-4 border-l-nature-secondary bg-nature-light/30">
            <CardHeader>
              <CardTitle className="text-2xl text-nature-primary">
                {plantCategories.medicinal.title}
              </CardTitle>
              <CardDescription className="text-base">
                {plantCategories.medicinal.description}
              </CardDescription>
            </CardHeader>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {medicinalPlants.map((plant) => (
              <PlantCard key={plant.id} plant={plant} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Products;