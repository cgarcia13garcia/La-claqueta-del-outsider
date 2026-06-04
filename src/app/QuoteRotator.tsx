'use client';

import { useState, useEffect } from 'react';

type Quote = { text: string; author: string };

export default function QuoteRotator({ quotes }: { quotes: Quote[] }) {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrent(prev => (prev + 1) % quotes.length);
        setFading(false);
      }, 500);
    }, 5000);
    return () => clearInterval(interval);
  }, [quotes.length]);

  const quote = quotes[current];

  return (
    <div style={{ flex: 1, minHeight: '90px' }}>
      <div style={{
        opacity: fading ? 0 : 1,
        transition: 'opacity 0.5s ease-in-out',
      }}>
        <p style={{
          fontFamily: 'var(--font-title)',
          fontStyle: 'italic',
          fontSize: 'clamp(1.1rem, 2vw, 1.55rem)',
          lineHeight: 1.4,
          letterSpacing: '-0.01em',
          color: '#111',
          marginBottom: '16px',
        }}>
          {quote.text}
        </p>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '10px',
          letterSpacing: '0.3em',
          textTransform: 'uppercase' as const,
          color: 'rgba(17,17,17,0.4)',
        }}>
          — {quote.author}
        </p>
      </div>
    </div>
  );
}
