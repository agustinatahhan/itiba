# SKILL — Itibá: Component Consistency

## Stack
- Next.js (App Router) + Tailwind CSS v4
- Global styles: `app/globals.css`
- Fuentes: Cormorant Garamond (heading) + Calibri (body)

---

## Regla 1 — Nunca usar `style=` en JSX
Cero estilos inline. Todo va en clases de Tailwind o en `globals.css`.

---

## Regla 2 — Layout base de cada sección
Toda sección usa exactamente este wrapper. Sin excepciones.

```jsx
<section className="w-full py-20 md:py-28">
  <div className="max-w-7xl mx-auto px-6 md:px-12">
    {/* contenido */}
  </div>
</section>
```

- `py-20 md:py-28` → espaciado vertical consistente
- `max-w-7xl` → ancho máximo
- `px-6 md:px-12` → márgenes laterales responsive

---

## Regla 3 — Tipografía: clases únicas por etiqueta

Nunca redefinir tamaño, peso ni familia dentro de un componente.
Usar siempre estas clases definidas en `@layer components` de `globals.css`:

| Elemento      | Clase        | Descripción                        |
|---------------|--------------|------------------------------------|
| Título grande | `` | Hero, secciones principales        |
| Título medio  | `` | Subtítulos de sección              |
| Título pequeño| `` | Cards, títulos internos            |
| Eyebrow       | `section-tag`| Etiqueta uppercase sobre títulos   |
| Cuerpo        | ``  | Párrafos generales                 |
| Nav           | `nav-link`   | Links de navegación                |
| Footer        | `footer-text`| Texto de pie de página             |

**Regla estricta:**
- `<h1>` → siempre ``
- `<h2>` → siempre ``
- `<h3>` → siempre ``
- `<p>`  → siempre ``
- eyebrows → siempre `section-tag`
- Nunca usar `text-sm`, `text-lg`, `text-xl`, `font-bold` sueltos sobre estas etiquetas.

---

## Regla 4 — Paleta de colores
Usar siempre las variables del tema. Nunca hexadecimales directos en JSX.

```
Fondos:
bg-[var(--color-cream)]        → fondo claro principal
bg-[var(--color-brown)]        → fondo oscuro, nav, botones
bg-[var(--color-olive-dark)]   → secciones oscuras alternativas
bg-[var(--color-void)]         → footer, overlays profundos

Texto:
text-[var(--color-body)]       → texto principal sobre crema
text-[var(--color-cream)]      → texto sobre fondos oscuros
text-[var(--color-red-accent)] → SOLO títulos de sección y líneas decorativas
text-[var(--color-olive)]      → eyebrows y texto secundario
```

---

## Regla 5 — Divisor decorativo
Siempre `.divider-gold` para separadores. Nunca `<hr>` ni bordes ad-hoc.

```jsx
<div className="divider-gold" />
```

---

## Regla 6 — Botones
Tres variantes. Nunca crear botones custom fuera de estas clases.

```jsx
<button className="btn-primary">Texto</button>
<button className="btn-outline">Texto</button>
<button className="btn-outline-light">Texto</button>
{/* btn-outline-light: solo sobre fondos oscuros (brown, olive, void) */}
```

---

## Regla 7 — Responsive obligatorio
Todo componente funciona en mobile, tablet y desktop.

| Breakpoint | Prefijo | A partir de |
|------------|---------|-------------|
| Mobile     | (base)  | 0px         |
| Tablet     | `md:`   | 768px       |
| Desktop    | `lg:`   | 1024px      |

- Grids: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Flex: `flex-col md:flex-row`
- Texto: clamp vía ``, ``, `` (ya incluyen clamp)

---

## Regla 8 — Texto sobre fondos oscuros
Cuando la sección tiene fondo oscuro, todo el texto cambia a cream.

```jsx
<section className="w-full py-20 md:py-28 bg-[var(--color-brown)]">
  <div className="max-w-7xl mx-auto px-6 md:px-12">
    <span className="section-tag text-[var(--color-olive)]">Eyebrow</span>
    <h2 className=" text-[var(--color-cream)]">Título</h2>
    <p className=" text-[var(--color-cream)] opacity-80">Párrafo</p>
  </div>
</section>
```

---

## Regla 9 — Imágenes
Siempre usar `next/image`. Nunca `<img>`.

```jsx
import Image from "next/image"

<Image
  src="/images/nombre.jpg"
  alt="descripción"
  fill
  className="object-cover"
/>
```

Contenedor siempre con `relative` y altura definida:
```jsx
<div className="relative w-full h-[400px] md:h-[560px]">
  <Image src="..." alt="..." fill className="object-cover" />
</div>
```

---

## Regla 10 — Nombres de archivos y carpetas

```
components/
  sections/     → secciones del homepage (SectionManifiesto, SectionProyectos…)
  ui/           → componentes reutilizables (Button, Divider, Tag…)
  layout/       → Navbar, Footer
```

- Archivos: PascalCase → `SectionManifiesto.tsx`
- Un componente por archivo
- Props tipadas con TypeScript inline o `interface` al tope del archivo

---

## Checklist antes de entregar un componente

- [ ] Cero `style=` en cualquier etiqueta JSX
- [ ] Wrapper: `<section className="w-full py-20 md:py-28">`
- [ ] Inner: `<div className="max-w-7xl mx-auto px-6 md:px-12">`
- [ ] Tipografía solo con clases del sistema
- [ ] Colores solo con variables CSS del tema
- [ ] Responsive en base, `md:` y `lg:`
- [ ] Botones con `btn-primary`, `btn-outline` o `btn-outline-light`
- [ ] Divisores con `divider-gold`
- [ ] Imágenes con `next/image`
- [ ] Archivo en carpeta correcta con nombre PascalCase
