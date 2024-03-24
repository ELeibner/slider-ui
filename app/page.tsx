'use client';
import Slider from '@/ui/Slider';
import { useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [value, setValue] = useState(4);
  return (
    <main className={styles.main}>
      <p>{value}</p>
      <Slider min={2} max={10} value={value} onChange={setValue} width={200} />
    </main>
  );
}
