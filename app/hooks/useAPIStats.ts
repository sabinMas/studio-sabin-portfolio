'use client';

import { useState, useEffect } from 'react';

interface APIStats {
  totalAPIs: number | null;
  totalProjects: number;
  loading: boolean;
}

export function useAPIStats(): APIStats {
  const [totalAPIs, setTotalAPIs] = useState<number | null>(null);
  const [totalProjects, setTotalProjects] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAPIStats() {
      try {
        const response = await fetch('/api/stats/apis');
        const data = await response.json();
        setTotalAPIs(data.totalAPIs);
        setTotalProjects(data.totalProjects);
      } catch (error) {
        console.error('Failed to fetch API stats:', error);
        setTotalAPIs(null);
      } finally {
        setLoading(false);
      }
    }

    fetchAPIStats();
  }, []);

  return { totalAPIs, totalProjects, loading };
}
