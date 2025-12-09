import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Wind,
    Home,
    Building2,
    Flame,
    Shirt,
    Search,
    ArrowLeft,
    CheckCircle,
    Phone,
    Calendar
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
        longDescription: 'Our professional air duct cleaning service uses state-of-the-art equipment to thoroughly clean your entire HVAC system. We remove years of accumulated dust, allergens, pet dander, and other contaminants that can affect your health and system efficiency. Our certified technicians follow industry best practices to ensure a complete and safe cleaning process.',
        icon: Wind,
        color: 'from-primary-500 to-primary-600',
        image: '/images/services/air-duct-cleaning.png',
        features: [
            'Complete duct system cleaning',
            'HEPA-filtered vacuum equipment',
            'Before & after inspection',
            'Improved HVAC efficiency',
            'Reduced energy costs',
            'Healthier indoor air',
        ],
        benefits: [
            'Removes up to 99% of airborne contaminants',
            'Extends HVAC system lifespan',
            'Reduces allergy and asthma symptoms',
            'Eliminates unpleasant odors',
            'Improves airflow throughout your home',
            'Lowers utility bills by up to 30%'
        ]
    },
    {
        id: 2,
        title: 'Residential Air Duct Cleaning',
        slug: 'residential-duct-cleaning',
        description: 'Our Residential Air Duct Cleaning service focuses on eliminating allergens, dust, and pollutants that accumulate in your ductwork over time.',
        longDescription: 'Keep your family breathing clean, healthy air with our residential air duct cleaning service. We specialize in home HVAC systems and understand the unique challenges of residential ductwork. Our gentle yet thorough cleaning process is safe for all types of homes and duct materials.',
        icon: Home,
        color: 'from-blue-500 to-blue-600',
        image: '/images/services/residential-duct-cleaning.png',
        features: [
            'Allergen and dust removal',
            'Pet dander elimination',
            'Mold prevention',
            'Better air quality',
            'Energy savings',
            'Extended HVAC life',
        ],
        benefits: [
            'Family-friendly cleaning solutions',
            'Flexible scheduling around your routine',
            'Minimal disruption to your home',
            'Safe for children and pets',
            'Improves sleep quality',
            'Reduces household dust'
        ]
    },
    {
        id: 3,
        title: 'Commercial Air Duct Cleaning',
        slug: 'commercial-duct-cleaning',
        description: 'We ensure that your workplace air ducts are free from contaminants that can affect employee health and productivity.',
        longDescription: 'Maintain a healthy, productive work environment with our commercial air duct cleaning services. We work with offices, retail spaces, restaurants, and industrial facilities to ensure optimal air quality. Our team can handle large-scale HVAC systems and work around your business hours to minimize disruption.',
        icon: Building2,
        color: 'from-purple-500 to-purple-600',
        image: '/images/services/commercial-duct-cleaning.png',
        features: [
            'Minimal business disruption',
            'After-hours service available',
            'Large-scale HVAC systems',
            'Employee health improvement',
            'Reduced maintenance costs',
            'Energy efficiency boost',
        ],
        benefits: [
            'Improves employee productivity',
            'Reduces sick days',
            'Complies with health regulations',
            'Enhances customer experience',
            'Lowers operational costs',
            'Extends equipment warranty'
        ]
    },
    {
        id: 4,
        title: 'Chimney Sweep',
        slug: 'chimney-sweep',
        description: 'Our Chimney Sweep service provides comprehensive cleaning to prevent the buildup of creosote and other flammable materials that can lead to chimney fires.',
        longDescription: 'Protect your home and family with professional chimney sweep services. Our certified chimney sweeps remove dangerous creosote buildup, inspect for structural issues, and ensure your chimney is safe for use. We follow National Fire Protection Association (NFPA) standards for all chimney cleaning and inspection services.',
        icon: Flame,
        color: 'from-orange-500 to-orange-600',
        image: '/images/services/chimney-sweep.png',
        features: [
            'Creosote removal',
            'Flue cleaning',
            'Damper inspection',
            'Firebox cleaning',
            'Structural assessment',
            'Fire prevention',
        ],
        benefits: [
            'Prevents chimney fires',
            'Improves fireplace efficiency',
            'Eliminates smoke backdraft',
            'Removes animal nests and debris',
            'Extends chimney lifespan',
            'Peace of mind for your family'
        ]
    },
    {
        id: 5,
        title: 'Fireplace Inspection',
        slug: 'fireplace-inspection',
        description: 'Our Fireplace Inspection service offers a detailed examination of your fireplace and chimney system to ensure they are in safe working condition.',
        longDescription: 'Ensure your fireplace is safe and ready to use with our comprehensive inspection service. Our certified inspectors examine every component of your fireplace and chimney system, identifying potential hazards and recommending necessary repairs. We provide detailed reports with photos and clear explanations.',
        icon: Search,
        color: 'from-red-500 to-red-600',
        image: '/images/services/fireplace-inspection.png',
        features: [
            'Complete safety check',
            'Blockage detection',
            'Structural integrity',
            'Ventilation assessment',
            'Repair recommendations',
            'Peace of mind',
        ],
        benefits: [
            'Identifies hidden dangers',
            'Prevents carbon monoxide leaks',
            'Ensures proper ventilation',
            'Maintains insurance compliance',
            'Detailed inspection report',
            'Expert repair guidance'
        ]
    },
    {
        id: 6,
        title: 'Clothes Dryer Cleaning',
        slug: 'dryer-cleaning',
        description: 'Our Clothes Dryer Cleaning Service is dedicated to ensuring the safety and efficiency of your laundry appliances.',
        longDescription: 'Reduce fire risk and improve dryer performance with our professional dryer vent cleaning service. Lint buildup is a leading cause of house fires, and our thorough cleaning removes this dangerous accumulation. We clean the entire vent system from the dryer to the exterior exhaust, ensuring optimal airflow and safety.',
        icon: Shirt,
        color: 'from-teal-500 to-teal-600',
        image: '/images/services/dryer-cleaning.png',
        features: [
            'Lint removal',
            'Vent cleaning',
            'Fire risk reduction',
            'Faster drying times',
            'Energy efficiency',
            'Extended dryer life',
        ],
        benefits: [
            'Prevents dryer fires',
            'Reduces drying time by 50%',
            'Lowers energy bills',
            'Extends appliance lifespan',
            'Improves clothes care',
            'Eliminates musty odors'
        ]
    },
];

const ServiceDetailPage = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const { openBooking } = useBooking();

    const service = services.find(s => s.slug === slug);

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
                    <Link to="/services" className="text-primary-500 hover:underline">
                        Back to Services
                    </Link>
                </div>
            </div>
        );
    }

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

                    <div className="container-custom relative z-10">
                        <button
                            onClick={() => navigate('/services')}
                            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            Back to Services
                        </button>

                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className={`inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r ${service.color} rounded-full mb-6`}>
                                    <service.icon className="w-6 h-6 text-white" />
                                    <span className="text-white font-semibold">Professional Service</span>
                                </div>

                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                                    {service.title}
                                </h1>

                                <p className="text-xl text-gray-300 mb-8">
                                    {service.longDescription}
                                </p>

                                <div className="flex flex-wrap gap-4">
                                    <button
                                        onClick={() => openBooking(service.title)}
                                        className="inline-flex items-center gap-2 px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                                    >
                                        <Calendar className="w-5 h-5" />
                                        Book Now
                                    </button>
                                    <a
                                        href="tel:+19132446113"
                                        className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 hover:bg-white/10 text-white rounded-xl font-semibold transition-all duration-300"
                                    >
                                        <Phone className="w-5 h-5" />
                                        (913) 244-6113
                                    </a>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="relative"
                            >
                                <div className="rounded-3xl overflow-hidden shadow-2xl">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-96 object-cover"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Features & Benefits */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="grid lg:grid-cols-2 gap-16">
                            {/* What's Included */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                                    What's Included
                                </h2>
                                <div className="space-y-4">
                                    {service.features.map((feature, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-lg text-gray-700">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Benefits */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                                    Key Benefits
                                </h2>
                                <div className="space-y-4">
                                    {service.benefits.map((benefit, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <CheckCircle className="w-6 h-6 text-primary-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-lg text-gray-700">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                <CTA />
            </main>
            <Footer />
        </div>
    );
};

export default ServiceDetailPage;
