export type ExperienceItemProps = {
  exp: {
    date: string;
    title: string;
    company: string;
    description: string[];
    tools: Tool[];
  };
};

// Tipos para los tool iconos
export type ToolIcon = {
  name: string;
  icon: React.ReactNode | null;
  category: string;
  className: string;
};
// El tipo para cada herramienta puede ser un ToolIcon o un string
export type Tool = ToolIcon | string;

export type Proyecto = {
  category: string;
  title: string;
  description: string;
  repoUrl: string;
  demoUrl: string;
  tools: Tool[];
  image: string;
};
