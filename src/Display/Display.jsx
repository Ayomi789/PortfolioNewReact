// import React, { useEffect } from 'react';

// const SkillsProgressBar = () => {
//   useEffect(() => {
//     animateProgress();
//   }, []);

//   const animateProgress = () => {
//     const skills = document.querySelectorAll('.skills');
//     const widths = [90, 80, 65, 60]; // Widths in percentage for HTML, CSS, JavaScript, PHP

//     skills.forEach((skill, index) => {
//       let width = 0;
//       const id = setInterval(frame, 10);

//       function frame() {
//         if (width >= widths[index]) {
//           clearInterval(id);
//         } else {
//           width++;
//           skill.style.width = width + '%';
//           skill.textContent = width + '%';
//         }
//       }
//     });
//   };

//   return (
//     <div>
//       <h1>My Skills</h1>

//       <p>HTML</p>
//       <div className="container">
//         <div className="skills html">0%</div>
//       </div>

//       <p>CSS</p>
//       <div className="container">
//         <div className="skills css">0%</div>
//       </div>

//       <p>JavaScript</p>
//       <div className="container">
//         <div className="skills js">0%</div>
//       </div>

//       <p>PHP</p>
//       <div className="container">
//         <div className="skills php">0%</div>
//       </div>
//     </div>
//   );
// };

// export default SkillsProgressBar;



import React from 'react';
import './TopBar.css';
import AboutContent from '../About/About';
import imagee from '../../assets/Image/image.png';
import { CiLocationOn, CiPhone } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";

const TopBar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const style = { color: "white", fontSize: "2.5em", backgroundColor: "#46a095", borderRadius: "20px", width: "50px", height: "50px" };

  return (
    <>
      <div className='top-bar'>
        <div className='contain'>
          <div className='container'>
            <h1>Salako</h1>
            <ul>
              <li onClick={() => scrollToSection('home')}>Home</li>
              <li onClick={() => scrollToSection('about')}>About Us</li>
              <li onClick={() => scrollToSection('service')}>Services</li>
              <li onClick={() => scrollToSection('project')}>Portfolios</li>
              <li onClick={() => scrollToSection('contact')}>Contact</li>
            </ul>
          </div>
        </div>
        <div className='Cont'>
          <h1>Salako Lateef</h1>
          <p>I am Web Developer</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, possimus corrupti. Est exercitationem esse odit, quia laudantium incidunt perferendis <br /> provident fugiat beatae dicta alias animi et consectetur doloribus, quibusdam qui.</p>
        </div>
        <div className='btn'>
          <button className='btn2'>View My Work</button>
        </div>
      </div>

      {/* About Me */}
      <section id='about' className='mu-about'>
        <div>
          <div>
            <div className='area'>
              <div className='about'>
                <h1 className='headertitle'>About Me</h1>
                <p>
                  My name is Abdullateef Salako, and I am a dedicated Web Developer with a profound passion for software development. I am committed to continuous learning and the mastery of new technologies, ensuring I remain at the cutting edge of industry advancements. My goal is to deliver innovative solutions by embracing new challenges and expanding my skill set through ongoing professional development.
                </p>
              </div>
              <div className='aboutcont'>
                <div className='row'>
                  <div className='content-right'>
                    <div className='progrss'>
                      <AboutContent />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <div id='service'>
        <div className='Port'>
          <h1>My Service</h1>
        </div>
        <div className='container'>
          <div className='services-list'>
            <div>
              <i className="fa-solid fa-code"></i>
              <h2>Web Design</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, hic! Blanditiis nisi, perferendis suscipit iure optio esse ullam aperiam aut quidem nam, nesciunt quasi vel numquam natus! Voluptates, doloribus aperiam! Odio architecto</p>
              <a href="">Learn More</a>
            </div>
            <div>
              <i className="fa-solid fa-crop"></i>
              <h2>UI/UX</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, hic! Blanditiis nisi, perferendis suscipit iure optio esse ullam aperiam aut quidem nam, nesciunt quasi vel numquam natus! Voluptates, doloribus aperiam! Odio architecto</p>
              <a href="">Learn More</a>
            </div>
            <div>
              <i className="fa-solid fa-code"></i>
              <h2>Responsiveness</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, hic! Blanditiis nisi, perferendis suscipit iure optio esse ullam aperiam aut quidem nam, nesciunt quasi vel numquam natus! Voluptates, doloribus aperiam! Odio architecto</p>
              <a href="">Learn More</a>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolios */}
      <div id='project'>
        <div className='Port'>
          <h2>Portfolios</h2>
        </div>
        <div className='contain'>
          <div className='work-list'>
            <div className='work'>
              <img src={imagee} alt="" />
              <div className='layer'>
                <h3 style={{ textAlign: "center" }}>A Food Website</h3>
                <p style={{ textAlign: "center" }}>This website gives you a food recipe depending on the ingredient you inputed</p>
                <a href=""> <i className='fa-solid fa-link'></i></a>
              </div>
            </div>
            <div className='work'>
              <img src={imagee} alt="" />
              <div className='layer'>
                <h3 style={{ textAlign: "center" }}>A Food Website</h3>
                <p style={{ textAlign: "center" }}>This website gives you a food recipe depending on the ingredient you inputed</p>
                <a href=""> <i className='fa-solid fa-link'></i></a>
              </div>
            </div>
            <div className='work'>
              <img src={imagee} alt="" />
              <div className='layer'>
                <h3 style={{ textAlign: "center" }}>A Food Website</h3>
                <p style={{ textAlign: "center" }}>This website gives you a food recipe depending on the ingredient you inputed</p>
                <a href=""> <i className='fa-solid fa-link'></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Me */}
      <div id='contact' className='contact'>
        <div className='Mee'>
          <h1 style={{ textAlign: "center" }}>Contact Me</h1>
          <p style={{ textAlign: "center" }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus corporis at ea incidunt porro adipisci aliquid ratione vitae voluptatum saepe. Sit illum sapiente vero, sequi provident inventore dicta quod quas!</p>
        </div>
        <div className='location'>
          <span>
            <i><CiLocationOn style={style} /></i>
            <p>Lagos, Nigeria</p>
          </span>
          <span>
            <i><CiPhone style={style} /> </i>
            <p>09158425356</p>
          </span>
          <span>
            <i><AiOutlineMail style={style} /></i>
            <p>salakolateef07@gmail.com</p>
          </span>
        </div>
        <form action="">
          <div className='field'>
            <div>
              <input type="text" name="Name" id="" placeholder='Name' />
            </div>
            <div>
              <input type="email" name="" id="" placeholder='Email' />
            </div>
            <div>
              <textarea name="" id="" placeholder='Message' cols="30" rows="6"></textarea>
            </div>
            <div className='btn'>
              <button>Submit</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default TopBar;
