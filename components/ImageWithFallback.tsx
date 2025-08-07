import Image from "next/image";
import { Users } from "lucide-react";
import { useState } from "react";

interface ImageWithFallbackProps {
  src?: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  fallbackIcon?: React.ReactNode;
  fallbackClassName?: string;
}

export default function ImageWithFallback({
  src,
  alt,
  width = 200,
  height = 200,
  className = "",
  fallbackIcon,
  fallbackClassName = "w-16 h-16 text-white"
}: ImageWithFallbackProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // If no src provided or image failed to load, show fallback
  if (!src || imageError) {
    return (
      <div className={`bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center ${className}`}>
        <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center">
          {fallbackIcon || <Users className={fallbackClassName} />}
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center animate-pulse">
          <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center">
            {fallbackIcon || <Users className={fallbackClassName} />}
          </div>
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`${className} ${imageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        onError={() => setImageError(true)}
        onLoad={() => setImageLoaded(true)}
        style={{ objectFit: 'cover' }}
      />
    </div>
  );
}
