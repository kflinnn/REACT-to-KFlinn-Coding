import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';


export default function Contact() {
    return (
        <div>
            <Header />
            <Navigation />
            <section>
            <h2>Contact Me</h2>
                    <div>
                        <address>
                            <a href="tel:+13303222906">330.322.2906</a>
                            <a href="mailto:kflinncoding@gmail.com">kflinncoding@gmail.com</a>
                            <a href="https://github.com/kflinnn" target="#">GitHub</a>
                            <a href="#" target="#">Resume</a>
                        </address>
                    </div>
            </section>
            <Footer />
        </div>
    )
}