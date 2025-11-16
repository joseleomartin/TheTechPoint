import Image from 'next/image';
import Link from 'next/link';

export function Logo({ className = '' }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <Image
        src="/logo.png"
        alt="THE TECH POINT"
        width={120}
        height={40}
        className="h-10 w-auto"
        priority
      />
    </Link>
  );
}
