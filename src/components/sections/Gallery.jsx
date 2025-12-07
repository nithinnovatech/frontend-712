import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
    {
        id: 1,
        before: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
        after: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80',
        title: 'Residential Duct Cleaning',
        location: 'Kansas City, MO',
    },
    {
        id: 2,
        before: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80',
        after: 'https://images.unsplash.com/photo-1631545804120-2fefc6a03e6d?w=600&q=80',
        title: 'Commercial HVAC System',
        location: 'Topeka, KS',
    },
    {
        id: 3,
        before: 'https://images.unsplash.com/photo-1558618047-f4b511e6c1f1?w=600&q=80',
        after: 'https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=600&q=80',
        title: 'Chimney Sweep Service',
        location: 'Lawrence, KS',
    },
    {
        id: 4,
        before: 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=600&q=80',
        after: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
        title: 'Dryer Vent Cleaning',
        location: 'St. Joseph, MO',
    },
];

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [showBefore, setShowBefore] = useState(true);

    return (
        <section className="section-padding bg-white">
            <div className="container-custom">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold mb-4">
                        Our Work
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-gray-900 mb-6">
                        Recent Air Duct Cleaning Projects
                    </h2>
                    <p className="text-lg text-gray-600">
                        See the difference our professional cleaning services make.
                        Swipe through our before and after photos from recent projects.
                    </p>
                </motion.div>

                {/* Gallery Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {galleryImages.map((image, index) => (
                        <motion.div
                            key={image.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group cursor-pointer"
                            onClick={() => setSelectedImage(image)}
                        >
                            <div className="relative rounded-2xl overflow-hidden shadow-lg">
                                <div className="aspect-square">
                                    <img
                                        src={image.after}
                                        alt={image.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <p className="text-white font-bold text-lg">{image.title}</p>
                                        <p className="text-gray-300 text-sm">{image.location}</p>
                                    </div>
                                </div>

                                {/* Before/After Badge */}
                                <div className="absolute top-4 left-4 px-3 py-1 bg-accent-500 text-white text-xs font-semibold rounded-full">
                                    Before & After
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View More CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mt-12"
                >
                    <Link
                        to="/gallery"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                    >
                        View Full Gallery
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </motion.div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-6 right-6 p-2 text-white hover:text-primary-400 transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X className="w-8 h-8" />
                        </button>

                        <div
                            className="max-w-4xl w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative rounded-2xl overflow-hidden">
                                <img
                                    src={showBefore ? selectedImage.before : selectedImage.after}
                                    alt={selectedImage.title}
                                    className="w-full h-auto"
                                />

                                {/* Before/After Toggle */}
                                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex bg-white/10 backdrop-blur-lg rounded-full p-1">
                                    <button
                                        className={`px-6 py-2 rounded-full font-semibold transition-all ${showBefore ? 'bg-white text-gray-900' : 'text-white'
                                            }`}
                                        onClick={() => setShowBefore(true)}
                                    >
                                        Before
                                    </button>
                                    <button
                                        className={`px-6 py-2 rounded-full font-semibold transition-all ${!showBefore ? 'bg-white text-gray-900' : 'text-white'
                                            }`}
                                        onClick={() => setShowBefore(false)}
                                    >
                                        After
                                    </button>
                                </div>
                            </div>

                            <div className="mt-4 text-center text-white">
                                <h3 className="text-2xl font-bold">{selectedImage.title}</h3>
                                <p className="text-gray-400">{selectedImage.location}</p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Gallery;
