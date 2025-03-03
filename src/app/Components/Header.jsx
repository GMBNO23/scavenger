"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaTiktok, FaInstagram, FaWhatsapp, FaChevronDown } from 'react-icons/fa';
import { NavigationMenu, NavigationMenuLink } from "@/components/ui/navigation-menu";

const Header = ({ destinationsRef, packagesRef, galleryRef, contactRef }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to scroll to a specific section
    const scrollToSection = (ref) => {
        if (ref?.current) {
            ref.current.scrollIntoView({ behavior: "smooth" });
            setIsMenuOpen(false); // Close mobile menu after navigation
        } else {
            console.error("Target section not found");
        }
    };

    return (
        <header className="relative w-full">
            {/* Hero background Image */}
            <div className="absolute inset-0 w-full h-screen">
                <Image
                    src="/images/safari-background.jpg"
                    alt="Exclusive Safaris"
                    fill
                    className="object-cover brightness-75"
                    priority
                />
            </div>

            {/* Top Contact Bar */}
            <div className="relative z-10 bg-opacity-70 text-white px-4 py-2 flex justify-between items-center">
                <div className="flex items-center">
                    <div className="bg-blue-500 rounded-full p-2 mr-2">
                        <FaWhatsapp size={20} className="text-white" />
                    </div>
                    <div>
                        <p className="text-sm">For Further Inquiries:</p>
                        <p className="font-bold">+254798446646</p>
                    </div>
                </div>

                <div className="hidden md:flex space-x-4">
                    <Link href="#" className="text-white hover:text-blue-500"><FaFacebook size={20} /></Link>
                    <Link href="#" className="text-white hover:text-pink-300"><FaTiktok size={20} /></Link>
                    <Link href="#" className="text-white hover:text-red-500"><FaInstagram size={20} /></Link>
                    <Link href="#" className="text-white hover:text-green-400"><FaWhatsapp size={20} /></Link>
                </div>
            </div>

            {/* Main Navigation */}
            <nav className="relative z-10 flex justify-between items-center px-6 py-4 w-full">
                <div className="flex-1 flex justify-center md:justify-start">
                    <Image
                        src="/images/scavenger.png"
                        alt="Scavenger Exclusive Safaris"
                        width={200}
                        height={100}
                        className="object-contain"
                    />
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex justify-center flex-1">
                    <NavigationMenu>
                        <ul className="flex space-x-8 text-white font-medium">
                            <NavigationMenuLink asChild>
                                <Link href="#top" className="hover:text-blue-300">Home</Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                                <button onClick={() => scrollToSection(destinationsRef)} className="hover:text-blue-300">Destination</button>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                                <button onClick={() => scrollToSection(packagesRef)} className="hover:text-blue-300">Packages</button>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                                <button onClick={() => scrollToSection(galleryRef)} className="hover:text-blue-300">Gallery</button>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                                <button onClick={() => scrollToSection(contactRef)} className="hover:text-blue-300">Contact</button>
                            </NavigationMenuLink>
                        </ul>
                    </NavigationMenu>
                </div>

                {/* Book Now button */}
                <div className="flex-1 flex justify-center md:justify-end">
                    <Link href="/book" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full font-bold transition duration-300">
                        BOOK NOW
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden absolute right-6 text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-black bg-opacity-90 z-20">
                    <ul className="flex flex-col space-y-4 p-6 text-white">
                        <li><Link href="#top" className="block py-2 hover:text-blue-300">Home</Link></li>
                        <li><button onClick={() => scrollToSection(destinationsRef)} className="block py-2 hover:text-blue-300">Destination</button></li>
                        <li><button onClick={() => scrollToSection(packagesRef)} className="block py-2 hover:text-blue-300">Packages</button></li>
                        <li><button onClick={() => scrollToSection(galleryRef)} className="block py-2 hover:text-blue-300">Gallery</button></li>
                        <li><button onClick={() => scrollToSection(contactRef)} className="block py-2 hover:text-blue-300">Contact</button></li>
                    </ul>
                </div>
            )}

            {/* Hero Content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center text-white pt-10 px-6 md:px-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">SCAVENGER EXCLUSIVE SAFARIS</h1>
                <p className="text-lg mb-4 items-center justify-center text-center">
                    Scavenger Exclusive Safaris was founded in 2020 by wildlife enthusiast and entrepreneur, JILLO BENARD, with a vision to offer discerning travelers unparalleled safari experiences in the heart of Kenya.
                    Recognizing the growing demand for bespoke and luxury travel experiences,
                    BENARD aimed to carve a niche in the market by blending luxury accommodation, expert-guided wildlife tours, and authentic cultural encounters.
                </p>
            </div>

            {/* Scroll Down Indicator */}
            <motion.div
                className="relative bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
                <p className="text-white text-sm mb-2">Scroll Down</p>
                <FaChevronDown className="text-white text-lg" />
            </motion.div>
        </header>
    );
};

export default Header;