import type { NavLink } from "@/lib/types";

export const siteConfig = {
  name: "Arcana Smokes",
  description: "Your mystical headshop for bongs, papers, and more.",
  navLinks: [
    { label: "Bongs", href: "/category/bongs" },
    { label: "Sedas", href: "/category/sedas" },
    { label: "Piteiras", href: "/category/piteiras" },
    { label: "Dichavadores", href: "/category/dichavadores" },
    { label: "Isqueiros", href: "/category/isqueiros" },
    { label: "Cinzeiros", href: "/category/cinzeiros" },
    { label: "Acessórios", href: "/category/acessorios" },
    { label: "Kits", href: "/category/kits" },
  ] as NavLink[],
};
