import { getAllPosts, PostMeta } from '@/lib/posts';
import Link from 'next/link';
import QuoteRotator from './QuoteRotator';

const QUOTES = [
  {
    text: "El cine es la mentira más honesta del mundo. Y por eso lo amamos.",
    author: "David Lynch",
  },
  {
    text: "Los placeres violentos tienen finales violentos.",
    author: "William Shakespeare",
  },
  {
    text: "Éramos perfectos el día que perdimos nuestras almas.",
    author: "Marilyn Manson",
  },
];

function CatLabel({ category, light = false }: { category: string; light?: boolean }) {
  const isMusica = category === 'Música';
  const color = light
    ? 'rgba(255,255,255,0.55)'
    : isMusica
    ? 'var(--accent-musica)'
    : 'rgba(17,17,17,0.45)';
  const lineColor = light
    ? 'rgba(255,255,255,0.3)'
    : isMusica
    ? 'var(--accent-musica)'
    : 'rgba(17,17,17,0.25)';
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
      <span style={{
        fontFamily: 'var(--font-body)',
        fontSize: '10px',
        letterSpacing: '0.28em',
        textTransform: 'uppercase' as const,
        color,
      }}>
        {category}
      </span>
      <span style={{
        display: 'block',
        width: '28px',
        height: '1px',
        background: lineColor,
        flexShrink: 0,
      }} />
    </div>
  );
}

export default function Home() {
  const allPosts = getAllPosts();
  const featured: PostMeta = allPosts.find((p) => p.featured) ?? allPosts[0];
  const portadaPosts = allPosts.filter((p) => p.portada && p.slug !== featured.slug);
  const gridPosts = portadaPosts.length >= 3
    ? portadaPosts.slice(0, 3)
    : [
        ...portadaPosts,
        ...allPosts.filter((p) => p.slug !== featured.slug && !p.portada),
      ].slice(0, 3);

  const [post1, post2, post3] = gridPosts;
  return (
    <main style={{ background: 'var(--background)', color: 'var(--foreground)', minHeight: '100vh' }}>

      <style>{`
        /* ── RESPONSIVE ── */

        .header-inner {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 48px;
        }
        .header-top {
          display: grid;
          grid-template-columns: 1fr 2fr 1fr;
          align-items: center;
          gap: 24px;
          padding: 28px 0;
          border-bottom: 1px solid rgba(17,17,17,0.1);
        }
        .header-taglines { display: block; }
        .header-links { display: block; }

        .hero-padding { padding: 0 48px 72px; }

        .editorial-grid {
          display: grid;
          grid-template-columns: 3fr 2fr;
          grid-template-rows: auto auto;
          gap: 48px 56px;
        }
        .post-main {
          grid-column: 1;
          grid-row: 1 / 3;
        }
        .post-secondary {
          grid-column: 2;
          grid-row: 1;
        }
        .post-tertiary {
          grid-column: 2;
          grid-row: 2;
        }

        .section-padding { padding: 80px 48px; }
        .bottom-padding { padding: 0 48px 96px; }
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          align-items: center;
        }
        .footer-right { text-align: right; }
        .footer-lema { text-align: center; }

        .nav-bar {
          display: flex;
          justify-content: center;
          gap: 40px;
          padding: 14px 0;
          font-family: var(--font-body);
          font-size: 11px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: rgba(17,17,17,0.55);
          overflow-x: auto;
          white-space: nowrap;
        }

        .bottom-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
          border-top: 1px solid rgba(17,17,17,0.12);
          padding-top: 64px;
        }

        @media (max-width: 900px) {
          .header-inner { padding: 0 24px; }
          .header-top {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 0;
            padding: 20px 0;
          }
          .header-taglines { display: none; }
          .header-links { display: none; }

          .hero-padding { padding: 0 24px 40px; }

          .editorial-grid {
            grid-template-columns: 1fr;
            grid-template-rows: auto;
            gap: 40px;
          }
          .post-main { grid-column: 1; grid-row: auto; }
          .post-secondary { grid-column: 1; grid-row: auto; }
          .post-tertiary { grid-column: 1; grid-row: auto; }

          .section-padding { padding: 48px 24px; }
          .bottom-padding { padding: 0 24px 64px; }
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 12px;
            text-align: center;
          }
          .footer-right { text-align: center; }
          .footer-lema { text-align: center; }

          .nav-bar {
            gap: 24px;
            justify-content: flex-start;
            padding: 12px 0;
          }

          .bottom-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        @media (max-width: 600px) {
          .header-inner { padding: 0 18px; }
          .header-taglines { display: none !important; }
          .header-links { display: none !important; }
          .header-top { grid-template-columns: 1fr !important; }
          .section-padding { padding: 32px 18px; }
          .bottom-padding { padding: 0 18px 48px; }
          .hero-padding { padding: 0 18px 32px; }
          .nav-bar {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr) !important;
            justify-items: center !important;
            gap: 10px 8px !important;
            font-size: 9px !important;
            letter-spacing: 0.14em !important;
            white-space: normal !important;
            overflow-x: visible !important;
            padding: 14px 0 !important;
          }
          .editorial-grid { grid-template-columns: 1fr !important; gap: 32px; }
          .post-main { grid-column: 1 !important; grid-row: auto !important; }
          .post-secondary { grid-column: 1 !important; grid-row: auto !important; border-left: none !important; padding-left: 0 !important; border-top: 1px solid rgba(17,17,17,0.1); padding-top: 28px; }
          .post-tertiary { grid-column: 1 !important; grid-row: auto !important; border-left: none !important; padding-left: 0 !important; border-top: 1px solid rgba(17,17,17,0.1) !important; padding-top: 28px; }
          .bottom-grid { grid-template-columns: 1fr !important; gap: 32px; }
          .footer-grid { padding: 0 18px !important; }
        }
      `}</style>

      {/* ── CABECERA ── */}
      <header style={{ borderBottom: '1px solid rgba(17,17,17,0.15)' }}>
        <div className="header-inner">

          {/* Fila superior */}
          <div className="header-top">
            {/* Izquierda */}
            <div className="header-taglines" style={{
              fontFamily: 'var(--font-body)',
              fontSize: '10px',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(17,17,17,0.4)',
              lineHeight: 2.2,
            }}>
              <p>Revista Cultural</p>
              <p>Cine · Música · Deporte</p>
              <p>Ensayo y Mundanidades</p>
            </div>

            {/* Centro — nombre */}
            <div style={{ textAlign: 'center' }}>
              <Link href="/" style={{ textDecoration: 'none' }}>
                <p style={{
                  fontFamily: 'var(--font-title)',
                  fontWeight: 700,
                  fontSize: 'clamp(1.8rem, 4vw, 3.8rem)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.05,
                  color: '#111',
                }}>
                  La Claqueta del Outsider
                </p>
              </Link>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '9px',
                letterSpacing: '0.32em',
                textTransform: 'uppercase',
                color: 'rgba(17,17,17,0.4)',
                marginTop: '10px',
              }}>
                Cuadernos de cine, música y cultura contemporánea
              </p>
            </div>

            {/* Derecha */}
            <div className="header-links" style={{
              textAlign: 'right',
              fontFamily: 'var(--font-body)',
              fontSize: '10px',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(17,17,17,0.4)',
              lineHeight: 2.4,
            }}>
              <p><Link href="/archivo" style={{ color: 'inherit' }}>Archivo</Link></p>
              <p><a href="#" style={{ color: 'inherit' }}>Acerca de</a></p>
            </div>
          </div>

          {/* Navegación */}
          <nav className="nav-bar">
            {[
              { label: 'Mundanidades', href: '/categoria/mundanidades' },
              { label: 'Música', href: '/categoria/musica' },
              { label: 'Cine y Series', href: '/categoria/cine-y-series' },
              { label: 'Deporte', href: '/categoria/deporte' },
            ].map(({ label, href }) => (
              <Link key={label} href={href} style={{ color: 'inherit', flexShrink: 0 }}>
                {label}
              </Link>
            ))}
          </nav>

        </div>
      </header>

      {/* ── HERO ── */}
      <section style={{ position: 'relative', height: 'clamp(380px, 65vh, 720px)', overflow: 'hidden' }}>
        <img
          src={featured.image ?? 'https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1800&auto=format&fit=crop'}
          alt={featured.title}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.3) 55%, rgba(0,0,0,0.05) 100%)',
        }} />

        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'flex-end' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%' }} className="hero-padding">
            <div style={{ maxWidth: '560px' }}>

              <CatLabel category={featured.category} light />

              <h2 style={{
                fontFamily: 'var(--font-title)',
                fontWeight: 700,
                fontSize: 'clamp(1.9rem, 4.5vw, 3.6rem)',
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                color: '#fff',
                marginBottom: '16px',
              }}>
                {featured.title}
              </h2>

              {featured.excerpt && (
                <p style={{
                  fontFamily: 'var(--font-title)',
                  fontStyle: 'italic',
                  fontSize: '1.1rem',
                  color: 'rgba(255,255,255,0.7)',
                  lineHeight: 1.55,
                  marginBottom: '28px',
                }}>
                  {featured.excerpt}
                </p>
              )}

              <Link
                href={`/articulos/${featured.slug}`}
                style={{
                  display: 'inline-block',
                  border: '1px solid rgba(255,255,255,0.55)',
                  color: '#fff',
                  fontFamily: 'var(--font-body)',
                  fontSize: '10px',
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  padding: '11px 22px',
                  textDecoration: 'none',
                }}
              >
                Leer texto →
              </Link>

            </div>
          </div>
        </div>
      </section>

      {/* ── GRID EDITORIAL IRREGULAR ── */}
      <section style={{ maxWidth: '1400px', margin: '0 auto' }} className="section-padding">
        <div className="editorial-grid">

          {/* Post principal — grande, izquierda, ocupa dos filas */}
          {post1 && (
            <Link href={`/articulos/${post1.slug}`} className="post-main" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
              <article>
                <CatLabel category={post1.category} />
                {post1.image && (
                  <div style={{ aspectRatio: '3/2', overflow: 'hidden', marginBottom: '24px' }}>
                    <img
                      src={post1.image}
                      alt={post1.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                )}
                <h3 style={{
                  fontFamily: 'var(--font-title)',
                  fontWeight: 700,
                  fontSize: 'clamp(1.7rem, 2.5vw, 2.4rem)',
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  color: '#111',
                  marginBottom: '16px',
                }}>
                  {post1.title}
                </h3>
                {post1.excerpt && (
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.95rem',
                    lineHeight: 1.75,
                    color: 'rgba(17,17,17,0.6)',
                    marginBottom: '16px',
                  }}>
                    {post1.excerpt}
                  </p>
                )}
                <span style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '10px',
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  color: 'rgba(17,17,17,0.38)',
                }}>
                  Leer más →
                </span>
              </article>
            </Link>
          )}

          {/* Post secundario — derecha arriba, solo texto */}
          {post2 && (
            <Link href={`/articulos/${post2.slug}`} className="post-secondary" style={{ textDecoration: 'none', color: 'inherit', display: 'block', borderLeft: '1px solid rgba(17,17,17,0.1)', paddingLeft: '40px' }}>
              <article>
                <CatLabel category={post2.category} />
                <h3 style={{
                  fontFamily: 'var(--font-title)',
                  fontWeight: 700,
                  fontSize: 'clamp(1.4rem, 1.8vw, 1.9rem)',
                  lineHeight: 1.15,
                  letterSpacing: '-0.02em',
                  color: '#111',
                  marginBottom: '14px',
                }}>
                  {post2.title}
                </h3>
                {post2.image && (
                  <div style={{ aspectRatio: '16/9', overflow: 'hidden', marginBottom: '16px' }}>
                    <img
                      src={post2.image}
                      alt={post2.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                )}
                <span style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '10px',
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  color: 'rgba(17,17,17,0.38)',
                }}>
                  Leer más →
                </span>
              </article>
            </Link>
          )}

          {/* Post terciario — derecha abajo, con separador */}
          {post3 && (
            <Link href={`/articulos/${post3.slug}`} className="post-tertiary" style={{ textDecoration: 'none', color: 'inherit', display: 'block', borderLeft: '1px solid rgba(17,17,17,0.1)', borderTop: '1px solid rgba(17,17,17,0.1)', paddingLeft: '40px', paddingTop: '40px' }}>
              <article>
                <CatLabel category={post3.category} />
                <h3 style={{
                  fontFamily: 'var(--font-title)',
                  fontWeight: 700,
                  fontSize: 'clamp(1.4rem, 1.8vw, 1.9rem)',
                  lineHeight: 1.15,
                  letterSpacing: '-0.02em',
                  color: '#111',
                  marginBottom: '14px',
                }}>
                  {post3.title}
                </h3>
                {post3.image && (
                  <div style={{ aspectRatio: '16/9', overflow: 'hidden', marginBottom: '16px' }}>
                    <img
                      src={post3.image}
                      alt={post3.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                )}
                <span style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '10px',
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  color: 'rgba(17,17,17,0.38)',
                }}>
                  Leer más →
                </span>
              </article>
            </Link>
          )}

        </div>
      </section>

      {/* ── CITA ── */}
      <section style={{ maxWidth: '1400px', margin: '0 auto' }} className="bottom-padding">
        <div style={{
          borderTop: '1px solid rgba(17,17,17,0.12)',
          paddingTop: '56px',
          display: 'flex',
          alignItems: 'center',
          gap: '48px',
        }}>
          <span style={{
            fontFamily: 'var(--font-title)',
            fontSize: 'clamp(3rem, 8vw, 7rem)',
            lineHeight: 1,
            color: 'rgba(17,17,17,0.08)',
            flexShrink: 0,
            userSelect: 'none',
          }}>&ldquo;</span>
          <QuoteRotator quotes={QUOTES} />
          <Link href="/archivo" style={{
            fontFamily: 'var(--font-body)',
            fontSize: '10px',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'rgba(17,17,17,0.38)',
            textDecoration: 'none',
            flexShrink: 0,
            writingMode: 'vertical-rl' as const,
            transform: 'rotate(180deg)',
          }}>
            Ver archivo →
          </Link>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ borderTop: '1px solid rgba(17,17,17,0.15)', padding: '28px 0' }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 48px',
          fontFamily: 'var(--font-body)',
          fontSize: '10px',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'rgba(17,17,17,0.33)',
        }} className="footer-grid">
          <span>© 2025 La Claqueta del Outsider</span>
          <span className="footer-lema" style={{ textTransform: 'none', fontStyle: 'italic', letterSpacing: '0.05em', fontSize: '11px' }}>
            Escribir es mirar lo que otros no quieren ver.
          </span>
          <span className="footer-right">
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Suscríbete al cuaderno →</a>
          </span>
        </div>
      </footer>

    </main>
  );
}
