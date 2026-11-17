"use client";

import React from "react";
import { Category } from "@/data/categories";

interface SidebarFilterProps {
  category: Category;
  selectedBrands: string[];
  onBrandChange: (brand: string) => void;
}

export default function SidebarFilter({
  category,
  selectedBrands,
  onBrandChange,
}: SidebarFilterProps) {
  return (
    <aside className="w-64 bg-white p-6 rounded-xl border border-gray-200 shadow-sm h-fit">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Kategoriler</h3>
      <ul className="space-y-2 mb-6">
        {category.subcategories.map((sub) => (
          <li key={sub.slug}>
            <a
              href={`/kategori/${sub.slug}`}
              className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
            >
              {sub.name}
            </a>
          </li>
        ))}
      </ul>

      <hr className="my-4 border-gray-100" />

      <h3 className="text-lg font-bold text-gray-900 mb-4">Markalar</h3>
      <div className="space-y-2">
        {category.brands.map((brand) => (
          <label key={brand} className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={selectedBrands.includes(brand)}
              onChange={() => onBrandChange(brand)}
              className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700">{brand}</span>
          </label>
        ))}
      </div>
    </aside>
  );
}
