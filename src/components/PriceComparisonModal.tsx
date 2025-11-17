import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/data/mockData";
import { ExternalLink, CheckCircle2, XCircle, TrendingDown } from "lucide-react";

interface PriceComparisonModalProps {
  product: Product | null;
  open: boolean;
  onClose: () => void;
}

export const PriceComparisonModal = ({ product, open, onClose }: PriceComparisonModalProps) => {
  if (!product) return null;

  const lowestPrice = Math.min(...product.prices.map(p => p.price));
  const sortedPrices = [...product.prices].sort((a, b) => a.price - b.price);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{product.name}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="flex gap-6">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-32 h-32 object-cover rounded-lg bg-muted"
            />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-3xl font-bold text-success">₹{lowestPrice.toLocaleString()}</span>
                <Badge className="bg-success text-success-foreground">
                  <TrendingDown className="h-3 w-3 mr-1" />
                  Best Price
                </Badge>
              </div>
              <p className="text-muted-foreground">
                Lowest price across {product.prices.length} platforms
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-lg">Price Comparison</h3>
            {sortedPrices.map((price, index) => (
              <div 
                key={price.platform}
                className={`flex items-center justify-between p-4 rounded-lg border transition-all ${
                  price.price === lowestPrice 
                    ? 'border-success bg-success/5' 
                    : 'border-border bg-card'
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl">{price.logo}</span>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">{price.platform}</span>
                      {price.price === lowestPrice && (
                        <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
                          Lowest Price ✓
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      {price.inStock ? (
                        <span className="flex items-center gap-1 text-sm text-success">
                          <CheckCircle2 className="h-4 w-4" />
                          In Stock
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-sm text-destructive">
                          <XCircle className="h-4 w-4" />
                          Out of Stock
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-bold">₹{price.price.toLocaleString()}</span>
                  <Button 
                    variant={price.price === lowestPrice ? "default" : "outline"}
                    className={price.price === lowestPrice ? "bg-success hover:bg-success/90" : ""}
                    disabled={!price.inStock}
                    asChild
                  >
                    <a href={price.url} target="_blank" rel="noopener noreferrer">
                      View Deal <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </DialogContent>
    </Dialog>
  );
};
