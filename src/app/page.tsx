"use client";

import React, { useState } from 'react';
import styles from './page.module.css';
import PlaceDetailsPanel from '@/components/PlaceDetailsPanel';
import MapToolbar from '@/components/MapToolbar';
import { PLACE_DATA } from '@/data/placeData';
import Link from 'next/link'; // Import Link

export default function Home() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <main className={styles.main}>
      {/* 1. Map Background Layer */}
      <div className={styles.mapBackground}>
        <img src="/map.png" alt="Map" className={styles.mapImage} />
      </div>

      {/* Floating Product Link (Added this) */}
      <Link 
        href="/product" 
        style={{
          position: 'fixed',
          top: '80px', // Below your toolbar
          right: '20px',
          zIndex: 1000,
          backgroundColor: '#1a73e8',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '24px',
          textDecoration: 'none',
          fontWeight: '500',
          boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
        }}
      >
        View Products
      </Link>

      <MapToolbar isCollapsed={isCollapsed} />

      <PlaceDetailsPanel 
        place={PLACE_DATA} 
        isCollapsed={isCollapsed} 
        setIsCollapsed={setIsCollapsed} 
      />
    </main>
  );
}