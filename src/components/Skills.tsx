import React, { useEffect, useRef } from 'react';

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.1;
        const elements = sectionRef.current.querySelectorAll('.parallax-element');
        elements.forEach((element, index) => {
          (element as HTMLElement).style.transform = `translateY(${rate * (index + 1) * 0.2}px)`;
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Vue.js', level: 78 },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 88 },
        { name: 'Python', level: 82 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'GraphQL', level: 75 },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 95 },
        { name: 'Docker', level: 78 },
        { name: 'AWS', level: 72 },
        { name: 'Figma', level: 85 },
        { name: 'Jest', level: 80 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="parallax-element absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600 rounded-full blur-3xl opacity-20"></div>
        <div className="parallax-element absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-600 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of the technologies and tools I work with daily
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-gray-800/70 transition-all duration-300 transform hover:scale-105"
            >
              <h3 className="text-2xl font-bold mb-8 text-center text-white">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-200">{skill.name}</span>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-teal-400 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-300 mb-8">
            Always learning and exploring new technologies to stay at the forefront of development
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Machine Learning', 'Web3', 'Mobile Development', 'DevOps'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full text-white font-medium hover:shadow-lg transition-shadow duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;