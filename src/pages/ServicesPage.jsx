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
    CheckCircle,
    Phone
} from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import CTA from '../components/sections/CTA';
import { useBooking } from '../components/BookingModal';

const services = [
    {
        id: 1,
        title: 'Air Duct Cleaning',
        slug: 'air-duct-cleaning',
        description: 'Comprehensive air duct cleaning services for residential and commercial properties. We remove dust, allergens, and contaminants to improve your indoor air quality.',
        icon: Wind,
        color: 'from-primary-500 to-primary-600',
        image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80',
        features: [
            'Complete duct system cleaning',
            'HEPA-filtered vacuum equipment',
            'Before & after inspection',
            'Improved HVAC efficiency',
            'Reduced energy costs',
            'Healthier indoor air',
        ],
    },
    {
        id: 2,
        title: 'Residential Air Duct Cleaning',
        slug: 'residential-duct-cleaning',
        description: 'Our Residential Air Duct Cleaning service focuses on eliminating allergens, dust, and pollutants that accumulate in your ductwork over time.',
        icon: Home,
        color: 'from-blue-500 to-blue-600',
        image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
        features: [
            'Allergen and dust removal',
            'Pet dander elimination',
            'Mold prevention',
            'Better air quality',
            'Energy savings',
            'Extended HVAC life',
        ],
    },
    {
        id: 3,
        title: 'Commercial Air Duct Cleaning',
        slug: 'commercial-duct-cleaning',
        description: 'We ensure that your workplace air ducts are free from contaminants that can affect employee health and productivity.',
        icon: Building2,
        color: 'from-purple-500 to-purple-600',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
        features: [
            'Minimal business disruption',
            'After-hours service available',
            'Large-scale HVAC systems',
            'Employee health improvement',
            'Reduced maintenance costs',
            'Energy efficiency boost',
        ],
    },
    {
        id: 4,
        title: 'Chimney Sweep',
        slug: 'chimney-sweep',
        description: 'Our Chimney Sweep service provides comprehensive cleaning to prevent the buildup of creosote and other flammable materials that can lead to chimney fires.',
        icon: Flame,
        color: 'from-orange-500 to-orange-600',
        image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80',
        features: [
            'Creosote removal',
            'Flue cleaning',
            'Damper inspection',
            'Firebox cleaning',
            'Structural assessment',
            'Fire prevention',
        ],
    },
    {
        id: 5,
        title: 'Fireplace Inspection',
        slug: 'fireplace-inspection',
        description: 'Our Fireplace Inspection service offers a detailed examination of your fireplace and chimney system to ensure they are in safe working condition.',
        icon: Search,
        color: 'from-red-500 to-red-600',
        image: 'https://images.unsplash.com/photo-1545873324-bb42e59ca61f?w=800&q=80',
        features: [
            'Complete safety check',
            'Blockage detection',
            'Structural integrity',
            'Ventilation assessment',
            'Repair recommendations',
            'Peace of mind',
        ],
    },
    {
        id: 6,
        title: 'Clothes Dryer Cleaning',
        slug: 'dryer-cleaning',
        description: 'Our Clothes Dryer Cleaning Service is dedicated to ensuring the safety and efficiency of your laundry appliances.',
        icon: Shirt,
        color: 'from-teal-500 to-teal-600',
        image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=800&q=80',
        features: [
            'Lint removal',
            'Vent cleaning',
            'Fire risk reduction',
            'Faster drying times',
            'Energy efficiency',
            'Extended dryer life',
        ],
    },
];

const ServicesPage = () => {
    const { openBooking } = useBooking();

    return (
        <div className="min-h-screen">
            <Header />
            <main>
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-primary-900 to-slate-900">
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute inset-0" style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        }} />
                    </div>

                    <div className="container-custom relative z-10 text-center text-white">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-primary-300 text-sm font-semibold mb-6">
                                Our Services
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
                                Professional Cleaning Services
                            </h1>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                                From air ducts to chimneys, we provide comprehensive cleaning services
                                to keep your home or business safe, efficient, and healthy.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Services List */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="space-y-24">
                            {services.map((service, index) => (
                                <motion.div
                                    key={service.id}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                    className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                                        }`}
                                >
                                    {/* Image */}
                                    <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                                        <div className="rounded-3xl overflow-hidden shadow-2xl">
                                            <img
                                                src={service.image}
                                                alt={service.title}
                                                className="w-full h-96 object-cover"
                                            />
                                        </div>
                                        <div className={`absolute -bottom-6 ${index % 2 === 1 ? '-left-6' : '-right-6'} bg-gradient-to-r ${service.color} p-6 rounded-2xl shadow-xl`}>
                                            <service.icon className="w-12 h-12 text-white" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-6">
                                            {service.title}
                                        </h2>
                                        <p className="text-lg text-gray-600 mb-8">
                                            {service.description}
                                        </p>

                                        {/* Features */}
                                        <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                            {service.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-center gap-3">
                                                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                                    <span className="text-gray-700">{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* CTAs */}
                                        <div className="flex flex-wrap gap-4">
                                            <Link
                                                to={`/services/${service.slug}`}
                                                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-xl font-semibold transition-all duration-300"
                                            >
                                                Learn More
                                                <ArrowRight className="w-5 h-5" />
                                            </Link>
                                            <button
                                                onClick={() => openBooking(service.title)}
                                                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white rounded-xl font-semibold transition-all duration-300"
                                            >
                                                <Phone className="w-5 h-5" />
                                                Book Now
                                            </button>
                                        </div>
                                    </div>
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

export default ServicesPage;
