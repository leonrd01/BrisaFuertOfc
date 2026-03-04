export type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  images: string[];
  aiHint: string;
  description: string;
  specifications: Record<string, string>;
  reviews: {
    rating: number;
    text: string;
    author: string;
  }[];
};

export type NavLink = {
  label: string;
  href: string;
};

export type CartItem = Product & {
  quantity: number;
};