import ContactForm from "./ContactForm"; // your existing form
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const ContactPage = () => {
    return (
        <div className="bg-[#CAE8BD10] min-h-screen px-4 py-16 md:py-24">

            {/* Hero Section */}
            <section className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-sky-700 mb-4">
                    Get in Touch
                </h1>
                <p className="text-sky-700 text-lg md:text-xl max-w-2xl mx-auto">
                    Have questions or want to work with us? Fill out the form below or reach us via any method you prefer.
                </p>
            </section>

            {/* Contact Info Section */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-6xl mx-auto">
                {[
                    { icon: FaPhoneAlt, title: "Phone", text: "+880 1234 567890" },
                    { icon: FaEnvelope, title: "Email", text: "info@example.com" },
                    { icon: FaMapMarkerAlt, title: "Address", text: "123 Sky Street, Dhaka, Bangladesh" },
                    { icon: FaClock, title: "Working Hours", text: "Mon - Fri: 9:00 AM - 6:00 PM" },
                ].map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <div
                            key={index}
                            className="flex flex-col items-center p-6 bg-white rounded border border-gray-300 transition-transform transform hover:scale-105 hover:border-sky-400"
                        >
                            <Icon className="text-sky-700 text-3xl mb-3" />
                            <h3 className="font-semibold text-lg mb-1 text-sky-700">{item.title}</h3>
                            <p className="text-sky-700">{item.text}</p>
                        </div>
                    );
                })}
            </section>

            {/* Contact Form Section */}
            <section className="mb-16">
                <h2 className="text-3xl md:text-4xl font-semibold text-sky-700 text-center mb-8">
                    Send Us a Message
                </h2>
                <ContactForm />
            </section>

            {/* Map Section */}
            <section className="mb-16">
                <h2 className="text-3xl md:text-4xl font-semibold text-sky-700 text-center mb-8">
                    Our Location
                </h2>
                <div className="w-full h-64 md:h-96 max-w-6xl mx-auto rounded border border-gray-300 overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902040484051!2d90.38833551498127!3d23.750903984585454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b0c3f1b7bf%3A0x400eace33ebf40!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1698090000000!5m2!1sen!2sus"
                        className="w-full h-full border-0"
                        allowFullScreen
                        loading="lazy"
                        title="office-location"
                    ></iframe>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-16 max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-semibold text-sky-700 text-center mb-8">
                    Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                    {[
                        { q: "How soon will I get a reply?", a: "We typically respond within 24-48 hours on business days." },
                        { q: "Can I schedule a meeting?", a: "Yes! Please use the form to request a meeting and we’ll get back to you with available slots." },
                        { q: "Do you offer support for remote clients?", a: "Absolutely! We can assist you online through email, chat, or video calls." },
                    ].map((faq, index) => (
                        <div
                            key={index}
                            className="p-4 bg-white rounded border border-gray-300 transition-transform transform hover:scale-105 hover:border-sky-400"
                        >
                            <h3 className="font-semibold text-sky-700">{faq.q}</h3>
                            <p className="text-sky-500 mt-2">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="mb-16 bg-[#E6F3E1] py-12">
                <h2 className="text-3xl md:text-4xl font-semibold text-sky-700 text-center mb-6">
                    Subscribe to Our Newsletter
                </h2>
                <p className="text-center text-sky-600 mb-6">
                    Get updates, tips, and exclusive offers delivered to your inbox.
                </p>
                <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4 px-4">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400 transition-transform transform hover:scale-105"
                    />
                    <button className="bg-sky-600 text-white px-6 py-3 rounded hover:bg-sky-700 transition-transform transform hover:scale-105">
                        Subscribe
                    </button>
                </div>
            </section>

        </div>
    );
};

export default ContactPage;
