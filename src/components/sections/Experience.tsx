"use client";

const experiences = [
  {
    date: "Octubre 2024 - Febrero 2025",
    title: "Prácticas de Desarrollo Web",
    company: "Rapitecnic S.L.",
    description: [
      "Participación en el desarrollo de una aplicación web interna para la empresa, enfocándome en la implementación de estilos y módulos funcionales.",
      // "Desarrollo utilizando React, Tailwind CSS, Node.js con Express y SQL Server.",
      "Gestión y seguimiento del proyecto mediante Trello, facilitando la organización y priorización de tareas.",
      "Trabajo colaborativo en equipo bajo metodologías ágiles, incluyendo revisiones de código y comunicación constante.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experiencia"
      className="text-white text-center my-20 max-w-4xl mx-auto pt-10"
    >
      <h2 className="text-4xl mt-5">Experiencia</h2>
      <div className="my-5 mx-auto">
        <ol className="relative border-s border-gray-200 dark:border-gray-700 text-left max-w-[50rem] mx-auto">
          {experiences.map((exp, index) => (
            <li key={index} className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <div className="mx-5">
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
                    Desarrollo utilizando{" "}
                    <span className="underline">React</span>,{" "}
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
          ))}
        </ol>
      </div>
    </section>
  );
}
