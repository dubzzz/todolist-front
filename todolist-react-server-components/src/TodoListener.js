// @ts-check
'use client';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from './framework/router';

const pollingInterval = 1000;

export default function TodoListener({ checksum }) {
  const lastKnownChecksumRef = useRef(checksum);
  const { refresh } = useRouter();

  useEffect(() => {
    // Mimic live-updates
    console.info('Running live-updates...');

    async function checkIfReloadNeeding() {
      try {
        const latestChecksumResponse = await fetch('http://localhost:4000/todos/checksum', { method: 'POST' });
        const latestChecksum = await latestChecksumResponse.text();
        if (latestChecksum !== lastKnownChecksumRef.current) {
          lastKnownChecksumRef.current = latestChecksum;
          refresh(null);
        }
      } catch (err) {
        console.error(`Failed to poll new checksum`);
      }
      runningTimeout = setTimeout(checkIfReloadNeeding, pollingInterval);
    }
    let runningTimeout = setTimeout(checkIfReloadNeeding, pollingInterval);

    return () => {
      console.info('Stopping live-updates...');
      clearTimeout(runningTimeout);
    };
  });
  return null;
}
