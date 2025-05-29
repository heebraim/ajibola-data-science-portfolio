

import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiFileText, FiSun, FiMoon } from 'react-icons/fi';
import emailjs from 'emailjs-com';

// Initialize EmailJS (Replace with your credentials)
emailjs.init('YOUR_EMAILJS_USER_ID');


const colors = {
  light: {
    background: 'bg-[#fef9f4]',         // soft cream
    surface: 'bg-[#fff7ed]',            // light peach
    primary: 'bg-[#92400e]',            // burnt orange
    accent: 'text-[#15803d]',           // forest green
    text: 'text-[#1c1917]',             // deep brown
    // border: 'border-[#e7c9a9]'          // muted tan
      border: 'border-[#cba06c]' // darker tan
  },
  dark: {
    background: 'bg-[#1c1c1c]',         // almost black
    surface: 'bg-[#292524]',            // deep espresso
    primary: 'bg-[#ea580c]',            // vivid orange
    accent: 'text-[#22c55e]',           // emerald green
    text: 'text-[#f5f5f4]',             // off-white
    // border: 'border-[#3f3f46]'          // soft charcoal
       border: 'border-[#4b5563]' // slate-like dark border
  }
};


// Animation variants
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const App = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [testimonialPage, setTestimonialPage] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  // Update social links with your actual profiles
  const socialLinks = [
    { icon: <FiGithub />, url: 'https://github.com/Harjibola051' },
    { icon: <FiLinkedin />, url: 'https://www.linkedin.com/in/ajibola-hassan-18b933184' },
    { icon: <FiMail />, url: 'mailto:hassanajibola88@gmail.com' },
  ];
  
    const skills = [
    {
      category: 'Data Analysis & Visualization',
      items: ['Excel (Pivot Tables, VLOOKUP)', 'Python (Pandas, Matplotlib, Seaborn)', 'Power BI ', ' SQL',]
    },
    
    {
      category: 'Tools & Platforms',
      items: ['MySQL', 'Power BI Service', ' Jupyter Notebook ']
    },
    {
      category: 'Business Intelligence',
      items: [, 'KPI Analysis', 'Risk Assessment','Performance Monitoring']
    },
    {
      category: 'Soft Skills',
      items: ['Problem Solving', ' Time Management', 'Data Storytelling', 'Critical Thinking', 'Communication', 'Team Collaboration']
    }
    
  ];
  
  const projects = [
    {
      title: 'NETFLIX USER ANALYSIS.',
      // description: ' clone of jumia site project',
      tech: ['Conducted an in-depth analysis of Netflix user data across 2024–2025 using interactive dashboards', 'Analyzed watch time distribution, subscription types, country-level engagement, and genre preferences', ' Identified that 40% of users watch 500+ hours/year, recommending AI-driven personalization and genre-targeted marketing', 'Proposed strategies for upselling premium plans and increasing engagement from low-watch users.'],
      
    },
     {
    title: ' RETAIL/WAREHOUSE SALES ANALYSIS.',
    // description: 'Search products, add to cart, checkout and make payment using paystack test api key',
    tech: [' Designed and developed an interactive Power BI dashboard to visualize retail and warehouse sales, enabling datadriven decision-making.',
       ' Integrated and analyzed sales data from multiple suppliers and item categories, providing insights into sales trends,supplier performance, and inventory management. ',
       ' Enhanced business intelligence capabilities by incorporating dynamic filters, KPI indicators, and comparative analytics for improved operational efficiency.', 
       'Helped stakeholders reduce overstock by 25% through better visibility and trend analysis', 
       ],
   
  },
   
    {
      title: 'ENERGY CONSUMPTION IN SMART HOMES',
      // description: 'Listen to music, search artists songs based on your mood and preference.',
      tech: ['  Developed predictive models using machine learning (Random Forest, XGBoost, Linear Regression) that explained over 50% of variance (R² = 0.53) in energy consumption patterns. ',
         'Analyzed time-series data to assess the impact of weather conditions on energy use, integrating behavioral and environmental factors for improved forecasting.',
          ' Delivered actionable insights through visualizations and IoT-enabled analytics, recommending energy efficiency strategies for smart homes and policy makers ',
           'Explained over 50% of energy variance (R² = 0.53); insights supported energy-saving decisions.'],
      
    },
    
    {
      title: 'PREDICTIVE ANALYSIS ON RAINY AND SUNNY DAY IN ILORIN. ',
      // description: 'Lets users select from weird dillema categories, save and share dilemmas on socials.',
      tech: [' Developed a predictive model to forecast sunny and rainy days in Ilorin with 85% accuracy, enhancing local weather prediction and agricultural planning.', 
        ' Utilized meteorological software and Python for data analysis, ensuring robust methodology and reliable results', 
        ' Compiled detailed reports on methodologies, findings, and recommendations for future weather prediction improvements.', 
        ' Supported farmers and planners by improving crop scheduling through localized weather insights.' ],
     
    }
  ];

  const experience = [
    {
      title: 'DATA SCIENCE INTERN - CAREER AMEND - (Remote) – U. K APRIL 2025 – PRESENT.',
      // description: ' clone of jumia site project',
      tech: ['Engaging in a structured internship program focusing on Python fundamentals, including syntax, data types,control structures, and basic algorithms and SQL. ', 
        ' Participated in live online classes and interactive sessions to reinforce learning.', 
        ' Collaborated with peers on beginner-level coding exercises and projects to apply theoretical knowledge practically. ', ],
      
    },
     {
    title: 'DATA ANALYST INTERN - OASIS INFOBYTE - (Remote) – U. K MARCH 2025',
    // description: 'Search products, add to cart, checkout and make payment using paystack test api key',
    tech: [' Developed a Customer Segmentation Model using clustering techniques (e.g., K-means) to enhance targeted marketing strategies.',
       ' Employed Linear Regression to predict house prices based on pertinent features thereby improving insight of real estate market trends. Improved model accuracy by 15% through feature selection and hyperparameter tunning. ',
       ' Collaborated with a team of interns and mentors, developing teamwork and problem-solving skills in data analytics projects.', 
       ],
   
  },
   
    {
      title: ' DATA SCIENCE INTERN - SHULATECH SOLUTIONS - (Remote) FEBRUARY 2025 ',
      // description: 'Listen to music, search artists songs based on your mood and preference.',
      tech: ['  Created interactive Power BI dashboards to visualize business performance and key metrics. ',
         'Presented findings and provided data-driven recommendations to improve business strategies.',
          ' Collaborated with a team of interns and mentors, enhancing teamwork and problem-solving skills in data analytics projects',
           'Reduced manual report generation time by 50% via automated Power BI dashboards'],
      
    },
    
   
  ];

  const testimonials = [
    
    { text: " University of Essex Colchester, United Kingdom ", author: "M.Sc. Data Science October 2023 — October 2024" },
    
    { text: "University Of Ilorin Ilorin, Kwara. Nigeria.", author: " B.Sc. Physics. September 2016 – August 2021 " },
    { text: " Preparing Data for Analysis with Microsoft Excel ", author: " COURSERA certificate " },
    { text: " Creative Designing in Power BI  ", author: "  COURSERA certificate  " },
    { text: " Designing Engaging Dashboards for Health Care Analysis  ", author: "  COURSERA certificate  " },
    { text: " What Is Data Science ", author: "  COURSERA certificate  " }
  ];
  const handleNavClick = () => setNavOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('Sending...');
    
    try {
      await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message
      });
      
      setFormStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus(''), 3000);
    } catch (error) {
      setFormStatus('Error sending message. Please try again.');
      console.error('Email send error:', error);
    }
  };

  const MobileNavLink = ({ to, children }) => (
    <ScrollLink 
      to={to} 
      smooth={true} 
      className="block py-2" 
      onClick={handleNavClick}
    >
      {children}
    </ScrollLink>
  );

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className={`${darkMode ? colors.dark.background : colors.light.background} ${
        darkMode ? colors.dark.text : colors.light.text
      }`}>
        {/* Navigation */}
        <nav className={`fixed w-full z-50 ${darkMode ? colors.dark.surface : colors.light.surface} shadow-sm`}>
          <div className="flex items-center justify-between max-w-6xl px-4 py-4 mx-auto">
            <span className="font-mono text-2xl font-bold"> Hassan Ismail</span>
            
            <div className="items-center hidden space-x-8 md:flex">
              <ScrollLink to="home" smooth={true} className="cursor-pointer">Home</ScrollLink>
              <ScrollLink to="about" smooth={true} className="cursor-pointer">About</ScrollLink>
              <ScrollLink to="projects" smooth={true} className="cursor-pointer">Projects</ScrollLink>
              <ScrollLink to="contact" smooth={true} className="cursor-pointer">Contact</ScrollLink>
              <ScrollLink to="skills" smooth={true} className="cursor-pointer">Skills</ScrollLink>
              <ScrollLink to="experience" smooth={true} className="cursor-pointer">Experience</ScrollLink>
              <ScrollLink to="testimonials" smooth={true} className="cursor-pointer">Certifications</ScrollLink>
              <button 
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg hover:bg-opacity-20 hover:bg-gray-500"
              >
                {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
              </button>
            </div>

            <div className="flex items-center space-x-4 md:hidden">
              <button 
                onClick={() => setDarkMode(!darkMode)}
                className="p-2"
              >
                {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
              </button>
              <button 
                className="p-2"
                onClick={() => setNavOpen(!navOpen)}
              >
                {navOpen ? '✕' : '☰'}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        {navOpen && (
          <div className={`fixed inset-0 z-40 pt-16 px-4 space-y-4 ${
            darkMode ? colors.dark.surface : colors.light.surface
          }`}>
            <MobileNavLink to="home">Home</MobileNavLink>
            <MobileNavLink to="about">About</MobileNavLink>
            <MobileNavLink to="projects">Projects</MobileNavLink>
            <MobileNavLink to="contact">Contact</MobileNavLink>
            <MobileNavLink to="skills">Skills</MobileNavLink>
            <MobileNavLink to="experience">Experience</MobileNavLink>
            <MobileNavLink to="testimonials">Certifications</MobileNavLink>
          </div>
        )}

        {/* Hero Section */}
        <section id="home" className="px-4 pt-32 pb-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-6xl mx-auto text-center"
          >
            <motion.h1 variants={fadeInUp} className="mb-6 font-mono text-3xl font-bold">
            Hello, I'm Ajibola Ismail Hassan
            </motion.h1>
            <motion.p variants={fadeInUp} className="mb-8 text-xl opacity-80">
            "A data analyst and scientist dedicated to transforming raw data into meaningful insights using Python, SQL, and data visualization. . Focused on clarity, accuracy, and impactful storytelling through data."
            </motion.p>
            <motion.div variants={fadeInUp} className="flex justify-center mb-12 space-x-4">
              {/* <button className={`px-6 py-3 text-white ${darkMode ? colors.dark.primary : colors.light.primary} rounded-lg hover:opacity-90`}>
                LET'S TALK
              </button> */}
              <a 
                href="/AJIBOLA.pdf"  download target="_blank" rel="noopener noreferrer" 
              
                className={`flex items-center px-6 py-3 border-2 ${
                  darkMode ? colors.dark.border : colors.light.border
                } rounded-lg`}
              >
                <FiFileText className="mr-2" /> DOWNLOAD CV
              </a>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex justify-center space-x-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-blue-500"
                  whileHover={{ scale: 1.2 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="mb-12 font-mono text-3xl font-bold text-center"
              
            >
              About Me
            </motion.h2>
            <motion.div 
              className="flex flex-col items-center gap-8 md:flex-row"
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
            >
              <motion.div 
                variants={fadeInUp}
                className="w-full md:w-1/2"
              >
                <div className={`h-64 rounded-lg flex justify-center ${darkMode ? 'bg-[#374151]' : 'bg-gray-200'}`}> <img src="myimg.jpg" alt="" className='flex justify-center w-64 h-64 rounded-full' />   </div>
              </motion.div>
              <motion.div 
                variants={staggerContainer}
                className="w-full space-y-6 md:w-1/2"
              >
                <motion.p variants={fadeInUp} className="text-justify opacity-80">
                I am a Data Analyst with a Master’s degree in Data Science from the University of Essex, complemented by hands-on experience working on real-world projects. 
                Proficient in tools such as Python, SQL, and Power BI, I specialize in transforming complex datasets 
                into clear, actionable insights.With a detail-oriented mindset and a results-driven approach, 
                I focus on delivering impactful analysis that supports smarter business decisions. My experience 
                spans developing interactive dashboards, performing rigorous statistical analyses, and building 
                predictive models to forecast trends and optimize performance.I’m passionate about solving problems 
                through data, continuously learning, and applying analytical thinking to drive measurable outcomes.
                </motion.p>
                <motion.button 
                  variants={fadeInUp}
                  className={`px-6 py-3 text-white ${darkMode ? colors.dark.primary : colors.light.primary} rounded-lg hover:opacity-90`}
                >
                  CONTACT ME
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="px-4 py-16 ">
          <div className="max-w-6xl mx-auto ">
            <h2 className="mb-12 font-mono text-3xl font-bold text-center">Skills & Expertise</h2>
            <motion.div 
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
            >
              {skills.map((skill, index) => (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  className={`p-6 rounded-xl ${darkMode ? colors.dark.surface : colors.light.surface}`}
                >
                  <h3 className={`mb-4 text-xl font-bold ${darkMode ? colors.dark.accent : colors.light.accent}`}>
                    {skill.category}
                  </h3>
                  <ul className="space-y-2">
                    {skill.items.map((item, i) => (
                      <li key={i} className="flex items-center">
                        <span className={`w-2 h-2 mr-2 ${darkMode ? 'bg-[#fbbf24]' : 'bg-[#d97706]'} rounded-full`}></span>
                        <span className={`px-3 py-1 rounded-md ${darkMode ? 'bg-[#374151]' : 'bg-gray-200'}`}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="mb-12 font-mono text-3xl font-bold text-center">Projects</h2>
            <motion.div 
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
            >
              {projects.map((project, index) => (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  className={`p-6 rounded-xl ${darkMode ? colors.dark.surface : colors.light.surface}`}
                >
                  <h3 className="mb-4 text-xl font-bold">{project.title}</h3>
                  <p className="mb-4 opacity-80">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className={`px-3 py-1 text-sm rounded-full ${
                        darkMode ? 'bg-[#374151]' : 'bg-gray-200'
                      }`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  {/* <div className="flex space-x-4">
                    <a   href={project.links.preview}  target="_blank"  rel="noopener noreferrer" className="text-blue-500">Live Demo</a>
                    <a   href={project.links.code} target="_blank" rel="noopener noreferrer" className="text-blue-500">View Code</a>
                  </div> */}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Projects Section 2 */}
        <section id="experience" className="px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="mb-12 font-mono text-3xl font-bold text-center">Experience</h2>
            <motion.div 
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
            >
              {experience.map((experience, index) => (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  className={`p-6 rounded-xl ${darkMode ? colors.dark.surface : colors.light.surface}`}
                >
                  <h3 className="mb-4 text-xl font-bold">{experience.title}</h3>
                  <p className="mb-4 opacity-80">{experience.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {experience.tech.map((tech, i) => (
                      <span key={i} className={`px-3 py-1 text-sm rounded-full ${
                        darkMode ? 'bg-[#374151]' : 'bg-gray-200'
                      }`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  {/* <div className="flex space-x-4">
                    <a   href={project.links.preview}  target="_blank"  rel="noopener noreferrer" className="text-blue-500">Live Demo</a>
                    <a   href={project.links.code} target="_blank" rel="noopener noreferrer" className="text-blue-500">View Code</a>
                  </div> */}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>


        {/* Testimonials Section */}
        <section id='testimonials' className="px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="mb-12 font-mono text-3xl font-bold text-center">Certification</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {testimonials.slice(testimonialPage * 2, (testimonialPage + 1) * 2).map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  className={`p-6 rounded-xl ${darkMode ? colors.dark.surface : colors.light.surface}`}
                >
                  <p className="mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-bold">- {testimonial.author}</p>
                </motion.div>
              ))}
            </div>
            <div className="flex justify-center mt-8 space-x-2">
              {[...Array(Math.ceil(testimonials.length / 2))].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setTestimonialPage(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === testimonialPage 
                      ? (darkMode ? 'bg-[#fbbf24]' : 'bg-[#d97706]')
                      : (darkMode ? 'bg-[#374151]' : 'bg-gray-300')
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="mb-12 font-mono text-3xl font-bold text-center">Contact</h2>
            <motion.div 
              className="grid gap-8 md:grid-cols-2"
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className={`p-6 rounded-xl ${darkMode ? colors.dark.surface : colors.light.surface}`}>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input 
                    type="text" 
                    placeholder="Your Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className={`w-full p-3 rounded-lg ${darkMode ? 'bg-[#2c2c2c] border-[#374151]' : 'bg-white border-[#e5e7eb]'} border`}
                    required
                  />
                  <input 
                    type="email" 
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className={`w-full p-3 rounded-lg ${darkMode ? 'bg-[#2c2c2c] border-[#374151]' : 'bg-white border-[#e5e7eb]'} border`}
                    required
                  />
                  <textarea 
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className={`w-full h-32 p-3 rounded-lg ${darkMode ? 'bg-[#2c2c2c] border-[#374151]' : 'bg-white border-[#e5e7eb]'} border`}
                    required
                  />
                  <button 
                    type="submit"
                    className={`w-full py-3 rounded-lg ${darkMode ? colors.dark.primary : colors.light.primary} text-white`}
                  >
                    {formStatus || 'SEND MESSAGE'}
                  </button>
                </form>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                className={`p-6 rounded-xl ${darkMode ? colors.dark.surface : colors.light.surface}`}
              >
                <h3 className={`mb-6 text-xl font-bold font-mono ${darkMode ? colors.dark.accent : colors.light.accent}`}>
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center hover:opacity-80"
                    >
                      {link.icon}
                      <span className="ml-3">{link.url.replace('mailto:', '')}</span>
                    </a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className={`px-4 py-8 ${darkMode ? colors.dark.surface : colors.light.surface}`}>
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex justify-center mb-6 space-x-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-blue-500"
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              © 2025 Ajibola. All Rights Reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;