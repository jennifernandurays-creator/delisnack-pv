# DeliSnack

Sitio web oficial de **DeliSnack**, un emprendimiento de postres y antojitos dulces (mini donas, waffles, churros, postres en vasito y horchata).

## Tecnologías

- [TanStack Start](https://tanstack.com/start) + TanStack Router (React 19)
- [Vite 7](https://vitejs.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [lucide-react](https://lucide.dev/) para iconografía
- [Decap CMS](https://decapcms.org/) + Netlify Identity + Git Gateway para edición de contenido sin código
- Desplegado en [Netlify](https://www.netlify.com/)

## Estructura de contenido

Todo el contenido editable vive en archivos JSON dentro de `content/`:

- `content/settings.json` — marca, WhatsApp, redes sociales, textos del hero y "sobre nosotros"
- `content/products.json` — categorías del menú y productos
- `content/toppings.json` — toppings de la sección "Personaliza tu antojo"
- `content/faq.json` — preguntas frecuentes

Estos archivos se importan directamente desde `src/data/*.ts` y se editan visualmente desde `/admin` (ver más abajo).

## Desarrollo local

```bash
npm install
npm run dev
```

Esto levanta la app en `http://localhost:3000`. Para probar el panel de edición (`/admin`) con emulación completa de Netlify Identity/Git Gateway, usa en su lugar:

```bash
netlify dev
```

## Build

```bash
npm run build
```

El resultado se genera en `dist/client` (configurado en `netlify.toml`).

## Panel de edición de contenido

Visita `/admin` en el sitio publicado para editar textos, fotografías, precios, productos y preguntas frecuentes sin tocar código. Requiere iniciar sesión con Netlify Identity (ver instrucciones de configuración en `AGENTS.md` y en el resumen de cambios entregado).
