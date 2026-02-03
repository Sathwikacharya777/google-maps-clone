"use client";

import React, { useState } from 'react';
import styles from './PriceAccordion.module.css';
import { ChevronDown, ChevronUp, Banknote } from 'lucide-react';

interface PriceAccordionProps {
    pricePerPerson: string;
}

export default function PriceAccordion({ pricePerPerson }: PriceAccordionProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className={styles.container}>
            <div
                className={styles.header}
                onClick={() => setIsExpanded(!isExpanded)}
                role="button"
            >
                <Banknote size={24} className={styles.icon} color="#202124" />
                <div className={styles.headerText}>
                    <div className={styles.title}>{pricePerPerson}</div>
                    <div className={styles.subtitle}>Reported by 49 people</div>
                </div>
                <div className={styles.chevron}>
                    {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
            </div>
            {isExpanded && (
                <div className={styles.content}>
                    {/* Placeholder for dropdown content */}
                    <div className={styles.placeholder}>Price range details here...</div>
                </div>
            )}
        </div>
    );
}
