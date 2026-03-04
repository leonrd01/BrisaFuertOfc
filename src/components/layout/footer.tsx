import Link from "next/link";
import { Icons } from "@/components/icons";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function SiteFooter() {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col items-start">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Icons.sun className="h-6 w-6 text-primary" />
              <span className="font-headline text-xl font-bold">Arcana Smokes</span>
            </Link>
            <p className="text-sm text-accent-foreground/80">Sua headshop mística.</p>
          </div>

          <div>
            <h3 className="font-bold uppercase tracking-wider">Categorias</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {siteConfig.navLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold uppercase tracking-wider">Suporte</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="#" className="hover:text-primary transition-colors">Contato</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Política de Privacidade</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Termos de Serviço</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold uppercase tracking-wider">Siga-nos</h3>
            <div className="mt-4 flex space-x-4">
              <Link href="#" aria-label="Facebook">
                <Facebook className="h-6 w-6 hover:text-primary transition-colors" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Instagram className="h-6 w-6 hover:text-primary transition-colors" />
              </Link>
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-6 w-6 hover:text-primary transition-colors" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-accent-foreground/10 pt-4 text-center text-sm text-accent-foreground/60">
          <p>&copy; {new Date().getFullYear()} Arcana Smokes. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
