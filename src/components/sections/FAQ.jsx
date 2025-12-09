import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, HelpCircle, Phone } from 'lucide-react';

const faqs = [
    {
        question: 'Why should I get my air ducts cleaned?',
        answer: 'Over time, dust, allergens, mold, and other contaminants accumulate in your air ducts. Professional cleaning improves indoor air quality, reduces allergy symptoms, increases HVAC efficiency, and can lower your energy bills. It also helps extend the life of your heating and cooling system.',
    },
    {
        question: 'How often should I have my air ducts cleaned?',
        answer: 'We recommend having your air ducts cleaned every 3-5 years for most homes. However, you may need more frequent cleaning if you have pets, allergies, smokers in the home, or have recently completed renovations. Homes in dusty areas may also benefit from more frequent cleaning.',
    },
    {
        question: 'How long does the air duct cleaning process take?',
        answer: 'A typical residential air duct cleaning takes 2-4 hours depending on the size of your home and the complexity of your HVAC system. Commercial properties may take longer. We work efficiently while ensuring a thorough cleaning of all components.',
    },
    {
        question: 'Is air duct cleaning safe for my HVAC system?',
        answer: 'Yes! Our certified technicians use industry-approved methods and professional-grade equipment designed specifically for HVAC systems. We take care to protect your equipment during the cleaning process. In fact, regular cleaning can help extend the life of your system.',
    },
    {
        question: 'What is included in your air duct cleaning service?',
        answer: 'Our comprehensive service includes cleaning of all supply and return ducts, registers and grilles, main trunk lines, and the interior of your air handler. We also perform a system inspection and can provide recommendations for any needed repairs or maintenance.',
    },
    {
        question: 'Do you offer any guarantees on your work?',
        answer: 'Yes! We stand behind our work with a 100% satisfaction guarantee. If you\'re not completely satisfied with our service, we\'ll return to address any concerns at no additional cost. We\'re also fully licensed and insured for your peace of mind.',
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="section-padding bg-gray-50">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Left Column - Header */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold mb-4">
                            FAQ
                        </span>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-gray-900 mb-6">
                            Frequently Asked Questions
                        </h2>

                        <p className="text-lg text-gray-600 mb-8">
                            Got questions about our air duct cleaning services? We&apos;ve got answers.
                            If you don&apos;t find what you&apos;re looking for, feel free to contact us directly.
                        </p>

                        {/* CTA Card */}
                        <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white">
                            <HelpCircle className="w-12 h-12 mb-4" />
                            <h3 className="text-2xl font-bold mb-2">Still Have Questions?</h3>
                            <p className="text-primary-100 mb-6">
                                Our friendly team is here to help you with any questions you might have.
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

                    {/* Right Column - Accordion */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-4"
                    >
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100"
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                                >
                                    <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                                    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${openIndex === index ? 'bg-primary-100 text-primary-500' : 'bg-gray-100 text-gray-500'
                                        }`}>
                                        {openIndex === index ? (
                                            <ChevronUp className="w-5 h-5" />
                                        ) : (
                                            <ChevronDown className="w-5 h-5" />
                                        )}
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
