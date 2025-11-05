export interface Category {
  id: string;
  name: string;
  icon: string;
  productsCount: number;
}

export interface PlatformPrice {
  platform: string;
  price: number;
  url: string;
  inStock: boolean;
  logo: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  prices: PlatformPrice[];
  rating: number;
  reviews: number;
}

export const categories: Category[] = [
  { id: "electronics", name: "Electronics", icon: "Laptop", productsCount: 245 },
  { id: "fashion", name: "Fashion", icon: "Shirt", productsCount: 532 },
  { id: "home", name: "Home & Kitchen", icon: "Home", productsCount: 189 },
  { id: "books", name: "Books", icon: "Book", productsCount: 876 },
  { id: "beauty", name: "Beauty & Health", icon: "Sparkles", productsCount: 324 },
  { id: "sports", name: "Sports & Fitness", icon: "Dumbbell", productsCount: 156 },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Nike Air Zoom Pegasus 40",
    category: "fashion",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
    rating: 4.5,
    reviews: 2847,
    prices: [
      { platform: "Amazon", price: 4299, url: "#", inStock: true, logo: "🟠" },
      { platform: "Flipkart", price: 4199, url: "#", inStock: true, logo: "🔵" },
      { platform: "Myntra", price: 4499, url: "#", inStock: true, logo: "🔴" },
      { platform: "Snapdeal", price: 4350, url: "#", inStock: false, logo: "🔴" },
    ],
  },
  {
    id: "2",
    name: "Sony WH-1000XM5 Wireless Headphones",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    rating: 4.8,
    reviews: 5621,
    prices: [
      { platform: "Amazon", price: 29990, url: "#", inStock: true, logo: "🟠" },
      { platform: "Flipkart", price: 28999, url: "#", inStock: true, logo: "🔵" },
      { platform: "Myntra", price: 30499, url: "#", inStock: false, logo: "🔴" },
      { platform: "Snapdeal", price: 29500, url: "#", inStock: true, logo: "🔴" },
    ],
  },
  {
    id: "3",
    name: "Apple iPhone 15 Pro (256GB)",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1678652197950-1c77e4b53fe4?w=400",
    rating: 4.7,
    reviews: 8934,
    prices: [
      { platform: "Amazon", price: 134900, url: "#", inStock: true, logo: "🟠" },
      { platform: "Flipkart", price: 133999, url: "#", inStock: true, logo: "🔵" },
      { platform: "Myntra", price: 135999, url: "#", inStock: false, logo: "🔴" },
      { platform: "Snapdeal", price: 136500, url: "#", inStock: false, logo: "🔴" },
    ],
  },
  {
    id: "4",
    name: "Levi's Men's 511 Slim Fit Jeans",
    category: "fashion",
    image: "https://images.unsplash.com/photo-1542272454315-7f6d5b9ad1e2?w=400",
    rating: 4.3,
    reviews: 1245,
    prices: [
      { platform: "Amazon", price: 2499, url: "#", inStock: true, logo: "🟠" },
      { platform: "Flipkart", price: 2399, url: "#", inStock: true, logo: "🔵" },
      { platform: "Myntra", price: 2599, url: "#", inStock: true, logo: "🔴" },
      { platform: "Snapdeal", price: 2450, url: "#", inStock: true, logo: "🔴" },
    ],
  },
  {
    id: "5",
    name: "Instant Pot Duo 7-in-1 Electric Pressure Cooker",
    category: "home",
    image: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=400",
    rating: 4.6,
    reviews: 3456,
    prices: [
      { platform: "Amazon", price: 8999, url: "#", inStock: true, logo: "🟠" },
      { platform: "Flipkart", price: 8499, url: "#", inStock: true, logo: "🔵" },
      { platform: "Myntra", price: 9299, url: "#", inStock: false, logo: "🔴" },
      { platform: "Snapdeal", price: 8750, url: "#", inStock: true, logo: "🔴" },
    ],
  },
  {
    id: "6",
    name: "Samsung Galaxy Watch 6",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400",
    rating: 4.4,
    reviews: 2109,
    prices: [
      { platform: "Amazon", price: 29999, url: "#", inStock: true, logo: "🟠" },
      { platform: "Flipkart", price: 28999, url: "#", inStock: true, logo: "🔵" },
      { platform: "Myntra", price: 30499, url: "#", inStock: true, logo: "🔴" },
      { platform: "Snapdeal", price: 29500, url: "#", inStock: false, logo: "🔴" },
    ],
  },
];
