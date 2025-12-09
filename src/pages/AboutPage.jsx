import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Calendar, Target, Heart, Shield, CheckCircle } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import CTA from '../components/sections/CTA';

const AboutPage = () => {
    const values = [
        {
            icon: Target,
            title: 'Our Mission',
            description: 'To provide exceptional air quality solutions that enhance the health and comfort of homes and businesses throughout the Kansas City area.',
        },
        {
            icon: Heart,
            title: 'Customer First',
            description: 'We prioritize your satisfaction above all else, ensuring every job is completed to the highest standards with complete transparency.',
        },
        {
            icon: Shield,
            title: 'Safety & Quality',
            description: 'We use only the best equipment and proven techniques to deliver safe, thorough cleaning services you can trust.',
        },
    ];

    const stats = [
        { value: 'Skilled & Trained', label: 'Technicians' },
        { value: 'Serving Kansas City', label: '& Nearby Areas' },
        { value: 'Modern Tools &', label: 'Thorough Cleaning' },
        { value: 'Customer-Focused', label: 'Service Philosophy' },
    ];

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
                                About Us
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
                                Your Trusted Partner for Clean, Healthy Air
                            </h1>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                                UnitedKcServices connects you with trusted, experienced technicians
                                across Kansas City who specialize in air duct cleaning and HVAC services.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Story Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            {/* Image */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="relative"
                            >
                                <div className="rounded-3xl overflow-hidden shadow-2xl">
                                    <img
                                        src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80"
                                        alt="I&A Services team"
                                        className="w-full h-[500px] object-cover"
                                    />
                                </div>
                                <div className="absolute -bottom-8 -right-8 bg-gradient-to-r from-primary-500 to-secondary-500 text-white p-8 rounded-3xl shadow-2xl">
                                    <p className="text-3xl font-bold">Expert</p>
                                    <p className="text-lg font-medium">Technicians</p>
                                </div>
                            </motion.div>

                            {/* Content */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold mb-4">
                                    Our Story
                                </span>
                                <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-6">
                                    Built on Trust, Driven by Excellence
                                </h2>
                                <p className="text-lg text-gray-600 mb-6">
                                    UnitedKcServices was founded with a clear mission: to connect homeowners and
                                    businesses with the most skilled and trusted air duct cleaning technicians in
                                    Kansas City. We carefully vet our network of professionals to ensure you receive
                                    exceptional service every time.
                                </p>
                                <p className="text-gray-600 mb-6">
                                    Our network of certified technicians brings expertise and a commitment to
                                    excellence to every project. They use the latest equipment and proven techniques
                                    to ensure customers receive the best service possible.
                                </p>
                                <p className="text-gray-600 mb-8">
                                    We're proud to serve homeowners and businesses across Kansas City and nearby areas.
                                    Our reputation is built on quality work, honest pricing, and a customer-focused
                                    service philosophy that puts your needs first.
                                </p>

                                {/* Certifications */}
                                <div className="flex flex-wrap gap-4">
                                    {['Licensed', 'Insured', 'NADCA Certified', 'BBB Accredited'].map((cert) => (
                                        <div key={cert} className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
                                            <CheckCircle className="w-5 h-5 text-green-500" />
                                            <span className="font-medium text-gray-700">{cert}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-16"
                        >
                            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold mb-4">
                                Our Values
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900">
                                What Drives Us
                            </h2>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {values.map((value, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-white rounded-2xl p-8 shadow-lg text-center"
                                >
                                    <div className="w-16 h-16 rounded-2xl bg-primary-100 flex items-center justify-center mx-auto mb-6">
                                        <value.icon className="w-8 h-8 text-primary-500" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                                    <p className="text-gray-600">{value.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
                    <div className="container-custom">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="text-center text-white"
                                >
                                    <p className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</p>
                                    <p className="text-primary-100">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <CTA />
            </main>
            <Footer />
        </div>
    );
};

export default AboutPage;
