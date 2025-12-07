import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Wind,
    Home,
    Building2,
    Flame,
    Shirt,
    Search,
    ArrowRight,
    CheckCircle
} from 'lucide-react';
import { useBooking } from '../BookingModal';

const services = [
    {
        id: 1,
        title: 'Residential Air Duct Cleaning',
        description: 'Eliminate allergens, dust, and pollutants from your home. Improve air quality and HVAC efficiency.',
        icon: Home,
        path: '/services/residential-duct-cleaning',
        color: 'from-blue-500 to-blue-600',
        features: ['Allergen Removal', 'Better Air Quality', 'Energy Savings'],
    },
    {
        id: 2,
        title: 'Commercial Air Duct Cleaning',
        description: 'Keep your workplace air clean and employees healthy with our commercial HVAC services.',
        icon: Building2,
        path: '/services/commercial-duct-cleaning',
        color: 'from-purple-500 to-purple-600',
        features: ['Employee Health', 'HVAC Efficiency', 'Cost Reduction'],
    },
    {
        id: 3,
        title: 'Chimney Sweep',
        description: 'Prevent chimney fires with professional cleaning. We remove creosote and inspect for issues.',
        icon: Flame,
        path: '/services/chimney-sweep',
        color: 'from-orange-500 to-orange-600',
        features: ['Fire Prevention', 'Safety Check', 'Professional Care'],
    },
    {
        id: 4,
        title: 'Fireplace Inspection',
        description: 'Comprehensive fireplace and chimney examination for safe operation and ventilation.',
        icon: Search,
        path: '/services/fireplace-inspection',
        color: 'from-red-500 to-red-600',
        features: ['Safety Inspection', 'Blockage Check', 'Ventilation Review'],
    },
    {
        id: 5,
        title: 'Clothes Dryer Cleaning',
        description: 'Reduce fire risk and improve dryer efficiency. Clear lint and blockages from your vent system.',
        icon: Shirt,
        path: '/services/dryer-cleaning',
        color: 'from-teal-500 to-teal-600',
        features: ['Fire Safety', 'Energy Efficiency', 'Faster Drying'],
    },
    {
        id: 6,
        title: 'Air Duct Installation',
        description: 'Expert duct installation for new construction or renovations with quality materials.',
        icon: Wind,
        path: '/services/duct-installation',
        color: 'from-emerald-500 to-emerald-600',
        features: ['New Installation', 'Quality Materials', 'Expert Service'],
    },
];

const Services = () => {
    const { openBooking } = useBooking();

    return (
        <section className="section-padding bg-gray-50">
            <div className="container-custom">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-10 sm:mb-16"
                >
                    <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-primary-100 text-primary-600 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                        Our Services
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-gray-900 mb-4 sm:mb-6">
                        Professional Cleaning Services
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600 px-4 sm:px-0">
                        Comprehensive cleaning services to ensure your property is safe, efficient, and healthy.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="group bg-white rounded-2xl p-5 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                                {/* Icon */}
                                <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <service.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                                </div>

                                {/* Content */}
                                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-primary-500 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 flex-grow">
                                    {service.description}
                                </p>

                                {/* Features - Hidden on very small screens */}
                                <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6 hidden sm:block">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                                            <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-500 flex-shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA */}
                                <button
                                    onClick={() => openBooking(service.title)}
                                    className="inline-flex items-center gap-2 text-primary-500 font-semibold group-hover:gap-3 transition-all duration-300 text-sm sm:text-base"
                                >
                                    Book Now
                                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mt-10 sm:mt-16"
                >
                    <Link
                        to="/services"
                        className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 text-sm sm:text-base"
                    >
                        View All Services
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
