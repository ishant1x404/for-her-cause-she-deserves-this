# Ayushi Website

A five-page scrapbook-style website matching the supplied visual direction.

## Pages
- `index.html` — Home
- `about.html` — About Her
- `music.html` — Her Music
- `memories.html` — Our Memories
- `birthday.html` — Birthday

## Add the real assets
### Images
Place these five memory photos in `assets/images/`:
- `memory-01.jpg`
- `memory-02.jpg`
- `memory-03.jpg`
- `memory-04.jpg`
- `memory-05.jpg`

Also add:
- `ayushi-main.jpg`
- `ayushi-polaroid.jpg`
- `music-cover.jpg`

### Music
Place exactly five songs in `assets/music/`:
- `song-01.mp3`
- `song-02.mp3`
- `song-03.mp3`
- `song-04.mp3`
- `song-05.mp3`

The player already supports play/pause, previous/next, progress seeking, shuffle, repeat, and playlist selection.

## Notes
The decoration folder is reserved for optional SVG overlays. The current implementation uses CSS/text decorations so the site works without those files.


## Image reuse
Only five real photos are required. The site reuses them across pages:
- Home hero → `memory-05.jpg`
- About Her → `memory-04.jpg`
- Her Music cover → `memory-02.jpg`
- Memories → all five photos

This keeps the visual design full without requiring additional photos.
