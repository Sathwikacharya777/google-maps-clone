"use client";

import React from 'react';
import styles from './PanelHeader.module.css';
import { PlaceData } from '@/data/placeData';
import { X, Star } from 'lucide-react';

interface PanelHeaderProps {
    place: PlaceData;
    activeTab: string;
    onTabChange: (tab: string) => void;
}

export default function PanelHeader({ place, activeTab, onTabChange }: PanelHeaderProps) {
    const tabs = ['Overview', 'Menu', 'Reviews', 'About'];

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
                    <span className={styles.reviewCount}>({place.reviewCount})</span>
                    <span className={styles.dot}>·</span>
                    <span className={styles.priceSymbol}>{place.priceSymbol}</span>
                </div>
                <div className={styles.categoryRow}>
                    <span className={styles.category}>{place.category}</span>
                </div>
            </div>

            {/* Tabs */}
            <div className={styles.tabsContainer}>
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        className={`${styles.tab} ${activeTab === tab ? styles.activeTab : ''}`}
                        onClick={() => onTabChange(tab)}
                    >
                        {tab}
                        {activeTab === tab && <div className={styles.activeIndicator} />}
                    </button>
                ))}
            </div>
        </div>
    );
}
