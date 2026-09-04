import React from "react";
import {
  ImageItem,
  PhoneCarousel,
} from "@/components/ui/phone-mockups-1-utils/phone-carousel";

const exampleImages: ImageItem[] = [
  {
    src: "/portfolio/mobile-1.jpg",
    alt: "DevSpectra Mobile App 1",
  },
  {
    src: "/portfolio/mobile-2.jpg",
    alt: "DevSpectra Mobile App 2",
  },
  {
    src: "/portfolio/mobile-3.jpg",
    alt: "DevSpectra Mobile App 3",
  },
  {
    src: "/portfolio/uiux-1.jpg",
    alt: "DevSpectra Mobile UI/UX",
  },
];

export default function PhoneMockupBasic() {
  return <PhoneCarousel images={exampleImages} />;
}
