# stickerei.ms

Statische Webseite für stickerei.ms — gebaut mit [Astro](https://astro.build).

## Inhalte bearbeiten

Inhalte liegen als Markdown in `src/content/`:

- **Leistungen:** `src/content/leistungen/*.md`
- **Features:** `src/content/features/*.md`

Eine `.md` Datei hat vorne Metadaten (Frontmatter):

```markdown
---
name: Logos sticken
reihenfolge: 1
---

Ihre Unternehmenslogos als hochwertige Stickdateien …
```

## Lokal entwickeln

```bash
npm install
npm run dev      # http://localhost:4321
```

## Bauen für Produktion

```bash
npm run build    # erzeugt dist/
npm run preview  # Vorschau des Builds
```

## Deployment

Build-Output (`dist/`) wird auf Vercel/Netlify deployed.
Bei Push auf `main` baut Vercel automatisch.

## Domain

`stickerei.ms` — später per DNS auf Vercel zeigen.
