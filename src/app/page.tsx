"use client";

import { useRef } from 'react';
import Header from './Components/Header';
import Destinations from './Components/Destinations';  // Import your .jsx component
import SafariPackages from './Components/Packages';         // Import your .tsx component
import MeidaGallery from './Components/Gallery';           // Import your .jsx component
import ContactSection from './Components/Contact';           // Import your .tsx component
// Import any other components you need

export default function Home() {
  // Create refs for each section
  const destinationsRef = useRef(null);
  const packagesRef = useRef(null);
  const galleryRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <main className="min-h-screen">
      {/* Pass the refs to the Header component */}
      <Header
        destinationsRef={destinationsRef}
        packagesRef={packagesRef}
        galleryRef={galleryRef}
        contactRef={contactRef}
      />

      {/* Each section with its corresponding ref */}
      <section id="destinations" ref={destinationsRef}>
        <Destinations />
      </section>

      <section id="packages" ref={packagesRef}>
        <SafariPackages />
      </section>

      <section id="gallery" ref={galleryRef}>
        <MeidaGallery />
      </section>

      <section id="contact" ref={contactRef}>
        <ContactSection />
      </section>

      {/* Add any additional sections or components */}
    </main>
  );
}