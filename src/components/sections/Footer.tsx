import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="text-white max-w-5xl mx-auto flex items-center justify-between mt-7 p-2 flex-wrap">
      <div
        className="flex items-center gap-2"
        aria-label="Redes sociales y contacto"
      >
        {/* GitHub */}
        <a
          href="https://github.com/espinoza0"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visitar el perfil de GitHub de Gabriel Bascope (se abre en una pestaña nueva)"
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-800 rounded-full"
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="#343C54"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
          >
            <title>GitHub</title>
            <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.49 2.87 8.3 6.84 9.64.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.34 9.34 0 0112 6.85c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.89 0 1.36-.01 2.45-.01 2.78 0 .27.18.58.69.48A10.02 10.02 0 0022 12.26C22 6.58 17.52 2 12 2z" />
          </svg>
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/gabrielbascope"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visitar el perfil de LinkedIn de Gabriel Bascope (se abre en una pestaña nueva)"
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-800 rounded-full"
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
          >
            <title>LinkedIn</title>
            <path
              d="M19.7065 3H4.34844C3.62264 3 3.04199 3.58065 3.04199 4.30645V19.6935C3.04199 20.3903 3.62264 21 4.34844 21H19.6485C20.3743 21 20.9549 20.4194 20.9549 19.6935V4.27742C21.013 3.58065 20.4323 3 19.7065 3ZM8.35491 18.3H5.71297V9.73548H8.35491V18.3ZM7.01942 8.54516C6.14846 8.54516 5.4807 7.84839 5.4807 7.00645C5.4807 6.16452 6.17749 5.46774 7.01942 5.46774C7.86136 5.46774 8.55813 6.16452 8.55813 7.00645C8.55813 7.84839 7.91942 8.54516 7.01942 8.54516ZM18.371 18.3H15.7291V14.1484C15.7291 13.1613 15.7001 11.8548 14.3356 11.8548C12.942 11.8548 12.7388 12.9581 12.7388 14.0613V18.3H10.0968V9.73548H12.6807V10.9258H12.7097C13.0872 10.229 13.9291 9.53226 15.2356 9.53226C17.9356 9.53226 18.4291 11.2742 18.4291 13.6548V18.3H18.371Z"
              fill="#343C54"
            />
          </svg>
        </a>

        {/* Email */}
        <a
          href="mailto:gabriel.bascope005@gmail.com"
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-800 rounded-full"
          aria-label="Enviar correo a Gabriel Bascope"
        >
          <Mail
            size={30}
            color="black"
            fill="#343C54"
            strokeWidth={1.5}
            aria-hidden="true"
          />
          <span className="sr-only">Enviar correo</span>
        </a>
      </div>

      <p>Gabriel Bascope - 2025</p>
    </footer>
  );
}
