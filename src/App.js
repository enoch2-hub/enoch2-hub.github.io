// src/App.js
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { Link } from 'react-router-dom';
import Project from './components/Project';
import Navbar from './components/Navbar';
import Backdrop from './components/UIElements/Backdrop';

import { FiGitPullRequest } from "react-icons/fi";
import { FaRegTimesCircle } from "react-icons/fa";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { GiEngagementRing } from 'react-icons/gi';
import ContactForm from './pages/ContactForm';



function App() {
  // Replace these project details with your actual projects
  const personalProjects = [
    {
      title: 'The Bible',
      description: 'The Bible Project.',
      // githublink: 'https://github.com/enoch-hub/Bible_App_client',
      link: 'https://the-bible.onrender.com',
      imageUrl: require('./Assets/Images/Projects/1-personalProjects/001.png'),
    },
    {
      title: 'Bible Stories',
      description: 'Bible Stories with Authentication',
      githublink: '',
      link: 'https://bible-stories.onrender.com',
      imageUrl: require('./Assets/Images/Projects/1-personalProjects/Bible-Stories.jpg'),
    },
    {
      title: 'Bible Verses App',
      description: 'Download and save Bible Verses',
      githublink: 'https://github.com/enoch2-hub/Bible_Verses_Project/tree/main',
      link: 'https://bible-verse-app.onrender.com/Home',
      imageUrl: require('./Assets/Images/Projects/1-personalProjects/003.png'),
    },
  ];

  const fullstack = [
    {
      title: 'Ecommerce App',
      description: 'Shop Anytime, Anywhere.',
      githublink: 'https://github.com/enoch2-hub/ecommerce_sanity/tree/main',
      link: 'https://ecommerce-sanity-indol.vercel.app',
      imageUrl: require('./Assets/Images/Projects/2-otherProjects/ecommerce_app.jpg'),
    },
    {
      title: 'YourGallery',
      description: 'Upload and share your photos.',
      githublink: 'https://github.com/enoch2-hub/mern-app-bckend',
      link: 'https://yourgallery.onrender.com/',
      imageUrl: require('./Assets/Images/Other/yourgallery.png'),
    }
  ];

  const phpmysql = [
    {
      title: 'Tech Store',
      description: 'one-stop destination for the latest and greatest in technology',
      githublink: 'https://github.com/enoch2-hub/Ecom_Site',
      link: 'https://techstr.000webhostapp.com/index.php?page=products',
      imageUrl: require('./Assets/Images/Projects/2-otherProjects/tech-store.png'),
    },
    {
      title: 'Social Network App',
      description: 'An innovative social networking application',
      githublink: 'https://github.com/enoch2-hub/SocialNtwrk',
      link: 'https://schlntwrk.000webhostapp.com/',
      imageUrl: require('./Assets/Images/Projects/2-otherProjects/sclntwrk.jpg'),
    }
  ];

  const otherProjects = [
    {
      title: 'Real Estate App',
      description: 'Real Estates',
      // githublink: 'https://github.com/enoch2-hub/real-estate-001/tree/main',
      githublink: 'https://github.com/enoch2-hub/real-estate-002',
      // link: 'https://real-estate-001.onrender.com',
      link: 'https://real-estate-chi-fawn.vercel.app/',
      imageUrl: require('./Assets/Images/Projects/2-otherProjects/real-estate.jpg'),
    },
    {
      title: 'Rewire',
      description: 'Youre financial companion',
      githublink: 'https://github.com/enoch2-hub/bank-app/tree/main',
      link: 'https://bank-app1.onrender.com',
      imageUrl: require('./Assets/Images/Projects/2-otherProjects/bank-app.jpg'),
    },
    {
      title: 'Wanderwise Travels',
      description: 'Explore, Plan, Travel.',
      githublink: 'https://github.com/enoch2-hub/travel_site-react/tree/main',
      link: 'https://wanderwise-travel.onrender.com',
      imageUrl: require('./Assets/Images/Projects/2-otherProjects/travel-app.jpg'),
    },
  ];

  const tools = [
    {
      title: 'Text Analyzer',
      description: 'Uncover Insights, Instantly.',
      githublink: 'https://github.com/enoch2-hub/text_analyzer-server/tree/main',
      link: 'https://text-analyzer-k1uj.onrender.com',
      imageUrl: require('./Assets/Images/Projects/3-tools/Text-Analyzer.jpg'),
    },
    {
      title: 'Expense Tracker',
      description: 'Budget Smartly, Track Easily.',
      githublink: 'https://github.com/enoch2-hub/Expense_tracker/tree/main',
      link: 'https://expense-tracker-frbv.onrender.com/',
      imageUrl: require('./Assets/Images/Projects/3-tools/expense-tracker.jpg'),
    },
    {
      title: 'Url Shortener',
      description: 'Shorten and optimize your URLs.',
      githublink: 'https://github.com/enoch2-hub/url-shortener-server/tree/main',
      link: 'https://hm-jy6k.onrender.com/',
      imageUrl: require('./Assets/Images/Projects/3-tools/url-Analyzer.jpg'),
    }
  ];

  const mobileApps = [
    {
      title: 'Bible Stories',
      description: 'Inspirational Bible stories for children.',
      githublink: 'https://github.com/enoch2-hub/Bible_Stories-expo',
      link: 'https://github.com/enoch2-hub/Bible_Stories-expo',
      imageUrl: require('./Assets/Images/Projects/4-mobileApps/Bible-Stories.jpg'),
    },
    {
      title: 'Expense Tracker',
      description: 'Budget Smartly, Track Easily.',
      githublink: 'https://github.com/enoch2-hub/Expense_tracker-expo',
      link: 'https://github.com/enoch2-hub/Expense_tracker-expo',
      imageUrl: require('./Assets/Images/Projects/4-mobileApps/expense-tracker.jpg'),
    },
  ];



  const [click, setclick] = useState(false);

  const toggleMenu = () => setclick(!click)


 
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });
  
    const cardElements = document.querySelectorAll(".hidden");
  
    cardElements.forEach((element) => observer.observe(element));
  
    // Cleanup the observer when the component unmounts
    return () => {
      cardElements.forEach((element) => observer.unobserve(element));
    };
  }, []);


  const navlinks = (
    <>
      <div className="navbar">
        <div className='container'>
            <div className='nav-logo'>
              <img className='nav-logo' src={require('./Assets/Images/Other/logo2.png')} alt="logo" />
            </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li><a onClick={() => scrollToSection('personal-projects')} href="#personal-projects">Personal Projects</a></li>
            {/* <li><a href="#work-projects">Work Projects-Fullstack</a></li> */}
            <li><a href="#fullstack">Fullstack MERN</a></li>
            <li><a href="#phpmysql">PHP & MySQL</a></li>
            <li><a href="#other-projects">Other Projects-Frontend</a></li>
            <li><a href="#tools">Tools</a></li>
            <li><a href="#mobileApps">Mobile Apps</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="hamburger" onClick={() => toggleMenu()}>
            {click ? <FaRegTimesCircle color='red'/> : <HiOutlineMenuAlt4/>}
          </div>
        </div>
      </div>
    </>
  );


  return (
    <>    
      {click && <Backdrop onClick={() => toggleMenu()}/>}
      {ReactDOM.createPortal(navlinks, document.getElementById('drawer-hook'))}
    
        {/* <Navbar/> */}

    {/* nav with logo and links to MainProjects, Tools, MobileApps */}
    <div className="video-container">
      <video src={require('./Assets/video/008.mp4')} autoPlay loop muted />
    </div>
    


      <div className="app-header">
          <h1>Full Stack Web Developer</h1>
          <p>Enoch Perera</p>
          <div className='app-tech-stack-3'>
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
                <img className='react' src={require('./Assets/Images/TechStack/js.png')} alt="js" />
              </a>
              <a href="https://www.php.net/docs.php" target="_blank">
                <img className='react' src={require('./Assets/Images/TechStack/php.png')} alt="php" />
              </a>
              <a href="https://docs.docker.com/" target="_blank">
                <img src={require('./Assets/Images/TechStack/docker.png')} alt="Docker" />
              </a>
          </div>
          <div className="app-tech-stack-1">
              
              <a href="https://expressjs.com/" target="_blank">
                <img src={require('./Assets/Images/TechStack/expressjs.png')} alt="Express.js" />
              </a>
              <a href="https://react.dev/" target="_blank">
                <img className='react' src={require('./Assets/Images/TechStack/react.png')} alt="React" />
              </a>
              <a href="https://nextjs.org/docs" target="_blank">
                <img src={require('./Assets/Images/TechStack/Nextjs.png')} alt="Next.js" />
              </a>
              <a href="https://reactnative.dev/docs/getting-started" target="_blank">
                <img className='react' src={require('./Assets/Images/TechStack/rctnative.png')} alt="ReactNative" />
              </a>
              <a href="https://nodejs.org/docs/latest/api/" target="_blank">
                <img src={require('./Assets/Images/TechStack/node.png')} alt="Node.js" />
              </a>
          </div>
          <div className="app-tech-stack-2">
              {/* <hr /> */}
              <a href="https://learn.microsoft.com/en-us/sql/sql-server/?view=sql-server-ver16" target="_blank">
                <img className='react' src={require('./Assets/Images/TechStack/sql.png')} alt="sql" />
              </a>
              <a href="https://dev.mysql.com/doc/" target="_blank">
                <img className='react' src={require('./Assets/Images/TechStack/mssql.png')} alt="mssql" />
              </a>
              <a href="https://www.mongodb.com/docs/" target="_blank">
                <img src={require('./Assets/Images/TechStack/mongodb.png')} alt="MongoDB" />
              </a>
          </div>
{/* 
          <div className="tech-stack">
            <h2>Main Tech Stack (MERN)</h2>
            <div className="main-tech">
              <img src={require('./Assets/Images/TechStack/mongodb.png')} alt="MongoDB" />
              <img src={require('./Assets/Images/TechStack/expressjs.png')} alt="Express.js" />
              <img src={require('./Assets/Images/TechStack/react.png')} alt="React" />
              <img src={require('./Assets/Images/TechStack/node.png')} alt="Node.js" />
            </div>
            <h2>Other Technologies</h2>
            <div className="other-tech">
              <img src={require('./Assets/Images/TechStack/next-js-seeklogo.png')} alt="Next.js" />
              <img src={require('./Assets/Images/TechStack/docker.png')} alt="Docker" />
              <img src={require('./Assets/Images/TechStack/rctnative.png')} alt="ReactNative" />
            </div>
          </div> */}

          <div className='aboutme'>
            <h2>About Me</h2>
            <p>
                Welcome to my portfolio! I'm a passionate Full Stack Web Developer with expertise in the <span style={{fontWeight: 'bold', color: 'red'}}>MERN stack</span>, 
                including  <span style={{fontWeight: 'bold', color: 'red'}}>Next.js and React Native</span> for mobile app development. <br/>
                I also have extensive knowledge of <span style={{fontWeight: 'bold', color: 'red'}}>PHP and SQL</span>, 
                specifically <span style={{fontWeight: 'bold', color: 'red'}}>MS SQL Server and MySQL</span>.
                {/* Welcome to my portfolio! I'm a passionate Full Stack Web Developer with expertise in the MERN stack, 
                including Next.js and React Native for mobile app development. */}
                <br/><br/><br/>Here, you'll find a showcase of my projects demonstrating my proficiency in creating innovative web and mobile solutions.
            </p>


          </div>

        <section className="about">

        </section>
        </div>



    <div className="app">

      <section className="projects"> 
        <h2>Projects</h2>
        
        <section id='personal-projects' className="personal-projects">
          <h3 className='project-title'>Personal Projects</h3>
          <div className="project-list">
            {personalProjects.map((project, index) => (
              <Project key={index} {...project} />
            ))}
          </div>
        </section>

        {/* <section id='work-projects' className="work-projects">
          <h3 className='project-title'>Work Projects-Fullstack</h3>
          <div className="project-list">
            {workProjects.map((project, index) => (
              <Project key={index} {...project} />
            ))}
          </div>
        </section> */}

        <section id='fullstack' className="work-projects">
          <h3 className='project-title'>Fullstack MERN & Nextjs</h3>
          <div className="project-list">
            {fullstack.map((project, index) => (
              <Project key={index} {...project} />
            ))}
          </div>
        </section>

        <section id='phpmysql' className="work-projects">
          <h3 className='project-title'>Php & MySql</h3>
          <div className="project-list">
            {phpmysql.map((project, index) => (
              <Project key={index} {...project} />
            ))}
          </div>
        </section>

        <section id='other-projects' className="other-projects">
          <h3 className='project-title'>Other Projects-Frontend</h3>
          <div className="project-list">
            {otherProjects.map((project, index) => (
              <Project key={index} {...project} />
            ))}
          </div>
        </section>

        <section id='tools' className="tools">
          <h3 className='project-title'>Tools</h3>
          <div className="project-list">
            {tools.map((tool, index) => (
              <Project key={index} {...tool} />
            ))}
          </div>
        </section>

        <section id='mobileApps' className="mobileApps">
          <h3 className='project-title'>Mobile Apps (React Native)</h3>
          <div className="project-list">
            {mobileApps.map((project, index) => (
              <Project key={index} {...project} />
            ))}
          </div>
        </section>

      </section>

      <section id="contact" className="contact">
        <h2>Contact Me</h2>
        <p>
          Feel free to reach out to me via email at <a href="mailto:enoch.perera.coding2@gmail.com">enoch.perera.coding2@gmail.com</a>
        </p>
        {/* my github account */}
        <p>
          You can also find me on <a href="https://github.com/enoch2-hub">Github</a>
        </p>
      </section>

    </div>
      {/* <ContactForm/> */}

    </>
  );
}

export default App;
