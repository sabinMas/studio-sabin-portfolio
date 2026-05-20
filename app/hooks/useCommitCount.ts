import { useState, useEffect } from 'react';

export function useCommitCount() {
  const [count, setCount] = useState<number | null>(null);
  const [repoCount, setRepoCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCommits = async () => {
      try {
        const res = await fetch('/api/stats/commits');
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        if (data.commits !== null) {
          setCount(data.commits);
          setRepoCount(data.repos);
        }
      } catch (error) {
        console.error('Error fetching commit count:', error);
        setCount(null);
      } finally {
        setLoading(false);
      }
    };

    fetchCommits();
  }, []);

  return { count, repoCount, loading };
}
