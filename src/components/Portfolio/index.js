import React, { useState } from 'react';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Work from '../../pages/Work';
import Resume from '../../pages/Resume'
import Contact from '../../pages/Contact'
import Navigation from '../Navigation/Navigation'



export default function Portfolio () {
    const [currentPage, setCurrenPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Work') {
            return <Work />;
        }
        if (currentPage === 'Resume') {
            return <Resume />
        }
        return <Contact />
    };

    const handlePageChange = (page) => setCurrenPage(page);

    return (
        <div>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />

            {renderPage()}
        </div>
    )
}