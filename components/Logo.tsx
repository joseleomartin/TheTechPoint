import Link from 'next/link';

export function Logo({ className = '' }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-3 ${className}`}>
      <img
        src="/Fondo%20transparente.png"
        alt="THE TECH POINT"
        className="h-auto w-auto object-contain"
        style={{ width: '600px', maxWidth: '150px' }}
      />
      <div className="flex flex-col" style={{ maxWidth: '200px' }}>
        <span className="text-2xl font-bold text-gray-900 dark:text-white leading-tight tracking-tight whitespace-nowrap">
          THE TECH POINT
        </span>
        <span className="text-xs font-medium text-primary uppercase tracking-wider whitespace-nowrap">
          Soluciones Tecnológicas
        </span>
      </div>
    </Link>
  );
}
