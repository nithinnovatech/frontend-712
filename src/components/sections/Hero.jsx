import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Star, Shield, Clock, CheckCircle } from 'lucide-react';
import { useBooking } from '../BookingModal';

const Hero = () => {
    const { openBooking } = useBooking();

    const features = [
        { icon: Shield, text: 'Licensed & Insured' },
        { icon: Clock, text: 'Same Day Service' },
        { icon: Star, text: '5-Star Rated' },
    ];

    return (
        <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-primary-900 to-slate-900 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            {/* Floating Orbs - Hidden on mobile for performance */}
            <div className="hidden md:block absolute top-20 left-10 w-72 h-72 bg-primary-500/30 rounded-full blur-3xl animate-float" />
            <div className="hidden md:block absolute bottom-20 right-10 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />

            <div className="container-custom relative z-10 pt-24 sm:pt-28 md:pt-32 pb-16 md:pb-20">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-200px)] md:min-h-[80vh]">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center lg:text-left"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full text-primary-300 text-xs sm:text-sm mb-4 sm:mb-6">
                            <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                            <span>Trusted by 10,000+ Homeowners</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-4 sm:mb-6 leading-tight">
                            Expert <span className="text-gradient">Air Duct Cleaning</span> Services in Kansas City
                        </h1>

                        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                            Breathe cleaner, healthier air. Our professional duct cleaning services remove dust,
                            allergens, and pollutants, improving your home&apos;s air quality and HVAC efficiency.
                        </p>

                        {/* Features - Scroll horizontally on mobile */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-4 mb-6 sm:mb-8">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white"
                                >
                                    <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary-400" />
                                    <span className="text-xs sm:text-sm font-medium whitespace-nowrap">{feature.text}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons - Stack on mobile */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                            <button
                                onClick={() => openBooking()}
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-accent-500 hover:bg-accent-600 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95"
                            >
                                Book Now
                                <ArrowRight className="w-5 h-5" />
                            </button>
                            <a
                                href="tel:+19139807242"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/30 hover:bg-white/10 text-white rounded-xl font-semibold transition-all duration-300"
                            >
                                <Phone className="w-5 h-5" />
                                (913) 980-7242
                            </a>
                        </div>
                    </motion.div>

                    {/* Hero Image - Hidden on mobile, shown on lg */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative">
                            {/* Main Image */}
                            <div className="rounded-3xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                                <img
                                    src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80"
                                    alt="Professional air duct cleaning"
                                    className="w-full h-96 object-cover"
                                />
                            </div>

                            {/* Floating Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-4 sm:p-6 rounded-2xl shadow-xl"
                            >
                                <div className="flex items-center gap-3 sm:gap-4">
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary-100 rounded-xl flex items-center justify-center">
                                        <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-primary-500" />
                                    </div>
                                    <div>
                                        <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">10,000+</p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Happy Customers</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Rating Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                                className="absolute -top-6 -right-6 bg-white dark:bg-slate-800 p-3 sm:p-4 rounded-2xl shadow-xl"
                            >
                                <div className="flex items-center gap-2">
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                                        ))}
                                    </div>
                                    <span className="font-bold text-gray-900 dark:text-white">4.9</span>
                                </div>
                                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">Google Reviews</p>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Mobile Stats - Show on smaller screens */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="lg:hidden grid grid-cols-2 gap-4 mt-4"
                    >
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                            <div className="flex justify-center mb-2">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                                ))}
                            </div>
                            <p className="text-2xl font-bold text-white">4.9</p>
                            <p className="text-xs text-gray-300">Google Rating</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                            <CheckCircle className="w-8 h-8 text-primary-400 mx-auto mb-2" />
                            <p className="text-2xl font-bold text-white">10k+</p>
                            <p className="text-xs text-gray-300">Happy Customers</p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Wave Divider */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                    <path
                        d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
                        fill="white"
                    />
                </svg>
            </div>
        </section>
    );
};

export default Hero;
