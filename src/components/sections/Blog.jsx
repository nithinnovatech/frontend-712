import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';

const blogPosts = [
    {
        id: 1,
        title: 'Why Air Duct Cleaning is Essential for Your Health',
        excerpt: 'Discover how regular air duct cleaning can improve your indoor air quality and protect your family from allergens and pollutants.',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
        author: 'John Smith',
        date: 'Dec 5, 2024',
        readTime: '5 min read',
        category: 'Health & Wellness',
        slug: 'air-duct-cleaning-essential-health',
    },
    {
        id: 2,
        title: 'Signs Your Air Ducts Need Professional Cleaning',
        excerpt: 'Learn the warning signs that indicate your air ducts are overdue for a professional cleaning service.',
        image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80',
        author: 'Sarah Johnson',
        date: 'Dec 1, 2024',
        readTime: '4 min read',
        category: 'Tips & Guides',
        slug: 'signs-air-ducts-need-cleaning',
    },
    {
        id: 3,
        title: 'The Benefits of Commercial Duct Cleaning',
        excerpt: 'How professional duct cleaning can improve workplace air quality, employee health, and reduce energy costs.',
        image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80',
        author: 'Mike Wilson',
        date: 'Nov 28, 2024',
        readTime: '6 min read',
        category: 'Business',
        slug: 'benefits-commercial-duct-cleaning',
    },
];

const Blog = () => {
    return (
        <section className="section-padding bg-gray-50">
            <div className="container-custom">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
                >
                    <div>
                        <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold mb-4">
                            Our Blog
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-gray-900">
                            Latest News & Tips
                        </h2>
                    </div>
                    <Link
                        to="/blog"
                        className="inline-flex items-center gap-2 text-primary-500 font-semibold hover:gap-4 transition-all duration-300"
                    >
                        See All Posts
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </motion.div>

                {/* Blog Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group"
                        >
                            <Link to={`/blog/${post.slug}`} className="block">
                                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                                    {/* Image */}
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 bg-primary-500 text-white text-xs font-semibold rounded-full">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-500 transition-colors line-clamp-2">
                                            {post.title}
                                        </h3>
                                        <p className="text-gray-600 mb-4 line-clamp-2">
                                            {post.excerpt}
                                        </p>

                                        {/* Meta */}
                                        <div className="flex items-center justify-between text-sm text-gray-500">
                                            <div className="flex items-center gap-4">
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="w-4 h-4" />
                                                    {post.date}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Clock className="w-4 h-4" />
                                                    {post.readTime}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
