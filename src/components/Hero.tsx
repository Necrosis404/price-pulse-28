import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="relative bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 animate-fade-in">
          Find the Best Deals Across India
        </h1>
        <p className="text-lg md:text-xl text-center text-primary-foreground/90 mb-8">
          Compare prices from Amazon, Flipkart, Myntra, Snapdeal & more
        </p>
        
        <form onSubmit={handleSearch} className="flex gap-2 max-w-2xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-14 text-base bg-background text-foreground border-0 shadow-lg"
            />
          </div>
          <Button 
            type="submit" 
            size="lg" 
            className="h-14 px-8 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-lg transition-all hover:scale-105"
          >
            Search
          </Button>
        </form>
        
        <p className="text-center mt-6 text-sm text-primary-foreground/80">
          Popular: iPhone 15, Nike Shoes, Samsung TV, MacBook Pro
        </p>
      </div>
    </div>
  );
};
