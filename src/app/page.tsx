import { getAllPosts, PostMeta } from '@/lib/posts';
import Link from 'next/link';

const QUOTES = [
  {
    text: "El cine es la mentira más honesta del mundo. Y por eso lo amamos.",
    author: "David Lynch",
  },
];

function CatLabel({ category }: { category: string }) {
  const isMusica = category === 'Música';
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
      <span style={{
        fontFamily: 'var(--font-body)',
        fontSize: '10px',
        letterSpacing: '0.28em',
        textTransform: 'uppercase' as const,
        color: isMusica ? 'var(--accent-musica)' : 'rgba(17,17,17,0.45)',
      }}>
        {category}
      </span>
      <span style={{
        display: 'block',
        width: '28px',
        height: '1px',
        background: isMusica ? 'var(--accent-musica)' : 'rgba(17,17,17,0.25)',
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
  const diaryPost = allPosts.find((p) => p.category === 'Diario');

  return (
    <main style={{ background: 'var(--background)', color: 'var(--foreground)', minHeight: '100vh' }}>

      {/* ── CABECERA ── */}
      <header style={{ borderBottom: '1px solid rgba(17,17,17,0.15)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 48px' }}>

          {/* Fila superior */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 2fr 1fr',
            alignItems: 'center',
            gap: '24px',
            padding: '28px 0',
            borderBottom: '1px solid rgba(17,17,17,0.1)',
          }}>
            {/* Izquierda */}
            <div style={{
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
            <div style={{
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
          <nav style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '40px',
            padding: '14px 0',
            fontFamily: 'var(--font-body)',
            fontSize: '11px',
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: 'rgba(17,17,17,0.55)',
          }}>
            {[
              { label: 'Mundanidades', href: '/categoria/mundanidades' },
              { label: 'Música', href: '/categoria/musica' },
              { label: 'Cine y Series', href: '/categoria/cine-y-series' },
              { label: 'Deporte', href: '/categoria/deporte' },
              { label: 'Ensayo', href: '/categoria/ensayo' },
              { label: 'Archivo', href: '/archivo' },
            ].map(({ label, href }) => (
              <Link key={label} href={href} style={{ color: 'inherit' }}>
                {label}
              </Link>
            ))}
          </nav>

        </div>
      </header>

      {/* ── HERO ── */}
      <section style={{ position: 'relative', height: 'clamp(460px, 65vh, 720px)', overflow: 'hidden' }}>
        <img
          src={featured.image ?? 'https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1800&auto=format&fit=crop'}
          alt={featured.title}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 55%, rgba(0,0,0,0.05) 100%)',
        }} />

        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'flex-end' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 48px 72px', width: '100%' }}>
            <div style={{ maxWidth: '560px' }}>

              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '10px',
                letterSpacing: '0.35em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.55)',
                marginBottom: '12px',
              }}>
                {featured.category}
              </p>

              <h2 style={{
                fontFamily: 'var(--font-title)',
                fontWeight: 700,
                fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)',
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                color: '#fff',
                marginBottom: '16px',
              }}>
                {featured.title}
              </h2>

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

      {/* ── GRID DE ARTÍCULOS ── */}
      <section style={{ maxWidth: '1400px', margin: '0 auto', padding: '80px 48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '56px' }}>
          {gridPosts.map((post) => (
            <Link key={post.slug} href={`/articulos/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
              <article>
                <CatLabel category={post.category} />

                <h3 style={{
                  fontFamily: 'var(--font-title)',
                  fontWeight: 700,
                  fontSize: 'clamp(1.6rem, 2.2vw, 2rem)',
                  lineHeight: 1.15,
                  letterSpacing: '-0.02em',
                  color: '#111',
                  marginBottom: '18px',
                }}>
                  {post.title}
                </h3>

                {post.image && (
                  <div style={{ aspectRatio: '4/3', overflow: 'hidden', marginBottom: '18px' }}>
                    <img
                      src={post.image}
                      alt={post.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                )}

                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.93rem',
                  lineHeight: 1.7,
                  color: 'rgba(17,17,17,0.6)',
                  marginBottom: '16px',
                }}>
                  {post.excerpt}
                </p>

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
          ))}
        </div>
      </section>

      {/* ── DIARIO + CITAS ── */}
      <section style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 48px 96px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '56px',
          borderTop: '1px solid rgba(17,17,17,0.12)',
          paddingTop: '64px',
        }}>

          {/* Diario */}
          {diaryPost && (
            <div>
              <CatLabel category="Diario" />
              <Link href={`/articulos/${diaryPost.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                <h3 style={{
                  fontFamily: 'var(--font-title)',
                  fontWeight: 700,
                  fontSize: 'clamp(1.8rem, 2.8vw, 2.4rem)',
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  color: '#111',
                  marginBottom: '16px',
                }}>
                  {diaryPost.title}
                </h3>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.93rem',
                  lineHeight: 1.7,
                  color: 'rgba(17,17,17,0.6)',
                  marginBottom: '20px',
                }}>
                  {diaryPost.excerpt}
                </p>
                {diaryPost.image && (
                  <div style={{ aspectRatio: '16/9', overflow: 'hidden', marginBottom: '20px' }}>
                    <img
                      src={diaryPost.image}
                      alt={diaryPost.title}
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
                  Leer entrada →
                </span>
              </Link>
            </div>
          )}

          {/* Citas */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <CatLabel category="Citas de cuaderno" />
            <blockquote style={{ margin: 0 }}>
              <p style={{
                fontFamily: 'var(--font-title)',
                fontWeight: 700,
                fontSize: 'clamp(1.6rem, 2.5vw, 2.3rem)',
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
                color: '#111',
                marginBottom: '20px',
              }}>
                &ldquo;{QUOTES[0].text}&rdquo;
              </p>
              <footer style={{
                fontFamily: 'var(--font-body)',
                fontSize: '10px',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'rgba(17,17,17,0.4)',
              }}>
                — {QUOTES[0].author}
              </footer>
            </blockquote>
            <Link href="/archivo" style={{
              fontFamily: 'var(--font-body)',
              fontSize: '10px',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'rgba(17,17,17,0.38)',
              marginTop: '32px',
              textDecoration: 'none',
            }}>
              Ver más citas →
            </Link>
          </div>

        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ borderTop: '1px solid rgba(17,17,17,0.15)', padding: '28px 0' }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 48px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          alignItems: 'center',
          fontFamily: 'var(--font-body)',
          fontSize: '10px',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'rgba(17,17,17,0.33)',
        }}>
          <span>© 2025 La Claqueta del Outsider</span>
          <span style={{ textAlign: 'center', textTransform: 'none', fontStyle: 'italic', letterSpacing: '0.05em', fontSize: '11px' }}>
            Escribir es mirar lo que otros no quieren ver.
          </span>
          <span style={{ textAlign: 'right' }}>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Suscríbete al cuaderno →</a>
          </span>
        </div>
      </footer>

    </main>
  );
}
