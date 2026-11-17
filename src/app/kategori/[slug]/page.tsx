"use client"; import React, { useState } from "react"; import { LOOKVISION_CATEGORIES } from "@/data/categories"; import SidebarFilter from "@/components/SidebarFilter"; import { useParams } from "next/navigation";

export default function CategoryPage() { const params = useParams(); const slug = params?.slug as string;

// İlgili kategoriyi bulma const category = LOOKVISION_CATEGORIES.find((cat) => cat.slug === slug);

// Marka filtreleme state'i const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

const handleBrandChange = (brand: string) => { setSelectedBrands((prev) => prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand] ); };
if (!category) { return ( Kategori bulunamadı.
 ); }

return ( {/* Sol Akıllı Filtre Paneli */}

  {/* Sağ Ürün Listeleme Alanı */}
  <div className="flex-1">
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm mb-6">
      <h1 className="text-2xl font-bold text-gray-900">{category.name}</h1>
      <p className="text-xs text-gray-500 mt-1">
        Seçilen Markalar: {selectedBrands.length > 0 ? selectedBrands.join(", ") : "Tümü"}
      </p>
    </div>

    {/* Ürün Grid Alanı */}
    <div className="grid grid-cols-3 gap-6">
      {/* Örnek Ürün Kartları buraya gelecek */}
      <div className="bg-white border border-gray-200 rounded-lg p-4 h-64 flex items-center justify-center text-gray-400 text-sm">
        Ürün Kartı Örneği
      </div>
      <div className="bg-white border border-gray-200 rounded-lg p-4 h-64 flex items-center justify-center text-gray-400 text-sm">
        Ürün Kartı Örneği
      </div>
      <div className="bg-white border border-gray-200 rounded-lg p-4 h-64 flex items-center justify-center text-gray-400 text-sm">
        Ürün Kartı Örneği
      </div>
    </div>
  </div>
</div>

); }
