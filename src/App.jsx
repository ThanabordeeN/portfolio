import React, { useState, useEffect } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const skillsData = [
  { subject: 'AI & ML', A: 90, fullMark: 100 },
  { subject: 'Data Engineering', A: 70, fullMark: 100 },
  { subject: 'Development', A: 90, fullMark: 100 },
  { subject: 'IoT & Embedded System', A: 90, fullMark: 100 },
  { subject: 'Soft Skills', A: 95, fullMark: 100 },
];
const useSmoothScroll = () => {
  const handleClick = (e) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({
        behavior: 'smooth',
        block: 'center', // Change this to center the element in the viewport
        inline: 'nearest'
      });
      // Update URL without page reload
      window.history.pushState(null, '', href);
    }
  };
  return handleClick;
};
const llmProjects = [
  {
    title: "AI Voice Assistant With interuptions capability",
    description: "AI agents have the capability to interact with humans through voice conversations, Which Can get Interupted by Human",
    technologies: ["LLMs", "Voice LLM"],
  },
  {
    title: "AI Chatbot with RAG and Function Calling",
    description: "Advanced AI chatbot utilizing Retrieval-Augmented Generation (RAG) and function calling capabilities.",
    technologies: ["LLMs", "RAG", "NLP"],
  },
  {
    title: "AI Crew for Complex Tasks",
    description: "AI crew system mimicking real-world human departments to perform complex tasks efficiently.",
    technologies: ["Multi-Agent AI", "NLU"],
  },
  {
    title: "Fine-tuning LLMs for Domain-Specific Tasks",
    description: "Implemented fine-tuning techniques on LLMs to enhance performance on specialized tasks.",
    technologies: ["Transfer Learning", "Fine-tuning"],
  },
  {
    title: "AI-Powered Customer Support",
    description: "Developed an AI-powered customer support system to provide personalized assistance.",
    technologies: ["LLMs", "NLU", "RAG"],
  },
  {
    title: "Dataset Creator LLM",
    description: "Built a LLM-powered tool to create datasets from Documents to fine-tune LLM",
    technologies: ["LLMs", "Dataset Creation"],
  },
  {
    title: "AI-Content Creator",
    description: "Developed a story-telling AI system to generate engaging stories based on user input,and generate image for each of story",
    technologies: ["LLMs", "Story Telling","SD"],
  },
  
];

const Section = ({ title, id, children }) => (
  <section id={id} className="mb-20">
    <h2 className="text-2xl font-bold mb-6 text-gray-800">{title}</h2>
    {children}
  </section>
);
const ProjectCard = ({ project }) => (
  <div className="bg-white shadow-md rounded-lg p-6 mb-6 transition-all duration-300 hover:shadow-lg">
    <h3 className="text-xl font-semibold mb-2 text-gray-800">{project.title}</h3>
    <p className="text-gray-600 mb-4">{project.description}</p>
    <div className="flex flex-wrap gap-2">
      {project.technologies.map((tech, index) => (
        <span key={index} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
          {tech}
        </span>
      ))}
    </div>
  </div>
);


const NavLink = ({ href, children }) => {
  const handleClick = useSmoothScroll();
  return (
    <a href={href} onClick={handleClick} className="hover:text-blue-600 transition-colors">
      {children}
    </a>
  );
};


const Portfolio = () => {
  const [scrolled, setScrolled] = useState(false);
  const handleHeroClick = useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className={`fixed w-full transition-all duration-300 z-10 ${scrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-5xl mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
      <a href="#Home" onClick={useSmoothScroll()} className="hover:text-blue-600 transition-colors">
        Thanabordee N.
      </a>
    </h1>          
    <nav>
            <ul className="flex space-x-6">
              <li><NavLink href="#about">About</NavLink></li>
              <li><NavLink href="#skills">Skills</NavLink></li>
              <li><NavLink href="#projects">Projects</NavLink></li>
              <li><NavLink href="#experience">Experience</NavLink></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="pt-24 pb-12 px-4">
        <div className="max-w-5xl mx-auto">
          <section className="text-center mb-20" id="Home">
            <h1 className="text-5xl font-bold mb-4">Thanabordee Namungkhun</h1>
            <p className="text-xl text-gray-600 mb-8">AI Engineer & LLM Specialist</p>
            <div className="flex justify-center space-x-4">
              <a href="https://github.com/ThanabordeeN" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Github size={24} />
              </a>
              <a href="mailto:thanabordee.noun@gmail.com" aria-label="Email" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Mail size={24} />
              </a>
              <a href="https://linkedin.com/in/thanabordee-nammungkhun" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
            <a href="#about" className="inline-block mt-12 animate-bounce" onClick={handleHeroClick}>
              <ChevronDown size={32} />
            </a>
          </section>

          <Section title="About Me" id="about">
            <p className="text-lg text-gray-600 leading-relaxed">
              As a visionary AI engineer and LLM specialist, I'm dedicated to pushing the boundaries of artificial intelligence and natural language processing. Currently in my fourth year of Electronic and Embedded Systems at Suranaree University of Technology, I combine academic knowledge with hands-on experience to develop cutting-edge AI solutions. My focus lies in harnessing the power of Large Language Models to drive innovation, improve efficiency, and solve complex problems across various industries.
            </p>
          </Section>

          <Section title="Skills" id="skills">
            <div className="bg-white shadow-md rounded-lg p-6">
              <ResponsiveContainer width="100%" height={400}>
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillsData}>
                  <PolarGrid stroke="#e5e7eb" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#4b5563' }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: '#4b5563' }} />
                  <Radar name="Skills" dataKey="A" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </Section>

          <Section title="LLM Projects" id="projects">
            <div className="grid md:grid-cols-2 gap-6">
              {llmProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </Section>

          <Section title="Experience" id="experience">
            <div className="space-y-6">
              <div className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Trainee</h3>
                <p className="text-gray-600 mb-2">DENSO (Thailand) Co., Ltd. | 10 months</p>
                <p className="text-gray-700">Contributed to digital transformation initiatives, analyzed IoT data, and participated in factory 4.0 strategy development.</p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">President of Administrative Organization</h3>
                <p className="text-gray-600 mb-2">Suranaree University of Technology</p>
                <p className="text-gray-700">Led student initiatives and represented the student body in negotiations with university management.</p>
              </div>
            </div>
          </Section>

          <Section title="Education">
          <div className="space-y-6">

            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Master's Degree in Electrical : AI and Edge-Computing</h3>
              <p className="text-gray-600 mb-2">Suranaree University of Technology | 2024 - Present</p>
            </div>
            
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Bachelor's Degree in Electronic and Embedded Systems Engineering</h3>
              <p className="text-gray-600 mb-2">Suranaree University of Technology | 2020 - 2024</p>
              <p className="text-gray-700">GPAX: 3.01</p>
            </div>
            </div>

          </Section>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p>&copy; 2024 Thanabordee Namungkhun. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;