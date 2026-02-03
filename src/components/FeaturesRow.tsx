"use client";

import React from 'react';
import styles from './FeaturesRow.module.css';
import { Check, ChevronRight } from 'lucide-react';

interface FeaturesRowProps {
    features: string[];
}

export default function FeaturesRow({ features }: FeaturesRowProps) {
    if (!features || features.length === 0) return null;

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                {features.map((feature, index) => (
                    <div key={index} className={styles.featureItem}>
                        <Check size={16} className={styles.checkIcon} />
                        <span className={styles.featureText}>{feature}</span>
                        {index < features.length - 1 && <span className={styles.dot}>·</span>}
                    </div>
                ))}
            </div>
            <ChevronRight size={20} className={styles.chevron} />
        </div>
    );
}
