import { getAllPosts } from '@/lib/posts';
import Link from 'next/link';

export const metadata = {
  title: 'Archivo — La Claqueta del Outsider',
  description: 'Todos los textos de La Claqueta del Outsider.',
};

export default function ArchivoPage() {
  const posts = getAllPosts();

  return (
    <main style={{ background: 'var(--background)', color: 'var(--foreground)', minHeight: '100vh' }}>

      {/* CABECERA */}
      <header style={{ borderBottom: '1px solid rgba(17,17,17,0.12)', padding: '20px 0' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{
            fontFamily: 'var(--font-title)',
            fontWeight: 700,
            fontSize: '1.1rem',
            letterSpacing: '-0.01em',
            color: '#111',
            textDecoration: 'none',
          }}>
            La Claqueta del Outsider
          </Link>
          <nav style={{
            fontFamily: 'var(--font-body)',
            fontSize: '11px',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'rgba(17,17,17,0.5)',
          }}>
            <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>← Portada</Link>
          </nav>
        </div>
      </header>

      {/* HERO DEL ARCHIVO */}
      <section style={{
        borderBottom: '1px solid rgba(17,17,17,0.1)',
        padding: '80px 48px 64px',
        maxWidth: '1400px',
        margin: '0 auto',
      }}>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '10px',
          letterSpacing: '0.35em',
          textTransform: 'uppercase',
          color: 'rgba(17,17,17,0.4)',
          marginBottom: '20px',
        }}>
          Archivo editorial
        </p>
        <h1 style={{
          fontFamily: 'var(--font-title)',
          fontWeight: 700,
          fontSize: 'clamp(3rem, 6vw, 5rem)',
          lineHeight: 0.95,
          letterSpacing: '-0.03em',
          color: '#111',
          marginBottom: '48px',
        }}>
          Todos los textos.
        </h1>
      </section>

      {/* LISTA */}
      <section style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 48px 96px' }}>
        {posts.map((post, i) => (
          <Link
            key={post.slug}
            href={`/articulos/${post.slug}`}
            style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
          >
            <article style={{
              borderBottom: '1px solid rgba(17,17,17,0.1)',
              padding: '36px 0',
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              gap: '32px',
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '32px', flex: 1 }}>
                <span style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '11px',
                  color: 'rgba(17,17,17,0.25)',
                  fontVariantNumeric: 'tabular-nums',
                  paddingTop: '4px',
                  minWidth: '28px',
                }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '10px',
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                    color: post.category === 'Música' ? 'var(--accent-musica)' : 'rgba(17,17,17,0.4)',
                    marginBottom: '10px',
                  }}>
                    {post.category}
                  </p>
                  <h2 style={{
                    fontFamily: 'var(--font-title)',
                    fontWeight: 700,
                    fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                    lineHeight: 1.15,
                    letterSpacing: '-0.02em',
                    color: '#111',
                    marginBottom: '10px',
                  }}>
                    {post.title}
                  </h2>
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.93rem',
                    lineHeight: 1.65,
                    color: 'rgba(17,17,17,0.55)',
                    maxWidth: '600px',
                  }}>
                    {post.excerpt}
                  </p>
                </div>
              </div>
              <div style={{ textAlign: 'right', flexShrink: 0 }}>
                <time dateTime={post.date} style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '10px',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'rgba(17,17,17,0.35)',
                  display: 'block',
                  marginBottom: '8px',
                }}>
                  {new Date(post.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'short' })}
                </time>
                <span style={{ color: 'rgba(17,17,17,0.3)', fontSize: '14px' }}>→</span>
              </div>
            </article>
          </Link>
        ))}
      </section>

    </main>
  );
}
