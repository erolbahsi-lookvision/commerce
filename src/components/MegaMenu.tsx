"import client"; import React, { useState } from "react"; import { LOOKVISION_CATEGORIES, MainCategory } from "@/data/categories"; import Link from "next/link";

export default function MegaMenu() { const [activeCategory, setActiveCategory] = useState<MainCategory | null>(null);

return ( {LOOKVISION_CATEGORIES.map((cat) => (
setActiveCategory(cat)} onMouseLeave={() => setActiveCategory(null)} > {cat.name}
))}

 

  {/* Dropdown Mega Menu Panel */}
  {activeCategory && (
    <div
      className="absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-100 z-50 py-8 px-12 transition-all"
      onMouseEnter={() => setActiveCategory(activeCategory)}
      onMouseLeave={() => setActiveCategory(null)}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-4 gap-8">
        <div className="col-span-3 grid grid-cols-3 gap-6">
          {activeCategory.subCategories.map((group, idx) => (
            <div key={idx} className="space-y-3">
              {group.groupName && (
                <h4 className="font-bold text-gray-900 text-sm border-b pb-1">
                  {group.groupName}
                </h4>
              )}
              <ul className="space-y-2">
                {group.subCategories.map((sub, sIdx) => {
                  const subName = typeof sub === "string" ? sub : sub.name;
                  return (
                    <li key={sIdx}>
                      <Link
                        href={`/kategori/${activeCategory.slug}/${encodeURIComponent(subName)}`}
                        className="text-xs text-gray-600 hover:text-orange-600 hover:underline block"
                      >
                        {subName}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Markalar Sütunu */}
        <div className="border-l pl-6 border-gray-100 bg-gray-50 p-4 rounded-lg">
          <h4 className="font-bold text-xs uppercase tracking-wider text-gray-500 mb-3">
            Popüler Markalar
          </h4>
          <div className="flex flex-wrap gap-2">
            {activeCategory.brands.map((brand, bIdx) => (
              <span
                key={bIdx}
                className="text-xs bg-white border border-gray-200 text-gray-700 px-2.5 py-1 rounded-md shadow-sm font-medium"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )}
</nav>

); }
