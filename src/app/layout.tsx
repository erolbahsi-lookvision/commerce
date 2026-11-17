import type { Metadata } from "next"; import { Inter } from "next/font/google"; import "./globals.css"; import MegaMenu from "@/components/MegaMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = { title: "LookVision | Güvenlik ve Teknoloji Sistemleri Pazaryeri", description: "Trendyol tarzı gelişmiş e-ticaret altyapısı ile güvenlik, kamera, ses ve otomasyon sistemleri.", };

export default function RootLayout({ children, }: { children: React.ReactNode; }) { return ( {/* Üst Bilgi / Header Alanı buraya gelebilir */} {/* Trendyol Tarzı Mega Menü */}

    {/* Ana İçerik */}
    <main className="flex-grow max-w-7xl w-full mx-auto px-4 py-6">
      {children}
    </main>

    {/* Footer Alanı */}
    <footer className="bg-white border-t border-gray-200 py-6 text-center text-xs text-gray-500">
      © 2026 LookVision - Tüm Hakları Saklıdır.
    </footer>
  </body>
</html>

); }
