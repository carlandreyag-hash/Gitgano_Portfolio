# Gitgano Portfolio

A responsive personal portfolio built with React, TypeScript, Tailwind CSS 4, and Vite.

Run `npm install`, then `npm run dev` and visit http://127.0.0.1:5173. Run `npm run build` for TypeScript checks and a production build in `dist/`.

## Personalize

Project cards use device-framed illustrative layouts with original app icons where found. They are not captured screenshots. To show a real screenshot, put it in `public/previews/` and add `"screenshot": "/previews/your-image.png"` to the corresponding entry in `src/projects.json`. Both the home cards and project gallery share the same preview component.

- Edit the introduction, about text, and toolkit in `src/App.tsx` to reflect your experience.
- Edit `src/projects.json` to maintain the project catalog. Entries were discovered from local package manifests; repository links are included only when available in Git configuration. Descriptions are conservative summaries, not claims that every feature is complete. Similar copies remain distinct using their source folder labels.
- Replace the contact button and placeholder message with your email or social profiles before sharing publicly.
- Adjust the colors in `style.css` using the variables at the top.

Fonts are loaded from Google Fonts with local fallback fonts. Deploy the `dist/` folder to a static web host. Local project source code and credentials are not bundled into the portfolio.
