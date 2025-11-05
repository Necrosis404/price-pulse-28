import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products, categories } from "@/data/mockData";
import { ProductCard } from "@/components/ProductCard";
import { PriceComparisonModal } from "@/components/PriceComparisonModal";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft } from "lucide-react";
import { Product } from "@/data/mockData";

const CategoryPage = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [sortBy, setSortBy] = useState<string>("default");

  const category = categories.find(c => c.id === categoryId);
  let categoryProducts = products.filter(p => p.category === categoryId);

  // Apply sorting
  if (sortBy === "price-low") {
    categoryProducts = [...categoryProducts].sort((a, b) => {
      const minPriceA = Math.min(...a.prices.map(p => p.price));
      const minPriceB = Math.min(...b.prices.map(p => p.price));
      return minPriceA - minPriceB;
    });
  } else if (sortBy === "price-high") {
    categoryProducts = [...categoryProducts].sort((a, b) => {
      const minPriceA = Math.min(...a.prices.map(p => p.price));
      const minPriceB = Math.min(...b.prices.map(p => p.price));
      return minPriceB - minPriceA;
    });
  } else if (sortBy === "rating") {
    categoryProducts = [...categoryProducts].sort((a, b) => b.rating - a.rating);
  } else if (sortBy === "reviews") {
    categoryProducts = [...categoryProducts].sort((a, b) => b.reviews - a.reviews);
  }

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/")}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <div className="mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {category.name}
              </h1>
              <p className="text-muted-foreground">
                {categoryProducts.length} products available
              </p>
            </div>
            
            <div className="w-full sm:w-auto">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full sm:w-[200px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Default</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="reviews">Most Reviews</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categoryProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onCompare={() => setSelectedProduct(product)}
            />
          ))}
        </div>
      </div>

      <PriceComparisonModal
        product={selectedProduct}
        open={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
};

export default CategoryPage;
