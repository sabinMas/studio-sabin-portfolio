'use client';

import { useState, useEffect } from 'react';
import { themes, applyTheme, getInitialTheme, type Theme } from '@/themes';
import './ThemeSwitcher.css';

const GROUPS: { label: string; category: Theme['category'] }[] = [
  { label: 'Dark', category: 'dark' },
  { label: 'Light', category: 'light' },
  { label: 'Monochromatic', category: 'mono' },
];

export default function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState('dali-gold');

  useEffect(() => {
    const theme = getInitialTheme();
    applyTheme(theme);
    setActiveId(theme.id);
  }, []);

  const handleSelect = (theme: Theme) => {
    applyTheme(theme);
    setActiveId(theme.id);
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div className="ts-backdrop" onClick={() => setIsOpen(false)} aria-hidden />
      )}

      {/* Floating button */}
      <button
        className="ts-fab"
        onClick={() => setIsOpen((v) => !v)}
        aria-label="Customize theme"
        title="Customize theme"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="8"  r="1.8" fill="currentColor" stroke="none" />
          <circle cx="8"  cy="15" r="1.8" fill="currentColor" stroke="none" />
          <circle cx="16" cy="15" r="1.8" fill="currentColor" stroke="none" />
          <path d="M12 10v2M9.5 13.5l1 1.5M14.5 13.5l-1 1.5" />
        </svg>
        <span>Theme</span>
      </button>

      {/* Panel */}
      <aside className={`ts-panel ${isOpen ? 'open' : ''}`} aria-label="Theme switcher">
        <div className="ts-header">
          <span className="ts-title">Customize Theme</span>
          <button className="ts-close" onClick={() => setIsOpen(false)} aria-label="Close">✕</button>
        </div>

        <div className="ts-body">
          {GROUPS.map(({ label, category }) => {
            const group = themes.filter((t) => t.category === category);
            return (
              <div key={category} className="ts-group">
                <div className="ts-group-label">{label}</div>
                {group.map((theme) => (
                  <button
                    key={theme.id}
                    className={`ts-item ${activeId === theme.id ? 'active' : ''}`}
                    onClick={() => handleSelect(theme)}
                  >
                    <div
                      className="ts-swatch"
                      style={{ background: theme.bg }}
                    >
                      <div
                        className="ts-dot"
                        style={{ background: theme.accent }}
                      />
                    </div>
                    <span className="ts-name">{theme.name}</span>
                    {activeId === theme.id && (
                      <span className="ts-check" aria-label="Selected">✓</span>
                    )}
                  </button>
                ))}
              </div>
            );
          })}
        </div>

        <div className="ts-footer">
          <span>Changes save automatically</span>
        </div>
      </aside>
    </>
  );
}
