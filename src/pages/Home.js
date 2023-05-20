import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import Profile from '../Images/Profile.png';


export default function Home() {
    return (
        <div>
            <Header />
            <Navigation />
            <section>
                <div>
                    <h1>Welcome!</h1>
                </div>
                <div>
                    <h2>My Name is Kelley</h2>
                    <img src={Profile} alt="Kelley" className="profile-picture" />
                </div>
                <div>
                    I am a Full-Stack Developer based out of Central Florida. I'm a highly motivated, creative, and personable professional who is always eager to grow and learn. I have experience in frontend languages such as HTML, CSS, CSS frameworks including Bootstrap and Tailwind, and JavaScript as well as back-end technologies such as Node.js, Express.js, jQuery, REACT, and databases including MySQL, MongoDB, and GraphQL. In my desire to always be learning, I'm currently working on adding Python to my development toolkit so as to be as versatile a developer as possible. I love to collaborate with like-minded individuals who are also looking to further better the world around them through web development. Outside of the coding world, I am a musician, with a music degree in percussion, foodie, and fitness enthusiast. I also sing baritone in a barbershop quartet. Let's get together!
                </div>
            </section>
            <Footer />
        </div>
    )
}