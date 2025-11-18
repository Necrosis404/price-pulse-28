import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Product } from "@/data/mockData";
import { Star } from "lucide-react";

interface ProductCardProps {
  product: Product;
  onCompare: () => void;
}

export const ProductCard = ({ product, onCompare }: ProductCardProps) => {
  const lowestPrice = Math.min(...product.prices.map(p => p.price));
  const highestPrice = Math.max(...product.prices.map(p => p.price));
  const savings = highestPrice - lowestPrice;
  const savingsPercent = ((savings / highestPrice) * 100).toFixed(0);

  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card">
      <div className="aspect-square overflow-hidden bg-muted">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-4 space-y-3">
        <div>
          <h3 className="font-semibold text-card-foreground line-clamp-2 mb-2">{product.name}</h3>
          <div className="flex items-center gap-2 text-sm">
            <div className="flex items-center gap-1 text-accent">
              <Star className="h-4 w-4 fill-accent" />
              <span className="font-medium">{product.rating}</span>
            </div>
            <span className="text-muted-foreground">({product.reviews.toLocaleString()})</span>
          </div>
        </div>

        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-success">₹{lowestPrice.toLocaleString()}</span>
        </div>

        <Button 
          onClick={onCompare}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
        >
          Compare Prices
        </Button>
      </div>
    </Card>
  );
};
