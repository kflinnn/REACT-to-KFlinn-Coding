import React from "react";
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope } from 'react-icons/fa'
import './style.css';

export default function ContactInfo() {
    return (
        <section class="contact-container">
             <div class="contact-box">
    <h2>Let's Get In Touch</h2>
    <div class="contact-info">
      <div class="info-item">
        <span><FaEnvelope size={28} class="info-icon"/></span> <a href="mailto:kflinncoding@gmail.com">kflinncoding@gmail.com</a>
      </div>
      <div class="info-item">
        <span><FaPhone size={28} class="info-icon"/></span> <a href="tel:+13303222906">330.322.2906</a>
      </div>
      <div class="info-item">
        <span><FaGithub size={32} class="info-icon"/></span> <a href="https://github.com/kflinnn" target="#">Kflinnn</a>
      </div>
      <div class="info-item">
        <span><FaLinkedin size={32} class="info-icon"/></span> <a href="https://www.linkedin.com/in/kelley-flinn-1509a6167/" target="#">Kelley Flinn</a>
      </div>
    </div>
  </div>
        </section>
    )
}
