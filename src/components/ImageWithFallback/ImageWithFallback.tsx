"use client";

import { useMobile } from "@/hooks/useMobile";
import { Image } from "@chakra-ui/react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  fallbackText?: string;
};

export default function ImageWithFallback({ src, alt }: Props) {
  const isMobile = useMobile();
  return (
    <Image
      src={src}
      alt={alt}
      width={isMobile ? "100px" : "200px"}
      height={isMobile ? "100px" : "200px"}
      borderRadius={"20px"}
    />
  );
}
