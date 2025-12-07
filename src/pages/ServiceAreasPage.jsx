import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, Phone, CheckCircle } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import CTA from '../components/sections/CTA';
import { useBooking } from '../components/BookingModal';

const serviceAreas = [
    {
        id: 1,
        city: 'Kansas City',
        state: 'MO & KS',
        description: 'Serving the greater Kansas City metropolitan area including both Missouri and Kansas sides. We cover downtown KC, Westport, Country Club Plaza, and all surrounding neighborhoods.',
        services: ['Residential Air Duct Cleaning', 'Commercial Air Duct Cleaning', 'Chimney Sweep', 'Fireplace Inspection', 'Dryer Vent Cleaning'],
        path: '/service-areas/kansas-city',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
        featured: true,
    },
    {
        id: 2,
        city: 'Topeka',
        state: 'KS',
        description: 'Professional air duct cleaning and HVAC services for the capital city of Kansas. We serve all Topeka neighborhoods and surrounding communities.',
        services: ['Residential Air Duct Cleaning', 'Commercial Air Duct Cleaning', 'Chimney Sweep'],
        path: '/service-areas/topeka',
        image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80',
        featured: false,
    },
    {
        id: 3,
        city: 'Lawrence',
        state: 'KS',
        description: 'Complete duct cleaning solutions for Lawrence homes and businesses. From the University of Kansas area to all residential neighborhoods.',
        services: ['Residential Air Duct Cleaning', 'Commercial Air Duct Cleaning', 'Dryer Vent Cleaning'],
        path: '/service-areas/lawrence',
        image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80',
        featured: false,
    },
    {
        id: 4,
        city: 'St. Joseph',
        state: 'MO',
        description: 'Quality air duct services for St. Joseph and the surrounding northwest Missouri region. Reliable, professional service you can trust.',
        services: ['Residential Air Duct Cleaning', 'Commercial Air Duct Cleaning', 'Chimney Sweep'],
        path: '/service-areas/st-joseph',
        image: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=600&q=80',
        featured: false,
    },
    {
        id: 5,
        city: 'Overland Park',
        state: 'KS',
        description: 'Expert HVAC and duct cleaning for Overland Park residents and businesses. Serving Johnson County with excellence.',
        services: ['Residential Air Duct Cleaning', 'Commercial Air Duct Cleaning', 'Dryer Vent Cleaning'],
        path: '/service-areas/overland-park',
        image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80',
        featured: false,
    },
    {
        id: 6,
        city: 'Olathe',
        state: 'KS',
        description: 'Complete air duct and HVAC cleaning services for Olathe and surrounding Johnson County areas.',
        services: ['Residential Air Duct Cleaning', 'Commercial Air Duct Cleaning'],
        path: '/service-areas/olathe',
        image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=600&q=80',
        featured: false,
    },
];

const ServiceAreasPage = () => {
    const { openBooking } = useBooking();

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
                            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-primary-300 text-sm font-semibold mb-6">
                                <MapPin className="w-4 h-4" />
                                Service Areas
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
                                Areas We Serve
                            </h1>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                                We proudly provide professional air duct cleaning and HVAC services
                                throughout the Kansas City metropolitan area and beyond.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Service Areas Grid */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {serviceAreas.map((area, index) => (
                                <motion.div
                                    key={area.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="group"
                                >
                                    <div className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col ${area.featured ? 'ring-2 ring-primary-500' : ''
                                        }`}>
                                        {/* Image */}
                                        <div className="relative h-48 overflow-hidden">
                                            <img
                                                src={area.image}
                                                alt={area.city}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            {area.featured && (
                                                <div className="absolute top-4 right-4 px-3 py-1 bg-accent-500 text-white text-xs font-semibold rounded-full">
                                                    Most Popular
                                                </div>
                                            )}
                                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                                                <div className="flex items-center gap-2 text-white">
                                                    <MapPin className="w-5 h-5 text-primary-400" />
                                                    <span className="text-xl font-bold">{area.city}</span>
                                                    <span className="text-gray-300">{area.state}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6 flex-grow flex flex-col">
                                            <p className="text-gray-600 mb-6 flex-grow">
                                                {area.description}
                                            </p>

                                            {/* Services */}
                                            <div className="space-y-2 mb-6">
                                                {area.services.slice(0, 3).map((service) => (
                                                    <div key={service} className="flex items-center gap-2 text-sm text-gray-600">
                                                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                                        {service}
                                                    </div>
                                                ))}
                                                {area.services.length > 3 && (
                                                    <p className="text-sm text-primary-500">+ {area.services.length - 3} more services</p>
                                                )}
                                            </div>

                                            {/* CTA */}
                                            <button
                                                onClick={() => openBooking()}
                                                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-xl font-semibold transition-all duration-300"
                                            >
                                                Book Service
                                                <ArrowRight className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Don't See Your Area CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center mt-16 bg-gray-50 rounded-2xl p-12"
                        >
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Don&apos;t see your area listed?
                            </h3>
                            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                                We may still be able to help! Contact us to discuss your location
                                and service needs. We&apos;re always expanding our service area.
                            </p>
                            <a
                                href="tel:+19139807242"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                            >
                                <Phone className="w-5 h-5" />
                                Call (913) 980-7242
                            </a>
                        </motion.div>
                    </div>
                </section>

                <CTA />
            </main>
            <Footer />
        </div>
    );
};

export default ServiceAreasPage;
