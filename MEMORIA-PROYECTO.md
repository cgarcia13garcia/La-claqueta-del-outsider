# La Claqueta del Outsider — Memoria del proyecto

## Datos del proyecto
- **Nombre**: La Claqueta del Outsider
- **Dominio**: laclaquetadeloutsider.es (registrado 26 mayo 2026)
- **Renovación dominio**: recordatorio programado para 20 mayo 2027
- **Carpeta**: `C:\Users\Usuario\Desktop\Claude\La claqueta del Outsider\`
- **Repositorio GitHub**: https://github.com/cgarcia13garcia/La-claqueta-del-outsider
- **Vercel**: https://vercel.com/carlos-garcia-garcia-s-projects/la-claqueta-del-outsider
- **Stack**: Next.js 15.3.2, TypeScript, Tailwind CSS v4, gray-matter, remark

## Forma de trabajar
- Paso a paso, sin aturullarse
- Archivos completos, nunca ediciones parciales
- Terminal siempre en **Command Prompt** (no PowerShell)
- Cuando la caché falla: `Ctrl+C` → `rmdir /s /q .next` → `npm run dev`
- Para commit y push: usar **Git GUI** (ya tiene las credenciales de GitHub guardadas)
- Hard refresh en el navegador: `Ctrl+Shift+R`

## Estructura de carpetas clave
```
src/
  app/
    page.tsx              ← Portada principal
    globals.css           ← Variables CSS, fuentes, prose-claqueta
    layout.tsx            ← Fuentes: Playfair Display + Inter
    archivo/page.tsx      ← Índice de todos los artículos
    articulos/[slug]/page.tsx  ← Página de artículo individual
    categoria/[categoria]/page.tsx  ← Página por categoría
  lib/
    posts.ts              ← getAllPosts(), getPostBySlug(), getAllSlugs()
  posts/                  ← Archivos .md de cada artículo
public/
  kurt-cobain.jpg         ← Imagen portada Kurt Cobain
```

## Diseño
- **Fondo**: #f3efe7 (crema)
- **Texto**: #111111
- **Acento Música**: #8B2E2E (burdeos)
- **Fuente títulos**: Playfair Display (--font-title)
- **Fuente cuerpo**: Inter (--font-body)
- **Inspiración**: The New Yorker, Cahiers du Cinéma, Lynch, Twin Peaks

## Categorías (orden en navegación)
1. Mundanidades → `/categoria/mundanidades`
2. Música → `/categoria/musica`
3. Cine y Series → `/categoria/cine-y-series`
4. Deporte → `/categoria/deporte`
5. Ensayo → `/categoria/ensayo` (pendiente de contenido)
6. Archivo → `/archivo`

## Portada — cómo funciona

### Hero principal
- Controlado por `featured: true` en el frontmatter
- **Actualmente**: Tú siempre reías → imagen `/taza-hero.jpg`
  - Nota: `taza-hero.jpg` está en la raíz del proyecto, no en `public/`. Hay que moverla a `public/` si da problemas.

### Grid editorial (3 artículos)
- Controlado por `portada: true` en el frontmatter
- Los posts se ordenan por **fecha descendente** (`getAllPosts()` en `posts.ts`)
- La lógica del grid en `page.tsx`:
  - `post1` (columna izquierda, grande) → **muestra imagen** (ratio 3:2)
  - `post2` (columna derecha arriba) → **muestra imagen** (ratio 16:9)
  - `post3` (columna derecha abajo) → **muestra imagen** (ratio 16:9) ← añadido 4/jun/2026

### Artículos actualmente en portada (portada: true)
| Slug | Título | Fecha | Posición en grid |
|------|--------|-------|-----------------|
| un-joker-espeluznante | Un Joker espeluznante | 2019-10-07 | post1 (grande izq.) |
| erase-una-vez-tarantino | Érase una vez... Tarantino | 2019-08-16 | post2 (dcha. arriba) |
| kurt-cobain-alma-de-metal | Kurt Cobain y su alma de metal | 2019-04-17 | post3 (dcha. abajo) |

Para rotar la portada: quitar `portada: true` al que se quiera sacar y añadirlo al nuevo. La posición depende de la fecha (más reciente = post1).

## Artículos publicados

### Mundanidades (4)
| Slug | Título | Fecha | Imagen |
|------|--------|-------|--------|
| tu-siempre-reias | Tú siempre reías | 2021-01-12 | /taza-hero.jpg (hero) |
| los-abrazos-rotos | Los abrazos rotos | 2020-03-28 | Unsplash |
| diego-la-felicidad-de-otros | Diego, la felicidad de otros | 2020-11-26 | Unsplash |
| san-isidro-confinado | San Isidro confinado | 2020-05-16 | Unsplash |

### Música (3)
| Slug | Título | Fecha | Imagen |
|------|--------|-------|--------|
| kurt-cobain-alma-de-metal | Kurt Cobain y su alma de metal | 2019-04-17 | /kurt-cobain.jpg ✓ |
| el-outsider-angel-stanich | El Outsider (Ángel Stanich) | 2019-02-27 | Unsplash |
| no-te-vayas-lejos-ines | No te vayas lejos, Inés | 2019-08-12 | Unsplash |

### Cine y Series (20, ordenados por campo `order`)
| Order | Slug | Título | Imagen |
|-------|------|--------|--------|
| 1 | erase-una-vez-tarantino | Érase una vez... Tarantino | Sí (externa) |
| 2 | un-joker-espeluznante | Un Joker espeluznante | Sí (externa) |
| 3 | que-nunca-deje-de-llover | Que nunca deje de llover | pendiente |
| 4 | roy-batty-existencialista | Roy Batty, el penúltimo existencialista | pendiente |
| 5 | cruella-tartar-psicodelia | Cruella, un tartar de psicodelia | pendiente |
| 6 | las-gafas-de-maverick | Las gafas de Maverick | pendiente |
| 7 | parasitos-salvajada | Parásitos, una salvajada anfetamínica | pendiente |
| 8 | los-otornos-de-woody | Los otoños de Woody | pendiente |
| 10 | endgame-epica-postmilenials | Endgame, la épica de los postmilenials | pendiente |
| 11 | la-gloria-por-bandera | La gloria por bandera | pendiente |
| 12 | con-la-infamia-en-los-talones | Con la infamia en los talones | pendiente |
| 13 | los-hermanos-sisters | Los hermanos Sisters, un western magistral | pendiente |
| 14 | el-reino-de-las-cloacas | El reino de las cloacas | pendiente |
| 15 | la-enfermedad-del-domingo | La enfermedad del domingo | pendiente |
| 16 | green-book-prejuicios | Green book: El libro de los prejuicios | pendiente |
| 17 | dumbo-inadaptado-burton | Dumbo, otro inadaptado en el circo de Burton | pendiente |
| 18 | patria-odio-cocinaba-en-bata | Patria, el odio se cocinaba en bata | pendiente |
| 19 | el-origen-del-terror | El origen del terror | pendiente |
| 20 | los-tics-de-woody | Los tics de Woody | pendiente |
| 21 | la-fibra-eastwoodiana | La fibra Eastwoodiana | pendiente |

### Deporte (6)
| Slug | Título | Fecha | Imagen |
|------|--------|-------|--------|
| la-hora-de-los-rituales | La hora de los rituales | 2024-05-11 | Unsplash |
| una-summeriana-gran-reserva | Una Summeriana gran reserva | 2021-09-02 | Unsplash |
| superdepor-estrella-galicia | Superdepor, la Estrella de Galicia | 2020-08-19 | Unsplash |
| el-nino-torres | El Niño Torres, la leyenda contracultural | 2019-06-28 | Unsplash |
| like-a-rolling-stone | Like a Rolling Stone | 2019-02-26 | Unsplash |
| el-gran-gatsby | El Gran Gatsby | 2019-02-25 | Unsplash |

## Artículos reservados (no publicados)
Guardados en: `Textos reservados — La Claqueta del Outsider.docx`
- El remake no reina (Cine)
- Juego de tronos, un fenómeno sociológico (Series)
- Ready Player One / Luka Doncic (Deporte)
- 20 años de Honestidad Brutal / Calamaro (Música)
- El aroma de Aguado (Toros)
- La verónica viva de Morante (Toros)
- El Evangelio Morantista (Toros)

## Imágenes pendientes
- Cine y Series: 18 artículos sin imagen propia (tienen campo `image: ""`)
- taza-hero.jpg: está en la raíz del proyecto, debería estar en `public/`
- Todos los demás artículos con Unsplash: funcionan bien, pero son genéricas

## Próximos pasos
- Mover `taza-hero.jpg` de la raíz a `public/` (o actualizar la ruta en el frontmatter de "Tú siempre reías")
- Ir poniendo imágenes propias a Cine y Series una a una
- Publicar artículos reservados cuando estén listos
