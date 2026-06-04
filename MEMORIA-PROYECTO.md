# La Claqueta del Outsider — Memoria del proyecto

## Datos del proyecto
- **Nombre**: La Claqueta del Outsider
- **Dominio**: laclaquetadeloutsider.es (registrado 26 mayo 2026)
- **Renovación dominio**: recordatorio programado para 20 mayo 2027
- **Carpeta**: `C:\Users\Usuario\Desktop\Claude\La claqueta del Outsider\`
- **Stack**: Next.js 15.3.2, TypeScript, Tailwind CSS v4, gray-matter, remark

## Forma de trabajar
- Paso a paso, sin aturullarse
- Archivos completos, nunca ediciones parciales
- Terminal siempre en **Command Prompt** (no PowerShell)
- Cuando la caché falla: `Ctrl+C` → `rmdir /s /q .next` → `npm run dev`

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
  taza-hero.jpg           ← Imagen de "Tú siempre reías"
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

## Artículos publicados

### Mundanidades (4)
| Slug | Título | Fecha |
|------|--------|-------|
| tu-siempre-reias | Tú siempre reías | 2021-01-12 |
| los-abrazos-rotos | Los abrazos rotos | 2020-03-28 |
| diego-la-felicidad-de-otros | Diego, la felicidad de otros | 2020-11-26 |
| san-isidro-confinado | San Isidro confinado | 2020-05-16 |

### Música (3)
| Slug | Título | Fecha |
|------|--------|-------|
| kurt-cobain-alma-de-metal | Kurt Cobain y su alma de metal | 2019-04-17 |
| el-outsider-angel-stanich | El Outsider (Ángel Stanich) | 2019-02-27 |
| no-te-vayas-lejos-ines | No te vayas lejos, Inés | 2019-08-12 |

### Cine y Series (20, ordenados por campo `order`)
| Order | Slug | Título |
|-------|------|--------|
| 1 | erase-una-vez-tarantino | Érase una vez... un maravilloso descalzaperros |
| 2 | un-joker-espeluznante | Un Joker espeluznante |
| 3 | que-nunca-deje-de-llover | Que nunca deje de llover |
| 4 | roy-batty-existencialista | Roy Batty, el penúltimo existencialista |
| 5 | cruella-tartar-psicodelia | Cruella, un tartar de psicodelia |
| 6 | las-gafas-de-maverick | Las gafas de Maverick |
| 7 | parasitos-salvajada | Parásitos, una salvajada anfetamínica |
| 8 | los-otornos-de-woody | Los otoños de Woody |
| 10 | endgame-epica-postmilenials | Endgame, la épica de los postmilenials |
| 11 | la-gloria-por-bandera | La gloria por bandera |
| 12 | con-la-infamia-en-los-talones | Con la infamia en los talones |
| 13 | los-hermanos-sisters | Los hermanos Sisters, un western magistral |
| 14 | el-reino-de-las-cloacas | El reino de las cloacas |
| 15 | la-enfermedad-del-domingo | La enfermedad del domingo |
| 16 | green-book-prejuicios | Green book: El libro de los prejuicios |
| 17 | dumbo-inadaptado-burton | Dumbo, otro inadaptado en el circo de Burton |
| 18 | patria-odio-cocinaba-en-bata | Patria, el odio se cocinaba en bata |
| 19 | el-origen-del-terror | El origen del terror |
| 20 | los-tics-de-woody | Los tics de Woody |
| 21 | la-fibra-eastwoodiana | La fibra Eastwoodiana |

### Deporte (6)
| Slug | Título | Fecha |
|------|--------|-------|
| la-hora-de-los-rituales | La hora de los rituales | 2024-05-11 |
| una-summeriana-gran-reserva | Una Summeriana gran reserva | 2021-09-02 |
| superdepor-estrella-galicia | Superdepor, la Estrella de Galicia | 2020-08-19 |
| el-nino-torres | El Niño Torres, la leyenda contracultural | 2019-06-28 |
| like-a-rolling-stone | Like a Rolling Stone | 2019-02-26 |
| el-gran-gatsby | El Gran Gatsby | 2019-02-25 |

## Artículos reservados (no publicados)
Guardados en: `Textos reservados — La Claqueta del Outsider.docx`
- El remake no reina (Cine)
- Juego de tronos, un fenómeno sociológico (Series)
- Ready Player One / Luka Doncic (Deporte)
- 20 años de Honestidad Brutal / Calamaro (Música)
- El aroma de Aguado (Toros)
- La verónica viva de Morante (Toros)
- El Evangelio Morantista (Toros)

## Portada — artículos destacados
- **Hero principal**: Tú siempre reías (featured: true) — imagen: /taza-hero.jpg
- **Grid**: Kurt Cobain, Érase una vez (Tarantino), Un Joker espeluznante
- Pendiente: asignar imágenes a Cobain, Tarantino y Joker

## Imágenes pendientes
- kurt-cobain-alma-de-metal → pendiente
- erase-una-vez-tarantino → pendiente
- un-joker-espeluznante → pendiente
- Cine y Series: imágenes en blanco, se van poniendo una a una
- Los 5 títulos españoles de C&S tienen imágenes Unsplash genéricas

## Campo portada
Los artículos del grid de portada se controlan con `portada: true` en el frontmatter.
- Actualmente activos: kurt-cobain-alma-de-metal, erase-una-vez-tarantino, un-joker-espeluznante
- El hero se controla con `featured: true` (actualmente: tu-siempre-reias)
- Cuando se publique algo nuevo y se quiera rotar, quitar `portada: true` al que corresponda

## Próximos pasos
- Terminar imágenes de portada (Cobain, Tarantino, Joker)
- Ir poniendo imágenes a Cine y Series una a una
- Despliegue en Vercel y conexión con laclaquetadeloutsider.es
