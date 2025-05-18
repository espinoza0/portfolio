import { useRef } from "react";
import { useIsVisible } from "../hooks/useIsVisible";
import { cn } from "@/lib/utils";
import { ExperienceItemProps } from "@/types/global.types";

export function ExperienceItem({ exp }: ExperienceItemProps) {
  const ref = useRef<HTMLLIElement>(null);
  const isVisible = useIsVisible(ref);

  return (
    <li
      ref={ref}
      className={cn(
        "mb-10",
        "transition duration-700 ease-in",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      )}
    >
      <div className="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -left-1.5 dark:border-gray-900 dark:bg-gray-700"></div>
      <div className="ml-5">
        <time className="mb-1 text-sm font-normal leading-none text-gray-300 dark:text-gray-500">
          {exp.date}
        </time>
        <h3 className="text-lg font-semibold text-blue-400/80 dark:text-white">
          {exp.title}{" "}
          <span className="block text-sm font-normal text-gray-300 dark:text-gray-500">
            {exp.company}
          </span>
        </h3>
        <ul className="mt-4 mb-4 text-base font-normal text-gray-400 dark:text-gray-400 list-disc list-inside space-y-1">
          {exp.description.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <div className="flex items-center gap-2 flex-wrap">
          {exp.tools.map((tool, i) => (
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
    </li>
  );
}
