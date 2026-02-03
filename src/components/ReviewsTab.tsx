"use client";

import React from 'react';
import styles from './ReviewsTab.module.css';
import { PlaceData } from '@/data/placeData';
import { Star, MessageSquarePlus, Search, SlidersHorizontal, MoreVertical } from 'lucide-react';

interface ReviewsTabProps {
    place: PlaceData;
}

export default function ReviewsTab({ place }: ReviewsTabProps) {
    const filters = ["All", "price 9", "noodles 3", "indo-chinese cuisine 2", "budget 2"];

    return (
        <div className={styles.container}>
            {/* Rating Summary */}
            <div className={styles.summaryContainer}>
                <div className={styles.barsColumn}>
                    {[5, 4, 3, 2, 1].map((rating) => (
                        <div key={rating} className={styles.barRow}>
                            <span className={styles.starLabel}>{rating}</span>
                            <div className={styles.barTrack}>
                                <div
                                    className={styles.barFill}
                                    style={{ width: `${place.ratingDistribution[rating]}%`, backgroundColor: rating === 3 || rating === 1 ? '#fdb815' : 'rgb(250 204 21)' }} /* Simplified color logic */
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles.scoreColumn}>
                    <div className={styles.bigScore}>{place.rating}</div>
                    <div className={styles.starsRow}>
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={14} fill={i < Math.floor(place.rating) ? "#fbbc04" : "#dadce0"} color={i < Math.floor(place.rating) ? "#fbbc04" : "#dadce0"} />
                        ))}
                    </div>
                    <div className={styles.totalReviews}>{place.reviewCount} reviews</div>
                </div>
            </div>

            <div className={styles.writeReviewContainer}>
                <button className={styles.writeButton}>
                    <MessageSquarePlus size={18} />
                    <span>Write a review</span>
                </button>
            </div>

            <div className={styles.filtersRow}>
                <button className={styles.iconButton}><Search size={18} /></button>
                <button className={styles.iconButton}><SlidersHorizontal size={18} /> Sort</button>
            </div>

            <div className={styles.chipsRow}>
                {filters.map((f, i) => (
                    <button key={i} className={`${styles.chip} ${i === 0 ? styles.activeChip : ''}`}>
                        {f}
                    </button>
                ))}
            </div>

            <div className={styles.reviewList}>
                {place.reviews.map((review) => (
                    <div key={review.id} className={styles.reviewItem}>
                        <div className={styles.reviewHeader}>
                            <img src={review.userImage || "https://via.placeholder.com/40"} alt={review.user} className={styles.avatar} />
                            <div className={styles.userInfo}>
                                <div className={styles.userName}>{review.user}</div>
                                <div className={styles.userStats}>{review.stats}</div>
                            </div>
                            <button className={styles.moreButton}><MoreVertical size={16} /></button>
                        </div>

                        <div className={styles.reviewRatingRow}>
                            <div className={styles.reviewStars}>
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={12} fill={i < review.rating ? "#fbbc04" : "#dadce0"} color={i < review.rating ? "#fbbc04" : "#dadce0"} />
                                ))}
                            </div>
                            <span className={styles.reviewTime}>{review.time}</span>
                        </div>

                        <div className={styles.reviewText}>
                            {review.text}
                            <span className={styles.moreLink}> More</span>
                        </div>

                        {/* Review Tags if any */}
                        {review.tags && (
                            <div className={styles.reviewTagsDropdown}>
                                {/* Placeholder for tags/attributes badges in reviews */}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
