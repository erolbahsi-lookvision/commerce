export interface SubCategory {
  name: string;
  slug: string;
}

export interface Category {
  name: string;
  slug: string;
  subcategories: SubCategory[];
  brands: string[];
}

export const LOOKVISION_CATEGORIES: Category[] = [
  {
    name: "IP Kameralar",
    slug: "ip-kameralar",
    subcategories: [
      { name: "Bullet Kameralar", slug: "bullet-kameralar" },
      { name: "Dome Kameralar", slug: "dome-kameralar" },
      { name: "PTZ Kameralar", slug: "ptz-kameralar" },
    ],
    brands: ["Hikvision", "Dahua", "Uniview", "Axis"],
  },
  {
    name: "Kayıt Cihazları (NVR/DVR)",
    slug: "kayit-cihazlari",
    subcategories: [
      { name: "NVR Cihazları", slug: "nvr-cihazlari" },
      { name: "DVR Cihazları", slug: "dvr-cihazlari" },
    ],
    brands: ["Hikvision", "Dahua", "Xmeye"],
  },
  {
    name: "Ağ ve Switch Ürünleri",
    slug: "ag-ve-switch",
    subcategories: [
      { name: "PoE Switch", slug: "poe-switch" },
      { name: "Fiber Router", slug: "fiber-router" },
    ],
    brands: ["TP-Link", "Tenda", "D-Link", "Cisco"],
  },
];
