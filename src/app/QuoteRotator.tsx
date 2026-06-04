'use client';
import { useState, useEffect } from 'react';

type Quote = { text: string; author: string };

export default function QuoteRotator({ quotes }: { quotes: Quote[] }) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIdx(i => (i + 1) % quotes.length), 6000);
    return () => clearInterval(id);
  }, [quotes.length]);

  return (
    <div style={{ flex: 1 }}>
      <p style={{
        fontFamily: 'var(--font-title)',
        fontStyle: 'italic',
        fontSize: 'clamp(1.1rem, 2vw, 1.55rem)',
        lineHeight: 1.4,
        letterSpacing: '-0.01em',
        color: '#111',
        marginBottom: '16px',
      }}>
        {quotes[idx].text}
      </p>
      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: '10px',
        letterSpacing: '0.3em',
        textTransform: 'uppercase' as const,
        color: 'rgba(17,17,17,0.4)',
      }}>
        — {quotes[idx].author}
      </p>
    </div>
  );
}
