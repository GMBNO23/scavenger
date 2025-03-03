"use client";

import { useState, useEffect } from 'react';

interface SafariPackage {
    id: string;
    title: string;
    duration: string;
    capacity: string;
    location: string;
    image: string;
    charges: string[];
    exclusions: string[];
    rating: number;
    reviews: number;
    nonResidentPrice: string;
    residentPrice: string;
    userReviews?: UserReview[];
}

interface UserReview {
    id: string;
    rating: number;
    comment: string;
    username: string;
    date: string;
}

interface SafariPackagesProps {
    packages?: SafariPackage[];
}

import Image from 'next/image';
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';
import { RiTimeFill } from 'react-icons/ri';
import { FiUsers } from 'react-icons/fi';
import { IoLocationSharp } from 'react-icons/io5';

const safariPackagesData = [
    {
        id: "maasai-mara",
        title: "MAASAI MARA GREAT MIGRATION",
        duration: "3D/2N",
        capacity: "pax: ∞",
        location: "RIFT-VALLEY",
        image: "/images/masai-mara.jpg",
        charges: [
            "Services of an English speaking driver guide",
            "2 nights Accommodation on Fb meal plan",
            "Return transport from Nairobi",
            "Exclusion use of Safari jeep",
            "Sgr package Exclusions",
            "Park entry fee",
            "Photography"
        ],
        exclusions: [
            "Personal items",
            "Tips and gratuities",
            "Travel insurance"
        ],
        rating: 4.7,
        reviews: 27,
        nonResidentPrice: "800",
        residentPrice: "42,000",
        userReviews: [
            {
                id: "review1",
                rating: 5,
                comment: "Amazing experience with the great migration!",
                username: "Safari_Lover",
                date: "2025-01-15"
            },
            {
                id: "review2",
                rating: 4,
                comment: "Great safari, but accommodations could be better.",
                username: "TravelExplorer",
                date: "2025-02-10"
            }
        ]
    },
    {
        id: "tsavo",
        title: "TSAVO WEST OR EAST",
        duration: "3D/2N",
        capacity: "pax: ∞",
        location: "TSAVO",
        image: "/images/tsavo.jpg",
        charges: [
            "Services of an English/French speaking driver guide",
            "2 night Accommodation on Fb meal plan",
            "Return transport from Mombasa",
            "Exclusion use of Safari jeep",
            "SGR Package Exclusions",
            "Park entry fee",
            "Photography"
        ],
        exclusions: [
            "Personal items",
            "Tips and gratuities",
            "Travel insurance"
        ],
        rating: 4.5,
        reviews: 18,
        nonResidentPrice: "530",
        residentPrice: "32,000",
        userReviews: [
            {
                id: "review1",
                rating: 5,
                comment: "Saw so many elephants! Amazing experience.",
                username: "WildlifePhotographer",
                date: "2025-01-05"
            }
        ]
    },
    {
        id: "wasini",
        title: "WASINI DOLPHINS",
        duration: "2D/1N",
        capacity: "pax: ∞",
        location: "COAST",
        image: "/images/wasini.jpg",
        charges: [
            "Return transport from Mombasa/Diani",
            "Boat ride/Dolphin Watching",
            "Music/Photos on board",
            "Snorkelling",
            "Park entry fee",
            "Lunch"
        ],
        exclusions: [
            "Personal items",
            "Tips and gratuities",
            "Travel insurance"
        ],
        rating: 4.5,
        reviews: 40,
        nonResidentPrice: "Adult: 65 Child: 45",
        residentPrice: "Adult: 4,200 Child: 2,800",
        userReviews: [
            {
                id: "review1",
                rating: 5,
                comment: "Swimming with dolphins was a dream come true!",
                username: "OceanLover",
                date: "2025-02-20"
            },
            {
                id: "review2",
                rating: 4,
                comment: "Great experience, though it was a bit crowded.",
                username: "BeachExplorer",
                date: "2025-01-25"
            }
        ]
    },
    {
        id: "tamarino",
        title: "TAMARINO DINNER",
        duration: "D/N",
        capacity: "pax: ∞",
        location: "COAST",
        image: "/images/tamarino.jpg",
        charges: [
            "Return transport from Hotel @20usd",
            "Welcome drink & 1 soft drink",
            "4 hour's sail from 6pm",
            "Live Band on board",
            "4 course meals"
        ],
        exclusions: [
            "Personal items",
            "Tips and gratuities",
            "Travel insurance"
        ],
        rating: 4.5,
        reviews: 40,
        nonResidentPrice: "70",
        residentPrice: "6,500",
        userReviews: [
            {
                id: "review1",
                rating: 5,
                comment: "Romantic dinner with amazing views!",
                username: "FoodieExplorer",
                date: "2025-02-14"
            }
        ]
    },
    {
        id: "kasigau",
        title: "MOUNT KASIGAU CAMPING",
        duration: "2D/1N",
        capacity: "pax: ∞",
        location: "COAST",
        image: "/images/kasigau.jpg",
        charges: [
            "Return transport from Mombasa/Diani",
            "1 Bottle of Water",
            "Park Entry Fee",
            "Meals and Hiking to the Summit",
            "Magnificent Sunrise"
        ],
        exclusions: [
            "Personal items",
            "Tips and gratuities",
            "Travel insurance"
        ],
        rating: 4.5,
        reviews: 0,
        nonResidentPrice: "150",
        residentPrice: "7,500",
        userReviews: [
            {
                id: "review1",
                rating: 5,
                comment: "Romantic dinner with amazing views!",
                username: "FoodieExplorer",
                date: "2025-02-14"
            }
        ]
    },

    {
        id: "east",
        title: "TSAVO EAST GROUP JOINING",
        duration: "D/N",
        capacity: "pax: 8",
        location: "TSAVO EAST",
        image: "/images/tsavo2.jpg",
        charges: [
            "Return transport from Mombasa/Diani",
            "1 Bottle of Water",
            "Park Entry Fee",
            "Buffet Lunch",
            "Game Drives",
            "Tour Guide Services"
        ],
        exclusions: [
            "Personal items",
            "Tips and gratuities",
            "Minimum Number 8 Pax"
        ],
        rating: 4.5,
        reviews: 0,
        nonResidentPrice: "100",
        residentPrice: "5,500",

    },
    {
        id: "watamu",
        title: "MINI DUBAI",
        duration: "D/N",
        capacity: "pax: 8",
        location: "WATAMU",
        image: "/images/watamu.jpg",
        charges: [
            "Return transport from Mombasa/Diani",
            "1 Bottle of Water",
            "Park Entry Fee",
            "Lunch",
            "Quad Bike",
            "Sunset at Lich House"
        ],
        exclusions: [
            "Personal items",
            "Tips and gratuities",
            "Minimum Number 8 PAX"
        ],
        rating: 4.5,
        reviews: 0,
        nonResidentPrice: "100",
        residentPrice: "5,500",

    },
    {
        id: "west",
        title: "TSAVO WEST SALTLICK",
        duration: "2D/1N",
        capacity: "pax: 8",
        location: "TSAVO WEST",
        image: "/images/tsavo3.jpg",
        charges: [
            "Return transport from Mombasa/Diani",
            "1 Bottle of Water",
            "Park Entry Fee",
            "FullBoard Meals",
            "Game Drives",
            "1 Night Accomodation",
            "Safari Van services",
            "Tour Guide Services"
        ],
        exclusions: [
            "Personal items",
            "Minimum number 8 Pax",
            "Travel insurance"
        ],
        rating: 4.5,
        reviews: 0,
        nonResidentPrice: "200",
        residentPrice: "15,500",

    },
];

const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
        stars.push(<FaStar key={`full-${i}`} className="text-yellow-400" />);
    }

    // Add half star if needed
    if (hasHalfStar) {
        stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
    }

    // Add empty stars
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars.push(<FaRegStar key={`empty-${i}`} className="text-yellow-400" />);
    }

    return stars;
};

const RatingSelector = ({ value, onChange }: { value: number, onChange: (rating: number) => void }) => {
    const handleClick = (rating: number) => {
        onChange(rating);
    };

    return (
        <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
                <button
                    key={star}
                    onClick={() => handleClick(star)}
                    className="focus:outline-none"
                >
                    {star <= value ? (
                        <FaStar className="text-yellow-400 text-xl" />
                    ) : (
                        <FaRegStar className="text-yellow-400 text-xl" />
                    )}
                </button>
            ))}
        </div>
    );
};

// Generate a unique ID
const generateId = () => {
    return `review-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
};

export const SafariPackages: React.FC<SafariPackagesProps> = ({ packages: initialPackages = safariPackagesData }) => {
    const [packages, setPackages] = useState<SafariPackage[]>(initialPackages);
    const [selectedPackage, setSelectedPackage] = useState<SafariPackage | null>(
        packages.length > 0 ? packages[0] : null
    );
    const [userRating, setUserRating] = useState<number>(0);
    const [userReview, setUserReview] = useState<string>('');
    const [userName, setUserName] = useState<string>('');
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [reviewSubmitted, setReviewSubmitted] = useState<boolean>(false);
    const [displayedRating, setDisplayedRating] = useState<number>(0);
    const [displayedReviews, setDisplayedReviews] = useState<number>(0);
    const [ratingBreakdown, setRatingBreakdown] = useState<{ [key: number]: number }>({});
    const [showReviewsList, setShowReviewsList] = useState<boolean>(false);

    // When selectedPackage changes, update the displayed rating and reviews
    useEffect(() => {
        if (selectedPackage) {
            calculateRatings(selectedPackage);
        }
    }, [selectedPackage]);

    // Calculate ratings breakdown
    const calculateRatings = (pkg: SafariPackage) => {
        setDisplayedRating(pkg.rating);
        setDisplayedReviews(pkg.reviews);

        // Calculate rating breakdown
        const breakdown: { [key: number]: number } = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

        if (pkg.userReviews && pkg.userReviews.length > 0) {
            pkg.userReviews.forEach(review => {
                if (breakdown[review.rating]) {
                    breakdown[review.rating]++;
                } else {
                    breakdown[review.rating] = 1;
                }
            });
        }

        setRatingBreakdown(breakdown);
    };

    const handleSubmitReview = () => {
        if (userRating === 0 || !selectedPackage) return;

        setIsSubmitting(true);

        // Create new review
        const newReview: UserReview = {
            id: generateId(),
            rating: userRating,
            comment: userReview,
            username: userName || 'Anonymous',
            date: new Date().toISOString().split('T')[0]
        };

        // Update packages state
        const updatedPackages = packages.map(pkg => {
            if (pkg.id === selectedPackage.id) {
                // Calculate new rating
                const currentTotal = pkg.rating * pkg.reviews;
                const newReviews = pkg.reviews + 1;
                const newRating = ((currentTotal + userRating) / newReviews).toFixed(1);

                // Add new review to userReviews array
                const updatedUserReviews = pkg.userReviews ? [...pkg.userReviews, newReview] : [newReview];

                return {
                    ...pkg,
                    rating: parseFloat(newRating),
                    reviews: newReviews,
                    userReviews: updatedUserReviews
                };
            }
            return pkg;
        });

        // Simulate API call
        setTimeout(() => {
            setPackages(updatedPackages);

            // Update selected package
            const updatedSelectedPackage = updatedPackages.find(pkg => pkg.id === selectedPackage.id);
            if (updatedSelectedPackage) {
                setSelectedPackage(updatedSelectedPackage);
                calculateRatings(updatedSelectedPackage);
            }

            setIsSubmitting(false);
            setReviewSubmitted(true);
            setUserRating(0);
            setUserReview('');
            setUserName('');

            // Reset the submitted message after 3 seconds
            setTimeout(() => {
                setReviewSubmitted(false);
            }, 3000);
        }, 1000);
    };

    const toggleReviewsList = () => {
        setShowReviewsList(!showReviewsList);
    };

    return (
        <section className="py-16 bg-black text-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <h3 className="text-blue-500 font-medium mb-4">POPULAR PACKAGES</h3>
                    <h2 className="text-5xl font-bold mb-8">CHECKOUT OUR PACKAGES</h2>
                    <p className="max-w-3xl mx-auto text-lg text-gray-300">
                        Explore our meticulously crafted packages designed to ignite your
                        wanderlust and create unforgettable memories. Whether you&apos;re dreaming
                        of a thrilling safari adventure, a serene beach getaway, or an immersive
                        cultural experience, our tour company offers an array of packages tailored
                        to suit every traveler&apos;s desires.
                    </p>
                </div>

                {/* Package Display */}
                {selectedPackage && (
                    <div className="flex flex-col lg:flex-row bg-gray-900 rounded-lg overflow-hidden">
                        {/* Package Image */}
                        <div className="lg:w-1/3 relative">
                            <Image
                                src={selectedPackage.image}
                                alt={selectedPackage.title}
                                width={600}
                                height={600}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Package Details */}
                        <div className="lg:w-2/5 p-8 bg-gray-900">
                            <h3 className="text-2xl font-bold mb-6">{selectedPackage.title}</h3>

                            <div className="flex items-center space-x-6 mb-6 text-sm">
                                <div className="flex items-center">
                                    <RiTimeFill className="text-blue-500 mr-2" />
                                    <span>{selectedPackage.duration}</span>
                                </div>
                                <div className="flex items-center">
                                    <FiUsers className="text-blue-500 mr-2" />
                                    <span>{selectedPackage.capacity}</span>
                                </div>
                                <div className="flex items-center">
                                    <IoLocationSharp className="text-blue-500 mr-2" />
                                    <span>{selectedPackage.location}</span>
                                </div>
                            </div>

                            <h4 className="text-xl font-semibold text-yellow-500 mb-4">CHARGES INCLUDE:</h4>
                            <ul className="mb-6">
                                {selectedPackage.charges.map((charge, index) => (
                                    <li key={index} className="mb-2">* {charge}</li>
                                ))}
                            </ul>

                            <h4 className="text-xl font-semibold text-yellow-500 mb-4">EXCLUSIVE:</h4>
                            <p className="mb-2">Anything of personal Use.</p>

                            <h4 className="text-xl font-semibold text-yellow-500 mb-4">NB:</h4>
                            <ul>
                                {selectedPackage.exclusions.map((exclusion, index) => (
                                    <li key={index} className="mb-2">* {exclusion}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Price and Ratings Section */}
                        <div className="lg:w-1/4 bg-blue-600 p-8 flex flex-col">
                            {/* Ratings Overview */}
                            <div className="mb-6">
                                <div className="flex justify-between items-center mb-2">
                                    <div className="text-3xl font-bold">{displayedRating.toFixed(1)}</div>
                                    <div className="flex">
                                        {renderStars(displayedRating)}
                                    </div>
                                </div>
                                <div className="text-center mb-4">
                                    <button
                                        onClick={toggleReviewsList}
                                        className="text-white hover:underline focus:outline-none"
                                    >
                                        {displayedReviews} {displayedReviews === 1 ? 'review' : 'reviews'}
                                    </button>
                                </div>

                                {/* Rating Breakdown */}
                                <div className="space-y-2 mb-4">
                                    {[5, 4, 3, 2, 1].map((star) => {
                                        const count = ratingBreakdown[star] || 0;
                                        const percentage = displayedReviews > 0
                                            ? Math.round((count / displayedReviews) * 100)
                                            : 0;

                                        return (
                                            <div key={star} className="flex items-center text-sm">
                                                <div className="w-12 text-right mr-2">{star} stars</div>
                                                <div className="flex-1 bg-blue-800 h-2 rounded-full overflow-hidden">
                                                    <div
                                                        className="bg-yellow-400 h-full"
                                                        style={{ width: `${percentage}%` }}
                                                    ></div>
                                                </div>
                                                <div className="w-8 text-right ml-2">{count}</div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Reviews List (Hidden by default) */}
                            {showReviewsList && selectedPackage.userReviews && selectedPackage.userReviews.length > 0 && (
                                <div className="mb-6 max-h-60 overflow-y-auto bg-blue-700 p-3 rounded">
                                    <h4 className="font-semibold mb-2">Recent Reviews</h4>
                                    <div className="space-y-3">
                                        {selectedPackage.userReviews.map((review) => (
                                            <div key={review.id} className="border-b border-blue-600 pb-2 last:border-0">
                                                <div className="flex items-center justify-between">
                                                    <div className="font-medium">{review.username}</div>
                                                    <div className="flex text-sm">
                                                        {renderStars(review.rating)}
                                                    </div>
                                                </div>
                                                <p className="text-sm mt-1">{review.comment}</p>
                                                <div className="text-xs text-blue-300 mt-1">{review.date}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <h4 className="text-center text-xl mb-6">PRICE PER PERSON</h4>

                            <div className="grid grid-cols-2 gap-2 mb-8">
                                <div className="bg-blue-700 p-3 flex items-center justify-center">
                                    Non-Resident
                                </div>
                                <div className="bg-blue-700 p-3 flex items-center justify-center font-bold">
                                    ${selectedPackage.nonResidentPrice}
                                </div>
                                <div className="bg-blue-700 p-3 flex items-center justify-center">
                                    Resident
                                </div>
                                <div className="bg-blue-700 p-3 flex items-center justify-center font-bold">
                                    Ksh {selectedPackage.residentPrice}
                                </div>
                            </div>

                            <button className="mt-auto border-2 border-white hover:bg-blue-700 text-white py-3 px-6 rounded-full transition duration-300 text-center">
                                BOOK NOW
                            </button>

                            {/* Review Section */}
                            <div className="mt-8 border-t border-blue-500 pt-4">
                                <h4 className="text-center text-xl mb-4">RATE THIS PACKAGE</h4>

                                {reviewSubmitted ? (
                                    <div className="bg-green-600 text-white p-3 rounded text-center mb-4">
                                        Thank you for your review!
                                    </div>
                                ) : (
                                    <>
                                        <div className="flex justify-center mb-4">
                                            <RatingSelector
                                                value={userRating}
                                                onChange={setUserRating}
                                            />
                                        </div>

                                        <input
                                            type="text"
                                            className="w-full bg-blue-700 text-white p-3 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
                                            placeholder="Your name (optional)"
                                            value={userName}
                                            onChange={(e) => setUserName(e.target.value)}
                                        />

                                        <textarea
                                            className="w-full bg-blue-700 text-white p-3 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
                                            rows={3}
                                            placeholder="Share your experience..."
                                            value={userReview}
                                            onChange={(e) => setUserReview(e.target.value)}
                                        />

                                        <button
                                            className="w-full bg-white text-blue-600 hover:bg-gray-200 py-2 px-6 rounded transition duration-300 text-center disabled:opacity-50 disabled:cursor-not-allowed"
                                            onClick={handleSubmitReview}
                                            disabled={userRating === 0 || isSubmitting}
                                        >
                                            {isSubmitting ? 'Submitting...' : 'Submit Review'}
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Package Selection Buttons */}
                {packages.length > 1 && (
                    <div className="mt-12 flex flex-wrap justify-center gap-4">
                        {packages.map((pkg) => (
                            <button
                                key={pkg.id}
                                onClick={() => setSelectedPackage(pkg)}
                                className={`px-6 py-3 rounded-md transition ${selectedPackage?.id === pkg.id
                                    ? "bg-blue-600 text-white"
                                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                                    }`}
                            >
                                {pkg.title}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default SafariPackages;