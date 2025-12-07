import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import CTA from '../components/sections/CTA';

const galleryItems = [
    {
        id: 1,
        category: 'Residential',
        before: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
        after: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80',
        title: 'Home Air Duct Cleaning',
        location: 'Kansas City, MO',
    },
    {
        id: 2,
        category: 'Commercial',
        before: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80',
        after: 'https://images.unsplash.com/photo-1631545804120-2fefc6a03e6d?w=800&q=80',
        title: 'Office HVAC System',
        location: 'Topeka, KS',
    },
    {
        id: 3,
        category: 'Chimney',
        before: 'https://images.unsplash.com/photo-1558618047-f4b511e6c1f1?w=800&q=80',
        after: 'https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=800&q=80',
        title: 'Chimney Sweep',
        location: 'Lawrence, KS',
    },
    {
        id: 4,
        category: 'Dryer Vent',
        before: 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=800&q=80',
        after: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
        title: 'Dryer Vent Cleaning',
        location: 'St. Joseph, MO',
    },
    {
        id: 5,
        category: 'Residential',
        before: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80',
        after: 'https://images.unsplash.com/photo-1631545804120-2fefc6a03e6d?w=800&q=80',
        title: 'Complete Duct System',
        location: 'Overland Park, KS',
    },
    {
        id: 6,
        category: 'Commercial',
        before: 'https://images.unsplash.com/photo-1631545804120-2fefc6a03e6d?w=800&q=80',
        after: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80',
        title: 'Restaurant Ventilation',
        location: 'Kansas City, KS',
    },
    {
        id: 7,
        category: 'Chimney',
        before: 'https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=800&q=80',
        after: 'https://images.unsplash.com/photo-1558618047-f4b511e6c1f1?w=800&q=80',
        title: 'Fireplace Restoration',
        location: 'Lee Summit, MO',
    },
    {
        id: 8,
        category: 'Residential',
        before: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
        after: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80',
        title: 'New Home Duct Install',
        location: 'Olathe, KS',
    },
];

const categories = ['All', 'Residential', 'Commercial', 'Chimney', 'Dryer Vent'];

const GalleryPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedImage, setSelectedImage] = useState(null);
    const [showBefore, setShowBefore] = useState(false);

    const filteredItems = selectedCategory === 'All'
        ? galleryItems
        : galleryItems.filter(item => item.category === selectedCategory);

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
                                Our Work
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
                                Project Gallery
                            </h1>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                                See the difference our professional cleaning services make.
                                Browse our before and after photos from recent projects.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Gallery Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        {/* Filter Tabs */}
                        <div className="flex flex-wrap justify-center gap-3 mb-12">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${selectedCategory === category
                                            ? 'bg-primary-500 text-white shadow-lg'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>

                        {/* Gallery Grid */}
                        <motion.div
                            layout
                            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                        >
                            <AnimatePresence>
                                {filteredItems.map((item) => (
                                    <motion.div
                                        key={item.id}
                                        layout
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        transition={{ duration: 0.4 }}
                                        className="group cursor-pointer"
                                        onClick={() => setSelectedImage(item)}
                                    >
                                        <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-square">
                                            <img
                                                src={item.after}
                                                alt={item.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />

                                            {/* Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                                    <span className="inline-block px-3 py-1 bg-primary-500 text-white text-xs font-semibold rounded-full mb-2">
                                                        {item.category}
                                                    </span>
                                                    <p className="text-white font-bold text-lg">{item.title}</p>
                                                    <p className="text-gray-300 text-sm">{item.location}</p>
                                                </div>
                                            </div>

                                            {/* Before/After Badge */}
                                            <div className="absolute top-4 right-4 px-3 py-1 bg-accent-500 text-white text-xs font-semibold rounded-full">
                                                Before & After
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </motion.div>
                    </div>
                </section>

                <CTA />
            </main>
            <Footer />

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-6 right-6 p-2 text-white hover:text-primary-400 transition-colors z-10"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X className="w-8 h-8" />
                        </button>

                        <div
                            className="max-w-5xl w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative rounded-2xl overflow-hidden bg-gray-900">
                                <img
                                    src={showBefore ? selectedImage.before : selectedImage.after}
                                    alt={selectedImage.title}
                                    className="w-full h-auto max-h-[70vh] object-contain"
                                />

                                {/* Before/After Toggle */}
                                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex bg-black/50 backdrop-blur-lg rounded-full p-1">
                                    <button
                                        className={`px-8 py-3 rounded-full font-semibold transition-all ${showBefore ? 'bg-white text-gray-900' : 'text-white'
                                            }`}
                                        onClick={() => setShowBefore(true)}
                                    >
                                        Before
                                    </button>
                                    <button
                                        className={`px-8 py-3 rounded-full font-semibold transition-all ${!showBefore ? 'bg-white text-gray-900' : 'text-white'
                                            }`}
                                        onClick={() => setShowBefore(false)}
                                    >
                                        After
                                    </button>
                                </div>
                            </div>

                            <div className="mt-6 text-center text-white">
                                <span className="inline-block px-3 py-1 bg-primary-500 text-white text-sm font-semibold rounded-full mb-2">
                                    {selectedImage.category}
                                </span>
                                <h3 className="text-2xl font-bold">{selectedImage.title}</h3>
                                <p className="text-gray-400">{selectedImage.location}</p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default GalleryPage;
