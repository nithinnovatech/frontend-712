import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Menu,
    X,
    ChevronDown,
    Phone,
    Wind,
    Home,
    Building2,
    Flame,
    Shirt,
    ChevronRight
} from 'lucide-react';

const services = [
    { name: 'Air Duct Cleaning', path: '/services/air-duct-cleaning', icon: Wind },
    { name: 'Residential Duct Cleaning', path: '/services/residential-duct-cleaning', icon: Home },
    { name: 'Commercial Duct Cleaning', path: '/services/commercial-duct-cleaning', icon: Building2 },
    { name: 'Chimney Sweep', path: '/services/chimney-sweep', icon: Flame },
    { name: 'Fireplace Inspection', path: '/services/fireplace-inspection', icon: Flame },
    { name: 'Dryer Cleaning', path: '/services/dryer-cleaning', icon: Shirt },
];

const serviceAreas = [
    { name: 'Kansas City', path: '/service-areas/kansas-city' },
    { name: 'Topeka, KS', path: '/service-areas/topeka' },
    { name: 'Lawrence, KS', path: '/service-areas/lawrence' },
    { name: 'St. Joseph, MO', path: '/service-areas/st-joseph' },
];

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [mobileSubmenu, setMobileSubmenu] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
        setMobileSubmenu(null);
    }, [location]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services', dropdown: services },
        { name: 'Service Areas', path: '/service-areas', dropdown: serviceAreas },
        { name: 'About Us', path: '/about' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled
                ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg shadow-lg'
                : 'bg-transparent'
                }`}
        >
            <div className="container-custom">
                <div className="flex items-center justify-between py-3 sm:py-4">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 sm:gap-3 z-50">
                        {/* Logo Image */}
                        <div className="relative">
                            <img
                                src="/images/logo-icon.png"
                                alt="UnitedKcServices Logo"
                                className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl object-contain"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className={`text-lg sm:text-xl font-bold font-heading leading-tight ${isScrolled || isMobileMenuOpen ? 'text-gray-900 dark:text-white' : 'text-white'
                                }`}>
                                UnitedKc<span className="text-primary-500">Services</span>
                            </span>
                            <span className={`text-[10px] sm:text-xs font-medium hidden sm:block ${isScrolled || isMobileMenuOpen ? 'text-gray-500' : 'text-white/70'
                                }`}>
                                Connecting You to Local Experts
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <div
                                key={link.name}
                                className="relative"
                                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <Link
                                    to={link.path}
                                    className={`flex items-center gap-1 px-3 xl:px-4 py-2 rounded-lg font-medium transition-all duration-200 text-sm xl:text-base ${isScrolled
                                        ? 'text-gray-700 hover:text-primary-500 hover:bg-primary-50 dark:text-gray-300 dark:hover:text-primary-400'
                                        : 'text-white/90 hover:text-white hover:bg-white/10'
                                        } ${location.pathname === link.path ? 'text-primary-500' : ''}`}
                                >
                                    {link.name}
                                    {link.dropdown && <ChevronDown className="w-4 h-4" />}
                                </Link>

                                {/* Dropdown Menu */}
                                <AnimatePresence>
                                    {link.dropdown && activeDropdown === link.name && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-gray-100 dark:border-slate-700 overflow-hidden"
                                        >
                                            {link.dropdown.map((item) => (
                                                <Link
                                                    key={item.path}
                                                    to={item.path}
                                                    className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-slate-700 hover:text-primary-500 transition-colors"
                                                >
                                                    {item.icon && <item.icon className="w-5 h-5" />}
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </nav>

                    {/* CTA Button - Desktop */}
                    <div className="hidden lg:flex items-center gap-4">
                        <a
                            href="tel:+19132446113"
                            className="flex items-center gap-2 px-4 xl:px-5 py-2.5 bg-accent-500 hover:bg-accent-600 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl text-sm xl:text-base"
                        >
                            <Phone className="w-4 h-4" />
                            <span className="hidden xl:inline">(913) 244-6113</span>
                            <span className="xl:hidden">Call Us</span>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 rounded-lg z-[60] relative touch-target"
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsMobileMenuOpen(!isMobileMenuOpen);
                        }}
                        aria-label="Toggle menu"
                        type="button"
                    >
                        {isMobileMenuOpen ? (
                            <X className={`w-6 h-6 ${isScrolled || isMobileMenuOpen ? 'text-gray-900 dark:text-white' : 'text-white'}`} />
                        ) : (
                            <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'}`} />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="lg:hidden fixed inset-0 top-0 bg-white dark:bg-slate-900 z-40 overflow-y-auto"
                    >
                        <div className="pt-20 pb-8 px-4 min-h-screen">
                            {/* Mobile Nav Links */}
                            <nav className="space-y-1">
                                {navLinks.map((link) => (
                                    <div key={link.name}>
                                        {link.dropdown ? (
                                            <>
                                                <button
                                                    onClick={() => setMobileSubmenu(mobileSubmenu === link.name ? null : link.name)}
                                                    className="w-full flex items-center justify-between py-4 px-4 text-gray-900 dark:text-gray-100 font-semibold text-lg border-b border-gray-100 dark:border-slate-800"
                                                >
                                                    {link.name}
                                                    <ChevronRight className={`w-5 h-5 transition-transform ${mobileSubmenu === link.name ? 'rotate-90' : ''}`} />
                                                </button>
                                                <AnimatePresence>
                                                    {mobileSubmenu === link.name && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: 'auto', opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ duration: 0.2 }}
                                                            className="overflow-hidden bg-gray-50 dark:bg-slate-800"
                                                        >
                                                            {link.dropdown.map((item) => (
                                                                <Link
                                                                    key={item.path}
                                                                    to={item.path}
                                                                    className="flex items-center gap-3 py-3 px-8 text-gray-700 dark:text-gray-300 border-b border-gray-100 dark:border-slate-700"
                                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                                >
                                                                    {item.icon && <item.icon className="w-5 h-5 text-primary-500" />}
                                                                    {item.name}
                                                                </Link>
                                                            ))}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </>
                                        ) : (
                                            <Link
                                                to={link.path}
                                                className="block py-4 px-4 text-gray-900 dark:text-gray-100 font-semibold text-lg border-b border-gray-100 dark:border-slate-800"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                {link.name}
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </nav>

                            {/* Mobile CTA */}
                            <div className="mt-8 space-y-4 px-4">
                                <a
                                    href="tel:+19132446113"
                                    className="flex items-center justify-center gap-3 w-full py-4 bg-accent-500 text-white rounded-xl font-semibold text-lg shadow-lg"
                                >
                                    <Phone className="w-5 h-5" />
                                    Call (913) 244-6113
                                </a>
                                <Link
                                    to="/contact"
                                    className="flex items-center justify-center gap-2 w-full py-4 bg-primary-500 text-white rounded-xl font-semibold text-lg shadow-lg"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Get Free Quote
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
