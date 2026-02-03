"use client";

import React from 'react';
import styles from './PanelHeader.module.css';
import { PlaceData } from '@/data/placeData';
// We'll replace with real icons later if lucide is installed
import { X, Star } from 'lucide-react';

interface PanelHeaderProps {
    place: PlaceData;
}

const PanelHeader: React.FC<PanelHeaderProps> = ({ place }) => {
    return (
        <div className={styles.header}>
            <div className={styles.imageContainer}>
                {place.images[0] && (
                    <img src={place.images[0]} alt={place.name} className={styles.heroImage} />
                )}
                <button className={styles.closeButton}>
                    <X size={20} color="#202124" />
                </button>
            </div>
            <div className={styles.titleSection}>
                <h1 className={styles.title}>{place.name}</h1>
                <div className={styles.ratingRow}>
                    <span className={styles.rating}>{place.rating}</span>
                    <div className={styles.stars}>
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={14} fill={i < Math.floor(place.rating) ? "#fbbc04" : "#dadce0"} color={i < Math.floor(place.rating) ? "#fbbc04" : "#dadce0"} />
                        ))}
                    </div>
                    <span className={styles.reviewCount}>({place.reviewCount.toLocaleString()})</span>
                </div>
                <div className={styles.categoryRow}>
                    <span className={styles.category}>{place.category}</span>
                </div>
            </div>
        </div>
    );
};

export default PanelHeader;
