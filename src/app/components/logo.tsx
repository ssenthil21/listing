import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  width?: number;
  imgClassName?: string;
  linkClassName?: string;
  href?: string | null;
  navClass?: string;
}

export default function Logo({ width = 166, imgClassName = '', linkClassName = '', href = '/', navClass = 'nav-brand' }: LogoProps) {
  const image = (
    <Image
      src="/img/qtick-logo.svg"
      alt="QTick"
      width={0}
      height={0}
      sizes="100vw"
      style={{ width: `${width}px`, height: 'auto' }}
      className={imgClassName}
    />
  );

  if (href) {
    const linkClass = `${navClass} ${linkClassName}`.trim();
    return (
      <Link href={href} className={linkClass}>
        {image}
      </Link>
    );
  }

  return image;
}
