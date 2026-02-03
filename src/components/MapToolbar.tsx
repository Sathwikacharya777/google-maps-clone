"use client";
import React, { useState, useRef, useEffect } from 'react';
import { 
  Utensils, Bed, Camera, Bus, SquareParking, Pill, Landmark, Pencil 
} from 'lucide-react';
import styles from './MapToolbar.module.css';

// Data for Category Buttons
const categories = [
  { name: 'Restaurants', icon: <Utensils size={18} /> },
  { name: 'Hotels', icon: <Bed size={18} /> },
  { name: 'Things to do', icon: <Camera size={18} /> },
  { name: 'Transit', icon: <Bus size={18} /> },
  { name: 'Parking', icon: <SquareParking size={18} /> },
  { name: 'Pharmacies', icon: <Pill size={18} /> },
  { name: 'ATMs', icon: <Landmark size={18} /> },
];

// Data for Google Apps Grid
const googleApps = [
  { name: 'Account', icon: '', isProfile: true },
  { name: 'Drive', icon: 'https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg' },
  { name: 'Gmail', icon: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg' },
  { name: 'YouTube', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg' },
  { name: 'Gemini', icon: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Google_Gemini_logo.svg' },
  { name: 'Maps', icon: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Google_Maps_icon_%282020%29.svg' },
  { name: 'Search', icon: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_Logo.svg' },
  { name: 'Calendar', icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg' },
  { name: 'News', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Google_News_icon.svg' },
  { name: 'Photos', icon: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Google_Photos_icon_%282020%29.svg' },
  { name: 'Meet', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Google_Meet_icon_%282020%29.svg' },
  { name: 'Translate', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Google_Translate_logo.svg' },
];

interface MapToolbarProps {
  isCollapsed: boolean;
}

const MapToolbar: React.FC<MapToolbarProps> = ({ isCollapsed }) => {
  const [showApps, setShowApps] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close the dropdown if user clicks anywhere else on the map
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowApps(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // HIDE LOGIC: If panel is collapsed on desktop, return null so nothing displays
  if (isCollapsed && typeof window !== 'undefined' && window.innerWidth > 600) {
    return null;
  }

  return (
    <div className={styles.mainWrapper}>
      {/* LEFT: Categories */}
      <div className={styles.categoriesContainer}>
        {categories.map((cat) => (
          <button key={cat.name} className={styles.categoryButton}>
            <span className={styles.icon}>{cat.icon}</span>
            <span className={styles.label}>{cat.name}</span>
          </button>
        ))}
      </div>

      {/* RIGHT: User Controls & Dropdown */}
      <div className={styles.userControls} ref={menuRef}>
        {/* Simple 9 Dots SVG */}
        <div 
          className={styles.dotsIcon} 
          onClick={() => setShowApps(!showApps)}
          title="Google apps"
        >
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path 
              fill="white" 
              d="M6,8c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2S4.9,8,6,8z M12,8c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2S10.9,8,12,8z M18,8 c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2S16.9,8,18,8z M6,14c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2S4.9,14,6,14z M12,14 c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2S10.9,14,12,14z M18,14c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2S16.9,14,18,14z M6,20 c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2S4.9,20,6,20z M12,20c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2S10.9,20,12,20z M18,20 c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2S16.9,20,18,20z" 
            />
          </svg>
        </div>
        
        <div className={styles.profileCircle}>
          <span>S</span>
        </div>

        {/* GOOGLE TOOLS DROPDOWN */}
        {showApps && (
          <div className={styles.appsDropdown}>
            <div className={styles.dropdownHeader}>
              <span className={styles.headerTitle}>Your favorites</span>
              <div className={styles.editBtn}>
                <Pencil size={18} color="#e8eaed" />
              </div>
            </div>
            
            <div className={styles.appsGrid}>
              {googleApps.map((app) => (
                <div key={app.name} className={styles.appItem}>
                  <div className={styles.appIconWrapper}>
                    {app.isProfile ? (
                      <div className={styles.appProfileCircle}>S</div>
                    ) : (
                      <img src={app.icon} alt={app.name} className={styles.appIconImg} />
                    )}
                  </div>
                  <span className={styles.appName}>{app.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MapToolbar;