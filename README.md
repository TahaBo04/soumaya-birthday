# Soumaya Birthday Website

A cute static birthday website from Taha to Soumaya. It runs with only HTML, CSS, and JavaScript, so it is ready for GitHub Pages.

## Run Locally

Open `index.html` in your browser.

You can also run a tiny local server:

```bash
cd /home/taha/soumaya-birthday
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Where To Add Things

- Books: put PDF files in `assets/books/`, then edit the `BOOKS` array near the top of `script.js`.
- Book covers: put cover images in `assets/covers/`, then set `coverImage` in the matching `BOOKS` item.
- Gallery photos: put images in `assets/gallery/`, then edit the `GALLERY_ITEMS` array in `script.js`.
- Gallery captions and categories: edit `title`, `category`, and `caption` in `GALLERY_ITEMS`.
- Book-derived memories: edit `BOOK_MEMORIES` in `script.js`.
- Songs: put MP3 files in `assets/audio/`, then edit the `TRACKS` array in `script.js`.
- Quiz questions: edit `QUIZ_QUESTIONS` in `script.js`.
- Memory cards: edit `MEMORY_PAIRS` in `script.js`.
- Love wheel ideas: edit `WHEEL_MESSAGES` in `script.js`.
- Open When letters: edit `OPEN_WHEN_LETTERS` in `script.js`.
- Surprise button notes: edit `SURPRISE_MESSAGES` in `script.js`.
- Timeline memories: edit `TIMELINE` in `script.js`.

## Current Assets

The project is already wired to these files:

- `assets/books/A book(2).pdf`
- `assets/books/To the angel that you merely are(2).pdf`
- `assets/books/ديوان_سومية.pdf`
- `assets/audio/apocalypse.mp3`
- `assets/audio/mitski-my-love-mine-all-mine.mp3`
- `assets/covers/soumaya-illustration.jpeg`
- `assets/gallery/drawing-for-her.jpeg`
- `assets/gallery/rabat-seashore-feet.jpeg`
- `assets/gallery/oum-azza-river.jpeg`
- `assets/gallery/pic1.jpeg`
- `assets/gallery/lock-her.jpeg`
- `assets/gallery/lock-me.jpeg`

The displayed gallery avoids close face photos, but keeps the personal drawing Taha made for her.

## Deploy On GitHub Pages

1. Create a new GitHub repository.
2. Upload everything inside this folder.
3. Go to repository `Settings` -> `Pages`.
4. Under `Build and deployment`, choose `Deploy from a branch`.
5. Select the `main` branch and `/root`.
6. Save. GitHub will publish the site after a short build.

Because this is a static project, no backend or build step is required.
