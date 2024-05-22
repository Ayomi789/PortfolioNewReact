import React from 'react';
import './About.css';
import pics from '../../assets/Image/IMG-20240318-WA0010.jpg'
import Salako from '../../assets/Image/Salako.cv (1).pdf'

const AboutContent = () => {
  return (
    <div className="container">
      <div className="image">
        <img src={pics} alt="Your Description" style={{ width: '100%' }} />
      </div>
      <div className="text-content mu-about-content-right">

        {/* Start skills progress bar */}
        <div className="mu-skill-progress-bar">
          <h3>Skills</h3>
          <SkillBar skill="HTML5"  className="mu-html5-bar" />
          <SkillBar skill="CSS"  className="mu-css-bar" />
          <SkillBar skill="Javascript"  className="mu-photoshop-bar" />
          <SkillBar skill="Node.js"  className="mu-wordpress-bar" />
          <SkillBar skill="React.js" className="mu-jquery-bar" />
        </div>

        {/* Start Social Media */}
        <div className="mu-social-media">
          <h3>Social</h3>
          <div className='Social'>
          <SocialLink href="#" icon="fa fa-medium" />
          <SocialLink href="https://x.com/Mide0715" icon="fa fa-twitter" />
          <SocialLink href="https://www.linkedin.com/in/abdullateef-salako-18764b2a9/" icon="fa fa-linkedin" />
          <SocialLink href="#" icon="fa fa-instagram" />
          <SocialLink href="https://github.com/Ayomi789" icon="fa fa-github" />
          </div>
        </div>

        {/* Download Resume Button */}
        <a href={Salako} download="Salako.cv" target='_blank' rel='noreferrer'>
          <button className='mu-resume-btn'>Download My Resume</button>
        </a>

      </div>
    </div>
  );
};

const SkillBar = ({ skill,  className }) => (
  <div>
    <span>{skill}</span>
    <div className={`mu-pro-bar ${className},`}>

      <div className="mu-pro-bar-inner "></div>
    </div>
  </div>
);

const SocialLink = ({ href, icon }) => (
  <a href={href}>
    <i className={icon}></i>
  </a>
);

export default AboutContent;
