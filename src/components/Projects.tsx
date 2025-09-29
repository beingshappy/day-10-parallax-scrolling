import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.15;
        const elements = sectionRef.current.querySelectorAll('.parallax-element');
        elements.forEach((element, index) => {
          (element as HTMLElement).style.transform = `translateY(${rate * (index + 1) * 0.1}px)`;
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with modern design and advanced features.',
      longDescription: 'A comprehensive e-commerce platform built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing with Stripe, inventory management, and an admin dashboard. The platform handles thousands of products and users with excellent performance.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates and team features.',
      longDescription: 'A sophisticated project management application with real-time collaboration features. Built with React and Socket.io for live updates, featuring kanban boards, time tracking, file uploads, and team management. Deployed on AWS with auto-scaling capabilities.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Socket.io', 'MongoDB', 'Express', 'AWS'],
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      id: 3,
      title: 'Weather Analytics Dashboard',
      description: 'Real-time weather data visualization with interactive charts and forecasts.',
      longDescription: 'An advanced weather analytics platform that aggregates data from multiple APIs to provide comprehensive weather insights. Features interactive charts, historical data analysis, and machine learning predictions for weather patterns.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Vue.js', 'D3.js', 'Python', 'FastAPI', 'Docker'],
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      id: 4,
      title: 'Social Media Platform',
      description: 'Modern social network with real-time messaging and content sharing.',
      longDescription: 'A full-featured social media platform with user profiles, post creation, real-time messaging, friend connections, and content moderation. Built with modern technologies and optimized for performance and scalability.',
      image: 'https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'GraphQL', 'Redis', 'PostgreSQL', 'Vercel'],
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      id: 5,
      title: 'Cryptocurrency Tracker',
      description: 'Real-time crypto portfolio management with advanced analytics.',
      longDescription: 'A comprehensive cryptocurrency tracking application with portfolio management, price alerts, market analysis, and trading integration. Features real-time price updates, technical indicators, and personalized insights.',
      image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'TypeScript', 'Chart.js', 'WebSockets', 'Firebase'],
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      id: 6,
      title: 'Learning Management System',
      description: 'Educational platform with video streaming and progress tracking.',
      longDescription: 'A complete learning management system for online education with video streaming, quiz creation, progress tracking, and certification. Supports multiple user roles and integrates with payment systems for course purchases.',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Video.js', 'Stripe'],
      githubUrl: '#',
      liveUrl: '#',
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="parallax-element absolute top-20 right-20 w-40 h-40 bg-blue-100 rounded-full blur-2xl opacity-60"></div>
        <div className="parallax-element absolute bottom-20 left-20 w-60 h-60 bg-teal-100 rounded-full blur-2xl opacity-60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work, demonstrating expertise across various technologies and domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <button className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200">
                    View Details
                  </button>
                  <div className="flex space-x-2">
                    <a
                      href={project.githubUrl}
                      className="p-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.liveUrl}
                      className="p-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">{selectedProject.title}</h3>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">{selectedProject.longDescription}</p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                <a
                  href={selectedProject.githubUrl}
                  className="flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200"
                >
                  <Github size={20} className="mr-2" />
                  View Code
                </a>
                <a
                  href={selectedProject.liveUrl}
                  className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  <ExternalLink size={20} className="mr-2" />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;