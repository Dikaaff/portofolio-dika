import React, { useEffect } from 'react';
import { Github, Linkedin, Mail, FileCode2, Database, Server } from 'lucide-react';

const Portfolio = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    });

    const sections = document.querySelectorAll('.hidden-section');
    sections.forEach((el) => observer.observe(el));

    return () => {
      sections.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <section className="h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-blue-700 to-black">
        <h1 className="text-5xl font-extrabold mb-4 animate-fade-in">Hi, I'm Dika Afif Indrawan</h1>
        <p className="text-xl text-gray-300 mb-6">UI/UX Designer | Frontend Developer</p>
        <div className="w-40 h-40 border-4 border-white rounded-full overflow-hidden shadow-lg">
          <img
            src="src/assets/dika.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <section className="hidden-section py-24 px-6 text-center bg-gray-900">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
        I am a D3 Informatics Engineering student at Amikom University Yogyakarta with a strong interest in UI/UX Design and web development. I have experience in designing applications and websites that focus on solving user problems, and am proficient in using tools such as Figma. In addition, I have basic knowledge in front-end (HTML, CSS, Boostrap, JavaScript) and back-end (PHP, MySQL) development which allows me to understand the product development process thoroughly. I am interested in continuing to develop my skills in UI/UX Design and contributing to a dynamic and innovative team.
        </p>
      </section>

      <section className="hidden-section py-24 px-6 bg-black">
        <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
          {[
            { name: 'HTML', icon: <FileCode2 size={48} className="text-red-500" /> },
            { name: 'CSS', icon: <FileCode2 size={48} className="text-blue-500" /> },
            { name: 'JavaScript', icon: <FileCode2 size={48} className="text-yellow-500" /> },
            { name: 'React', icon: <FileCode2 size={48} className="text-cyan-500" /> },
            { name: 'CodeIgniter', icon: <Server size={48} className="text-orange-500" /> },
            { name: 'Laravel', icon: <Database size={48} className="text-purple-500" /> },
          ].map((skill, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center transform hover:scale-105 transition">
              {skill.icon}
              <p className="mt-2 font-medium text-gray-300">{skill.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="hidden-section py-24 px-6 bg-gray-900">
  <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
    {[
      { title: "Web Lucturer Dashboard ", image: "/src/assets/dashboard.png", desc: "Creating a lecturer login & dashboard website using the bootstrap framework" },
      { title: "Web Library", image: "/src/assets/library.png", desc: "Create a library website with native javascript, which is assigned from the Dicoding final project." },
      { title: "Web Score Recapitulation", image: "/src/assets/rekap-nilai.png", desc: "create a Grade Recapitulation website where I use the Codeigniter 3 framework." },
      { title: "Drive On UI/UX", image: "/src/assets/drive-on.png", desc: "UI/UX Drive On is created by 1 team of 4 people to collaborate to create this Apps Design, where Drive On is an application for renting vehicles." },
      { title: "Dashboard Statistic UI/UX", image: "/src/assets/statistic.png", desc: "UI/UX Dashboard Statistic was created by myself to show a dashboard that is easy and comfortable for users to use." },
      { title: "Fintech UI/UX", image: "/src/assets/fintech.png", desc: "UI/UX Fintech is created by 1 team of 3 people to collaborate to create this Apps Design, where Fintech is an E-wallet application that uses sophisticated and efficient features for all users to use." },
    ].map((project, index) => (
      <div
        key={index}
        className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition"
      >
        <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
          <p className="text-gray-400 text-sm">{project.desc}</p>
        </div>
      </div>
    ))}
  </div>
</section>


      {/* Contact Section */}
      <section className="hidden-section py-24 px-6 bg-black text-center">
        <h2 className="text-4xl font-bold mb-12">Let's Connect</h2>
        <div className="flex justify-center space-x-8">
          <a href="dikaindrawan35@gmail.com" className="hover:text-blue-400 transition-transform hover:scale-110">
            <Mail size={40} />
          </a>
          <a href="https://www.linkedin.com/in/dika-afif-indrawan-139938289/" className="hover:text-blue-400 transition-transform hover:scale-110">
            <Linkedin size={40} />
          </a>
          <a href="https://github.com/Dikaaff" className="hover:text-blue-400 transition-transform hover:scale-110">
            <Github size={40} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
