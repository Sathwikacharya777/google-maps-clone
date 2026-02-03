"use client";

import React, { useState } from 'react';
import styles from './HoursSection.module.css';
import { Clock, ChevronDown, ChevronUp } from 'lucide-react';

interface HoursSectionProps {
    hours: { day: string; time: string }[];
    openStatus: string;
}

export default function HoursSection({ hours, openStatus }: HoursSectionProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className={styles.container}>
            <div
                className={styles.header}
                onClick={() => setIsExpanded(!isExpanded)}
                role="button"
                aria-expanded={isExpanded}
            >
                <Clock size={24} className={styles.icon} color="#202124" />
                <div className={styles.headerText}>
                    <span className={styles.status}>{openStatus}</span>
                    <span className={styles.dot}>·</span>
                    <span className={styles.nextClose}>Closes 8 PM</span>
                    {/* Static for now, typically dynamic based on current time */}
                </div>
                <div className={styles.chevron}>
                    {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
            </div>

            <div className={`${styles.accordion} ${isExpanded ? styles.expanded : ''}`}>
                <table className={styles.hoursTable}>
                    <tbody>
                        {hours.map((item, index) => (
                            <tr key={index} className={styles.hourRow}>
                                <td className={styles.day}>{item.day}</td>
                                <td className={styles.time}>{item.time}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
