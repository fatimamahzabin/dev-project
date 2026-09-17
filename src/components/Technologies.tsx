import React, { useState } from 'react';

interface TechItem {
  id: string;
  name: string;
  category: string;
  badge: string;
  badgeColor: string;
  description: string;
  type: string;
  level: string;
  rating: number;
  iconUrl: string; // Ekhane direct image link ba path dite parbe
}

export default function Technologies() {
  const [selectedStack, setSelectedStack] = useState<TechItem[]>([]);

  const technologies: TechItem[] = [
    {
      id: 'react',
      name: 'React',
      category: 'Frontend',
      badge: 'Popular',
      badgeColor: 'text-cyan-500 bg-cyan-50',
      description: 'A declarative, component-based JavaScript library for building modern user interfaces.',
      type: 'Frontend',
      level: 'Beginner-Friendly',
      rating: 4.9,
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    },
    {
      id: 'vue',
      name: 'Vue.js',
      category: 'Frontend',
      badge: 'Versatile',
      badgeColor: 'text-emerald-500 bg-emerald-50',
      description: 'An approachable, performant, and versatile framework for building web user interfaces.',
      type: 'Frontend',
      level: 'Beginner-Friendly',
      rating: 4.8,
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    },
    {
      id: 'svelte',
      name: 'Svelte',
      category: 'Frontend',
      badge: 'Fast',
      badgeColor: 'text-orange-500 bg-orange-50',
      description: 'Cybernetically enhanced web apps with compile-time reactivity and zero virtual DOM overhead.',
      type: 'Frontend',
      level: 'Intermediate',
      rating: 4.8,
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg',
    },
    {
      id: 'nextjs',
      name: 'Next.js',
      category: 'Frontend',
      badge: 'Popular',
      badgeColor: 'text-gray-800 bg-gray-100',
      description: 'The React framework for full-stack web applications with hybrid static & server rendering.',
      type: 'Frontend',
      level: 'Intermediate',
      rating: 4.9,
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    },
    {
      id: 'nodejs',
      name: 'Node.js',
      category: 'Backend',
      badge: 'Standard',
      badgeColor: 'text-emerald-600 bg-emerald-50',
      description: 'An asynchronous event-driven JavaScript runtime built on Chrome V8 engine.',
      type: 'Backend',
      level: 'Intermediate',
      rating: 4.8,
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    },
    {
      id: 'postgresql',
      name: 'PostgreSQL',
      category: 'Database',
      badge: 'Top SQL',
      badgeColor: 'text-blue-500 bg-blue-50',
      description: 'A powerful, open-source object-relational database system with proven reliability.',
      type: 'Database',
      level: 'Intermediate',
      rating: 4.9,
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    },
    {
      id: 'redis',
      name: 'Redis',
      category: 'Database',
      badge: 'Cache',
      badgeColor: 'text-red-500 bg-red-50',
      description: 'In-memory data structure store used as a high-speed database, cache, and message broker.',
      type: 'Database',
      level: 'Intermediate',
      rating: 4.8,
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
    },
    {
      id: 'javascript',
      name: 'JavaScript',
      category: 'Language',
      badge: 'Ubiquitous',
      badgeColor: 'text-amber-600 bg-amber-50',
      description: 'The versatile, ubiquitous scripting language powering dynamic behavior across the web.',
      type: 'Language',
      level: 'Beginner-Friendly',
      rating: 4.9,
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    },
    {
      id: 'typescript',
      name: 'TypeScript',
      category: 'Language',
      badge: 'Essential',
      badgeColor: 'text-blue-600 bg-blue-50',
      description: 'A strongly typed programming language that builds on JavaScript for robust tooling.',
      type: 'Language',
      level: 'Intermediate',
      rating: 4.9,
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    },
    {
      id: 'java',
      name: 'Java',
      category: 'Language',
      badge: 'Robust',
      badgeColor: 'text-red-500 bg-red-50',
      description: 'A secure, object-oriented programming language designed for portability and scale.',
      type: 'Language',
      level: 'Intermediate',
      rating: 4.6,
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    },
    {
      id: 'tailwind',
      name: 'Tailwind CSS',
      category: 'Styling',
      badge: 'Modern',
      badgeColor: 'text-cyan-600 bg-cyan-50',
      description: 'A utility-first CSS framework packed with classes that can be composed to build custom UI.',
      type: 'Styling',
      level: 'Beginner-Friendly',
      rating: 4.9,
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    },
    {
      id: 'docker',
      name: 'Docker',
      category: 'DevOps',
      badge: 'Containers',
      badgeColor: 'text-blue-500 bg-blue-50',
      description: 'A platform designed to build, share, and run containerized applications reliably.',
      type: 'DevOps',
      level: 'Intermediate',
      rating: 4.9,
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    },
  ];

  const addToStack = (tech: TechItem) => {
    if (!selectedStack.some((item) => item.id === tech.id)) {
      setSelectedStack([...selectedStack, tech]);
    }
  };

  const removeFromStack = (id: string) => {
    setSelectedStack(selectedStack.filter((item) => item.id !== id));
  };

  return (
    <section className="max-w-7xl mx-auto px-8 pb-16">
      <div className="mb-8">
        <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">
          Explore the <span className="text-pink-600">Technologies</span>
        </h2>
        <p className="text-gray-500 text-sm mt-1">Pick one technology per category to build your ideal stack.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        {/* Left 3 columns: Technology Cards Grid */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
          {technologies.map((tech) => (
            <div
              key={tech.id}
              className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-100 p-1.5">
                    <img src={tech.iconUrl} alt={tech.name} className="w-full h-full object-contain" />
                  </div>
                  <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${tech.badgeColor}`}>
                    {tech.badge}
                  </span>
                </div>
                <h3 className="text-base font-bold text-gray-900">{tech.name}</h3>
                <p className="text-gray-500 text-xs mt-1.5 leading-relaxed min-h-[32px]">{tech.description}</p>
              </div>

              <div className="mt-5 pt-3 border-t border-gray-100">
                <div className="flex items-center justify-between text-[11px] text-gray-500 mb-3">
                  <span className="bg-gray-50 px-2 py-0.5 rounded-md text-gray-600 font-medium">{tech.type}</span>
                  <span>{tech.level}</span>
                  <span className="flex items-center text-amber-500 font-medium">
                    ★ {tech.rating}
                  </span>
                </div>
                <button
                  onClick={() => addToStack(tech)}
                  className="w-full bg-gray-900 hover:bg-black active:scale-[0.98] text-white text-xs font-semibold py-2.5 rounded-xl transition-all shadow-sm cursor-pointer"
                >
                  Add to Stack
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right 1 column: Your Stack Sidebar */}
        <div className="lg:col-span-1 sticky top-8">
          <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
            <h3 className="text-base font-bold text-gray-900 mb-0.5">Your Stack</h3>
            <p className="text-xs text-gray-400 mb-4">
              {selectedStack.length === 0 ? 'No technologies selected yet.' : `${selectedStack.length} technology selected`}
            </p>

            {selectedStack.length === 0 ? (
              <div className="border border-dashed border-gray-200 rounded-xl p-6 text-center">
                <p className="text-xs text-gray-400">Your stack is empty</p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="space-y-2.5 max-h-[360px] overflow-y-auto pr-1">
                  {selectedStack.map((item) => (
                    <div key={item.id} className="flex items-center justify-between bg-gray-50 px-3 py-2.5 rounded-xl border border-gray-100">
                      <div className="flex items-center space-x-2.5">
                        <div className="w-6 h-6 flex items-center justify-center bg-white rounded-md shadow-xs p-1">
                          <img src={item.iconUrl} alt={item.name} className="w-full h-full object-contain" />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-gray-900 leading-tight">{item.name}</h4>
                          <span className="text-[10px] text-gray-500">{item.category}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromStack(item.id)}
                        className="text-gray-400 hover:text-red-500 text-xs font-bold px-1.5 py-0.5 rounded transition-colors cursor-pointer"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedStack([])}
                  className="w-full border border-pink-200 hover:bg-pink-50 text-pink-600 text-xs font-semibold py-2.5 rounded-xl transition-all cursor-pointer"
                >
                  Remove All
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}