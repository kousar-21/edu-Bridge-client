import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        setLoading(true);
        setSuccess("");

        try {
            await emailjs.send(
                import.meta.env.VITE_MY_SERVICE_ID,
                import.meta.env.VITE_MY_TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message
                },
                import.meta.env.VITE_MY_EMAILJS_KEY
            );

            setSuccess("Message sent successfully!");
            setFormData({ name: "", email: "", message: "" });
        } catch (err) {
            console.error(err);
            setSuccess("Failed to send message.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="mt-12">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 max-w-md mx-auto p-6 rounded border border-gray-300 bg-white transition-transform transform hover:scale-105"
            >
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-sky-400 transition-transform transform hover:scale-105"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-sky-400 transition-transform transform hover:scale-105"
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-sky-400 transition-transform transform hover:scale-105"
                />
                <button
                    type="submit"
                    disabled={loading}
                    className="bg-sky-600 text-white p-3 rounded hover:bg-sky-700 transition-transform transform hover:scale-105"
                >
                    {loading ? "Sending..." : "Send Message"}
                </button>
                {success && <p className="text-sky-700 mt-2 text-center">{success}</p>}
            </form>
        </div>
    );
};

export default ContactForm;
