"use client";

import React, { useState } from 'react';
import styles from './page.module.css';
import PlaceDetailsPanel from '@/components/PlaceDetailsPanel';
import MapToolbar from '@/components/MapToolbar';
import { PLACE_DATA } from '@/data/placeData';

export default function Home() {
  // State lifted to the parent so both Toolbar and Panel can react to it
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <main className={styles.main}>
      {/* 1. Map Background Layer */}
      <div className={styles.mapBackground}>
        <img src="/map.png" alt="Map" className={styles.mapImage} />
      </div>

      {/* 2. Top Toolbar (Category buttons + 9 Dots) */}
      {/* It will hide itself if isCollapsed is true */}
      <MapToolbar isCollapsed={isCollapsed} />

      {/* 3. Place Details Panel (Sidebar / Bottom Sheet) */}
      {/* It controls the slide animation and the arrow button */}
      <PlaceDetailsPanel 
        place={PLACE_DATA} 
        isCollapsed={isCollapsed} 
        setIsCollapsed={setIsCollapsed} 
      />
    </main>
  );
}