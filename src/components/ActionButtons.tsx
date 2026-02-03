"use client";

import React from 'react';
import styles from './ActionButtons.module.css';
import { Navigation, Bookmark, Share2, Smartphone, MapPin } from 'lucide-react'; // MapPin can act as "Nearby"

export default function ActionButtons() {
    const actions = [
        { label: 'Directions', icon: Navigation, active: true },
        { label: 'Save', icon: Bookmark, active: false },
        { label: 'Nearby', icon: MapPin, active: false }, // New
        { label: 'Send to phone', icon: Smartphone, active: false },
        { label: 'Share', icon: Share2, active: false },
    ];

    return (
        <div className={styles.container}>
            {actions.map((action, index) => (
                <button key={index} className={styles.actionButton}>
                    <div className={`${styles.iconCircle} ${action.active ? styles.active : ''}`}>
                        <action.icon size={20} color="#1a73e8" fill={action.active ? "none" : "none"} strokeWidth={2} />
                    </div>
                    <span className={styles.label}>{action.label}</span>
                </button>
            ))}
        </div>
    );
}
