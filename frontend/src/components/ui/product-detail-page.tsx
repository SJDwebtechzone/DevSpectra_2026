import * as React from "react";
import { ChevronRight, Star, Tag, Ruler, Users, Info, Heart, Share2, ShoppingCart, Send, Camera } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface ProductTag {
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface Seller {
  name: string;
  avatarUrl: string;
  rating: number;
}

interface Product {
  name: string;
  price: number;
  shippingCost: number;
  currency: string;
  images: string[];
  description: string;
  tags: ProductTag[];
}

export interface ProductDetailPageProps {
  product: Product;
  seller: Seller;
  breadcrumbs: BreadcrumbItem[];
}

const StarRating = ({ rating, className }: { rating: number; className?: string }) => (
  <div className={cn("flex items-center gap-0.5", className)}>
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={cn(
          "h-3 w-3",
          i < Math.floor(rating) ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground/50"
        )}
      />
    ))}
    <span className="ml-1.5 text-[10px] font-medium text-muted-foreground">{rating.toFixed(1)}</span>
  </div>
);


export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ product, seller, breadcrumbs }) => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);

  React.useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered, product.images.length]);

  return (
    <div className="w-full max-w-7xl mx-auto p-4 md:p-8 bg-white text-black rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden">
      
      {/* Breadcrumbs Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center text-xs md:text-sm text-gray-500 mb-4 truncate">
        {breadcrumbs.map((item, index) => (
          <React.Fragment key={index}>
            <a href={item.href} className="hover:text-black transition-colors whitespace-nowrap">{item.label}</a>
            {index < breadcrumbs.length - 1 && <ChevronRight className="h-4 w-4 mx-1 shrink-0" />}
          </React.Fragment>
        ))}
      </nav>

      <div className="absolute top-6 right-6 md:top-8 md:right-8 z-10">
        <div className="flex items-center gap-1 bg-white/90 backdrop-blur-md p-0.5 rounded-full shadow-sm border border-gray-100">
            <Button variant="ghost" size="icon" className="h-7 w-7 rounded-full text-gray-500 hover:text-black">
                <Heart className="h-3.5 w-3.5" />
                <span className="sr-only">Favorite</span>
            </Button>
            <Button variant="ghost" size="icon" className="h-7 w-7 rounded-full text-gray-500 hover:text-black">
                <Share2 className="h-3.5 w-3.5" />
                <span className="sr-only">Share</span>
            </Button>
        </div>
      </div>


      {/* Main content grid */}
      <main className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 relative z-0">
        {/* Image Gallery Section */}
        <div 
          className="flex flex-col gap-4"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
           <AnimatePresence mode="wait">
             <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border bg-gray-50 cursor-pointer"
             >
                <img
                    src={product.images[currentImageIndex]}
                    alt={`${product.name} image ${currentImageIndex + 1}`}
                    className="object-cover w-full h-full mix-blend-multiply"
                />
             </motion.div>
           </AnimatePresence>
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
                {product.images.map((_, index) => (
                <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={cn(
                    "h-2 w-2 rounded-full transition-colors",
                    currentImageIndex === index ? "bg-black" : "bg-gray-200 hover:bg-gray-400"
                    )}
                    aria-label={`View image ${index + 1}`}
                />
                ))}
            </div>
            <Button variant="outline" size="sm" className="gap-2 text-xs">
                <Camera className="h-3 w-3" /> Find Similar
            </Button>
          </div>
        </div>

        {/* Product Details Section */}
        <div className="flex flex-col">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight pr-12">{product.name}</h1>
          <div className="mt-4">
            <span className="text-3xl font-bold">{product.currency}{product.price}</span>
            <span className="text-xs text-gray-500 ml-2">
                + {product.currency}{product.shippingCost.toFixed(2)} Shipping
            </span>
          </div>

          <div className="flex flex-col my-6">
            <Button size="lg" className="w-full gap-2 bg-black text-white hover:bg-gray-800"><ShoppingCart className="h-4 w-4"/> Buy Now</Button>
          </div>

          {/* Tags/Badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            {product.tags.map((tag, index) => {
              const Icon = tag.icon;
              return (
                <Badge key={index} variant="secondary" className="text-xs font-medium py-1 px-3 gap-1.5 bg-gray-100 text-gray-700 hover:bg-gray-200">
                  {Icon && <Icon className="h-3 w-3" />}
                  {tag.label}
                </Badge>
              );
            })}
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed">
            {product.description}
            <a href="#" className="text-black font-medium hover:underline ml-2">Read more</a>
          </p>
          
          {/* Seller Information */}
          <div className="mt-8 p-4 bg-white rounded-2xl border border-gray-100 hover:bg-gray-50/50 transition-colors shadow-sm w-full">
             <div className="flex flex-wrap items-center justify-between gap-4">
                 <div className="flex items-center gap-4">
                     <Avatar className="h-12 w-12 border border-gray-100 shadow-sm">
                         <AvatarImage src={seller.avatarUrl} alt={seller.name} className="object-cover" />
                         <AvatarFallback>{seller.name.charAt(0)}</AvatarFallback>
                     </Avatar>
                     <div className="flex flex-col">
                         <p className="font-bold text-[15px] text-gray-900">
                             {seller.name}
                         </p>
                         <StarRating rating={seller.rating} />
                     </div>
                 </div>
                 
                 <div className="flex items-center gap-4">
                     <Button variant="outline" size="sm" className="gap-2 border-gray-200 bg-white text-black hover:bg-gray-50 h-9 rounded-full px-5 text-sm font-semibold shadow-sm">
                         <Send className="h-3.5 w-3.5"/> Contact
                     </Button>
                     <Button variant="link" className="text-gray-500 hover:text-gray-900 text-[11px] font-bold uppercase tracking-widest p-0 h-auto md:hidden">
                         All listings &rarr;
                     </Button>
                 </div>
             </div>
          </div>
        </div>
      </main>
    </div>
  );
};
