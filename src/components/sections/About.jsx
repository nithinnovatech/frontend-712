import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Users, Calendar, CheckCircle } from 'lucide-react';

const About = () => {
    const stats = [
        { icon: Users, value: '10,000+', label: 'Happy Customers' },
        { icon: Calendar, value: '15+', label: 'Years Experience' },
        { icon: Award, value: '100%', label: 'Satisfaction Rate' },
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
                        className="relative"
                    >
                        <div className="relative">
                            {/* Main Image */}
                            <div className="rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80"
                                    alt="I&A Services team"
                                    className="w-full h-[500px] object-cover"
                                />
                            </div>

                            {/* Experience Badge */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="absolute -bottom-8 -right-8 bg-gradient-to-r from-primary-500 to-secondary-500 text-white p-8 rounded-3xl shadow-2xl"
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
                            About I&A Services
                        </span>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-gray-900 mb-6">
                            Your Trusted Partner for Clean, Healthy Air
                        </h2>

                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            At I&A Services, we&apos;re dedicated to providing top-quality air duct cleaning and
                            HVAC maintenance services to homes and businesses throughout the Kansas City metro area.
                        </p>

                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Our team of certified professionals uses the latest equipment and techniques to ensure
                            your air systems are clean, efficient, and safe. We take pride in our attention to detail
                            and commitment to customer satisfaction.
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
                            <p className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</p>
                            <p className="text-gray-600">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
