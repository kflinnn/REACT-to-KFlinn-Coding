import React from 'react';
import './style.css';
import Profile from '../../Images/Profile.png';

export default function About() {
    return (
        <main class="bio-container">
<h2>My Name is Kelley</h2>
            <div class="center-box">
                <img src={Profile} alt="Kelley" class="profile-picture" />
            
            <div class="bio-text-box">
                <p>I am a highly motivated, creative, and personable Full-Stack Developer based out of Central Florida who is always eager to grow and learn. I have experience in frontend languages, such as HTML, CSS, CSS frameworks including Bootstrap and Tailwind, and JavaScript, back-end technologies such as Node.js, Express.js, jQuery, and REACT, and databases including MySQL, MongoDB, and GraphQL. In my desire to always be learning, I'm currently working on adding Python to my development toolkit so as to be as versatile a developer as possible while continuing to fine tune the skills I already have. I love to collaborate with like-minded individuals who are also looking to further better the world around them through web development. Outside of the coding world, I am a musician, with a music degree in percussion, foodie, and fitness enthusiast. I also sing baritone in a barbershop quartet. Let's get together!</p>
                </div>
            </div>
        </main>
    )
}


