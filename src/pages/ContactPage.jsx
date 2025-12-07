import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Contact from '../components/sections/Contact';
import FAQ from '../components/sections/FAQ';

const ContactPage = () => {
    return (
        <div className="min-h-screen">
            <Header />
            <main>
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-primary-900 to-slate-900">
                    <div className="container-custom relative z-10 text-center text-white">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-primary-300 text-sm font-semibold mb-6">
                                Contact Us
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
                                Get In Touch
                            </h1>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                                Have questions or ready to schedule your service?
                                We&apos;re here to help. Contact us today for a free estimate!
                            </p>
                        </motion.div>
                    </div>
                </section>

                <Contact />
                <FAQ />
            </main>
            <Footer />
        </div>
    );
};

export default ContactPage;
