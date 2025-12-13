import React, { useState, createContext, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Phone, Calendar, User, Mail, MessageSquare, Wrench, MapPin, Clock } from 'lucide-react';
import toast from 'react-hot-toast';

// Create context for booking modal
const BookingContext = createContext();

export const useBooking = () => {
    const context = useContext(BookingContext);
    if (!context) {
        throw new Error('useBooking must be used within a BookingProvider');
    }
    return context;
};

export const BookingProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedService, setSelectedService] = useState('');

    const openBooking = (service = '') => {
        setSelectedService(service);
        setIsOpen(true);
        // Prevent body scroll
        document.body.style.overflow = 'hidden';
    };

    const closeBooking = () => {
        setIsOpen(false);
        setSelectedService('');
        // Restore body scroll
        document.body.style.overflow = '';
    };

    return (
        <BookingContext.Provider value={{ isOpen, openBooking, closeBooking, selectedService }}>
            {children}
            <BookingModal />
        </BookingContext.Provider>
    );
};

const BookingModal = () => {
    const { isOpen, closeBooking, selectedService } = useBooking();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        preferredDate: '',
        preferredTime: '',
        address: '',
        message: '',
    });

    // Update service when selectedService changes
    React.useEffect(() => {
        if (selectedService) {
            setFormData(prev => ({ ...prev, service: selectedService }));
        }
    }, [selectedService]);

    const services = [
        'Residential Air Duct Cleaning',
        'Commercial Air Duct Cleaning',
        'Chimney Sweep',
        'Fireplace Inspection',
        'Clothes Dryer Cleaning',
        'Duct Installation',
        'Other',
    ];

    const timeSlots = [
        '8:00 AM - 10:00 AM',
        '10:00 AM - 12:00 PM',
        '12:00 PM - 2:00 PM',
        '2:00 PM - 4:00 PM',
        '4:00 PM - 6:00 PM',
    ];

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create email body with booking details
        const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service: ${formData.service}
Preferred Date: ${formData.preferredDate}
Preferred Time: ${formData.preferredTime}
Address: ${formData.address}

Additional Details:
${formData.message || 'No additional details provided'}
        `.trim();

        // Create mailto link
        const subject = `Service Booking Request - ${formData.service}`;
        const mailtoLink = `mailto:unitedkcservices@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

        // Open email client
        window.location.href = mailtoLink;

        // Show success message
        toast.success('Opening your email client...');

        // Reset form
        setFormData({
            name: '',
            email: '',
            phone: '',
            service: '',
            preferredDate: '',
            preferredTime: '',
            address: '',
            message: '',
        });
        closeBooking();
    };

    // Get minimum date (today)
    const today = new Date().toISOString().split('T')[0];

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm"
                    onClick={closeBooking}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 100 }}
                        transition={{ type: 'spring', duration: 0.5 }}
                        className="w-full sm:max-w-2xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="sticky top-0 bg-gradient-to-r from-primary-500 to-secondary-500 p-4 sm:p-6 rounded-t-3xl z-10">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-xl flex items-center justify-center">
                                        <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                    </div>
                                    <div>
                                        <h2 className="text-xl sm:text-2xl font-bold text-white">Book a Service</h2>
                                        <p className="text-white/80 text-xs sm:text-sm hidden sm:block">Fill in your details and we&apos;ll get back to you</p>
                                    </div>
                                </div>
                                <button
                                    onClick={closeBooking}
                                    className="p-2 hover:bg-white/20 rounded-xl transition-colors touch-target"
                                >
                                    <X className="w-6 h-6 text-white" />
                                </button>
                            </div>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                            {/* Name & Email Row */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="booking-name" className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                                        <User className="w-4 h-4 text-primary-500" />
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="booking-name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all text-base"
                                        placeholder="John Smith"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="booking-email" className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                                        <Mail className="w-4 h-4 text-primary-500" />
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="booking-email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all text-base"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            {/* Phone & Service Row */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="booking-phone" className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                                        <Phone className="w-4 h-4 text-primary-500" />
                                        Phone *
                                    </label>
                                    <input
                                        type="tel"
                                        id="booking-phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all text-base"
                                        placeholder="(913) 123-4567"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="booking-service" className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                                        <Wrench className="w-4 h-4 text-primary-500" />
                                        Service Needed *
                                    </label>
                                    <select
                                        id="booking-service"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all text-base bg-white"
                                    >
                                        <option value="">Select a service</option>
                                        {services.map((service) => (
                                            <option key={service} value={service}>
                                                {service}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Date & Time Row */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="booking-date" className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                                        <Calendar className="w-4 h-4 text-primary-500" />
                                        Preferred Date *
                                    </label>
                                    <input
                                        type="date"
                                        id="booking-date"
                                        name="preferredDate"
                                        value={formData.preferredDate}
                                        onChange={handleChange}
                                        min={today}
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all text-base"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="booking-time" className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                                        <Clock className="w-4 h-4 text-primary-500" />
                                        Preferred Time *
                                    </label>
                                    <select
                                        id="booking-time"
                                        name="preferredTime"
                                        value={formData.preferredTime}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all text-base bg-white"
                                    >
                                        <option value="">Select time slot</option>
                                        {timeSlots.map((slot) => (
                                            <option key={slot} value={slot}>
                                                {slot}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Address */}
                            <div>
                                <label htmlFor="booking-address" className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                                    <MapPin className="w-4 h-4 text-primary-500" />
                                    Address *
                                </label>
                                <input
                                    type="text"
                                    id="booking-address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all text-base"
                                    placeholder="123 Main St, Kansas City, MO 64101"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="booking-message" className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                                    <MessageSquare className="w-4 h-4 text-primary-500" />
                                    Additional Details
                                </label>
                                <textarea
                                    id="booking-message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={3}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all resize-none text-base"
                                    placeholder="Any specific concerns..."
                                />
                            </div>

                            {/* Submit Buttons - Stack on mobile */}
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                                <button
                                    type="button"
                                    onClick={closeBooking}
                                    className="order-2 sm:order-1 flex-1 px-6 py-3 sm:py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                                >
                                    Cancel
                                </button>
                                <motion.button
                                    type="submit"
                                    className="order-1 sm:order-2 flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 sm:py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <>
                                        <Send className="w-5 h-5" />
                                        Submit Booking
                                    </>
                                </motion.button>
                            </div>

                            {/* Call CTA */}
                            <div className="text-center pt-4 border-t border-gray-100">
                                <p className="text-gray-600 text-sm mb-2">Prefer to talk to someone?</p>
                                <a
                                    href="tel:+19132446113"
                                    className="inline-flex items-center gap-2 text-primary-500 font-semibold hover:text-primary-600"
                                >
                                    <Phone className="w-5 h-5" />
                                    Call (913) 244-6113
                                </a>
                            </div>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default BookingModal;
