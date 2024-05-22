
import React from 'react';
import './TopBar.css';
import AboutContent from '../About/About';
// import pics from '../../assets/Image/IMG-20240318-WA0010.jpg'
import imagee from '../../assets/Image/image.png'
import { CiLocationOn } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { useState } from 'react';
import Salako from '../../assets/Image/Salako.cv (1).pdf'


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

  const style = { color: "white", fontSize: "2.5em", backgroundColor: "#46a095", borderRadius: "20px", width: "50px", height: "50px" }


  const [creatUser, setCreateUser] = useState({
    Name: "",
    mail: "",
    message:"",
})


const handleChange = (e) => {
    const { name, value } = e.target;
    setCreateUser((prevUser) => ({
        ...prevUser,
        [name]: value,
    }))
}

const handleSubmit = (e) => {
    e.preventDefault()
    console.log(creatUser);
}

  return (
    <>

      <div className='top-bar'>
        <div className='contain'>
          <div className='container'>
            <h1>Salako</h1>
            <ul>
              <li onClick={() => scrollToSection('Cont')}>Home</li>
              <li onClick={() => scrollToSection('mu-about')}>About Us</li>
              <li onClick={() => scrollToSection('Service')}>Services</li>
              <li onClick={() => scrollToSection('project')}>Portfolios</li>
              {/* <li onClick={() => scrollToSection('testimonials')}>Testimonials</li> */}
              <li onClick={() => scrollToSection('contact')}>Contact</li>
            </ul>
          </div>
        </div>
        <div id='Cont'>
          <h1>Salako Lateef</h1>
          <p>I am Web Developer</p>
          <p>A passionate web developer who loves turning complex problems into elegant, <br /> efficient code.  With a knack for creating seamless user experiences and responsive designs, <br />I build websites that are not only functional but also beautiful. Let’s bring your digital vision to life!</p>
        </div>

        <div className='btn'>
          <button className='btn2'  onClick={()=> scrollToSection('project')}>View My Work</button>
        </div>

      </div>




      {/* About Me */}
      <section id='mu-about'>
        <div>
          <div>
            <div className='area'>

              <div className='about'>
                <h1 className='headertitle'>About Me</h1>
                <p>
                  My name is <strong>Abdullateef Salako</strong>, and I am a dedicated <strong>Web Developer</strong> with a profound passion for software development. I am committed to continuous learning and the mastery of new technologies, ensuring I remain at the cutting edge of industry advancements. My goal is to deliver innovative solutions by embracing new challenges and expanding my skill set through ongoing professional development.
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


    <section id='Service'>
      <div id='service'>
        <div className='Port'>
          <h1>My Service</h1>
        </div>

        <div className='container'>


          <div className='services-list'>

            <div>
              <i className="fa-solid fa-code"></i>
              <h2>Web Design</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, hic! Blanditiis nisi, perferendis suscipit iure optio esse ullam aperiam aut quidem nam, nesciunt quasi vel numquam natus! Voluptates, doloribus aperiam!
                Odio architecto</p>
              <a href="">Learn More</a>
            </div>


            <div>
              <i className="fa-solid fa-crop"></i>
              <h2>UI/UX</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, hic! Blanditiis nisi, perferendis suscipit iure optio esse ullam aperiam aut quidem nam, nesciunt quasi vel numquam natus! Voluptates, doloribus aperiam!
                Odio architecto</p>
              <a href="">Learn More</a>
            </div>

            <div>
              <i className="fa-solid fa-code"></i>
              <h2>Responsiveness</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, hic! Blanditiis nisi, perferendis suscipit iure optio esse ullam aperiam aut quidem nam, nesciunt quasi vel numquam natus! Voluptates, doloribus aperiam!
                Odio architecto</p>
              <a href="">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
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
                <p style={{ textAlign: "center" }}>This website gives you a food recipe depending on the ingredient you inputed </p>
                <a href=""><i className='fa-solid fa-link'></i></a>
              </div>
            </div>



            <div className='work'>
              <img src={imagee} alt="" />

              <div className='layer'>
                <h3 style={{ textAlign: "center" }}>A Food Website</h3>
                <p style={{ textAlign: "center" }}>This website gives you a food recipe depending on the ingredient you inputed </p>
                <a href=""> <i className='fa-solid fa-link'></i></a>
              </div>
            </div>



            <div className='work'>
              <img src={imagee} alt="" />

              <div className='layer'>
                <h3 style={{ textAlign: "center" }}>A Food Website</h3>
                <p style={{ textAlign: "center" }}>This website gives you a food recipe depending on the ingredient you inputed </p>
                <a href=""> <i className='fa-solid fa-link'></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact Me */}


      <div id='contact'>
        <div className='Mee'>
          <h1 style={{textAlign:"center"}}>Contact Me</h1>
          <p style={{textAlign:"center"}}>You need a front-end developer Let's have a chat i will get the coffee</p>
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

      <form onSubmit={handleSubmit}>
        <div className='field'>
          <div>
            <input type="text" name="Name" id="" placeholder='Name' onChange={handleChange}/>
          </div>
          <div>
            <input type="email" name="mail" id=""placeholder='Email' onChange={handleChange} />
          </div>

          <div>
            <textarea name="message" id="" placeholder='Message' cols="30" rows="6" onChange={handleChange}></textarea>
          </div>

          <div className='btn'>
            <button type='submit'>Submit</button>
          </div>
        </div>
        </form>
      </div>
      
    </>
  );
};

export default TopBar;








