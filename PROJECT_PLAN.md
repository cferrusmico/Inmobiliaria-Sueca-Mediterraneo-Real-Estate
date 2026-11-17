# Plan del proyecto

## Objetivo

Que Mediterráneo Real Estate tenga una web clara en Sueca y la Ribera Baixa: quiénes son, cómo contactar y dónde ver las viviendas. También debe poder encontrarse en Google con la URL de Vercel.

## Qué es y qué no es

**Es** un sitio estático (HTML, CSS y JavaScript). Sin framework ni base de datos propia.

**No es** un portal inmobiliario. Las viviendas no se cargan aquí: el visitante va a Idealista o Instagram. Tampoco hay un servidor propio para el correo; el formulario lo entrega Web3Forms.

## Stack

| Pieza | Uso |
| --- | --- |
| `index.html`, `contacto.html` | Páginas públicas |
| `css/styles.css` | Estilos |
| `js/app.js` | Menú, validación y envío del formulario |
| `assets/` | Logo, fotos del hero y de las tarjetas |
| GitHub (`main`) | Código |
| Vercel | Publicación automática al hacer push |
| Web3Forms | Mensajes del formulario al correo configurado en esa cuenta |
| Google Analytics 4 y Search Console | Medición e indexación |

## Cómo se publica

1. Cambios en este repositorio.
2. `git push origin main`.
3. Vercel despliega y actualiza [la URL pública](https://inmobiliaria-sueca-mediterraneo-rea.vercel.app/).

No hace falta un comando de Vercel en el ordenador.

## SEO

- `robots.txt` permite indexar el sitio y apunta al sitemap.
- `sitemap.xml` lista la home y `contacto.html`.
- Títulos, descripciones, datos `RealEstateAgent` y la etiqueta de Search Console están en el HTML.

La guía interna de Analytics y Search Console está en [ANALYTICS-Y-SEO.md](ANALYTICS-Y-SEO.md).
