// components/navigation/Logo.jsx
import Link from 'next/link';

export function Logo({ variant = 'default', onClick }) {
  const logoSrc = variant === 'dark' ? "/images/logo-2.png" : "/images/logo.png";
  
  return (
    <div className="logo">
      <Link href="/" onClick={onClick}>
        <img src={logoSrc} alt="Logo" title="Logo" data-testid="logo-image" />
      </Link>
    </div>
  );
}