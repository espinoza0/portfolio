"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Link } from "lucide-react";
import { useIsVisible } from "../../public/hooks/useIsVisible";
import { Proyecto } from "@/types/global.types";

export default function ProjectCard({
  project,
  index,
}: {
  project: Proyecto;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(ref);

  return (
    <div
      key={index}
      ref={ref}
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 gap-7 items-center p-5 rounded-md bg-black/30 isolate shadow-lg ring-1 ring-black/5",
        "transition duration-700 ease-in",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      )}
    >
      <div className="text-left space-y-4">
        <h2 className="text-sm text-blue-400/80">{project.category}</h2>
        <h3 className="text-xl">{project.title}</h3>
        <p className="text-gray-300">{project.description}</p>

        <div className="flex gap-2 items-center">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-md bg-slate-900/50 flex items-center gap-2"
          >
            <Image
              width={20}
              height={20}
              src="/images/github-mark.png"
              alt="github"
              className="object-contain"
            />
            Código
          </a>
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-md bg-slate-900/50 flex items-center gap-2"
          >
            <Link size={17} />
            Demo
          </a>
        </div>

        {/* tools */}
        <div className="flex items-center gap-2 flex-wrap">
          {project.tools.map((tool, i) => (
            <span
              key={i}
              className={cn(
                "rounded-full px-3 py-[1.5px] bg-slate-900/50 text-sm flex items-center gap-1 relative overflow-hidden",
                typeof tool === "object" && "className" in tool
                  ? tool.className
                  : ""
              )}
            >
              <span className="absolute left-0 top-0 w-full h-full bg-black/75 pointer-events-none" />
              {typeof tool === "string" ? (
                <span className="relative z-10">{tool}</span>
              ) : (
                <span className="relative z-10 flex items-center gap-2 text-white">
                  {tool.icon}
                  {tool.name}
                </span>
              )}
            </span>
          ))}
        </div>
      </div>
      <div
        className={cn(
          "w-full rounded-md overflow-hidden h-64 relative shadow-white/10 shadow-2xl",
          index % 2 === 0 && "md:order-first"
        )}
      >
        <Image
          src={project.image}
          alt="proyecto"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
