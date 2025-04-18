import Link from "next/link";

export default function Header() {
  return (
    <div className="rounded-xl px-3 py-2 shadow-xl w-fit mt-5 mb-10 bg-slate-100/5 text-white">
      <nav className="items-center gap-6 flex">
        <Link
          href="/"
          className="text-sm font-medium transition-colors hover:text-primary"
          prefetch={false}
        >
          Home
        </Link>
        <Link
          href="/"
          className="text-sm font-medium transition-colors hover:text-primary"
          prefetch={false}
        >
          Proyectos
        </Link>
        <Link
          href="/"
          className="text-sm font-medium transition-colors hover:text-primary"
          prefetch={false}
        >
          Experiencia
        </Link>
        <Link
          href="/"
          className="text-sm font-medium transition-colors hover:text-primary"
          prefetch={false}
        >
          Contacto
        </Link>
      </nav>
    </div>
  )
}
