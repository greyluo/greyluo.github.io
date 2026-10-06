# Grey Luo's blog

A minimal Jekyll site, hosted free on GitHub Pages.

## Writing a new post

1. Add a file to `_posts/` named `YYYY-MM-DD-short-title.md`.
2. Start it with front matter:

   ```
   ---
   title: "Your Title"
   subtitle: "Optional one-line dek."
   date: 2026-10-06
   ---
   ```

3. Write the post in Markdown below that. Use `##` for section headings.
4. Commit and push to `main`. GitHub Pages rebuilds the site in a minute or two.

You can also do this entirely in the browser: open the repo on github.com, go to `_posts/`, click **Add file → Create new file**, and commit.

## Files

- `_config.yml`: site name, description, X handle
- `_layouts/`: page templates
- `assets/style.css`: all styling
- `about.md`: the About page
- `index.html`: the post list

## Local preview (optional)

```
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000.
