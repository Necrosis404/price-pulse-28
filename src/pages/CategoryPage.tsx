import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products, categories } from "@/data/mockData";
import { ProductCard } from "@/components/ProductCard";
import { PriceComparisonModal } from "@/components/PriceComparisonModal";
import { Navbar } from "@/components/Navbar";
import { SearchBar } from "@/components/SearchBar";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Filter, Search } from "lucide-react";
import { Product } from "@/data/mockData";

const CategoryPage = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [sortBy, setSortBy] = useState<string>("default");
  const [searchQuery, setSearchQuery] = useState("");

  const category = categories.find(c => c.id === categoryId);
  
  // Filter by category and search query
  let categoryProducts = products.filter(p => {
    const matchesCategory = p.category === categoryId;
    if (!searchQuery.trim()) return matchesCategory;
    
    const query = searchQuery.toLowerCase();
    const matchesSearch = 
      p.name.toLowerCase().includes(query) ||
      p.name.toLowerCase().split(' ').some(word => word.startsWith(query));
    
    return matchesCategory && matchesSearch;
  });

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
      
      {/* Search Bar Section */}
      <div className="bg-gradient-to-br from-primary/5 via-background to-accent/5 border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-center mb-4">
            <SearchBar 
              onSearch={setSearchQuery}
              placeholder={`Search in ${category.name}...`}
              className="w-full max-w-3xl"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/")}
          className="mb-6 hover:bg-accent/10"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        {/* Header with category info and filters */}
        <div className="mb-8">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {category.name}
                </h1>
                <p className="text-muted-foreground flex items-center gap-2">
                  {searchQuery ? (
                    <>
                      <span className="font-medium">{categoryProducts.length}</span> 
                      results for "{searchQuery}" in {category.name}
                    </>
                  ) : (
                    <>
                      <span className="font-medium">{categoryProducts.length}</span> 
                      products available
                    </>
                  )}
                </p>
              </div>
              
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[200px]">
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
        </div>

        {/* Products Grid */}
        {categoryProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categoryProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onCompare={() => setSelectedProduct(product)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="bg-muted/30 rounded-lg p-12 max-w-md mx-auto">
              <Search className="h-16 w-16 mx-auto mb-4 text-muted-foreground opacity-50" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                No products found
              </h3>
              <p className="text-muted-foreground">
                {searchQuery 
                  ? `No results for "${searchQuery}" in ${category.name}. Try a different search term.`
                  : `No products available in ${category.name} at the moment.`
                }
              </p>
              {searchQuery && (
                <Button 
                  onClick={() => setSearchQuery("")}
                  variant="outline"
                  className="mt-4"
                >
                  Clear Search
                </Button>
              )}
            </div>
          </div>
        )}
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
