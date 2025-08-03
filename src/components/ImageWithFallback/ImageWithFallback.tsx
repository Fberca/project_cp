"use client";

type Props = {
  src: string;
  alt: string;
  className?: string;
  fallbackText?: string;
};

export default function ImageWithFallback({
  src,
  alt,
}: //fallbackText = "Imagem não disponível",
Props) {
  // const [isValid, setIsValid] = useState<boolean | null>(null);

  // useEffect(() => {
  //   const img = new window.Image();
  //   img.src = src;

  //   img.onload = () => setIsValid(true);
  //   img.onerror = () => setIsValid(false);
  // }, [src]);

  // if (isValid === null) {
  //   // Loading state (optional)
  //   return (
  //     <div
  //       className="img"
  //       // className={`flex items-center justify-center bg-gray-100 text-gray-400 rounded-lg ${className}`}
  //     >
  //       A carregar...
  //     </div>
  //   );
  // }

  // if (!isValid) {
  //   return (
  //     <div
  //       className="img"
  //       // className={`flex items-center justify-center bg-gray-200 text-gray-600 rounded-lg ${className}`}
  //     >
  //       {fallbackText}
  //     </div>
  //   );
  // }

  // const [hasError, setHasError] = useState(false);

  // if (hasError) {
  //   return (
  //     <div
  //       className="img"
  //       // className={`flex items-center justify-center bg-gray-200 text-gray-600 rounded-lg ${className}`}
  //     >
  //       {fallbackText}
  //     </div>
  //   );
  // }

  return <img src={src} alt={alt} className="img" />;
}
