type Quote = { text: string; author: string };

export default function QuoteRotator({ quotes }: { quotes: Quote[] }) {
  const slotDuration = 8;
  const total = quotes.length * slotDuration;

  const css = `
    @keyframes qfade {
      0%, 29%  { opacity: 1; }
      33%, 96% { opacity: 0; }
      100%     { opacity: 1; }
    }
    .q-slot {
      position: absolute;
      inset: 0;
      animation: qfade ${total}s ease-in-out infinite;
    }
    ${quotes.map((_, i) =>
      `.q-slot:nth-child(${i + 1}) { animation-delay: ${i * slotDuration}s; opacity: ${i === 0 ? 1 : 0}; }`
    ).join('\n')}
  `;

  return (
    <div style={{ flex: 1, position: 'relative', height: '160px' }}>
      <style>{css}</style>
      {quotes.map((quote, i) => (
        <div key={i} className="q-slot">
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
      ))}
    </div>
  );
}
