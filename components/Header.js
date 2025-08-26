// components/Header.js
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="nav" role="banner">
      <div className="container nav-inner nav-wrap">
        {/* Brand / Logo */}
        <Link href="/" className="brand" aria-label="AutoBooked AI">
          <Image
            src="/logo-horizontal.svg"     // make sure this file is in /public
            alt="AutoBooked AI"
            width={172}
            height={42}
            priority
            className="logo"
          />
        </Link>

        {/* Primary nav */}
        <nav className="nav-links" aria-label="Primary">
          <Link href="/">Home</Link>
          <Link href="/how-it-works">How It Works</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/industries">Industries</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Header CTA */}
        <Link href="/book" className="btn start-trial cta-header">
          Start Free Trial
        </Link>
      </div>

      {/* Component-scoped mobile tweaks so everything centers & stacks nicely */}
      <style jsx>{`
        /* Desktop keeps your current row layout via globals (.nav,.nav-inner) */

        /* Mobile: stack logo + links + CTA, centered */
        @media (max-width: 768px) {
          .nav-inner {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            text-align: center;
            height: auto;            /* override any fixed header height */
          }
          .brand :global(img),
          .logo {
            max-width: 160px;
            height: auto;
          }
          .nav-links {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;
          }
          .nav-links :global(a),
          .nav-links a {
            font-size: 1rem;
            padding: 0.25rem 0.5rem;
          }
          .start-trial {
            width: 100%;
            max-width: 260px;
            margin: 0.25rem auto 0;
            text-align: center;
          }
        }
      `}</style>
    </header>
  );
}
