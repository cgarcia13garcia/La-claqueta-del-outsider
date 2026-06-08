import { getAllSlugs, getPostBySlug } from '@/lib/posts';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug).catch(() => null);
  if (!post) return {};
  return {
    title: `${post.title} — La Claqueta del Outsider`,
    description: post.excerpt,
  };
}

export default async function ArticuloPage({ params }: Props) {
  const { slug } = await params;
  let post;
  try {
    post = await getPostBySlug(slug);
  } catch {
    notFound();
  }

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
            display: 'flex',
            gap: '32px',
            fontFamily: 'var(--font-body)',
            fontSize: '11px',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'rgba(17,17,17,0.5)',
          }}>
            <Link href="/archivo" style={{ color: 'inherit', textDecoration: 'none' }}>Archivo</Link>
          </nav>
        </div>
      </header>

      {/* ARTÍCULO */}
      <article style={{ paddingTop: '80px', paddingBottom: '120px' }}>

        <div style={{ maxWidth: '720px', margin: '0 auto', padding: '0 32px' }}>

          <Link href="/archivo" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontFamily: 'var(--font-body)',
            fontSize: '10px',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'rgba(17,17,17,0.38)',
            textDecoration: 'none',
            marginBottom: '48px',
          }}>
            ← Archivo
          </Link>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '10px',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'rgba(17,17,17,0.4)',
            marginBottom: '20px',
          }}>
            {post.category}
          </p>

          <h1 style={{
            fontFamily: 'var(--font-title)',
            fontWeight: 700,
            fontSize: 'clamp(2.4rem, 5vw, 3.6rem)',
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            color: '#111',
            marginBottom: '32px',
          }}>
            {post.title}
          </h1>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            borderTop: '1px solid rgba(17,17,17,0.12)',
            paddingTop: '20px',
            marginBottom: '64px',
            fontFamily: 'var(--font-body)',
            fontSize: '11px',
            color: 'rgba(17,17,17,0.4)',
          }}>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
            </time>
            <span style={{ width: '1px', height: '14px', background: 'rgba(17,17,17,0.2)' }} />
            <span style={{ fontStyle: 'italic' }}>{post.excerpt}</span>
          </div>

          <div
            className="prose-claqueta"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />

        </div>
      </article>

      {/* PIE */}
      <footer style={{ borderTop: '1px solid rgba(17,17,17,0.12)', background: 'var(--background-footer)', padding: '72px 32px', textAlign: 'center' }}>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '10px',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: 'rgba(17,17,17,0.4)',
          marginBottom: '20px',
        }}>
          Seguir leyendo
        </p>
        <Link href="/archivo" style={{
          fontFamily: 'var(--font-title)',
          fontWeight: 700,
          fontSize: '1.8rem',
          color: '#111',
          textDecoration: 'none',
          letterSpacing: '-0.02em',
        }}>
          Ver todos los textos →
        </Link>
      </footer>

    </main>
  );
}
