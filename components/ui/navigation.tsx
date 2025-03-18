import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="font-serif text-2xl">
            POCO A PETIT
          </Link>
          <div className="space-x-4">
            <Button variant="ghost" asChild>
              <Link href="/concept">Concept</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/menu">Menu</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/access">Access</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/careers">Careers</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/contact">Contact</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}