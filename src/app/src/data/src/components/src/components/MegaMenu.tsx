"tsx"
import Link from "next/link";
import { LOOKVISION_CATEGORIES } from "@/data/categories";

export default function MegaMenu() {
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="text-xl font-extrabold text-blue-600 tracking-wider">
          LOOKVISION
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          {LOOKVISION_CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/kategori/${cat.slug}`}
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
