"use client";

import { motion } from 'framer-motion';
import { useRef } from 'react';

const Destinations = () => {
    const sectionRef = useRef(null);
    const destinations = [
        {
            location: "ACROSS KENYA",
            title: "BEAUTIFUL SCENERIES",
            description: "From the sun-kissed savannas of the Maasai Mara to the snow-capped peaks of Mount Kenya.",
            image: "/images/scenery.jpg",
            rating: "★★★★★"
        },
        {
            location: "MOMBASA",
            title: "BEACHES",
            description: "Welcome to the stunning shores of Mombasa, where pristine sands meet the crystal-clear waters of the Indian Ocean.",
            image: "/images/beach.jpg",
            rating: "★★★★★"
        },
        {
            location: "ACROSS KENYA",
            title: "WILDLIFE",
            description: "From the iconic Big Five to rare and endangered species, Kenya's wildlife is a treasure trove for nature enthusiasts and conservationists alike.",
            image: "/images/wildlife.jpg",
            rating: "★★★★★"
        }
    ];

    return (
        <>
            {/* Create a separate heading section with proper spacing */}
            <section
                id="destinations"
                ref={sectionRef}
                className="py-16 bg-black flex flex-col items-center text-center">
                <motion.div
                    className="max-w-3xl mb-6 px-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-4xl font-bold text-blue-200 mb-4 mt-100 relative">
                        POPULAR DESTINATIONS
                    </h2>
                    <p className="text-lg text-blue-300">
                        Discover breathtaking locations around Kenya and create thrilling and
                        exciting memories that would last you a lifetime. Our Destinations are
                        packed with exciting adventures and sightseeing that captures the
                        essence that truly is "The Pride of Africa".
                    </p>
                </motion.div>
            </section>

            {/* Cards section with more padding on top */}
            <section className="pb-20 pt-4 bg-black flex flex-col items-center">
                <div className="grid md:grid-cols-3 gap-8 w-full max-w-6xl px-4">
                    {destinations.map((destination, index) => (
                        <motion.div
                            key={index}
                            className="relative bg-cover bg-center rounded-2xl overflow-hidden shadow-lg h-96 cursor-pointer group"
                            style={{ backgroundImage: `url(${destination.image})` }}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
                            whileHover={{
                                scale: 1.03,
                                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)"
                            }}
                        >
                            <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-6 rounded-2xl transition-all duration-100 group-hover:bg-black/40">
                                <span className="text-blue-400 uppercase text-sm font-semibold transform transition-transform duration-100 group-hover:translate-y-1">
                                    {destination.location}
                                </span>
                                <h3 className="text-white text-xl font-bold transform transition-all duration-300 group-hover:text-blue-200 group-hover:translate-y-0">
                                    {destination.title}
                                </h3>
                                <p className="text-gray-300 text-sm mt-2 transition-all duration-100 group-hover:text-white">
                                    {destination.description}
                                </p>
                                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold mt-3 self-start transition-all duration-100 group-hover:bg-blue-400 group-hover:scale-110 origin-left">
                                    {destination.rating}
                                </span>

                                {/* Explore button that appears on hover */}
                                <motion.div
                                    className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-100"
                                    initial={{ opacity: 0 }}
                                    whileHover={{ scale: 1.1 }}
                                >
                                    <span className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-bold inline-flex items-center">
                                        Explore
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </span>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Destinations;