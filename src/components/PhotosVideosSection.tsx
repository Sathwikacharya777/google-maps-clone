"use client";

import React from 'react';
import styles from './PhotosVideosSection.module.css';
import { PlaceData } from '@/data/placeData';
import { Plus } from 'lucide-react';

interface PhotosVideosSectionProps {
    place: PlaceData;
}

export default function PhotosVideosSection({ place }: PhotosVideosSectionProps) {
    return (
        <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Photos & videos</h2>

            <div className={styles.scrollRow}>
                {place.photoGroups.map((group) => (
                    <div key={group.id} className={styles.photoCard}>
                        <img src={group.image} alt={group.title} className={styles.image} />
                        <div className={styles.overlay}>
                            <div className={styles.title}>{group.title}</div>
                            {group.count && <div className={styles.subtitle}>{group.count}</div>}
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.addButtonContainer}>
                <button className={styles.addButton}>
                    <Plus size={18} />
                    <span>Add photos & videos</span>
                </button>
            </div>
        </div>
    );
}
