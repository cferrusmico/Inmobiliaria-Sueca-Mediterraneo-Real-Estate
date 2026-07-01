# Google Analytics, SEO y seguimiento

Este documento explica qué está configurado y **cómo ver el rendimiento** de la web.

---

## 1. Qué hay en el proyecto

### Google Analytics 4 (GA4)
- El código de GA4 está en **todas las páginas** (en el `<head>`).
- Se registran **vistas de página** automáticamente.
- Hay **eventos** en botones principales (hero y CTA de contacto) para medir clics.

### SEO
- **Canonical**: cada página tiene su URL canónica.
- **Open Graph** (Facebook/LinkedIn): título, descripción e imagen por página.
- **Twitter Card**: título y descripción para compartir en Twitter.
- **JSON-LD**: en la home hay datos estructurados de tipo `RealEstateAgent` para Google.

### Sitemap y robots
- `sitemap.xml`: lista de las 5 URLs del sitio.
- `robots.txt`: permite a los buscadores rastrear todo y apunta al sitemap.

---

## 2. Pasos obligatorios antes de publicar

### A) Obtener tu ID de Google Analytics 4

1. Entra en [Google Analytics](https://analytics.google.com/) con tu cuenta Google.
2. **Admin** (engranaje abajo a la izquierda) → **Crear propiedad**.
3. Nombre de la propiedad: p. ej. "Mediterráneo Real Estate".
4. Elige zona horaria e idioma y crea.
5. Al configurar **flujo de datos**, elige **Web**.
6. URL del sitio: tu dominio (ej. `https://www.mediterraneorealestate.com`).
7. Copia el **ID de medición** (formato `G-XXXXXXXXXX`).

Sustituye en **todos** los HTML:

- Busca: `G-XXXXXXXXXX`
- Reemplaza por: tu ID real (ej. `G-ABC123XYZ`).

Archivos a tocar: `index.html`, `comprar.html`, `alquilar.html`, `contacto.html`, `valoracion.html` (en cada uno hay 2 apariciones del ID).

### B) Poner tu dominio real

En **todos** los archivos donde salga:

- Busca: `https://SITE_URL`
- Reemplaza por: tu URL real **con** `https://` (ej. `https://www.mediterraneorealestate.com`).

Archivos:
- Los HTML (canonical, `og:url`, `og:image`, `twitter`, y en `index.html` el JSON-LD).
- `sitemap.xml`: en cada `<loc>` y en la URL del sitemap.
- `robots.txt`: en la línea `Sitemap:`.

Para `og:image` y redes sociales, lo ideal es una imagen de 1200×630 px (puedes usar tu logo sobre fondo o una foto de la oficina).

---

## 3. Cómo ver el rendimiento (Google Analytics)

### Acceso
- URL: [https://analytics.google.com](https://analytics.google.com)
- Inicia sesión y elige la propiedad **Mediterráneo Real Estate**.

### Dónde mirar

| Qué quieres ver | Dónde en GA4 |
|-----------------|---------------|
| **Visitas en tiempo real** | **Informes** → **Tiempo real**: usuarios ahora, página actual, origen. |
| **Páginas más vistas** | **Informes** → **Participación** → **Páginas y pantallas**. |
| **Usuarios totales y tendencia** | **Informes** → **Adquisición** → **Tráfico de usuarios por sesión** o **Resumen**. |
| **De dónde vienen (redes, búsqueda, directo)** | **Informes** → **Adquisición** → **Adquisición de usuarios**. |
| **Clics en “Contactar” y CTAs del hero** | **Informes** → **Participación** → **Eventos**. Busca eventos `cta_hero` y `cta_contact`. |
| **Rendimiento en móvil vs escritorio** | **Informes** → **Audiencia** → **Información demográfica** / **Tecnología** (dispositivo). |

Los datos pueden tardar **24–48 horas** en aparecer; **Tiempo real** funciona desde el primer día.

### Eventos que ya se envían
- `cta_hero` + etiqueta `ver_venta` o `ver_alquiler`: clic en los botones del hero (Inicio).
- `cta_contact` + etiqueta según página (`section_cta`, `sobre_nosotros`, `comprar`, `alquilar`): clic en “Contactar” / “Ir a contacto” / “Solicitar información”.
- `form_submit` + etiqueta `contacto`: envío del formulario de contacto.

Para verlos: **Informes** → **Participación** → **Eventos** y activar/explorar por nombre de evento.

---

## 4. Cómo ver el rendimiento SEO (Google Search Console)

1. Entra en [Google Search Console](https://search.google.com/search-console).
2. Añade la **propiedad** con la URL de tu web (con o sin `www`, según uses una u otra).
3. Verificación: opción **Etiqueta HTML** y copia el meta que te da Google (ej. `content="abc123..."`). Añade en el `<head>` de `index.html`:
   ```html
   <meta name="google-site-verification" content="TU_CODIGO_AQUI">
   ```
4. Cuando esté verificada la propiedad:
   - **Rendimiento**: clics, impresiones y posición media en Google.
   - **Cobertura**: páginas indexadas y errores.
   - **Sitemaps**: envía `https://tu-dominio.com/sitemap.xml` en “Añadir un sitemap nuevo”.

Así ves cómo te encuentra la gente en Google y si las páginas se indexan bien.

---

## 5. Resumen rápido

| Tarea | Dónde |
|-------|--------|
| Ver visitas y páginas | [analytics.google.com](https://analytics.google.com) → Informes |
| Ver eventos (CTAs) | GA4 → Participación → Eventos |
| Ver búsqueda Google (clics/impresiones) | [search.google.com/search-console](https://search.google.com/search-console) |
| Cambiar ID de Analytics | Sustituir `G-XXXXXXXXXX` en los 5 HTML |
| Cambiar dominio | Sustituir `https://SITE_URL` en HTML, `sitemap.xml` y `robots.txt` |

Cuando tengas el ID de GA4 y el dominio real sustituidos, el análisis y el seguimiento quedarán activos en cuanto publiques la web.
