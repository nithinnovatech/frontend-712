import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, User, Tag, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import CTA from '../components/sections/CTA';

// Blog posts data with full content
const blogPosts = [
    {
        id: 1,
        title: 'Why Air Duct Cleaning is Essential for Your Health',
        excerpt: 'Discover how regular air duct cleaning can improve your indoor air quality and protect your family from allergens and pollutants that accumulate in your HVAC system.',
        content: `
      <p>Indoor air quality is a crucial factor in maintaining good health, yet many homeowners overlook one of the most significant contributors to poor air quality: dirty air ducts. Your HVAC system circulates air throughout your home multiple times a day, and if the ducts are contaminated, that contamination spreads everywhere.</p>
      
      <h2>The Hidden Dangers in Your Air Ducts</h2>
      <p>Over time, air ducts accumulate a variety of contaminants including:</p>
      <ul>
        <li><strong>Dust and debris</strong> - Microscopic particles that can irritate respiratory systems</li>
        <li><strong>Pollen and allergens</strong> - Seasonal allergens that get trapped and recirculate</li>
        <li><strong>Pet dander</strong> - Even if you don't have pets, previous owners' pets may have left dander behind</li>
        <li><strong>Mold and mildew</strong> - Moisture in ducts can lead to dangerous mold growth</li>
        <li><strong>Bacteria and viruses</strong> - Pathogens can survive and spread through your air system</li>
      </ul>
      
      <h2>Health Benefits of Clean Air Ducts</h2>
      <p>Regular air duct cleaning provides numerous health benefits for you and your family:</p>
      <p><strong>1. Reduced Allergy Symptoms</strong><br/>
      By removing allergens from your duct system, you can significantly reduce allergy symptoms like sneezing, congestion, and itchy eyes.</p>
      
      <p><strong>2. Better Respiratory Health</strong><br/>
      Clean air ducts mean cleaner air, which is especially important for family members with asthma, COPD, or other respiratory conditions.</p>
      
      <p><strong>3. Improved Sleep Quality</strong><br/>
      Breathing cleaner air at night can lead to better sleep quality and more restful nights.</p>
      
      <p><strong>4. Reduced Sick Days</strong><br/>
      With fewer airborne pathogens circulating through your home, your family may experience fewer illnesses.</p>
      
      <h2>When Should You Clean Your Air Ducts?</h2>
      <p>The National Air Duct Cleaners Association (NADCA) recommends having your air ducts cleaned every 3-5 years. However, you should consider more frequent cleaning if:</p>
      <ul>
        <li>You have pets that shed</li>
        <li>Family members have allergies or asthma</li>
        <li>You've recently completed home renovations</li>
        <li>You notice visible mold growth</li>
        <li>There's excessive dust in your home</li>
        <li>You've moved into a new home</li>
      </ul>
      
      <h2>The Professional Difference</h2>
      <p>While DIY cleaning might seem tempting, professional air duct cleaning provides a thorough, effective clean that reaches every part of your system. Our trained technicians use specialized equipment including:</p>
      <ul>
        <li>High-powered vacuums with HEPA filtration</li>
        <li>Rotating brushes to loosen debris</li>
        <li>Air whips for flexible ductwork</li>
        <li>Sanitizing treatments for mold and bacteria</li>
      </ul>
      
      <p>Don't compromise on your family's health. Contact I&A Services today to schedule your professional air duct cleaning and start breathing easier.</p>
    `,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
        author: 'John Smith',
        authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
        authorBio: 'John is the founder of I&A Services with over 15 years of experience in HVAC cleaning.',
        date: 'Dec 5, 2024',
        readTime: '5 min read',
        category: 'Health & Wellness',
        slug: 'air-duct-cleaning-essential-health',
        tags: ['Air Quality', 'Health', 'HVAC', 'Allergies'],
    },
    {
        id: 2,
        title: 'Signs Your Air Ducts Need Professional Cleaning',
        excerpt: 'Learn the warning signs that indicate your air ducts are overdue for a professional cleaning service. From increased dust to strange odors, know when to call the experts.',
        content: `
      <p>Your air ducts work silently behind the scenes, but they can send you clear signals when they need attention. Knowing these warning signs can help you maintain better indoor air quality and prevent potential health issues.</p>
      
      <h2>Top Warning Signs Your Ducts Need Cleaning</h2>
      
      <h3>1. Visible Dust Buildup</h3>
      <p>If you notice dust accumulating on your vent covers or see dust particles being released when your HVAC system starts, it's a clear indication that your ducts are full of debris. Check your vents—if they're dusty even after cleaning, the source is in your ductwork.</p>
      
      <h3>2. Unusual Odors</h3>
      <p>A musty or stale smell coming from your vents could indicate mold growth or accumulated debris in your ducts. If the odor persists after changing your air filter, the problem is likely deeper in the system.</p>
      
      <h3>3. Increased Allergy Symptoms</h3>
      <p>If family members are experiencing more frequent allergy symptoms, sneezing, or respiratory issues while indoors, contaminated air ducts could be circulating allergens throughout your home.</p>
      
      <h3>4. Inconsistent Airflow</h3>
      <p>When some rooms receive less airflow than others, it could indicate blockages or buildup in certain sections of your ductwork. This affects both comfort and energy efficiency.</p>
      
      <h3>5. Rising Energy Bills</h3>
      <p>Dirty ducts force your HVAC system to work harder, leading to increased energy consumption. If you've noticed a spike in your utility bills without changes in usage, your ducts might be the culprit.</p>
      
      <h3>6. Pest Evidence</h3>
      <p>If you notice signs of rodents or insects near your vents, they may have made their way into your ductwork. This is both a cleanliness and health hazard that requires immediate professional attention.</p>
      
      <h3>7. Recent Renovations</h3>
      <p>Construction projects, even small ones, generate significant dust and debris that can settle in your duct system. Post-renovation duct cleaning is highly recommended.</p>
      
      <h2>What Happens If You Ignore These Signs?</h2>
      <p>Neglecting duct cleaning can lead to:</p>
      <ul>
        <li>Worsening air quality and health issues</li>
        <li>Reduced HVAC efficiency and higher bills</li>
        <li>Shortened lifespan of your HVAC system</li>
        <li>Potential mold growth and structural damage</li>
      </ul>
      
      <h2>The Solution</h2>
      <p>If you've noticed any of these warning signs, it's time to call the professionals. At I&A Services, we use advanced cleaning techniques to thoroughly clean your entire duct system, improving your air quality and HVAC efficiency.</p>
      
      <p>Don't wait until small problems become big ones. Schedule your duct inspection today!</p>
    `,
        image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1200&q=80',
        author: 'Sarah Johnson',
        authorImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
        authorBio: 'Sarah is our Operations Manager with expertise in residential HVAC systems.',
        date: 'Dec 1, 2024',
        readTime: '4 min read',
        category: 'Tips & Guides',
        slug: 'signs-air-ducts-need-cleaning',
        tags: ['Maintenance', 'Tips', 'Warning Signs', 'HVAC'],
    },
    {
        id: 3,
        title: 'The Benefits of Commercial Duct Cleaning',
        excerpt: 'How professional duct cleaning can improve workplace air quality, employee health, and reduce energy costs for your business.',
        content: `
      <p>For business owners and facility managers, maintaining a healthy work environment is essential for productivity, employee satisfaction, and even legal compliance. Commercial air duct cleaning plays a crucial role in achieving these goals.</p>
      
      <h2>Why Commercial Buildings Need Regular Duct Cleaning</h2>
      <p>Commercial HVAC systems are larger and more complex than residential systems, serving more people and running for longer hours. This means they accumulate contaminants faster and can have a bigger impact on occupant health.</p>
      
      <h2>Key Benefits for Your Business</h2>
      
      <h3>1. Improved Employee Health</h3>
      <p>Clean air ducts mean fewer airborne pathogens and allergens, which translates to:</p>
      <ul>
        <li>Reduced sick days and absenteeism</li>
        <li>Fewer allergy-related complaints</li>
        <li>Better overall employee wellness</li>
        <li>Improved focus and cognitive function</li>
      </ul>
      
      <h3>2. Increased Productivity</h3>
      <p>Studies show that poor indoor air quality can reduce productivity by up to 10%. Clean air leads to:</p>
      <ul>
        <li>Better concentration and mental clarity</li>
        <li>Fewer headaches and fatigue</li>
        <li>More comfortable working conditions</li>
      </ul>
      
      <h3>3. Energy Savings</h3>
      <p>Clean ducts allow your HVAC system to operate more efficiently:</p>
      <ul>
        <li>Reduced energy consumption by 20-30%</li>
        <li>Lower utility bills</li>
        <li>Extended equipment lifespan</li>
        <li>Fewer emergency repairs</li>
      </ul>
      
      <h3>4. Compliance and Liability</h3>
      <p>Regular duct cleaning helps you meet:</p>
      <ul>
        <li>OSHA indoor air quality requirements</li>
        <li>Building code standards</li>
        <li>Insurance requirements</li>
        <li>Lease obligations</li>
      </ul>
      
      <h2>Industries That Benefit Most</h2>
      <p>While all businesses benefit from clean air, some industries have particular needs:</p>
      <ul>
        <li><strong>Healthcare facilities</strong> - Critical for infection control</li>
        <li><strong>Restaurants</strong> - Removes grease and odors</li>
        <li><strong>Schools</strong> - Protects children's health</li>
        <li><strong>Manufacturing</strong> - Controls industrial contaminants</li>
        <li><strong>Office buildings</strong> - Improves worker productivity</li>
      </ul>
      
      <h2>Our Commercial Services</h2>
      <p>I&A Services offers comprehensive commercial duct cleaning including:</p>
      <ul>
        <li>After-hours service to minimize disruption</li>
        <li>Multi-building and franchise programs</li>
        <li>Detailed documentation for compliance</li>
        <li>Preventive maintenance plans</li>
      </ul>
      
      <p>Invest in your business's most valuable asset—your employees. Contact us for a commercial duct cleaning consultation.</p>
    `,
        image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80',
        author: 'Mike Wilson',
        authorImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
        authorBio: 'Mike leads our commercial services division with 10+ years in industrial HVAC.',
        date: 'Nov 28, 2024',
        readTime: '6 min read',
        category: 'Business',
        slug: 'benefits-commercial-duct-cleaning',
        tags: ['Commercial', 'Business', 'Productivity', 'Energy Savings'],
    },
    {
        id: 4,
        title: 'Chimney Safety: What Every Homeowner Should Know',
        excerpt: 'Essential chimney safety tips and maintenance guidelines to keep your fireplace running safely and efficiently throughout the winter months.',
        content: `
      <p>As the temperatures drop, many homeowners look forward to cozy evenings by the fireplace. But before you light that first fire of the season, it's essential to ensure your chimney is safe and ready for use.</p>
      
      <h2>The Importance of Chimney Maintenance</h2>
      <p>A well-maintained chimney is crucial for:</p>
      <ul>
        <li>Preventing house fires</li>
        <li>Avoiding carbon monoxide poisoning</li>
        <li>Ensuring efficient heating</li>
        <li>Protecting your home's structure</li>
      </ul>
      
      <h2>Understanding Creosote Buildup</h2>
      <p>Creosote is a tar-like substance that forms when wood burns. It accumulates on chimney walls and is highly flammable. There are three stages of creosote:</p>
      <ul>
        <li><strong>Stage 1:</strong> Flaky and easy to remove</li>
        <li><strong>Stage 2:</strong> Hard, shiny, and more difficult to clean</li>
        <li><strong>Stage 3:</strong> Thick, glazed coating that may require professional removal</li>
      </ul>
      
      <h2>Warning Signs of Chimney Problems</h2>
      <p>Watch for these indicators that your chimney needs attention:</p>
      <ul>
        <li>Smoke entering your home when using the fireplace</li>
        <li>Strong odors coming from the fireplace</li>
        <li>White staining on exterior bricks (efflorescence)</li>
        <li>Damaged or missing chimney cap</li>
        <li>Cracked or deteriorating mortar</li>
        <li>Visible creosote buildup</li>
      </ul>
      
      <h2>Annual Inspection Checklist</h2>
      <p>A professional chimney inspection should include:</p>
      <ul>
        <li>Structural integrity assessment</li>
        <li>Flue liner condition check</li>
        <li>Creosote level evaluation</li>
        <li>Cap and crown inspection</li>
        <li>Damper operation test</li>
        <li>Smoke chamber examination</li>
      </ul>
      
      <h2>Safe Fireplace Practices</h2>
      <p>Follow these tips for safe fireplace use:</p>
      <ul>
        <li>Burn only seasoned hardwood</li>
        <li>Never burn trash, cardboard, or treated wood</li>
        <li>Use a fireplace screen</li>
        <li>Keep flammable materials away from the fireplace</li>
        <li>Ensure smoke detectors and CO detectors are working</li>
        <li>Never leave a fire unattended</li>
      </ul>
      
      <p>Schedule your annual chimney inspection with I&A Services before the heating season begins. Stay warm and stay safe!</p>
    `,
        image: 'https://images.unsplash.com/photo-1558618047-f4b511e6c1f1?w=1200&q=80',
        author: 'Emily Chen',
        authorImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
        authorBio: 'Emily handles customer relations and is passionate about home safety education.',
        date: 'Nov 20, 2024',
        readTime: '7 min read',
        category: 'Safety',
        slug: 'chimney-safety-homeowner-guide',
        tags: ['Chimney', 'Safety', 'Fireplace', 'Maintenance'],
    },
    {
        id: 5,
        title: 'Dryer Vent Cleaning: Prevent Fires and Save Energy',
        excerpt: 'Learn why regular dryer vent cleaning is critical for fire prevention and how it can significantly reduce your energy bills.',
        content: `
      <p>Your clothes dryer is one of the most used appliances in your home, but it can also be one of the most dangerous if not properly maintained. Dryer vent cleaning is a crucial but often overlooked home maintenance task.</p>
      
      <h2>The Fire Risk is Real</h2>
      <p>According to the U.S. Fire Administration:</p>
      <ul>
        <li>2,900 home dryer fires are reported each year</li>
        <li>These fires cause an estimated 5 deaths and 100 injuries annually</li>
        <li>34% of dryer fires are caused by failure to clean the dryer</li>
        <li>Lint is the leading material to ignite in dryer fires</li>
      </ul>
      
      <h2>How Lint Buildup Becomes Dangerous</h2>
      <p>Every time you dry clothes, lint escapes through the filter. While your lint trap catches most of it, fine particles travel into the vent system where they accumulate over time. This creates:</p>
      <ul>
        <li>Restricted airflow, causing overheating</li>
        <li>Highly flammable conditions</li>
        <li>Extended drying times</li>
        <li>Increased energy consumption</li>
      </ul>
      
      <h2>Signs Your Dryer Vent Needs Cleaning</h2>
      <p>Watch for these warning signs:</p>
      <ul>
        <li>Clothes take longer than one cycle to dry</li>
        <li>Clothes are unusually hot after drying</li>
        <li>The dryer exterior is hot to the touch</li>
        <li>Burning smell when dryer is running</li>
        <li>Visible lint around the dryer hose</li>
        <li>Vent hood flap doesn't open properly</li>
      </ul>
      
      <h2>Benefits of Professional Cleaning</h2>
      
      <h3>Fire Prevention</h3>
      <p>Removing lint buildup eliminates the primary fuel source for dryer fires, dramatically reducing your risk.</p>
      
      <h3>Energy Savings</h3>
      <p>A clean vent allows proper airflow, reducing drying time and energy consumption by up to 30%.</p>
      
      <h3>Extended Appliance Life</h3>
      <p>When your dryer doesn't have to work as hard, it experiences less wear and lasts longer.</p>
      
      <h3>Faster Drying</h3>
      <p>Clothes dry in one cycle instead of two or three, saving time and energy.</p>
      
      <h2>How Often Should You Clean?</h2>
      <p>We recommend professional dryer vent cleaning:</p>
      <ul>
        <li>At least once per year for most households</li>
        <li>Every 6 months for larger families</li>
        <li>More frequently if you notice warning signs</li>
      </ul>
      
      <p>Protect your home and family. Schedule your dryer vent cleaning with I&A Services today!</p>
    `,
        image: 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=1200&q=80',
        author: 'John Smith',
        authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
        authorBio: 'John is the founder of I&A Services with over 15 years of experience in HVAC cleaning.',
        date: 'Nov 15, 2024',
        readTime: '5 min read',
        category: 'Safety',
        slug: 'dryer-vent-cleaning-fire-prevention',
        tags: ['Dryer Vent', 'Safety', 'Fire Prevention', 'Energy'],
    },
    {
        id: 6,
        title: 'How Often Should You Clean Your Air Ducts?',
        excerpt: 'A comprehensive guide to air duct cleaning frequency based on your home environment, pets, allergies, and local conditions.',
        content: `
      <p>One of the most common questions we receive is "How often should I have my air ducts cleaned?" The answer depends on several factors unique to your home and family.</p>
      
      <h2>General Guidelines</h2>
      <p>The National Air Duct Cleaners Association (NADCA) recommends having your air ducts cleaned every 3-5 years. However, this is just a baseline—many factors can influence the appropriate frequency for your home.</p>
      
      <h2>Factors That Increase Cleaning Frequency</h2>
      
      <h3>Pets</h3>
      <p>If you have furry friends, you may need cleaning every 2-3 years. Pet hair and dander accumulate in ducts and recirculate through your home.</p>
      
      <h3>Allergies or Asthma</h3>
      <p>Family members with respiratory sensitivities benefit from more frequent cleaning—every 2-3 years—to minimize airborne irritants.</p>
      
      <h3>Smokers in the Home</h3>
      <p>Tobacco smoke residue builds up in ductwork and continues to affect air quality long after smoking. Consider annual or bi-annual cleaning.</p>
      
      <h3>Recent Renovations</h3>
      <p>Construction projects release significant dust and debris into your HVAC system. Always clean ducts after major renovations.</p>
      
      <h3>New Home Purchase</h3>
      <p>You don't know the cleaning history of a new home's ducts. We recommend cleaning shortly after moving in.</p>
      
      <h3>Local Environment</h3>
      <p>Homes in dusty, arid climates or areas with high pollen counts may need more frequent cleaning.</p>
      
      <h2>Signs You Need Immediate Cleaning</h2>
      <p>Regardless of schedule, clean your ducts if you notice:</p>
      <ul>
        <li>Visible mold growth</li>
        <li>Pest infestation evidence</li>
        <li>Excessive dust despite regular cleaning</li>
        <li>Musty or unusual odors from vents</li>
        <li>Visible debris being expelled from ducts</li>
      </ul>
      
      <h2>Creating Your Cleaning Schedule</h2>
      <p>Use this guide to determine your ideal frequency:</p>
      <ul>
        <li><strong>Every 1-2 years:</strong> Homes with pets, smokers, or allergy sufferers</li>
        <li><strong>Every 2-3 years:</strong> Average family home with moderate dust</li>
        <li><strong>Every 3-5 years:</strong> Low-dust environments, no pets, no allergies</li>
      </ul>
      
      <h2>Between Professional Cleanings</h2>
      <p>Maintain good air quality between cleanings:</p>
      <ul>
        <li>Change air filters regularly (every 1-3 months)</li>
        <li>Keep vents and registers clean</li>
        <li>Vacuum and dust your home regularly</li>
        <li>Control humidity levels</li>
        <li>Schedule annual HVAC maintenance</li>
      </ul>
      
      <p>Not sure when you last had your ducts cleaned? Contact I&A Services for a free inspection and recommendation.</p>
    `,
        image: 'https://images.unsplash.com/photo-1631545804120-2fefc6a03e6d?w=1200&q=80',
        author: 'Sarah Johnson',
        authorImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
        authorBio: 'Sarah is our Operations Manager with expertise in residential HVAC systems.',
        date: 'Nov 10, 2024',
        readTime: '4 min read',
        category: 'Tips & Guides',
        slug: 'how-often-clean-air-ducts',
        tags: ['Maintenance', 'Frequency', 'Tips', 'Scheduling'],
    },
];

const BlogPostPage = () => {
    const { slug } = useParams();
    const post = blogPosts.find(p => p.slug === slug);

    if (!post) {
        return (
            <div className="min-h-screen">
                <Header />
                <main className="section-padding">
                    <div className="container-custom text-center">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
                        <p className="text-gray-600 mb-8">The blog post you&apos;re looking for doesn&apos;t exist.</p>
                        <Link to="/blog" className="btn-primary">
                            Back to Blog
                        </Link>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    // Get related posts (same category, excluding current)
    const relatedPosts = blogPosts
        .filter(p => p.category === post.category && p.id !== post.id)
        .slice(0, 3);

    return (
        <div className="min-h-screen">
            <Header />
            <main>
                {/* Hero Section */}
                <section className="relative pt-32 pb-16 bg-gradient-to-br from-slate-900 via-primary-900 to-slate-900">
                    <div className="container-custom relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Link
                                to="/blog"
                                className="inline-flex items-center gap-2 text-primary-300 hover:text-white mb-6 transition-colors"
                            >
                                <ArrowLeft className="w-5 h-5" />
                                Back to Blog
                            </Link>

                            <span className="inline-block px-4 py-2 bg-primary-500 text-white rounded-full text-sm font-semibold mb-6">
                                {post.category}
                            </span>

                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white mb-6 max-w-4xl">
                                {post.title}
                            </h1>

                            <div className="flex flex-wrap items-center gap-6 text-gray-300">
                                <div className="flex items-center gap-3">
                                    <img
                                        src={post.authorImage}
                                        alt={post.author}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <div>
                                        <p className="font-semibold text-white">{post.author}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-5 h-5" />
                                    {post.date}
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-5 h-5" />
                                    {post.readTime}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Featured Image */}
                <section className="relative -mt-8 pb-8">
                    <div className="container-custom">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="rounded-3xl overflow-hidden shadow-2xl"
                        >
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-64 md:h-96 lg:h-[500px] object-cover"
                            />
                        </motion.div>
                    </div>
                </section>

                {/* Article Content */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="grid lg:grid-cols-3 gap-12">
                            {/* Main Content */}
                            <motion.article
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="lg:col-span-2"
                            >
                                <div
                                    className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-gray-900 prose-p:text-gray-600 prose-li:text-gray-600 prose-a:text-primary-500 prose-strong:text-gray-900"
                                    dangerouslySetInnerHTML={{ __html: post.content }}
                                />

                                {/* Tags */}
                                <div className="mt-12 pt-8 border-t border-gray-200">
                                    <div className="flex items-center gap-3 flex-wrap">
                                        <Tag className="w-5 h-5 text-gray-500" />
                                        {post.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Share */}
                                <div className="mt-8 pt-8 border-t border-gray-200">
                                    <div className="flex items-center gap-4">
                                        <Share2 className="w-5 h-5 text-gray-500" />
                                        <span className="text-gray-600 font-medium">Share this article:</span>
                                        <div className="flex gap-3">
                                            <a
                                                href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                                            >
                                                <Facebook className="w-5 h-5" />
                                            </a>
                                            <a
                                                href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=${post.title}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-10 h-10 bg-sky-500 text-white rounded-lg flex items-center justify-center hover:bg-sky-600 transition-colors"
                                            >
                                                <Twitter className="w-5 h-5" />
                                            </a>
                                            <a
                                                href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}&title=${post.title}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-10 h-10 bg-blue-700 text-white rounded-lg flex items-center justify-center hover:bg-blue-800 transition-colors"
                                            >
                                                <Linkedin className="w-5 h-5" />
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Author Bio */}
                                <div className="mt-12 p-8 bg-gray-50 rounded-2xl">
                                    <div className="flex items-start gap-6">
                                        <img
                                            src={post.authorImage}
                                            alt={post.author}
                                            className="w-20 h-20 rounded-full object-cover"
                                        />
                                        <div>
                                            <h4 className="text-xl font-bold text-gray-900 mb-2">{post.author}</h4>
                                            <p className="text-gray-600">{post.authorBio}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.article>

                            {/* Sidebar */}
                            <aside className="lg:col-span-1">
                                <div className="sticky top-32 space-y-8">
                                    {/* CTA Card */}
                                    <div className="bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl p-8 text-white">
                                        <h3 className="text-2xl font-bold mb-4">Need Our Services?</h3>
                                        <p className="text-white/80 mb-6">
                                            Schedule a professional air duct cleaning today and breathe easier!
                                        </p>
                                        <Link
                                            to="/contact"
                                            className="block w-full text-center px-6 py-3 bg-white text-primary-600 rounded-xl font-semibold hover:bg-primary-50 transition-colors"
                                        >
                                            Get a Free Quote
                                        </Link>
                                    </div>

                                    {/* Related Posts */}
                                    {relatedPosts.length > 0 && (
                                        <div className="bg-gray-50 rounded-2xl p-8">
                                            <h3 className="text-xl font-bold text-gray-900 mb-6">Related Articles</h3>
                                            <div className="space-y-6">
                                                {relatedPosts.map((relatedPost) => (
                                                    <Link
                                                        key={relatedPost.id}
                                                        to={`/blog/${relatedPost.slug}`}
                                                        className="block group"
                                                    >
                                                        <div className="flex gap-4">
                                                            <img
                                                                src={relatedPost.image}
                                                                alt={relatedPost.title}
                                                                className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                                                            />
                                                            <div>
                                                                <h4 className="font-semibold text-gray-900 group-hover:text-primary-500 transition-colors line-clamp-2">
                                                                    {relatedPost.title}
                                                                </h4>
                                                                <p className="text-sm text-gray-500 mt-1">{relatedPost.date}</p>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </aside>
                        </div>
                    </div>
                </section>

                <CTA />
            </main>
            <Footer />
        </div>
    );
};

export default BlogPostPage;
