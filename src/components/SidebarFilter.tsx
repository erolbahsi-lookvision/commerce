"import client"; import React from "react"; import { MainCategory } from "@/data/categories";

interface SidebarFilterProps { category: MainCategory; selectedBrands: string[]; onBrandChange: (brand: string) => void; }

export default function SidebarFilter({ category, selectedBrands, onBrandChange, }: SidebarFilterProps) { return ( {/* Markalar Filtresi */}
Markalar
{category.brands.map((brand) => ( onBrandChange(brand)} className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500" /> {brand} ))}

  <hr className="border-gray-100" />

  {/* Alt Kategori Grupları */}
  <div>
    <h3 className="font-bold text-sm text-gray-900 mb-3 uppercase tracking-wider">
      Kategoriler
    </h3>
    <div className="space-y-4">
      {category.subCategories.map((group, idx) => (
        <div key={idx} className="space-y-2">
          {group.groupName && (
            <span className="text-xs font-semibold text-gray-400 uppercase">
              {group.groupName}
            </span>
          )}
          <ul className="space-y-1.5 pl-1">
            {group.subCategories.map((sub, sIdx) => {
              const subName = typeof sub === "string" ? sub : sub.name;
              return (
                <li key={sIdx}>
                  <a
                    href="#"
                    className="text-xs text-gray-600 hover:text-orange-600 transition-colors block py-0.5"
                  >
                    {subName}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  </div>
</aside>

); }
