# Donald Li — Personal website

A multilingual portfolio with selected projects, a personal story, photographs, a golf film, and downloadable resumes.

## Local development

```sh
bun install --frozen-lockfile
bun run dev
```

## GitHub Pages

Source code lives on `main`. GitHub Pages serves the compiled website from the root of `gh-pages`.

Build for the repository's `/my-web/` URL:

```sh
GITHUB_PAGES=true bun run build
```

Publish the contents of `dist/` to `gh-pages`. Keep the `.nojekyll` file with the build output. Page navigation uses URL hashes, so `#me` and `#projects` work without server rewrites.

The root build (`bun run build`) remains available for local previews.
