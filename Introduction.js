import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Introduction = () => (
  <section className="introduction">
    <div className="intro-content">
      <h1>Hello, I'm [Navyasri]</h1>
      <TypeAnimation
        sequence={['Frontend Developer', 'React Enthusiast',  'Web Designer']}
        wrapper="h2"
        repeat={Infinity}
      />
      <p>Building interactive web experiences with a touch of creativity.</p>
    </div>
  </section>
);

export default Introduction;
