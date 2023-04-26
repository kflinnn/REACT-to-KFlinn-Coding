import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';


export default function Home() {
    return (
        <div>
            <Header />
            <Navigation />
            <section>
                <div>
                    <h2>Welcome to KFlinn Coding!</h2>
                </div>
            </section>
            <Footer />
        </div>
    )
}