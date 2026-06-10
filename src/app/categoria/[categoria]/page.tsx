import { getAllPosts } from '@/lib/posts';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type Props = { params: Promise<{ categoria: string }> };

// Mapa de slug URL → nombre real de categoría
const CATEGORIAS: Record<string, string> = {
  'mundanidades':   'Mundanidades',
  'musica':         'Música',
  'cine-y-series':  'Cine y Series',
  'deporte':        'Deporte',
  'ensayo':         'Ensayo',
};

export function generateStaticParams() {
  return Object.keys(CATEGORIAS).map((categoria) => ({ categoria }));
}

export async function generateMetadata({ params }: Props) {
  const { categoria } = await params;
  const nombre = CATEGORIAS[categoria];
  if (!nombre) return {};
  return {
    title: `${nombre} — La Claqueta del Outsider`,
    description: `Todos los textos de ${nombre} en La Claqueta del Outsider.`,
  };
}

export default async function CategoriaPage({ params }: Props) {
  const { categoria } = await params;
  const nombre = CATEGORIAS[categoria];
  if (!nombre) notFound();

  const posts = getAllPosts()
    .filter((p) => p.category === nombre)
    .sort((a, b) => {
      if (a.order !== undefined && b.order !== undefined) return a.order - b.order;
      if (a.order !== undefined) return -1;
      if (b.order !== undefined) return 1;
      return a.date < b.date ? 1 : -1;
    });

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

      {/* HERO DE CATEGORÍA */}
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
          Categoría
        </p>
        <h1 style={{
          fontFamily: 'var(--font-title)',
          fontWeight: 700,
          fontSize: 'clamp(3rem, 6vw, 5rem)',
          lineHeight: 0.95,
          letterSpacing: '-0.03em',
          color: '#111',
          marginBottom: '16px',
        }}>
          {nombre}.
        </h1>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '11px',
          letterSpacing: '0.2em',
          color: 'rgba(17,17,17,0.35)',
          textTransform: 'uppercase',
        }}>
          {posts.length} {posts.length === 1 ? 'texto' : 'textos'}
        </p>
      </section>

      {/* LISTA */}
      <section style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 48px 96px' }}>
        {posts.length === 0 ? (
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.95rem',
            color: 'rgba(17,17,17,0.45)',
            paddingTop: '64px',
          }}>
            Próximamente.
          </p>
        ) : (
          posts.map((post, i) => (
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
          ))
        )}
      </section>

    </main>
  );
}
