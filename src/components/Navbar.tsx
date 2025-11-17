import { TrendingDown, Grid3x3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CategoryCard } from "@/components/CategoryCard";
import { categories } from "@/data/mockData";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
          <div className="h-10 w-10 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
            <TrendingDown className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">PriceCompare</span>
        </div>
        
        <div className="flex items-center gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost">
                <Grid3x3 className="h-5 w-5 mr-2" />
                Categories
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl">Browse by Category</DialogTitle>
              </DialogHeader>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                {categories.map((category) => (
                  <DialogTrigger key={category.id} asChild>
                    <div onClick={() => navigate(`/category/${category.id}`)}>
                      <CategoryCard
                        category={category}
                        onClick={() => {}}
                      />
                    </div>
                  </DialogTrigger>
                ))}
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </nav>
  );
};
