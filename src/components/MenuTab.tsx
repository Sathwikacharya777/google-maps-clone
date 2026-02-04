"use client";

import React, { useRef, useState, useEffect } from 'react';
import styles from './MenuTab.module.css';
import { PlaceData } from '@/data/placeData';
import { ChevronRight, ChevronLeft } from 'lucide-react';

interface MenuTabProps {
    place: PlaceData;
}

export default function MenuTab({ place }: MenuTabProps) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);

    // Function to handle showing/hiding arrows based on scroll position
    const checkScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setShowLeftArrow(scrollLeft > 10);
            // Show right arrow if we haven't reached the end (with a small buffer)
            setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    useEffect(() => {
        const currentRef = scrollRef.current;
        if (currentRef) {
            currentRef.addEventListener('scroll', checkScroll);
            checkScroll(); // Initial check
        }
        return () => currentRef?.removeEventListener('scroll', checkScroll);
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = 300; // Adjust distance to scroll
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className={styles.container}>
            {/* Menu Section */}
            <div className={styles.sectionHeader}>
                <h2 className={styles.title}>Menu</h2>
            </div>

            <div className={styles.scrollWrapper}>
                {showLeftArrow && (
                    <button className={`${styles.arrowBtn} ${styles.left}`} onClick={() => scroll('left')}>
                        <ChevronLeft size={20} />
                    </button>
                )}

                <div className={styles.menuScrollRow} ref={scrollRef}>
                    {place.menuImages.map((src, index) => (
                        <div key={index} className={styles.menuCard}>
                            <img src={src} alt="Menu" className={styles.menuImage} />
                        </div>
                    ))}
                    <div className={styles.seeAllButton}>
                        <div className={styles.iconCircle}>
                            <ChevronRight size={20} />
                        </div>
                        <span>See all</span>
                    </div>
                </div>

                {showRightArrow && (
                    <button className={`${styles.arrowBtn} ${styles.right}`} onClick={() => scroll('right')}>
                        <ChevronRight size={20} />
                    </button>
                )}
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