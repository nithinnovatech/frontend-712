import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import toast from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import { emailConfig } from '../../config/emailConfig';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        service: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Prepare template parameters for EmailJS
        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            from_phone: formData.phone,
            address: formData.address,
            service: formData.service || 'Not specified',
            message: formData.message || 'No additional message provided',
            current_date: new Date().toLocaleString('en-US', {
                dateStyle: 'full',
                timeStyle: 'short'
            })
        };

        try {
            // Send email using EmailJS
            const response = await emailjs.send(
                emailConfig.serviceId,
                emailConfig.templateId,
                templateParams,
                emailConfig.publicKey
            );

            console.log('Email sent successfully:', response);

            // Show success message
            toast.success('Message sent successfully! We\'ll get back to you soon.', {
                duration: 5000,
                icon: '✅',
            });

            // Reset form
            setFormData({
                name: '',
                email: '',
                phone: '',
                address: '',
                service: '',
                message: '',
            });

        } catch (error) {
            console.error('Email sending failed:', error);

            // Show error message
            toast.error('Failed to send message. Please try calling us directly.', {
                duration: 5000,
                icon: '❌',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        {
            icon: Phone,
            title: 'Phone',
            content: '913 244 6113',
            link: 'tel:+19132446113',
        },
        {
            icon: Mail,
            title: 'Email',
            content: 'unitedkcservices@gmail.com',
            link: 'mailto:unitedkcservices@gmail.com',
        },
        {
            icon: MapPin,
            title: 'Service Area',
            content: 'Kansas City',
            link: null,
        },
        {
            icon: Clock,
            title: 'Hours',
            content: 'Mon-Fri & Sun: 8AM - 6PM',
            link: null,
        },
    ];

    const services = [
        'Residential Air Duct Cleaning',
        'Commercial Air Duct Cleaning',
        'Chimney Sweep',
        'Fireplace Inspection',
        'Clothes Dryer Cleaning',
        'Duct Installation',
        'Other',
    ];

    return (
        <section className="section-padding bg-gray-50">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Left Column - Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold mb-4">
                            Contact Us
                        </span>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-gray-900 mb-6">
                            Get In Touch
                        </h2>

                        <p className="text-lg text-gray-600 mb-8">
                            Have questions or ready to schedule your service?
                            We&apos;re here to help. Contact us today for a free estimate!
                        </p>

                        {/* Contact Cards */}
                        <div className="grid sm:grid-cols-2 gap-4 mb-8">
                            {contactInfo.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                                >
                                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                                        <item.icon className="w-6 h-6 text-primary-500" />
                                    </div>
                                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                                    {item.link ? (
                                        <a
                                            href={item.link}
                                            className="text-gray-600 hover:text-primary-500 transition-colors"
                                        >
                                            {item.content}
                                        </a>
                                    ) : (
                                        <p className="text-gray-600">{item.content}</p>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Quick Call CTA */}
                        <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white">
                            <h3 className="text-2xl font-bold mb-2">Need Immediate Assistance?</h3>
                            <p className="text-primary-100 mb-6">
                                Call us now for same-day service availability.
                            </p>
                            <a
                                href="tel:+19132446113"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-600 rounded-xl font-semibold hover:bg-primary-50 transition-colors"
                            >
                                <Phone className="w-5 h-5" />
                                Call (913) 244-6113
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Column - Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <form
                            onSubmit={handleSubmit}
                            className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
                        >
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                Send Us a Message
                            </h3>

                            <div className="space-y-6">
                                {/* Name */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                                        placeholder="John Smith"
                                    />
                                </div>

                                {/* Email & Phone */}
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                            Phone *
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                                            placeholder="(913) 123-4567"
                                        />
                                    </div>
                                </div>

                                {/* Address */}
                                <div>
                                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                                        Address *
                                    </label>
                                    <input
                                        type="text"
                                        id="address"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                                        placeholder="123 Main Street, City, State ZIP"
                                    />
                                </div>

                                {/* Service */}
                                <div>
                                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                                        Service Needed
                                    </label>
                                    <select
                                        id="service"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                                    >
                                        <option value="">Select a service</option>
                                        {services.map((service) => (
                                            <option key={service} value={service}>
                                                {service}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all resize-none"
                                        placeholder="Tell us about your needs..."
                                    />
                                </div>

                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl ${isSubmitting
                                            ? 'bg-gray-400 cursor-not-allowed'
                                            : 'bg-primary-500 hover:bg-primary-600 text-white'
                                        }`}
                                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5" />
                                            Send Message
                                        </>
                                    )}
                                </motion.button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
