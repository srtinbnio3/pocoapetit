"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const ReservationButton = ({ className = "" }) => (
    <Button variant="default" asChild className={className}>
      <a
        href="https://www.tablecheck.com/ja/shops/pocoapetit/reserve"
        target="_blank"
        rel="noopener noreferrer"
        className="font-serif tracking-wide text-lg"
      >
        ご予約
      </a>
    </Button>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="font-serif text-2xl tracking-wide">
            POCO A PETIT
          </Link>

          <div className="flex items-center gap-4">
            {/* モバイル用予約ボタン */}
            <div className="md:hidden">
              <ReservationButton />
            </div>

            {/* ハンバーガーメニューボタン（モバイル用） */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="メニュー"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>

            {/* デスクトップメニュー */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="space-x-4">
                <Button variant="ghost" asChild className="font-serif tracking-wide text-lg">
                  <Link href="/concept">Concept</Link>
                </Button>
                <Button variant="ghost" asChild className="font-serif tracking-wide text-lg">
                  <Link href="/menu">Menu</Link>
                </Button>
                <Button variant="ghost" asChild className="font-serif tracking-wide text-lg">
                  <Link href="/restaurant">Restaurant</Link>
                </Button>
                <Button variant="ghost" asChild className="font-serif tracking-wide text-lg">
                  <Link href="/recruit">Recruit</Link>
                </Button>
                <Button variant="ghost" asChild className="font-serif tracking-wide text-lg">
                  <Link href="/contact">Contact</Link>
                </Button>
              </div>
              <div className="ml-4 border-l pl-4">
                <ReservationButton />
              </div>
            </div>
          </div>
        </div>

        {/* モバイルメニュー */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 py-4">
              <Button variant="ghost" asChild className="font-serif tracking-wide text-lg w-full justify-start">
                <Link href="/concept">Concept</Link>
              </Button>
              <Button variant="ghost" asChild className="font-serif tracking-wide text-lg w-full justify-start">
                <Link href="/menu">Menu</Link>
              </Button>
              <Button variant="ghost" asChild className="font-serif tracking-wide text-lg w-full justify-start">
                <Link href="/restaurant">Restaurant</Link>
              </Button>
              <Button variant="ghost" asChild className="font-serif tracking-wide text-lg w-full justify-start">
                <Link href="/recruit">Recruit</Link>
              </Button>
              <Button variant="ghost" asChild className="font-serif tracking-wide text-lg w-full justify-start">
                <Link href="/contact">Contact</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}