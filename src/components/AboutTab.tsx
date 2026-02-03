"use client";

import React from 'react';
import styles from './AboutTab.module.css';
import { PlaceData } from '@/data/placeData';
import { Check, Ban } from 'lucide-react'; // Placeholder for "not available" icon (circle slash)

interface AboutTabProps {
    place: PlaceData;
}

export default function AboutTab({ place }: AboutTabProps) {
    return (
        <div className={styles.container}>
            {place.aboutGroups.map((group, index) => (
                <React.Fragment key={index}>
                    <div className={styles.section}>
                        <h3 className={styles.sectionTitle}>{group.title}</h3>
                        <div className={styles.grid}>
                            {group.items.map((item, idx) => (
                                <div key={idx} className={styles.item}>
                                    {item.available ? (
                                        <Check size={18} className={styles.checkIcon} />
                                    ) : (
                                        <Ban size={18} className={styles.banIcon} />
                                    )}
                                    <span className={styles.label}>{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    {index < place.aboutGroups.length - 1 && <div className={styles.divider} />}
                </React.Fragment>
            ))}
        </div>
    );
}
