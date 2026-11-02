# Cómo aparecer en Google

La URL pública es: [https://inmobiliaria-sueca-mediterraneo-rea.vercel.app/](https://inmobiliaria-sueca-mediterraneo-rea.vercel.app/)

Google **no** posiciona la web solo por tener Analytics. Analytics mide visitas. **Search Console** es lo que usa Google para descubrir e indexar la URL. Para una inmobiliaria local, **Google Business Profile** (el perfil de Maps) suele traer más clics de “inmobiliaria Sueca” que la web sola.

---

## Ya está hecho en el código

- **Google Analytics 4** en `index.html` y `contacto.html` (ID `G-HPLTVZCX7P`).
- Títulos y descripciones con Sueca y Ribera Baixa.
- Canonical, `robots.txt`, `sitemap.xml` y datos estructurados `RealEstateAgent`.
- Imagen Open Graph de la casa del hero.

Falta solo pegar la etiqueta de verificación cuando Search Console te la dé.

---

## 1. Comprobar Analytics (no posiciona; sirve para medir)

1. Entra en [analytics.google.com](https://analytics.google.com) con la cuenta dueña de `G-HPLTVZCX7P`.
2. Abre la propiedad **Mediterráneo Real Estate**.
3. Ve a **Informes → Tiempo real**.
4. Abre la web en otra pestaña.

Si ves **1 usuario**, el ID es correcto. Si no ves nada, crea una propiedad nueva (Admin → Crear propiedad → flujo **Web** → URL de Vercel), copia el `G-XXXXXXXXXX` y sustituye `G-HPLTVZCX7P` en `index.html` y `contacto.html`.

---

## 2. Google Search Console (obligatorio)

1. Abre [search.google.com/search-console](https://search.google.com/search-console).
2. **Añadir propiedad**.
3. Elige **Prefijo de URL** (no “Dominio”: esto es un subdominio de Vercel).
4. Pega exactamente: `https://inmobiliaria-sueca-mediterraneo-rea.vercel.app/`
5. Verificación: **Etiqueta HTML**. Google muestra algo como:
   ```html
   <meta name="google-site-verification" content="abc123...">
   ```
6. Pega esa etiqueta en el `<head>` de `index.html` (hay un comentario que lo indica) y vuelve a Search Console → **Verificar**.
7. Cuando esté verificada:
   - **Sitemaps** → añadir: `https://inmobiliaria-sueca-mediterraneo-rea.vercel.app/sitemap.xml`
   - **Inspección de URLs** → pega la home → **Solicitar indexación**. Repite con `/contacto.html`.

Las primeras impresiones suelen tardar de 2 a 14 días.

---

## 3. Google Business Profile (el paso que más impacto tiene)

Para “inmobiliaria Sueca” Google enseña sobre todo el **paquete de Maps**, no webs sueltas.

1. Entra en [business.google.com](https://business.google.com).
2. Crea el perfil:
   - Nombre: **Mediterráneo Real Estate**
   - Categoría: **Agencia inmobiliaria**
   - Ubicación: Sueca, Valencia (dirección si la hay; si no, negocio de zona de servicio: Sueca / Ribera Baixa)
   - Teléfono y email iguales que en la web
   - Web: `https://inmobiliaria-sueca-mediterraneo-rea.vercel.app/`
3. Verifica como pida Google (carta, teléfono o email).
4. Añade horario (L–V 10:00–14:00 y 17:00–20:00, S 10:00–14:00), fotos y enlaces de Idealista e Instagram.

Nombre, dirección y teléfono del perfil deben coincidir con el bloque de contacto de la web.

---

## 4. Consejos prácticos

- Busca la marca + “Sueca” en Google (ventana de incógnito) cuando haya pasado una semana. Si no sale, vuelve a **Inspección de URLs**.
- Sigue publicando en Idealista e Instagram (ya están en el schema `sameAs`).
- Pide **reseñas de Google** en el Business Profile.
- No compres enlaces ni envíes la web a directorios masivos.
- Cuando haya dominio propio, se cambian canonical/sitemap y se pone una redirección 301 desde Vercel. Hasta entonces, se posiciona solo esta URL.

---

## Eventos de Analytics que ya se envían

| Evento | Cuándo |
|--------|--------|
| `cta_hero` | Clic en Contacto del hero |
| `cta_header` | Clic en Contacto del header |
| `cta_platform` | Clic en Idealista o Instagram |
| `cta_about` | Clic en “Hablar con nosotros” |
| `lead_contact` / `form_submit` | Envío del formulario |

En GA4: **Informes → Participación → Eventos**.
