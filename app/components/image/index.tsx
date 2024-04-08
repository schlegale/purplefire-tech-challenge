import Image from "next/image";

interface Props {
  className?: string;
  src: string;
  width?: number;
  height?: number;
}

export default function NextImage({ className, src, width, height }: Props) {
  if (width || height) {
    return (
      <Image
        src={src}
        className={`${className}`}
        priority
        sizes="min-width: 50px"
        width={width || height || 500}
        height={height || width || 500}
        alt="Not Found"
      />
    );
  }

  return (
    <Image src={src} className={className} fill priority sizes="min-width: 50px" alt="Not Found" />
  );
}
