import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/sections/Footer";

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio de Gabriel Bascope",
  description:
    "Desarrollador web junior con conocimientos en React js, Typescript, Tailwind, Node, Express y Laravel. Portfolio con proyectos personales, experiencia y tecnologías.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={onest.variable}>
      <body
        suppressHydrationWarning
        className={`antialiased min-h-screen bg-slate-950 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)] bg-no-repeat bg-cover`}
      >
        <div className="max-w-[70rem] mx-auto p-4">
          <header className="flex items-center justify-center py-10">
            <Header />
          </header>
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
