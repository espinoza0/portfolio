"use client";
import { useEffect, useState } from "react";
import { Briefcase, Code2, Folder, Home, Mail } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { id: "home", label: "Home", icon: Home, href: "#" },
  {
    id: "experiencia",
    label: "Experiencia",
    icon: Briefcase,
    href: "#experiencia",
  },
  { id: "proyectos", label: "Proyectos", icon: Folder, href: "#proyectos" },
  { id: "tools", label: "Tecnologías", icon: Code2, href: "#tools" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";
      for (const item of NAV_ITEMS.slice(1)) {
        // saltamos "home"
        const section = document.getElementById(item.id);
        if (section) {
          // si la seccion esta 80px o mas arriba del viewport, se setea activa
          const rect = section.getBoundingClientRect();
          if (rect.top <= 80) {
            current = item.id;
          }
        }
      }
      setActiveSection(current);
    };

    // se llama a handlescroll al hacer scroll
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="rounded-xl px-3 py-2 shadow-xl w-fit mt-5 mb-10 bg-slate-800 z-20 text-white fixed">
      <nav
        className="items-center gap-6 flex"
        aria-label="Navegación principal"
      >
        {NAV_ITEMS.map(({ id, label, icon: Icon, href }) => (
          <Link
            key={id}
            href={href}
            aria-label={label}
            className={cn(
              "text-sm font-medium transition-colors flex items-center gap-2 rounded-full",
              activeSection === id
                ? "text-blue-400"
                : "text-white hover:text-slate-500"
            )}
            prefetch={false}
          >
            <span className="hidden md:inline">{label}</span>
            <Icon className="md:hidden" aria-hidden="true" />
          </Link>
        ))}
        <a
          href="mailto:gabriel.bascope005@gmail.com"
          aria-label="Enviar correo a Gabriel Bascope"
          className="text-sm font-medium transition-colors items-center gap-2 rounded-full text-white hover:text-slate-500 flex"
        >
          <Mail aria-hidden="true" />
          <span className="sr-only">Enviar correo</span>
        </a>
      </nav>
    </div>
  );
}
