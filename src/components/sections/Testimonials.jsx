import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: 'Jennifer Martinez',
        location: 'Kansas City, MO',
        rating: 5,
        text: 'I&A Services did an amazing job cleaning our air ducts. The difference in air quality is noticeable immediately. The team was professional, on time, and left everything spotless.',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
    },
    {
        id: 2,
        name: 'Robert Thompson',
        location: 'Topeka, KS',
        rating: 5,
        text: 'Excellent service! The technicians were knowledgeable and explained everything they were doing. Our HVAC system runs so much better now. Highly recommend!',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
    },
    {
        id: 3,
        name: 'Amanda Chen',
        location: 'Lawrence, KS',
        rating: 5,
        text: 'We had both our air ducts and dryer vent cleaned. The crew was friendly and efficient. The price was fair and the results exceeded our expectations.',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
    },
    {
        id: 4,
        name: 'Michael Davis',
        location: 'St. Joseph, MO',
        rating: 5,
        text: 'Called for a chimney sweep and they came out the same day. Very thorough work and great customer service. Will definitely use them again!',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
    },
];

const Testimonials = () => {
    return (
        <section className="section-padding bg-white overflow-hidden">
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
                        Testimonials
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-gray-900 mb-6">
                        What Our Customers Say
                    </h2>
                    <p className="text-lg text-gray-600">
                        Don&apos;t just take our word for it. Here&apos;s what our satisfied customers
                        have to say about our services.
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-gray-50 rounded-2xl p-8 relative"
                        >
                            {/* Quote Icon */}
                            <div className="absolute top-6 right-6 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                                <Quote className="w-6 h-6 text-primary-500" />
                            </div>

                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                ))}
                            </div>

                            {/* Text */}
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                &ldquo;{testimonial.text}&rdquo;
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-14 h-14 rounded-full object-cover"
                                />
                                <div>
                                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Google Reviews Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mt-12"
                >
                    <div className="inline-flex items-center gap-4 bg-gray-50 rounded-full px-8 py-4">
                        <div className="flex items-center gap-2">
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                                ))}
                            </div>
                            <span className="text-2xl font-bold text-gray-900">4.9</span>
                        </div>
                        <div className="h-8 w-px bg-gray-300" />
                        <div className="text-left">
                            <p className="font-semibold text-gray-900">Google Rating</p>
                            <p className="text-sm text-gray-500">Based on 200+ reviews</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
