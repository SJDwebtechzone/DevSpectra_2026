import { ProductDetailPage, ProductDetailPageProps } from "@/components/ui/product-detail-page";
import { Tag, Ruler, Users, Info } from "lucide-react";

const demoProps: ProductDetailPageProps = {
  breadcrumbs: [
    { label: "Market", href: "#" },
    { label: "Clothing", href: "#" },
    { label: "Lightweight Brown Bomber Jacket", href: "#" },
  ],
  product: {
    name: "Lightweight Brown Bomber Jacket",
    price: 70,
    shippingCost: 5.60,
    currency: "€",
    images: [
      "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4mss4157-02_3.jpg?v=1756928497&quality=80?q=80&w=2000&auto=format&fit=crop",
      "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4mss4157-02_1.jpg?v=1756928497&quality=80?q=80&w=2000&auto=format&fit=crop",
      "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4mss4157-02_6.jpg?v=1756920149&quality=80?q=80&w=2000&auto=format&fit=crop",
    ],
    description: "A stylish light bomber jacket, perfect for the transitional seasons. Made from breathable, water-resistant material with a zip-up front, side pockets, and a sleeve zip pocket for small essentials. Ideal for layering in spring or fall.",
    tags: [
      { label: "Brown", icon: Tag },
      { label: "L Size", icon: Ruler },
      { label: "Women", icon: Users },
      { label: "New", icon: Info },
    ],
  },
  seller: {
    name: "Maria Johansson",
    avatarUrl: "https://i.pravatar.cc/150?u=maria",
    rating: 4.9,
  },
};

export default function ProductPageDemo() {
  const relatedProducts = [
    { id: 1, src: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amFja2V0fGVufDB8fDB8fHww?q=80&w=800&auto=format&fit=crop", alt: "Similar Jacket" },
    { id: 2, src: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hvc2V8ZW58MHx8MHx8fDA%3D?q=80&w=800&auto=format&fit=crop", alt: "Running Shoes" },
    { id: 3, src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop", alt: "Modern Watch" },
    { id: 4, src: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=800&auto=format&fit=crop", alt: "Stylish Sunglasses" },
  ];

  return (
    <div className="w-full flex justify-center">
      <div className="bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden w-full max-w-4xl">
        <ProductDetailPage 
            product={demoProps.product}
            seller={demoProps.seller}
            breadcrumbs={demoProps.breadcrumbs}
        />
        
        <div className="px-6 md:px-10 pb-10 bg-white">
            <h2 className="text-lg font-bold tracking-tight text-gray-900 mb-4">You might also like</h2>
            
            <style>{`
              @keyframes step-carousel {
                0%, 15% { transform: translateX(0%); }
                20%, 35% { transform: translateX(-12.5%); }
                40%, 55% { transform: translateX(-25%); }
                60%, 75% { transform: translateX(-37.5%); }
                80%, 99.99% { transform: translateX(-50%); }
                100% { transform: translateX(0%); }
              }
              .animate-step-carousel {
                animation: step-carousel 12s infinite cubic-bezier(0.4, 0, 0.2, 1);
              }
              .animate-step-carousel:hover {
                animation-play-state: paused;
              }
            `}</style>
            
            <div className="overflow-hidden w-full relative -mx-2">
              <div className="flex w-[400%] md:w-[200%] animate-step-carousel">
                  {[...relatedProducts, ...relatedProducts].map((item, index) => (
                        <div key={`${item.id}-${index}`} className="w-[12.5%] px-2">
                          <div className="bg-gray-100 rounded-xl aspect-square overflow-hidden group h-full">
                            <img 
                              src={item.src} 
                              alt={item.alt}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                        </div>
                  ))}
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
