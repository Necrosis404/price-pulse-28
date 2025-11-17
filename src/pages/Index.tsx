import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Hero } from "@/components/Hero";
import { CategoryCard } from "@/components/CategoryCard";
import { ProductCard } from "@/components/ProductCard";
import { PriceComparisonModal } from "@/components/PriceComparisonModal";
import { Navbar } from "@/components/Navbar";
import { categories, products, Product } from "@/data/mockData";
import { Sparkles } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      
      <div className="container mx-auto px-4 py-12">
        <section>
          <div className="flex items-center gap-2 mb-8">
            <Sparkles className="h-6 w-6 text-accent" />
            <h2 className="text-3xl font-bold text-foreground">
              Featured Deals
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onCompare={() => setSelectedProduct(product)}
              />
            ))}
          </div>
        </section>
      </div>

      <PriceComparisonModal
        product={selectedProduct}
        open={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
};

export default Index;
