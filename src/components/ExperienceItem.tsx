import { useRef } from "react";
import { useIsVisible } from "../../public/hooks/useIsVisible";
import { cn } from "@/lib/utils";

type ExperienceItemProps = {
  exp: {
    date: string;
    title: string;
    company: string;
    description: string[];
  };
};

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
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      <div className="ml-5">
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          {exp.date}
        </time>
        <h3 className="text-lg font-semibold text-white dark:text-white">
          {exp.title}{" "}
          <span className="block text-sm font-normal text-gray-400 dark:text-gray-500">
            {exp.company}
          </span>
        </h3>
        <ul className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 list-disc list-inside space-y-1">
          <li>
            Desarrollo utilizando <span className="underline">React</span>,{" "}
            <span className="underline">Tailwind CSS</span>,{" "}
            <span className="underline">Node.js con Express</span> y{" "}
            <span className="underline">SQL Server</span>.
          </li>
          {exp.description.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </li>
  );
}
