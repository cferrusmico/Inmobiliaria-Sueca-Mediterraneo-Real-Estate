# Próximos pasos con Netlify: Analytics, SEO y actualizaciones

Tu sitio ya está en línea con una URL de Netlify (ej. `https://tu-sitio.netlify.app`). Siguiente:

---

## 1. Poner tu URL de Netlify en el proyecto

Sustituye **en todo el proyecto** el placeholder por tu URL real de Netlify.

**Busca:** `https://SITE_URL`  
**Reemplaza por:** tu URL exacta, por ejemplo `https://mediterraneo-xyz123.netlify.app` (con `https://`, sin barra final en la mayoría de sitios).

**Archivos a tocar:**
- `index.html` (varias veces: canonical, og:url, og:image, JSON-LD)
- `comprar.html`
- `alquilar.html`
- `contacto.html`
- `valoracion.html`
- `sitemap.xml` (cada `<loc>` y la línea del Sitemap)
- `robots.txt` (solo la línea `Sitemap:`)

Puedes usar **Buscar y reemplazar** en Cursor: Buscar `https://SITE_URL`, Reemplazar por tu URL de Netlify, en todos los archivos.

---

## 2. Activar Google Analytics (GA4)

### Crear la propiedad en Google
1. Entra en [analytics.google.com](https://analytics.google.com) con tu cuenta Google.
2. **Admin** (engranaje abajo a la izquierda) → **Crear propiedad**.
3. Nombre: p. ej. "Mediterráneo Real Estate".
4. Zona horaria e idioma → Siguiente.
5. En **Flujo de datos** → **Web**.
6. **URL del sitio:** pega tu URL de Netlify (ej. `https://tu-sitio.netlify.app`).
7. Copia el **ID de medición** (formato `G-XXXXXXXXXX`).

### Poner el ID en tu web
En los 5 HTML del proyecto:
- **Busca:** `G-XXXXXXXXXX`
- **Reemplaza por:** tu ID real (ej. `G-ABC123XY`).

Archivos: `index.html`, `comprar.html`, `alquilar.html`, `contacto.html`, `valoracion.html` (en cada uno hay 2 veces el ID).

### Ver el rendimiento
- [analytics.google.com](https://analytics.google.com) → tu propiedad.
- **Informes** → **Tiempo real**: ver visitas al instante.
- **Participación** → **Páginas y pantallas**: páginas más vistas.
- **Participación** → **Eventos**: clics en "Contactar", etc.

Los datos normales pueden tardar 24–48 h; **Tiempo real** funciona en pocos minutos.

---

## 3. Analizar el SEO (Google Search Console)

1. Entra en [search.google.com/search-console](https://search.google.com/search-console).
2. **Añadir propiedad** → **Prefijo de URL**.
3. Pega tu URL de Netlify (ej. `https://tu-sitio.netlify.app`).
4. **Verificar:** elige "Etiqueta HTML". Copia el valor de `content="..."`
5. En tu proyecto, en `index.html`, dentro del `<head>`, añade:
   ```html
   <meta name="google-site-verification" content="EL_CODIGO_QUE_TE_DIO_GOOGLE">
   ```
6. Vuelve a subir el sitio a Netlify (ver sección 4).
7. En Search Console, clic en **Comprobar**. Cuando esté verificado:
   - **Rendimiento**: ver búsquedas, clics e impresiones en Google.
   - **Sitemaps**: añade `https://tu-sitio.netlify.app/sitemap.xml`.

Así podrás analizar el SEO de tu dominio de Netlify.

---

## 4. ¿Se actualiza solo el sitio cuando cambias algo?

**Depende de cómo subas el sitio:**

| Forma de publicar en Netlify | ¿Se actualiza solo? |
|------------------------------|----------------------|
| **Drag and drop** (arrastrar la carpeta) | **No.** Cada vez que cambies el sitio, debes **volver a arrastrar la carpeta** a Netlify. La nueva versión sustituye a la anterior. |
| **Conectado a Git** (GitHub, etc.) | **Sí.** Cada vez que hagas "push" al repositorio, Netlify vuelve a desplegar y el sitio se actualiza solo. |

**Resumen:** Si solo usas drag and drop, cada cambio en tu PC (textos, GA, SEO, etc.) solo se verá en la web después de **volver a arrastrar la carpeta Cursor** a Netlify. Si conectas el proyecto a un repo de Git y lo enlazas a Netlify, cada push actualizará el sitio automáticamente.

---

## Resumen rápido

1. Reemplazar `https://SITE_URL` por tu URL de Netlify en todos los archivos.
2. Reemplazar `G-XXXXXXXXXX` por tu ID de GA4 en los 5 HTML.
3. Volver a subir la carpeta a Netlify (drag and drop) para que los cambios estén en vivo.
4. Ver Analytics en [analytics.google.com](https://analytics.google.com).
5. Verificar la propiedad en Search Console y enviar el sitemap para analizar SEO.
6. Cada vez que cambies el sitio: o bien vuelves a hacer drag and drop, o bien usas Git para que Netlify actualice solo.
