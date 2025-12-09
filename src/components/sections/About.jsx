import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Users, Calendar, CheckCircle } from 'lucide-react';

const About = () => {
    const stats = [
        { icon: Users, value: 'Skilled & Trained', label: 'Technicians' },
        { icon: Calendar, value: 'Serving Kansas City', label: '& Nearby Areas' },
        { icon: Award, value: 'Modern Tools &', label: 'Thorough Cleaning' },
    ];

    const features = [
        'Licensed and fully insured professionals',
        'State-of-the-art cleaning equipment',
        'Eco-friendly cleaning solutions',
        'Transparent pricing with no hidden fees',
        'Same-day service available',
        '100% satisfaction guarantee',
    ];

    return (
        <section className="section-padding bg-white">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative overflow-visible"
                        style={{ maxWidth: '100vw' }}
                    >
                        <div className="relative overflow-visible" style={{ maxWidth: '100%' }}>
                            {/* Scrollable Service Gallery */}
                            <div
                                className="overflow-x-scroll scrollbar-hide pb-4 -mx-4 px-4 lg:mx-0 lg:px-0"
                                style={{
                                    WebkitOverflowScrolling: 'touch',
                                    touchAction: 'pan-x pan-y',
                                    overflowX: 'scroll',
                                    maxWidth: 'calc(100vw - 2rem)',
                                    pointerEvents: 'auto',
                                    userSelect: 'none',
                                }}
                            >
                                <div className="flex gap-4" style={{ width: 'max-content' }}>
                                    {[
                                        { title: 'Air Duct Cleaning', image: '/images/services/air-duct-cleaning.png' },
                                        { title: 'Residential Cleaning', image: '/images/services/residential-duct-cleaning.png' },
                                        { title: 'Commercial Cleaning', image: '/images/services/commercial-duct-cleaning.png' },
                                        { title: 'Chimney Sweep', image: '/images/services/chimney-sweep.png' },
                                        { title: 'Dryer Cleaning', image: '/images/services/dryer-cleaning.png' },
                                        { title: 'Fireplace Inspection', image: '/images/services/fireplace-inspection.png' },
                                    ].map((service, index) => (
                                        <div key={index} className="flex-shrink-0" style={{ width: 'calc(50vw - 2.5rem)' }}>
                                            <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300 bg-gray-100">
                                                <img
                                                    src={service.image}
                                                    alt={service.title}
                                                    className="w-full h-64 sm:h-96 object-contain"
                                                />
                                            </div>
                                            <p className="text-center mt-2 sm:mt-3 font-semibold text-gray-800 text-sm sm:text-base">{service.title}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Experience Badge */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="absolute -bottom-8 -right-8 bg-gradient-to-r from-primary-500 to-secondary-500 text-white p-8 rounded-3xl shadow-2xl z-10"
                            >
                                <p className="text-5xl font-bold">15+</p>
                                <p className="text-lg font-medium">Years of Excellence</p>
                            </motion.div>

                            {/* Decorative Element */}
                            <div className="absolute -top-8 -left-8 w-24 h-24 bg-accent-500/20 rounded-full blur-2xl" />
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold mb-4">
                            About UnitedKcServices
                        </span>

                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-gray-900 mb-6 break-words">
                            Your Trusted Partner for Clean, Healthy Air
                        </h2>

                        <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
                            At UnitedKcServices, we connect you with trusted, experienced technicians across Kansas City
                            who specialize in air duct cleaning and HVAC maintenance services.
                        </p>

                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Our network of certified professionals uses the latest equipment and techniques to ensure
                            your air systems are clean, efficient, and safe. We take pride in our customer-focused
                            service philosophy and commitment to your satisfaction.
                        </p>

                        {/* Features Grid */}
                        <div className="grid sm:grid-cols-2 gap-4 mb-8">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                    <span className="text-gray-700">{feature}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <Link
                            to="/about"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                        >
                            Learn More About Us
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>

                {/* Stats */}
                <div className="grid md:grid-cols-3 gap-8 mt-20">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-gray-50 rounded-2xl p-8 text-center"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-primary-100 flex items-center justify-center mx-auto mb-4">
                                <stat.icon className="w-8 h-8 text-primary-500" />
                            </div>
                            <p className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</p>
                            <p className="text-gray-600">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
