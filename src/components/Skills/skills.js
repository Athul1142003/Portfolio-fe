import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">I am Athul Ganesh, a passionate software developer with experience in frontend and full-stack development. I have worked with Luminar Technolab, Adobe, and DEPT® Global, gaining hands-on experience in MERN stack, HTML, CSS, JavaScript, AEM, and Edge Delivery Services. I enjoy building innovative applications, solving problems, and continuously learning new technologies.</span>
      <div className="skillBars">
        <div className="skillBar">
          <img className='skillBarImg' src={UIDesign} alt="UI Design" />
          <span className='skillBarText'><h2>UI/UX Design</h2><p>Contributed to an enterprise banking project at Adobe, using HTML, CSS, JavaScript, Adobe Experience Manager (AEM), and Edge Delivery Services (EDS). Developed responsive web components, enhanced user interfaces, implemented interactive features, and supported the delivery of scalable, user-friendly digital banking experiences.</p></span>
        </div>
        <div className="skillBar">
          <img className='skillBarImg' src={WebDesign} alt="Web Design" />
          <span className='skillBarText'><h2>Web Design</h2><p>Completed a six-month internship at **Luminar Technolab**, gaining hands-on experience in MERN stack development. Worked with MongoDB, Express.js, React.js, and Node.js to build web applications, develop REST APIs, manage databases, and strengthen full-stack development skills.</p></span>
        </div>
        <div className="skillBar">
          <img className='skillBarImg' src={AppDesign} alt="App Design" />
          <span className='skillBarText'><h2>App Design</h2><p>Collaborated on a team-based college project to develop a mobile application using Kotlin, Java, and Android Studio. Contributed to application development, UI implementation, and functionality, gaining practical experience in Android development, teamwork, and problem-solving.</p></span>
        </div>
      </div>
    </section>

  )
}

export default Skills