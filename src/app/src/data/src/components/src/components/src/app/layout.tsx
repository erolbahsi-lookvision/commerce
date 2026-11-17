import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MegaMenu from "@/components/MegaMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lookvision E-Ticaret Pazar Yeri",
  description: "Trendyol benzeri modern e-ticaret altyapısı",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={`${inter.className} bg-gray-50 min-h-screen`}>
        <MegaMenu />
        <main className="max-w-7xl mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
