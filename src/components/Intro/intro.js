import React from "react";
import "./intro.css";
import bg from "../../assets/image.png";
import btnImg from "../../assets/hireme.png";
import resume from "../../assets/Athul_Ganesh_Resume.pdf";

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello</span>
                <span className="introText">I'm <span className="introName">Athul</span><br />a Web Developer</span>
                <p className="introPara">I create web applications that are both functional and visually appealing.</p>
                <button className='btn' onClick={() => window.open(resume, '_blank', 'noopener,noreferrer')}><img src={btnImg} className='btnImg' alt="Hire Me" />Resume</button>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    );
};

export default Intro;