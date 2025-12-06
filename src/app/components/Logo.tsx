import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  size?: number;
  showText?: boolean;
  className?: string;
}

export default function Logo({
  size = 40,
  showText = true,
  className = '',
}: LogoProps) {
  return (
    <Link href='/' className={`flex items-center space-x-3 ${className}`}>
      <div className='relative flex-shrink-0'>
        <Image
          src='/logo.png'
          alt='Organic Boost'
          width={size}
          height={size}
          className='object-contain rounded-lg'
          priority
        />
      </div>
      {showText && (
        <span className='text-xl font-bold text-primary'>Organic Boost</span>
      )}
    </Link>
  );
}

// Icon-only version for favicon/small spaces
export function LogoIcon({ size = 32, className = '' }: { size?: number; className?: string }) {
  return (
    <Image
      src='/logo.png'
      alt='Organic Boost'
      width={size}
      height={size}
      className={`object-contain ${className}`}
      priority
    />
  );
}

