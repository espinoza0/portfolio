import Link from "next/link";

export default function Header() {
  return (
    <div className="rounded-xl px-3 py-2 shadow-xl w-fit mt-5 mb-10 bg-slate-800/80 z-20 text-white fixed">
      <nav className="items-center gap-6 flex">
        <a
          href="#"
          className="text-sm font-medium transition-colors hover:text-slate-500"
        >
          Home
        </a>
        <Link
          href="#proyectos"
          className="text-sm font-medium transition-colors hover:text-slate-500"
          prefetch={false}
        >
          Proyectos
        </Link>
        <Link
          href="#experiencia"
          className="text-sm font-medium transition-colors hover:text-slate-500"
          prefetch={false}
        >
          Experiencia
        </Link>
        <Link
          href="/"
          className="text-sm font-medium transition-colors hover:text-slate-500"
          prefetch={false}
        >
          Contacto
        </Link>
      </nav>
    </div>
  )
}
