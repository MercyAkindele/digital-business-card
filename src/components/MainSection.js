import React from "react";

export default function MainSection(){
  return(
    <div className="inner-container">
      <h1>Mercy Akindele</h1>
      <h3>Full Stack Developer</h3>
      <div className="main-buttons">
        <a href="mailto:mercyakindele.dev@gmail.com" target="_blank" className="email"><i className="fa-solid fa-envelope"></i>Email</a>
        <a href="https://www.linkedin.com/in/mercy-akindele-b63457123/" target="_blank" className="linkedin"><i className="fa-brands fa-linkedin"></i>LinkedIn</a>
      </div>
      <h2>About</h2>
      <p className="p1">Hi, I am a hardworking person who believes their personality
         will be an asset to an employer, not only because of my dedication
        to work, or my willingness to go above and beyond what is required of me,
        but also because of my hunger for learning and developing new skills.
        This hunger is what led me to Thinkful's Engineering Immersion program, which was an intense
        5 month coding bootcamp that gave me my frontend and backend knowledge using
        Javascript, React, Node, Express, and many other frameworks and languages.
        </p>
        <p>Thinkful simulated a workplace environment by placing their developers within teams,
        allowing their developers to work with senior software engineers for pair programming,
        creating stand up meetings and also allowing their developers to do solo work.
        With this experience, I know I can be an asset to your company.
      </p>
      <h2>Interests</h2>
      <p className="p2">Balloon enthusiast. Music scholar. Reader. Travel lover.</p>
    </div>
  )
}