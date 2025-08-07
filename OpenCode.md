# OpenCode Reference

## Build, Lint, Test Commands
- Build: `npm run build` (outputs to `_site/`)
- Develop (live-reload server): `npm run dev`
- Deploy: commit and push to GitHub (updates GitHub Pages)

## Blog Management
- To add a post: add a .md file in `blog/` with frontmatter (title, date, description).
- Images: place in `images/` or `blog/images/`, reference with `/images/...` or `/blog/images/...` in Markdown.
- Blog posts are auto-discovered and sorted (newest first). URL: `/blog/{{ post-title }}`

## Code Style Guidelines
- HTML and templates: use Bootstrap 5 (CDN) for layout, match `index.html` styling.
- Indent with 2 spaces.
- Use semantic HTML5 and double quotes for attributes.
- Blog posts: Markdown with YAML frontmatter for title/date/description.
- All images use `alt` attributes.
- No secrets in code.
- Keep site fast and minimal; do not add heavy JS frameworks.