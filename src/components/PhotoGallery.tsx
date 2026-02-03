"use client";

import React from 'react';
import styles from './PhotoGallery.module.css';

interface PhotoGalleryProps {
    images: string[];
}

export default function PhotoGallery({ images }: PhotoGalleryProps) {
    if (!images || images.length === 0) return null;

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Photos</h2>
            <div className={styles.scrollRow}>
                {images.map((src, index) => (
                    <div key={index} className={styles.imageCard}>
                        <img src={src} alt={`Gallery photo ${index + 1}`} className={styles.image} />
                    </div>
                ))}
            </div>
        </div>
    );
}
