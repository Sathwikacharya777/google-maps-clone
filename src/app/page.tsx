import styles from './page.module.css';
import PlaceDetailsPanel from '@/components/PlaceDetailsPanel';
import { PLACE_DATA } from '@/data/placeData';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.mapBackground}>
        {/* Placeholder for map */}
        <div className={styles.mapPlaceholderText}>Map Area</div>
      </div>
      <PlaceDetailsPanel place={PLACE_DATA} />
    </main>
  );
}
