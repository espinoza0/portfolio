import { Briefcase, Code2, Folder, Home, Mail } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <div className="rounded-xl px-3 py-2 shadow-xl w-fit mt-5 mb-10 bg-slate-800 z-20 text-white fixed">
      <nav className="items-center gap-6 flex">
        <a
          href="#"
          className="text-sm font-medium transition-colors hover:text-slate-500"
        >
          <span className="hidden md:inline">Home</span>
          {<Home className="md:hidden" />}
        </a>
        <Link
          href="#experiencia"
          className="text-sm font-medium transition-colors hover:text-slate-500"
          prefetch={false}
        >
          <span className="hidden md:inline">Experiencia</span>
          <Briefcase className="md:hidden" />
        </Link>
        <Link
          href="#proyectos"
          className="text-sm font-medium transition-colors hover:text-slate-500"
          prefetch={false}
        >
          <span className="hidden md:inline">Proyectos</span>
          <Folder className="md:hidden" />
        </Link>
        <Link
          href="#tools"
          className="text-sm font-medium transition-colors hover:text-slate-500"
          prefetch={false}
        >
          <span className="hidden md:inline">Tecnologías</span>
          <Code2 className="md:hidden" />
        </Link>
        <a
          href="mailto:gabriel.bascope005@gmail.com"
          className="text-sm font-medium md:hidden transition-colors hover:text-slate-500"
        >
          <Mail className="md:hidden" />
        </a>
      </nav>
    </div>
  );
}
