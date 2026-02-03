"use client";

import React from 'react';
import styles from './OverviewSection.module.css';
import { PlaceData } from '@/data/placeData';
import { MapPin, Phone, Globe } from 'lucide-react';

interface OverviewSectionProps {
    place: PlaceData;
}

export default function OverviewSection({ place }: OverviewSectionProps) {
    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <MapPin size={24} className={styles.icon} color="#202124" />
                <div className={styles.text}>{place.address}</div>
            </div>

            {place.phone && (
                <div className={styles.row}>
                    <Phone size={24} className={styles.icon} color="#202124" />
                    <div className={styles.text}>{place.phone}</div>
                </div>
            )}

            {place.website && (
                <div className={styles.row}>
                    <Globe size={24} className={styles.icon} color="#202124" />
                    <div className={styles.text}>{place.website}</div>
                </div>
            )}
        </div>
    );
}
