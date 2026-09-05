const stackGroups = [
  {
    label: "Core Web",
    items: [
      ["Node.js", "/contact/nodedotjs.svg"],
      ["JavaScript", "/contact/typescript.svg"],
      ["HTML5", "/contact/nextdotjs.svg"],
      ["CSS3", "/contact/tailwindcss.svg"],
      ["Bootstrap", "/contact/redux.svg"],
      ["Vite", "/contact/vercel.svg"],
    ],
  },
  {
    label: "Data Base",
    items: [
      ["MySQL", "/contact/mysql.svg"],
      ["PostgreSQL", "/contact/postgresql.svg"],
      ["MongoDB", "/contact/mongodb.svg"],
      ["phpMyAdmin", "/contact/mysql.svg"],
    ],
  },
  {
    label: "Frontend",
    items: [
      ["React", "/contact/react.svg"],
      ["TypeScript", "/contact/typescript.svg"],
      ["Tailwind CSS", "/contact/tailwindcss.svg"],
    ],
  },
  {
    label: "Deployment",
    items: [
      ["Vercel", "/contact/vercel.svg"],
      ["Netlify", "/contact/vercel.svg"],
      ["Render", "/contact/vercel.svg"],
      ["Supabase", "/contact/postgresql.svg"],
      ["Hostinger", "/contact/vercel.svg"],
      ["GitHub", "/contact/github.svg"],
    ],
  },
  {
    label: "AI Tools",
    items: [
      ["ChatGPT", "/contact/prisma.svg"],
      ["Gemini", "/contact/google.svg"],
      ["Claude", "/contact/graphql.svg"],
    ],
  },
];

function ToolGroup({ label, items }: { label: string; items: string[][] }) {
  return (
    <div className="relative overflow-visible rounded-[1.75rem] border border-white/10 bg-[#07172d] shadow-[0_18px_40px_rgba(7,23,45,0.18)]">
      <div className="absolute -top-4 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#07172d] px-5 py-2 text-sm font-bold text-white shadow-lg sm:text-base">{label}</div>
      <div className="grid grid-cols-2 divide-x divide-y divide-white/10 pt-4 sm:grid-cols-3">
        {items.map(([name, icon]) => (
          <div key={name} className="flex min-h-24 flex-col items-center justify-center gap-2 px-2 py-3 text-center text-xs font-semibold text-white sm:min-h-28 sm:text-sm">
            <img src={icon} alt="" className="h-8 w-8 object-contain" />
            <span>{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function TechStackSection() {
  return (
    <section className="relative overflow-hidden bg-[#edf0ef] px-6 py-20 sm:px-10 lg:px-16">
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(7,23,45,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(7,23,45,0.12)_1px,transparent_1px)] [background-size:42px_42px]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto_1fr]">
          <div className="pointer-events-none absolute left-[21%] right-[21%] top-1/2 hidden border-t-2 border-dashed border-[#07172d]/20 lg:block" />
          <div className="space-y-10">
            <ToolGroup {...stackGroups[0]} />
            <ToolGroup {...stackGroups[1]} />
          </div>
          <div className="relative z-10 mx-auto flex h-40 w-40 items-center justify-center rounded-[2rem] border border-[#07172d]/15 bg-[#dce4ec] text-center shadow-[0_20px_50px_rgba(7,23,45,0.12)] sm:h-48 sm:w-48">
            <div>
              <div className="mb-2 text-4xl font-black text-[#5b6cff]">▰</div>
              <div className="text-2xl font-black text-[#07172d]">Stack</div>
            </div>
          </div>
          <div className="space-y-10">
            <ToolGroup {...stackGroups[2]} />
            <ToolGroup {...stackGroups[3]} />
            <ToolGroup {...stackGroups[4]} />
          </div>
        </div>
      </div>
    </section>
  );
}
