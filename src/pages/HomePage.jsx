import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import About from '../components/sections/About';
import Locations from '../components/sections/Locations';
import FAQ from '../components/sections/FAQ';
import Blog from '../components/sections/Blog';
import CTA from '../components/sections/CTA';
import Contact from '../components/sections/Contact';

const HomePage = () => {
    return (
        <div className="min-h-screen">
            <Header />
            <main>
                <Hero />
                <Services />
                <About />
                <Locations />
                <FAQ />
                <Blog />
                <CTA />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;
