"use client";

import icons from "@/components/icons/icons";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { useState, useRef } from "react";
import { useIsVisible } from "../../hooks/useIsVisible";

export default function Tools() {
  const [selectedTab, setSelectedTab] = useState("all");
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(ref);

  return (
    <section
      id="tools"
      className="text-white my-20 max-w-5xl mx-auto text-center pt-12"
    >
      <div
        ref={ref}
        className={cn(
          "transition duration-700 ease-in",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        )}
      >
        <h2 className="text-4xl bg-gradient-to-t text-left md:text-center from-zinc-50 via-zinc-400 to-zinc-700/80 bg-clip-text text-transparent">
          Tecnologías
          <span></span>
        </h2>
        <Tabs
          defaultValue="all"
          className="w-full my-5"
          onValueChange={setSelectedTab}
        >
          <TabsList className="w-full bg-slate-900/50">
            <TabsTrigger
              value="all"
              className="text-white data-[state=active]:bg-slate-800 cursor-pointer"
            >
              Todo
            </TabsTrigger>
            <TabsTrigger
              value="Frontend"
              className="text-white data-[state=active]:bg-slate-800 cursor-pointer"
            >
              Frontend
            </TabsTrigger>
            <TabsTrigger
              value="Backend"
              className="text-white data-[state=active]:bg-slate-800 cursor-pointer"
            >
              Backend
            </TabsTrigger>
            <TabsTrigger
              value="Deploy"
              className="text-white data-[state=active]:bg-slate-800 cursor-pointer"
            >
              Despliegue
            </TabsTrigger>
            <TabsTrigger
              value="Other"
              className="text-white data-[state=active]:bg-slate-800 cursor-pointer"
            >
              Otros
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="flex items-center flex-wrap gap-2 mt-10">
          {Object.values(icons)
            .filter((item) =>
              selectedTab === "all" ? true : item.category === selectedTab
            )
            .map((item, index) => (
              <span
                key={index}
                className={cn(
                  "rounded-full px-3 py-1 w-fit flex items-center gap-2 text-base relative overflow-hidden",
                  item.className && item.className
                )}
              >
                {/* Capa oscura */}
                <span className="absolute left-0 top-0 w-full h-full bg-black/75 pointer-events-none" />

                <span className="relative z-10 flex items-center gap-2 text-white">
                  {item.icon}
                  {item.name}
                </span>
              </span>
            ))}
        </div>
      </div>
    </section>
  );
}
