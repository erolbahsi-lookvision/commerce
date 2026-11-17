"use client";

import React, { useState } from "react";
import { LOOKVISION_CATEGORIES } from "@/data/categories";
import SidebarFilter from "@/components/SidebarFilter";
import { useParams } from "next/navigation";

export default function CategoryPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const category = LOOKVISION_CATEGORIES.find((cat) => cat.slug === slug);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const handleBrandChange = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand)
        ? prev.filter((b) => b !== brand)
        : [...prev, brand]
    );
  };

  if (!category) {
    return (
      <div className="p-12 text-center">
        <h1 className="text-xl font-semibold text-gray-700">Kategori bulunamadı.</h1>
      </div>
    );
  }

  return (
    <div className="flex gap-8">
      <SidebarFilter
        category={category}
        selectedBrands={selectedBrands}
        onBrandChange={handleBrandChange}
      />

      <div className="flex-1">
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm mb-6">
          <h1 className="text-2xl font-bold text-gray-900">{category.name}</h1>
          <p className="text-xs text-gray-500 mt-1">
            Seçilen Markalar: {selectedBrands.length > 0 ? selectedBrands.join(", ") : "Tümü"}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white border border-gray-200 rounded-lg p-4 h-64 flex items-center justify-center text-gray-400 text-sm shadow-sm">
            Ürün Kartı Örneği
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-4 h-64 flex items-center justify-center text-gray-400 text-sm shadow-sm">
            Ürün Kartı Örneği
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-4 h-64 flex items-center justify-center text-gray-400 text-sm shadow-sm">
            Ürün Kartı Örneği
          </div>
        </div>
      </div>
    </div>
  );
}
