import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, Phone } from 'lucide-react';

const locations = [
    {
        id: 1,
        city: 'Kansas City',
        state: 'MO & KS',
        description: 'Serving the greater Kansas City metropolitan area with comprehensive air duct cleaning and HVAC services.',
        services: ['Residential', 'Commercial', 'Chimney', 'Dryer Vent'],
        path: '/service-areas/kansas-city',
        featured: true,
    },
    {
        id: 2,
        city: 'Topeka',
        state: 'KS',
        description: 'Professional air duct cleaning services for Topeka homes and businesses.',
        services: ['Residential', 'Commercial', 'Chimney'],
        path: '/service-areas/topeka',
        featured: false,
    },
    {
        id: 3,
        city: 'Lawrence',
        state: 'KS',
        description: 'Expert HVAC and duct cleaning solutions for Lawrence area residents.',
        services: ['Residential', 'Commercial', 'Dryer Vent'],
        path: '/service-areas/lawrence',
        featured: false,
    },
    {
        id: 4,
        city: 'St. Joseph',
        state: 'MO',
        description: 'Quality air duct services for St. Joseph and surrounding communities.',
        services: ['Residential', 'Commercial', 'Chimney'],
        path: '/service-areas/st-joseph',
        featured: false,
    },
];

const Locations = () => {
    return (
        <section className="section-padding bg-gradient-to-br from-slate-900 via-primary-900 to-slate-900 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-primary-300 text-sm font-semibold mb-4">
                        <MapPin className="w-4 h-4" />
                        Service Areas
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6">
                        Serving Kansas City & Surrounding Areas
                    </h2>
                    <p className="text-lg text-gray-300">
                        We proudly serve homeowners and businesses throughout the Kansas City metropolitan area
                        and beyond. Find your location below.
                    </p>
                </motion.div>

                {/* Locations Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {locations.map((location, index) => (
                        <motion.div
                            key={location.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link
                                to={location.path}
                                className={`block h-full p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 ${location.featured
                                    ? 'bg-gradient-to-br from-primary-500 to-secondary-500 shadow-2xl'
                                    : 'bg-white/10 backdrop-blur-sm hover:bg-white/20'
                                    }`}
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <MapPin className={`w-6 h-6 ${location.featured ? 'text-white' : 'text-primary-400'}`} />
                                    <div>
                                        <h3 className="text-xl font-bold">{location.city}</h3>
                                        <p className={`text-sm ${location.featured ? 'text-white/80' : 'text-gray-400'}`}>
                                            {location.state}
                                        </p>
                                    </div>
                                </div>

                                <p className={`mb-6 ${location.featured ? 'text-white/90' : 'text-gray-300'}`}>
                                    {location.description}
                                </p>

                                {/* Services Tags */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {location.services.map((service) => (
                                        <span
                                            key={service}
                                            className={`px-3 py-1 rounded-full text-xs font-medium ${location.featured
                                                ? 'bg-white/20 text-white'
                                                : 'bg-white/10 text-gray-300'
                                                }`}
                                        >
                                            {service}
                                        </span>
                                    ))}
                                </div>

                                <div className={`flex items-center gap-2 font-semibold ${location.featured ? 'text-white' : 'text-primary-400'
                                    }`}>
                                    Find Services
                                    <ArrowRight className="w-5 h-5" />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mt-16"
                >
                    <p className="text-gray-300 mb-4">Don&apos;t see your area? Give us a call!</p>
                    <a
                        href="tel:+19132446113"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                    >
                        <Phone className="w-5 h-5" />
                        Call (913) 244-6113
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Locations;
