import React, { useEffect, useRef } from 'react';
import { Code, Palette, Zap } from 'lucide-react';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.2;
        const elements = sectionRef.current.querySelectorAll('.parallax-element');
        elements.forEach((element, index) => {
          (element as HTMLElement).style.transform = `translateY(${rate * (index + 1) * 0.1}px)`;
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="parallax-element absolute top-20 right-20 w-32 h-32 bg-blue-100 rounded-full blur-xl opacity-50"></div>
        <div className="parallax-element absolute bottom-20 left-20 w-48 h-48 bg-teal-100 rounded-full blur-xl opacity-50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Passionate developer with 5+ years of experience creating innovative web solutions
            that combine beautiful design with robust functionality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I specialize in creating digital experiences that not only look stunning but also 
              provide exceptional user experiences. My journey in web development started with 
              a curiosity about how websites work, and it has evolved into a passion for 
              crafting pixel-perfect interfaces and scalable applications.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              When I'm not coding, you can find me exploring new design trends, contributing to 
              open-source projects, or hiking in the mountains. I believe that diverse experiences 
              fuel creativity and make me a better developer.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <Code className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Clean Code</h3>
                <p className="text-gray-600 text-sm">Writing maintainable, scalable code</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <Palette className="w-8 h-8 text-teal-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">UI/UX Design</h3>
                <p className="text-gray-600 text-sm">Creating beautiful user experiences</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <Zap className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Performance</h3>
                <p className="text-gray-600 text-sm">Optimizing for speed and efficiency</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-gradient-to-br from-blue-600 to-teal-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="font-semibold mr-3">Location:</span>
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold mr-3">Experience:</span>
                  <span>5+ Years</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold mr-3">Projects:</span>
                  <span>50+ Completed</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold mr-3">Focus:</span>
                  <span>React, Node.js, TypeScript</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;