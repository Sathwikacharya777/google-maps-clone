"use client";

import React, { useState, useEffect } from 'react';
import styles from './PlaceDetailsPanel.module.css';
import { PlaceData } from '@/data/placeData';
import PanelHeader from './PanelHeader';
import ActionButtons from './ActionButtons';
import OverviewSection from './OverviewSection';
import HoursSection from './HoursSection';
import PhotoGallery from './PhotoGallery';
import Spinner from './Spinner';

interface PlaceDetailsPanelProps {
    place: PlaceData;
}

const PlaceDetailsPanel: React.FC<PlaceDetailsPanelProps> = ({ place }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate initial loading
        const timer = setTimeout(() => {
            setLoading(false);
        }, 800);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className={styles.panelContainer}>
                <div className={styles.loadingContainer}>
                    <Spinner />
                </div>
            </div>
        );
    }

    return (
        <div className={styles.panelContainer}>
            <PanelHeader place={place} />
            <div className={styles.scrollContent}>
                <OverviewSection place={place} />
                <ActionButtons />
                <div className={styles.divider} />
                <HoursSection hours={place.hours} openStatus={place.openStatus} />
                <div className={styles.divider} />
                <PhotoGallery images={place.images} />
                <div className={styles.divider} />
                {/* Placeholder for reviews or other sections */}
                <div className={styles.footerSection}>
                    <p className={styles.footerText}>About this place</p>
                </div>
            </div>
        </div>
    );
};

export default PlaceDetailsPanel;
