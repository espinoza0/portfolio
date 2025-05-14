import { Briefcase, Code2, Folder, Home, Mail } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="rounded-xl px-3 py-2 shadow-xl w-fit mt-5 mb-10 bg-slate-800 z-20 text-white fixed">
      <nav
        className="items-center gap-6 flex"
        aria-label="Navegación principal"
      >
        <a
          href="#"
          className="text-sm font-medium transition-colors hover:text-slate-500 flex items-center gap-2
    focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white focus-visible:ring-offset-slate-800 rounded-full"
          aria-label="Inicio"
        >
          <span className="hidden md:inline">Home</span>
          <Home className="md:hidden" aria-hidden="true" />
        </a>
        <Link
          href="#experiencia"
          className="text-sm font-medium transition-colors hover:text-slate-500 flex items-center gap-2
    focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white focus-visible:ring-offset-slate-800 rounded-full"
          prefetch={false}
          aria-label="Ir a la sección Experiencia"
        >
          <span className="hidden md:inline">Experiencia</span>
          <Briefcase className="md:hidden" aria-hidden="true" />
        </Link>
        <Link
          href="#proyectos"
          className="text-sm font-medium transition-colors hover:text-slate-500 flex items-center gap-2
    focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white focus-visible:ring-offset-slate-800 rounded-full"
          prefetch={false}
          aria-label="Ir a la sección Proyectos"
        >
          <span className="hidden md:inline">Proyectos</span>
          <Folder className="md:hidden" aria-hidden="true" />
        </Link>
        <Link
          href="#tools"
          className="text-sm font-medium transition-colors hover:text-slate-500 flex items-center gap-2
    focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white focus-visible:ring-offset-slate-800 rounded-full"
          prefetch={false}
          aria-label="Ir a la sección Tecnologías"
        >
          <span className="hidden md:inline">Tecnologías</span>
          <Code2 className="md:hidden" aria-hidden="true" />
        </Link>
        <a
          href="mailto:gabriel.bascope005@gmail.com"
          aria-label="Enviar correo a Gabriel Bascope"
          className="
    text-sm font-medium transition-colors hover:text-slate-500 items-center gap-2
    focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white focus-visible:ring-offset-slate-800 rounded-full
  "
        >
          <Mail aria-hidden="true" />
        </a>
      </nav>
    </header>
  );
}
