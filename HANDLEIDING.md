# Handleiding portfolio

## Nieuw project toevoegen
1. Zet je afbeeldingen in `Images/` (of een eigen submap, bv. `Images/mijn-project/`). Gebruik .jpg/.png/.webp, liefst max. 1600 px breed.
2. Open `js/projects.js` en kopieer een bestaand project-blok (tussen `{ ... },`). Pas aan:
   - `slug`: unieke, korte naam zonder spaties (wordt de link: `project.html?p=jouw-slug`)
   - `category`: **UI/UX**, **Graphic Design**, **Web Development** of **Andere projecten** (bepaalt de filter)
   - `year` mag je weglaten, `featured: true` toont het project op de homepage
   - `images`: per afbeelding `src`, `w` en `h` (echte pixelafmetingen, zo wordt niets vervormd) en een `alt`-tekst
   - `sections` (optioneel): `text`, `list`, `gallery` of `device` (een afbeelding met uitleg, `image` = nummer in `images`, te beginnen bij 0)
   - `theme` (optioneel): eigen accentkleuren voor de projectpagina, zoals bij KIKK
3. De volgorde in het bestand is de volgorde op de site.

## Publiceren op GitHub Pages
1. Upload/commit alle bestanden naar je repo `Werkplekleren2` (GitHub Desktop, of via github.com: *Add file > Upload files*).
2. Controleer onder *Settings > Pages* dat de bron `main` / `(root)` is.
3. Na een minuut staat het live op https://jarnoruttenpxl.github.io/Werkplekleren2/
Alle paden zijn relatief, dus alles werkt onder `/Werkplekleren2/`.

## Oude bestanden
De vorige versie staat bewaard in `_oud/`. `eindreflectie.html` is ongewijzigd, behalve de menulink naar Projecten.
