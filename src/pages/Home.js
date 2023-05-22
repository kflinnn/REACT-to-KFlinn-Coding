import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './pages.css';
import About from '../components/About';


export default function Home() {
    return (
        <body>
            <Header />
            <section>
            <About />
            </section>
            <Footer />
        </body>
    )
}