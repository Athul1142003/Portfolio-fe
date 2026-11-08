import React, { useState } from 'react';
import './works.css';
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';
import Portfolio4 from '../../assets/portfolio-4.png';

const projects = [
  {
    image: Portfolio1,
    alt: 'Portfolio 1',
    title: 'Impact of Gambling Addiction in the Mobile Gaming Industry',
    description: 'This research paper explores how gambling-like mechanics in mobile games, such as loot boxes, in-app betting, rewards, and chance-based purchases, can influence player behaviour and contribute to addictive gaming patterns. It examines the psychological, financial, and social impacts of these features, particularly among young users, while highlighting the need for responsible game design, awareness, and stronger regulations to promote a safer mobile gaming environment.',
  },
  {
    image: Portfolio2,
    alt: 'Portfolio 2',
    title: 'MindMaster – Digital Wellbeing & App Lock Application',
    description: 'MindMaster is a digital wellbeing mobile application designed to help users overcome gambling addiction and manage unhealthy digital habits. It provides features such as gambling app and website blocking, screen-time monitoring, customizable usage restrictions, biometric authentication, and activity tracking. The application aims to promote responsible smartphone usage, improve self-control, and support users in building healthier digital lifestyles.',
  },
  {
    image: Portfolio3,
    alt: 'Portfolio 3',
    title: 'Resume Builder – MERN Stack Web Application',
    description: 'Resume Builder is a dynamic web application developed using the MERN stack (MongoDB, Express.js, React.js, and Node.js). It enables users to create professional and ATS-friendly resumes by entering personal details, educational qualifications, technical skills, work experience, and projects. It features customizable resume templates, real-time previews, user authentication, and PDF downloads, providing a simple and efficient resume-building experience.',
  },
  {
    image: Portfolio4,
    alt: 'Portfolio 4',
    title: 'BBL Bank Website – Adobe Experience Manager (AEM) Project',
    description: "Worked on the development and enhancement of the Bangkok Bank (BBL) website using Adobe Experience Manager (AEM), Edge Delivery Services (EDS), JavaScript, HTML, and CSS during my tenure at Adobe. Contributed to building responsive and user-friendly web components, implementing UI enhancements, and developing interactive website features using modern frontend technologies and AEM's Universal Editor.",
  },
];

// Tap toggles the flip for touch devices; mouse leave resets it so a click can't leave a card stuck flipped.
const FlipCard = ({ image, alt, title, description }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={flipped ? 'flipCard flipped' : 'flipCard'}
      tabIndex={0}
      onClick={() => setFlipped(!flipped)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div className="flipCardInner">
        <div className="flipCardFront">
          <img className="worksImg" src={image} alt={alt} />
        </div>
        <div className="flipCardBack">
          <h3 className="flipCardTitle">{title}</h3>
          <p className="flipCardDesc">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Works = () => {
  return (
    <section id="works">
     <h2 className="worksTitle">My Portfolio</h2>
     <span className="worksDesc">I take pride in paying attention to the smallest details and delivering high-quality work in every project I undertake.</span>
     <div className="worksImgs">
        {projects.map((project) => (
          <FlipCard key={project.title} {...project} />
        ))}
     </div>
    </section>
  )
}

export default Works;