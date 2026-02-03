"use client";

import React from 'react';
import styles from './ReviewSummarySection.module.css';
import { PlaceData } from '@/data/placeData';
import { Star, MessageSquarePlus } from 'lucide-react';

interface ReviewSummarySectionProps {
    place: PlaceData;
}

export default function ReviewSummarySection({ place }: ReviewSummarySectionProps) {
    return (
        <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Review summary</h2>

            <div className={styles.summaryContainer}>
                <div className={styles.barsColumn}>
                    {[5, 4, 3, 2, 1].map((rating) => (
                        <div key={rating} className={styles.barRow}>
                            <span className={styles.starLabel}>{rating}</span>
                            <div className={styles.barTrack}>
                                <div
                                    className={styles.barFill}
                                    style={{ width: `${place.ratingDistribution[rating]}%`, backgroundColor: rating === 3 || rating === 1 ? '#fdb815' : 'rgb(250 204 21)' }}
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

            <div className={styles.highlightsContainer}>
                {place.reviewHighlights.map((highlight) => (
                    <div key={highlight.id} className={styles.highlightItem}>
                        <img src={highlight.userImage} alt="User" className={styles.avatar} />
                        <div className={styles.highlightText}>
                            {/* Simple bold replacement for demo, ideally proper parsing */}
                            "{highlight.text.replace(highlight.snippet, '').replace('""', '')}"
                            {/* Just rendering text for simplicity as we don't have a robust parser here, but bolding is tricky without dangerous html */}
                            {/* Let's just render full text and use span for snippet logic if simple split works, otherwise just text */}
                            <span className={styles.textContent}>
                                {highlight.text.split(highlight.snippet)[0]}
                                <strong>{highlight.snippet}</strong>
                                {highlight.text.split(highlight.snippet)[1]}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.writeButtonContainer}>
                <button className={styles.writeButton}>
                    <MessageSquarePlus size={18} />
                    <span>Write a review</span>
                </button>
            </div>
        </div>
    );
}
