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
    )
}