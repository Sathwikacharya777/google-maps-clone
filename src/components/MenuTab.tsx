"use client";

import React from 'react';
import styles from './MenuTab.module.css';
import { PlaceData } from '@/data/placeData';
import { ChevronRight } from 'lucide-react';

interface MenuTabProps {
    place: PlaceData;
}

export default function MenuTab({ place }: MenuTabProps) {
    return (
        <div className={styles.container}>
            {/* Menu Section */}
            <div className={styles.sectionHeader}>
                <h2 className={styles.title}>Menu</h2>
            </div>
            <div className={styles.menuScrollRow}>
                {place.menuImages.map((src, index) => (
                    <div key={index} className={styles.menuCard}>
                        <img src={src} alt="Menu" className={styles.menuImage} />
                    </div>
                ))}
                <div className={styles.seeAllButton}>
                    <ChevronRight />
                    <span>See all</span>
                </div>
            </div>

            <div className={styles.divider} />

            {/* Highlights Section */}
            <div className={styles.sectionHeader}>
                <h2 className={styles.title}>Highlights</h2>
            </div>
            <div className={styles.grid}>
                {place.highlights.map((item) => (
                    <div key={item.id} className={styles.highlightCard}>
                        <div className={styles.highlightImageContainer}>
                            <img src={item.image} alt={item.name} className={styles.highlightImage} />
                            {item.popular && <div className={styles.popularBadge}>Popular</div>}
                        </div>
                        <div className={styles.highlightTitle}>{item.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
