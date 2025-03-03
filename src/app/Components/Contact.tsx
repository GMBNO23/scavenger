"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);

        // TODO: Integrate with API (e.g., SendGrid, Nodemailer, Formspree)
        // fetch("/api/contact", { method: "POST", body: JSON.stringify(formData) })
        //   .then(res => res.json())
        //   .then(data => console.log("Response:", data))
        //   .catch(error => console.error("Error:", error));
    };

    return (
        <section className="bg-blue-600 py-16 text-center text-white">
            {/* Call to Action Section */}
            <div className="max-w-4xl mx-auto px-4">
                <h3 className="text-lg uppercase tracking-wide">Call to Action</h3>
                <h2 className="text-4xl font-extrabold mt-2">
                    Ready for <span className="text-white">Unforgettable</span> Travel? <br />
                    Remember Us!
                </h2>

                {/* Animated Contact Button */}
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="mt-6 border-2 border-white px-6 py-2 rounded-full hover:bg-white hover:text-blue-600 transition"
                    aria-label="Contact Us"
                >
                    Contact Us!
                </motion.button>
            </div>

            {/* Contact & Email Section */}
            <div className="bg-gray-900 mt-12 py-12 text-white">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div>
                        <img src="/images/scavenger.png" alt="Logo" className="w-40 mb-4" /> {/* Replace with actual logo */}
                        <h3 className="text-xl font-bold mb-2">Contact Us</h3>
                        <p className="text-gray-300">Feel free to contact and reach us!</p>
                        <div className="mt-4 space-y-2">
                            <p>📞 +254798446646</p>
                            <p>💬 WhatsApp</p>
                            <p>📧 info.scavengerexclusivesafaris.co.ke</p>
                        </div>
                    </div>

                    {/* Email Form */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Email Us</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-semibold">Your Name:</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold">Your Email:</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold">Message:</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={3}
                                    className="w-full p-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                ></textarea>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition"
                                aria-label="Send Message"
                            >
                                Send Message
                            </motion.button>
                        </form>
                    </div>
                </div>

                {/* Footer Text */}
                <div className="text-center mt-6">
                    <p>&copy; 2025 Scavenger Exclusive Safaris. All Rights Reserved</p>
                </div>
            </div>
        </section>
    );
}
