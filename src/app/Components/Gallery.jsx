'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

// Define aspect ratio types
const ASPECT_RATIOS = {
    TIKTOK: 'aspect-[9/16]', // TikTok vertical video (9:16)
    INSTAGRAM_SQUARE: 'aspect-square', // Instagram square (1:1)
    INSTAGRAM_PORTRAIT: 'aspect-[4/5]', // Instagram portrait (4:5)
    INSTAGRAM_LANDSCAPE: 'aspect-[1.91/1]', // Instagram landscape (1.91:1)
    WIDE: 'aspect-video', // 16:9 video
};

// Sample media data (replace with your actual data)
const SAMPLE_MEDIA = [
    {
        id: 1,
        type: 'image',
        src: '/images/gallery1.jpg',
        alt: 'Scavenger Safaris',
        aspectRatio: ASPECT_RATIOS.INSTAGRAM_SQUARE,
    },
    {
        id: 2,
        type: 'video',
        src: '/images/video1.mp4',
        aspectRatio: ASPECT_RATIOS.TIKTOK,
        thumbnail: '/images/thumbnail2.jpg',
    },
    {
        id: 3,
        type: 'image',
        src: '/images/gallery2.jpg',
        alt: 'Epic Scenery',
        aspectRatio: ASPECT_RATIOS.INSTAGRAM_LANDSCAPE,
    },
    {
        id: 4,
        type: 'video',
        src: '/images/video2.mp4',
        aspectRatio: ASPECT_RATIOS.WIDE,
        thumbnail: '/images/thumbnail2.jpg',
    },
    {
        id: 5,
        type: 'image',
        src: '/images/gallery3.jpg',
        alt: 'Travellers in Fort Jesus',
        aspectRatio: ASPECT_RATIOS.INSTAGRAM_PORTRAIT,
    },
    {
        id: 6,
        type: 'image',
        src: '/images/gallery4.jpg',
        alt: 'Bernand Jilo',
        aspectRatio: ASPECT_RATIOS.INSTAGRAM_SQUARE,
    },
    {
        id: 7,
        type: 'image',
        src: '/images/gallery5.jpg',
        alt: 'Giraffes in the Savannah',
        aspectRatio: ASPECT_RATIOS.INSTAGRAM_SQUARE,
    },
    {
        id: 8,
        type: 'image',
        src: '/images/gallery6.jpg',
        alt: 'Herd of Elephants Chillin',
        aspectRatio: ASPECT_RATIOS.INSTAGRAM_SQUARE,
    },
    {
        id: 9,
        type: 'image',
        src: '/images/gallery8.jpg',
        alt: 'Safari Tours',
        aspectRatio: ASPECT_RATIOS.INSTAGRAM_SQUARE,
    },
    {
        id: 10,
        type: 'image',
        src: '/images/gallery7.jpg',
        alt: 'Safari Tours',
        aspectRatio: ASPECT_RATIOS.INSTAGRAM_SQUARE,
    },
    {
        id: 11,
        type: 'image',
        src: '/images/gallery9.jpg',
        alt: 'Safari Tours',
        aspectRatio: ASPECT_RATIOS.INSTAGRAM_SQUARE,
    },
    {
        id: 12,
        type: 'image',
        src: '/images/gallery10.jpg',
        alt: 'Safari Tours',
        aspectRatio: ASPECT_RATIOS.INSTAGRAM_SQUARE,
    },
    {
        id: 13,
        type: 'image',
        src: '/images/gallery11.jpg',
        alt: 'Safari Tours',
        aspectRatio: ASPECT_RATIOS.INSTAGRAM_SQUARE,
    },
    {
        id: 14,
        type: 'image',
        src: '/images/gallery12.jpg',
        alt: 'Safari Tours',
        aspectRatio: ASPECT_RATIOS.INSTAGRAM_SQUARE,
    },
    {
        id: 15,
        type: 'image',
        src: '/images/gallery13.jpg',
        alt: 'Safari Tours',
        aspectRatio: ASPECT_RATIOS.INSTAGRAM_SQUARE,
    },
    {
        id: 16,
        type: 'image',
        src: '/images/gallery14.jpg',
        alt: 'Safari Tours',
        aspectRatio: ASPECT_RATIOS.INSTAGRAM_SQUARE,
    },
    {
        id: 17,
        type: 'image',
        src: '/images/gallery15.jpg',
        alt: 'Safari Tours',
        aspectRatio: ASPECT_RATIOS.INSTAGRAM_SQUARE,
    },
    {
        id: 18,
        type: 'image',
        src: '/images/gallery16.jpg',
        alt: 'Safari Tours',
        aspectRatio: ASPECT_RATIOS.INSTAGRAM_SQUARE,
    },
    {
        id: 19,
        type: 'image',
        src: '/images/gallery17.jpg',
        alt: 'Safari Tours',
        aspectRatio: ASPECT_RATIOS.INSTAGRAM_SQUARE,
    },
    {
        id: 20,
        type: 'image',
        src: '/images/gallery18.jpg',
        alt: 'Safari Tours',
        aspectRatio: ASPECT_RATIOS.INSTAGRAM_SQUARE,
    },
    {
        id: 21,
        type: 'video',
        src: '/images/video3.mp4',
        aspectRatio: ASPECT_RATIOS.TIKTOK,
        thumbnail: '/images/thumbnail2.jpg',
    },
    {
        id: 22,
        type: 'video',
        src: '/images/video4.mp4',
        aspectRatio: ASPECT_RATIOS.TIKTOK,
        thumbnail: '/images/thumbnail2.jpg',
    },
    {
        id: 23,
        type: 'video',
        src: '/images/video5.mp4',
        aspectRatio: ASPECT_RATIOS.TIKTOK,
        thumbnail: '/images/thumbnail2.jpg',
    },
    {
        id: 24,
        type: 'video',
        src: '/images/video6.mp4',
        aspectRatio: ASPECT_RATIOS.TIKTOK,
        thumbnail: '/images/thumbnail2.jpg',
    },
    {
        id: 27,
        type: 'video',
        src: '/images/video7.mp4',
        aspectRatio: ASPECT_RATIOS.TIKTOK,
        thumbnail: '/images/thumbnail2.jpg',
    },
    {
        id: 28,
        type: 'video',
        src: '/images/video8.mp4',
        aspectRatio: ASPECT_RATIOS.TIKTOK,
        thumbnail: '/images/thumbnail2.jpg',
    },
];

const MediaItem = ({ item, index }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const itemRef = useRef(null);

    useEffect(() => {
        // Set up intersection observer for fade-in animation
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    // Add a staggered delay based on the index
                    setTimeout(() => {
                        setIsVisible(true);
                    }, index * 100); // 100ms delay multiplied by the index for a staggered effect
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (itemRef.current) {
            observer.observe(itemRef.current);
        }

        return () => {
            if (itemRef.current) {
                observer.disconnect();
            }
        };
    }, [index]);

    const animationClasses = `
    transform 
    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} 
    transition-all duration-700 ease-out
  `;

    if (item.type === 'image') {
        return (
            <div
                ref={itemRef}
                className={`relative overflow-hidden rounded-lg ${item.aspectRatio} w-full h-full bg-gray-100 ${animationClasses}`}
            >
                <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={`object-cover transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                    onLoad={() => setIsLoaded(true)}
                />
                <div className={`absolute inset-0 bg-gray-200  ${isLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`} />
            </div>
        );
    } else if (item.type === 'video') {
        return (
            <div
                ref={itemRef}
                className={`relative overflow-hidden rounded-lg ${item.aspectRatio} w-full h-full group bg-gray-100 ${animationClasses}`}
            >
                {!isPlaying && (
                    <Image
                        src={item.thumbnail}
                        alt="Video thumbnail"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                    />
                )}
                <video
                    src={item.src}
                    className={`absolute inset-0 w-full h-full object-cover ${isPlaying ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
                    playsInline
                    loop
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                />
                <button
                    onClick={(e) => {
                        const video = e.currentTarget.previousSibling;
                        if (video.paused) {
                            video.play();
                        } else {
                            video.pause();
                        }
                    }}
                    className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                    <div className={`rounded-full bg-white/80 p-3 ${isPlaying ? 'opacity-0' : 'opacity-100'} group-hover:opacity-100 transition-opacity transform group-hover:scale-110 duration-300`}>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={isPlaying ? 'hidden' : 'block'}
                        >
                            <path d="M8 5V19L19 12L8 5Z" fill="black" />
                        </svg>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={isPlaying ? 'block' : 'hidden'}
                        >
                            <path d="M6 4H10V20H6V4ZM14 4H18V20H14V4Z" fill="black" />
                        </svg>
                    </div>
                </button>
            </div>
        );
    }
    return null;
};

const MediaGallery = ({ media = SAMPLE_MEDIA }) => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [filteredMedia, setFilteredMedia] = useState(media);
    const [isGalleryVisible, setIsGalleryVisible] = useState(false);
    const galleryRef = useRef(null);

    useEffect(() => {
        if (activeFilter === 'all') {
            setFilteredMedia(media);
        } else {
            setFilteredMedia(media.filter(item => item.type === activeFilter));
        }
    }, [activeFilter, media]);

    useEffect(() => {
        // Fade in the gallery title
        setIsGalleryVisible(true);

        // Set up intersection observer for gallery header animations
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsGalleryVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (galleryRef.current) {
            observer.observe(galleryRef.current);
        }

        return () => {
            if (galleryRef.current) {
                observer.disconnect();
            }
        };
    }, []);

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-8" ref={galleryRef}>
            <div
                className={`flex justify-between items-center mb-8 transform transition-all duration-700 ease-out ${isGalleryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
            >
                <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Media Gallery
                </h2>
                <div className="flex space-x-2">
                    <button
                        onClick={() => setActiveFilter('all')}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === 'all'
                            ? 'bg-purple-500 text-white shadow-md transform scale-105'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                            }`}
                    >
                        All
                    </button>
                    <button
                        onClick={() => setActiveFilter('image')}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === 'image'
                            ? 'bg-purple-500 text-white shadow-md transform scale-105'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                            }`}
                    >
                        Images
                    </button>
                    <button
                        onClick={() => setActiveFilter('video')}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === 'video'
                            ? 'bg-purple-500 text-white shadow-md transform scale-105'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                            }`}
                    >
                        Videos
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredMedia.map((item, index) => (
                    <div
                        key={item.id}
                        className="group transform transition duration-300 hover:scale-[1.02] hover:shadow-xl rounded-lg overflow-hidden"
                    >
                        <MediaItem item={item} index={index} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MediaGallery;