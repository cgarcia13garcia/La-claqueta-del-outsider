'use client';

import { useState, useEffect } from 'react';

type Quote = { text: string; author: string };

export default function QuoteRotator({ quotes }: { quotes: Quote[] }) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Fade out
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % quotes.length);
        // Fade in
        setVisible(true);
      }, 1500);
    }, 9000); // cambia cada 9 segundos

    return () => clearInterval(interval);
  }, [quotes.length]);

  const quote = quotes[index];

  return (
    <div
      style={{
        flex: 1,
        transition: 'opacity 1.5s ease-in-out',
        opacity: visible ? 1 : 0,
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
        textTransform: 'uppercase',
        color: 'rgba(17,17,17,0.4)',
      }}>
        — {quote.author}
      </p>
    </div>
  );
}
