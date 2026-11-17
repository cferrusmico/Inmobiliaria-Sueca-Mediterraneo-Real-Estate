# Mediterráneo Real Estate

Sitio web de la inmobiliaria **Mediterráneo Real Estate** en Sueca (Valencia) y la Ribera Baixa. Es una web estática: presentación, enlaces a propiedades y un formulario de contacto.

**Sitio en línea:** [inmobiliaria-sueca-mediterraneo-rea.vercel.app](https://inmobiliaria-sueca-mediterraneo-rea.vercel.app/)

Más detalle sobre el objetivo, la estructura y cómo se publica: [PROJECT_PLAN.md](PROJECT_PLAN.md).

## Páginas

- **Inicio** (`index.html`) — hero, sobre nosotros y contacto. Las propiedades se ven en [Idealista](https://www.idealista.com/pro/mediterraneo-real-estate/) e [Instagram](https://www.instagram.com/inmobiliaria.mediterraneo/).
- **Contacto** (`contacto.html`) — datos de la oficina y el mismo formulario.

No hay catálogo de inmuebles en esta web: el listado vive en Idealista.

## Cómo verlo en local

```bash
python3 -m http.server 8000
```

Abre [http://localhost:8000](http://localhost:8000).

## Diseño

- Paleta mediterránea: tinta `#1d1d1f`, acento `#0f6f8a` y arena
- Tipografías: Newsreader (títulos) y Geist (texto)
- Responsive, con menú móvil
