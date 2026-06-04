'use client';

import { useState, useEffect } from 'react';

type Quote = { text: string; author: string };

const DISPLAY_SECONDS = 8;

const css = `
  @keyframes quoteFade {
    0%   { opacity: 0; }
    12%  { opacity: 1; }
    82%  { opacity: 1; }
    100% { opacity: 0; }
  }
`;

export default function QuoteRotator({ quotes }: { quotes: Quote[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(i => (i + 1) % quotes.length);
    }, DISPLAY_SECONDS * 1000);
    return () => clearInterval(interval);
  }, [quotes.length]);

  const quote = quotes[index];

  return (
    <>
      <style>{css}</style>
      <div
        key={index}
        style={{
          flex: 1,
          animation: `quoteFade ${DISPLAY_SECONDS}s ease-in-out forwards`,
        }}
      >
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
    </>
  );
}
