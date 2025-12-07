import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Search } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const blogPosts = [
    {
        id: 1,
        title: 'Why Air Duct Cleaning is Essential for Your Health',
        excerpt: 'Discover how regular air duct cleaning can improve your indoor air quality and protect your family from allergens and pollutants that accumulate in your HVAC system.',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
        author: 'John Smith',
        date: 'Dec 5, 2024',
        readTime: '5 min read',
        category: 'Health & Wellness',
        slug: 'air-duct-cleaning-essential-health',
    },
    {
        id: 2,
        title: 'Signs Your Air Ducts Need Professional Cleaning',
        excerpt: 'Learn the warning signs that indicate your air ducts are overdue for a professional cleaning service. From increased dust to strange odors, know when to call the experts.',
        image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80',
        author: 'Sarah Johnson',
        date: 'Dec 1, 2024',
        readTime: '4 min read',
        category: 'Tips & Guides',
        slug: 'signs-air-ducts-need-cleaning',
    },
    {
        id: 3,
        title: 'The Benefits of Commercial Duct Cleaning',
        excerpt: 'How professional duct cleaning can improve workplace air quality, employee health, and reduce energy costs for your business.',
        image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80',
        author: 'Mike Wilson',
        date: 'Nov 28, 2024',
        readTime: '6 min read',
        category: 'Business',
        slug: 'benefits-commercial-duct-cleaning',
    },
    {
        id: 4,
        title: 'Chimney Safety: What Every Homeowner Should Know',
        excerpt: 'Essential chimney safety tips and maintenance guidelines to keep your fireplace running safely and efficiently throughout the winter months.',
        image: 'https://images.unsplash.com/photo-1558618047-f4b511e6c1f1?w=800&q=80',
        author: 'Emily Chen',
        date: 'Nov 20, 2024',
        readTime: '7 min read',
        category: 'Safety',
        slug: 'chimney-safety-homeowner-guide',
    },
    {
        id: 5,
        title: 'Dryer Vent Cleaning: Prevent Fires and Save Energy',
        excerpt: 'Learn why regular dryer vent cleaning is critical for fire prevention and how it can significantly reduce your energy bills.',
        image: 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=800&q=80',
        author: 'John Smith',
        date: 'Nov 15, 2024',
        readTime: '5 min read',
        category: 'Safety',
        slug: 'dryer-vent-cleaning-fire-prevention',
    },
    {
        id: 6,
        title: 'How Often Should You Clean Your Air Ducts?',
        excerpt: 'A comprehensive guide to air duct cleaning frequency based on your home environment, pets, allergies, and local conditions.',
        image: 'https://images.unsplash.com/photo-1631545804120-2fefc6a03e6d?w=800&q=80',
        author: 'Sarah Johnson',
        date: 'Nov 10, 2024',
        readTime: '4 min read',
        category: 'Tips & Guides',
        slug: 'how-often-clean-air-ducts',
    },
];

const categories = ['All', 'Health & Wellness', 'Tips & Guides', 'Business', 'Safety'];

const BlogPage = () => {
    const [selectedCategory, setSelectedCategory] = React.useState('All');
    const [searchQuery, setSearchQuery] = React.useState('');

    const filteredPosts = blogPosts.filter(post => {
        const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

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
                                Our Blog
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
                                News, Tips & Insights
                            </h1>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                                Stay informed with the latest tips, guides, and news about air duct cleaning,
                                HVAC maintenance, and indoor air quality.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Blog Section */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        {/* Filters */}
                        <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12">
                            {/* Category Tabs */}
                            <div className="flex flex-wrap justify-center gap-3">
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => setSelectedCategory(category)}
                                        className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${selectedCategory === category
                                                ? 'bg-primary-500 text-white shadow-lg'
                                                : 'bg-white text-gray-700 hover:bg-gray-100'
                                            }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>

                            {/* Search */}
                            <div className="relative w-full md:w-80">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search articles..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                                />
                            </div>
                        </div>

                        {/* Blog Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredPosts.map((post, index) => (
                                <motion.article
                                    key={post.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="group"
                                >
                                    <Link to={`/blog/${post.slug}`} className="block">
                                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                                            {/* Image */}
                                            <div className="relative h-56 overflow-hidden">
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
                                            <div className="p-6 flex-grow flex flex-col">
                                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-500 transition-colors line-clamp-2">
                                                    {post.title}
                                                </h3>
                                                <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
                                                    {post.excerpt}
                                                </p>

                                                {/* Meta */}
                                                <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
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

                        {/* No Results */}
                        {filteredPosts.length === 0 && (
                            <div className="text-center py-16">
                                <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
                            </div>
                        )}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default BlogPage;
