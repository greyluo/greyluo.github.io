Paste everything below the line into Claude Code (or another coding assistant) on your own computer, after unzipping `grey-blog.zip` somewhere convenient.

---

I have a ready-made Jekyll blog in the folder `grey-blog` (unzipped from grey-blog.zip; it's in my Downloads folder unless I tell you otherwise). Publish it for free on GitHub Pages under my GitHub account. Do not change the site's content or design.

Steps:

1. Check that the GitHub CLI is installed (`gh --version`) and signed in (`gh auth status`). If it isn't installed, install it (on macOS: `brew install gh`). If I'm not signed in, stop and ask me to run `gh auth login` myself. Do not handle my password or tokens.
2. Get my GitHub username with `gh api user --jq .login`. Call it USERNAME below.
3. In the `grey-blog` folder, set `url: "https://USERNAME.github.io"` in `_config.yml` (replace the empty string, keep everything else).
4. Initialize git, commit everything on a branch named `main`, and create a **public** repo named `USERNAME.github.io` with `gh repo create USERNAME.github.io --public --source=. --push`. If a repo with that name already exists, stop and ask me before touching it.
5. Turn on GitHub Pages from the `main` branch, root folder:
   `gh api -X POST repos/USERNAME/USERNAME.github.io/pages -f "source[branch]=main" -f "source[path]=/"`
   (If it says Pages is already enabled, that's fine.)
6. Wait for the first build: poll `gh api repos/USERNAME/USERNAME.github.io/pages/builds/latest --jq .status` every 20 seconds until it says `built` (or `errored`, in which case show me the error and fix it).
7. Open `https://USERNAME.github.io` and confirm the home page lists three posts and each post page loads.
8. Tell me the live URL and how to add a new post (it's in README.md).

Optional, only if I ask: connect a custom domain (Settings → Pages → Custom domain, plus a CNAME DNS record at my registrar).
