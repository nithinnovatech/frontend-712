import React from 'react';
import { Link } from 'react-router-dom';
import {
    Wind,
    Phone,
    Mail,
    MapPin,
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    ArrowRight
} from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const companyLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact Us', path: '/contact' },
    ];

    const serviceLinks = [
        { name: 'Air Duct Cleaning', path: '/services/air-duct-cleaning' },
        { name: 'Residential Duct', path: '/services/residential-duct-cleaning' },
        { name: 'Commercial Duct', path: '/services/commercial-duct-cleaning' },
        { name: 'Chimney Sweep', path: '/services/chimney-sweep' },
        { name: 'Dryer Vent', path: '/services/dryer-cleaning' },
    ];

    const areaLinks = [
        { name: 'Kansas City', path: '/service-areas/kansas-city' },
        { name: 'Topeka, KS', path: '/service-areas/topeka' },
        { name: 'Lawrence, KS', path: '/service-areas/lawrence' },
        { name: 'St. Joseph, MO', path: '/service-areas/st-joseph' },
    ];

    const socialLinks = [
        { icon: Facebook, href: '#', label: 'Facebook' },
        { icon: Twitter, href: '#', label: 'Twitter' },
        { icon: Instagram, href: '#', label: 'Instagram' },
        { icon: Linkedin, href: '#', label: 'LinkedIn' },
    ];

    return (
        <footer className="bg-slate-900 text-gray-300">
            {/* Main Footer */}
            <div className="container-custom py-10 sm:py-12 lg:py-16">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
                    {/* Logo & Description - Full width on mobile */}
                    <div className="col-span-2 md:col-span-3 lg:col-span-2">
                        <Link to="/" className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                            {/* Footer Logo */}
                            <div className="relative">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center shadow-lg">
                                    <Wind className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl sm:text-2xl font-bold font-heading text-white">
                                    I&A <span className="text-primary-400">Services</span>
                                </span>
                                <span className="text-[10px] sm:text-xs text-gray-400">
                                    Air Duct Cleaning Experts
                                </span>
                            </div>
                        </Link>
                        <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 leading-relaxed max-w-md">
                            Professional air duct cleaning and HVAC services in Kansas City and surrounding areas.
                            Cleaner air, improved efficiency, and peace of mind.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                            <a
                                href="tel:+19139807242"
                                className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-300 hover:text-primary-400 transition-colors"
                            >
                                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary-400" />
                                <span>+1 (913) 980-7242</span>
                            </a>
                            <a
                                href="mailto:info@iaservicesgroup.com"
                                className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-300 hover:text-primary-400 transition-colors"
                            >
                                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary-400" />
                                <span className="break-all">info@iaservicesgroup.com</span>
                            </a>
                            <div className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-gray-300">
                                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary-400 mt-0.5" />
                                <span>Kansas City Metro Area</span>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-slate-800 hover:bg-primary-500 flex items-center justify-center transition-all duration-300"
                                >
                                    <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Company Links */}
                    <div className="col-span-1">
                        <h4 className="text-white font-semibold text-base sm:text-lg mb-4 sm:mb-6">Company</h4>
                        <ul className="space-y-2 sm:space-y-3">
                            {companyLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="text-sm sm:text-base text-gray-400 hover:text-primary-400 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services Links */}
                    <div className="col-span-1">
                        <h4 className="text-white font-semibold text-base sm:text-lg mb-4 sm:mb-6">Services</h4>
                        <ul className="space-y-2 sm:space-y-3">
                            {serviceLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="text-sm sm:text-base text-gray-400 hover:text-primary-400 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Service Areas */}
                    <div className="col-span-2 md:col-span-1">
                        <h4 className="text-white font-semibold text-base sm:text-lg mb-4 sm:mb-6">Service Areas</h4>
                        <ul className="space-y-2 sm:space-y-3">
                            {areaLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="text-sm sm:text-base text-gray-400 hover:text-primary-400 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* Newsletter - Hidden on very small screens */}
                        <div className="mt-6 sm:mt-8 hidden sm:block">
                            <h4 className="text-white font-semibold mb-3">Get Updates</h4>
                            <form className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="flex-1 px-3 sm:px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors text-sm"
                                />
                                <button
                                    type="submit"
                                    className="px-3 sm:px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors"
                                >
                                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-800">
                <div className="container-custom py-4 sm:py-6">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
                        <p className="text-gray-500 text-xs sm:text-sm text-center sm:text-left">
                            © {currentYear} I&A Services. All rights reserved.
                        </p>
                        <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500">
                            <Link to="/privacy" className="hover:text-primary-400 transition-colors">
                                Privacy Policy
                            </Link>
                            <Link to="/terms" className="hover:text-primary-400 transition-colors">
                                Terms
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
