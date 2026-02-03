"use client";

import React, { useState, useEffect, useRef } from 'react';
import styles from './PlaceDetailsPanel.module.css';
import { PlaceData } from '@/data/placeData';
import PanelHeader from './PanelHeader';
import Spinner from './Spinner';
import { 
  Menu, 
  ChevronLeft, 
  ChevronRight, 
  Bookmark, 
  History, 
  Smartphone, 
  Search, 
  X,
  MapPin,
  ShieldCheck,
  Tag
} from 'lucide-react';

// Tab Components
import MenuTab from './MenuTab';
import ReviewsTab from './ReviewsTab';
import AboutTab from './AboutTab';

// Overview Components
import ActionButtons from './ActionButtons';
import OverviewSection from './OverviewSection';
import HoursSection from './HoursSection';
import FeaturesRow from './FeaturesRow';
import PriceAccordion from './PriceAccordion';
import PhotosVideosSection from './PhotosVideosSection';
import ReviewSummarySection from './ReviewSummarySection';

interface PlaceDetailsPanelProps {
  place: PlaceData;
  isCollapsed: boolean;
  setIsCollapsed: (val: boolean) => void;
}

const PlaceDetailsPanel: React.FC<PlaceDetailsPanelProps> = ({ 
  place, 
  isCollapsed, 
  setIsCollapsed 
}) => {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('Overview');
  const [searchQuery, setSearchQuery] = useState(place.name || "");
  
  const [isMobile, setIsMobile] = useState(false);
  const [sheetHeight, setSheetHeight] = useState<number | string>(0);
  const [isDragging, setIsDragging] = useState(false);
  
  const startY = useRef(0);
  const startHeight = useRef(0);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 600;
      setIsMobile(mobile);
      if (mobile) {
        setSheetHeight(window.innerHeight * 0.5);
        setIsCollapsed(false);
      }
    };
    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setIsCollapsed]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!isMobile) return;
    setIsDragging(true);
    startY.current = e.touches[0].clientY;
    const panel = document.getElementById('details-panel');
    if (panel) startHeight.current = panel.offsetHeight;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !isMobile) return;
    const currentY = e.touches[0].clientY;
    const deltaY = startY.current - currentY;
    const newHeight = startHeight.current + deltaY;
    const maxHeight = window.innerHeight;
    const minHeight = window.innerHeight * 0.15;
    if (newHeight >= minHeight && newHeight <= maxHeight) setSheetHeight(newHeight);
  };

  const handleTouchEnd = () => {
    if (!isMobile) return;
    setIsDragging(false);
    const heightPx = typeof sheetHeight === 'number' ? sheetHeight : (startHeight.current || window.innerHeight * 0.6);
    const windowH = window.innerHeight;
    if (heightPx > windowH * 0.8) setSheetHeight('100vh');
    else if (heightPx < windowH * 0.35) setSheetHeight('15vh');
    else setSheetHeight('60vh');
  };

  if (loading) {
    return (
      <div className={styles.panelWrapper}>
         {!isMobile && <aside className={styles.leftRail} />}
         <div className={styles.panelContainer}>
            <div className={styles.loadingContainer}><Spinner /></div>
         </div>
      </div>
    );
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'Menu': return <MenuTab place={place} />;
      case 'Reviews': return <ReviewsTab place={place} />;
      case 'About': return <AboutTab place={place} />;
      default:
        return (
          <>
            <ActionButtons />
            <div className={styles.divider} />
            
            {/* New Detail Rows like Screenshot 2 */}
            <div className={styles.infoRows}>
                <div className={styles.infoRow}>
                    <MapPin size={20} className={styles.infoIcon} />
                    <span className={styles.infoText}>{place.address || "H3JG+GFW, Badiyadka, Kerala 671551"}</span>
                </div>
                <div className={styles.infoRow}>
                    <ShieldCheck size={20} className={styles.infoIcon} />
                    <span className={styles.infoLink}>Claim this business</span>
                </div>
                <div className={styles.infoRow}>
                    <History size={20} className={styles.infoIcon} />
                    <span className={styles.infoLink}>Your Maps activity</span>
                </div>
                <div className={styles.infoRow}>
                    <Tag size={20} className={styles.infoIcon} />
                    <span className={styles.infoLink}>Add a label</span>
                </div>
            </div>

            <div className={styles.divider} />
            <FeaturesRow features={place.features} />
            <OverviewSection place={place} />
            <HoursSection hours={place.hours} openStatus={place.openStatus} />
            <PriceAccordion pricePerPerson={place.pricePerPerson} />
            <PhotosVideosSection place={place} />
            <ReviewSummarySection place={place} />
          </>
        );
    }
  };

  return (
    <div className={styles.panelWrapper}>
      {/* SIDEBAR */}
      {!isMobile && (
        <aside className={styles.leftRail}>
          <div className={styles.topIcons}>
            <Menu size={24} color="#5f6368" className={styles.menuIcon} />
            <div className={styles.railItem}>
              <Bookmark size={22} color="#5f6368" />
              <span className={styles.railLabel}>Saved</span>
            </div>
            <div className={styles.railItem}>
              <History size={22} color="#5f6368" />
              <span className={styles.railLabel}>Recents</span>
            </div>
          </div>
          
          <div className={styles.bottomIcons}>
            <div className={styles.miniThumb}>
              <img src={place.image} alt="" />
            </div>
            <div className={styles.railItem}>
              <Smartphone size={20} color="#5f6368" />
              <span className={styles.railLabel}>Get app</span>
            </div>
          </div>
        </aside>
      )}

      {/* MAIN PANEL */}
      <div 
        id="details-panel"
        className={`${styles.panelContainer} ${isCollapsed ? styles.collapsed : ''}`}
        style={{ 
          height: isMobile ? `${sheetHeight}px` : '100vh',
          transition: isDragging ? 'none' : 'transform 0.3s ease-out, height 0.3s ease-out'
        }}
      >
        <div className={styles.mobileDragHandle} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd} />

        {/* Floating Search Bar Section (New) */}
        <div className={styles.searchBarWrapper}>
            <div className={styles.searchBar}>
                <button className={styles.searchIconBtn}><Search size={20} color="#5f6368"/></button>
                <input 
                    type="text" 
                    value={searchQuery} 
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search Google Maps"
                />
                <button className={styles.closeBtn}><X size={20} color="#5f6368"/></button>
            </div>
        </div>

        <div className={styles.panelBody}>
            <PanelHeader place={place} activeTab={activeTab} onTabChange={setActiveTab} />
            <div className={styles.scrollContent}>
              {renderContent()}
            </div>
        </div>

        {/* Desktop Collapse Arrow */}
        {!isMobile && (
            <button 
                className={`${styles.collapseToggle} ${isCollapsed ? styles.isCollapsedBtn : ''}`}
                onClick={() => setIsCollapsed(!isCollapsed)}
            >
                {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
            </button>
        )}
      </div>
    </div>
  );
};

export default PlaceDetailsPanel;