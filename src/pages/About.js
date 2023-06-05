import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import Profile from '../Images/Profile.png';
import About from '../components/About';

export default function About() {
    return (
        <div>
            <Header />
            <Navigation />
            <About />
            <Footer />
        </div>


// <section class="about-container">
// <div class="image-wrapper">
//     <h2>My Name is Kelley</h2>
//     <img src={Profile} alt="Kelley" className="profile-picture" />

// <div class="about-text-box">
//    <p>I am a highly motivated, creative, and personable Full-Stack Developer, based out of Central Florida, who is always eager to grow and learn. I have experience in frontend languages such as HTML, CSS, CSS frameworks including Bootstrap and Tailwind, and JavaScript as well as back-end technologies such as Node.js, Express.js, jQuery, REACT, and databases including MySQL, MongoDB, and GraphQL. In my desire to always be learning, I'm currently working on adding Python to my development toolkit so as to be as versatile a developer as possible. I love to collaborate with like-minded individuals who are also looking to further better the world around them through web development. Outside of the coding world, I am a musician, with a music degree in percussion, foodie, and fitness enthusiast. I also sing baritone in a barbershop quartet. Let's get together!</p>
// </div>
// </div>
// </section>
    )
}