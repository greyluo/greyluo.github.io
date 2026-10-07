const pages = new Map();

function fetchPage(url) {
  if (!pages.has(url)) {
    const page = fetch(url).then((response) => {
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return response.text();
    });
    page.catch(() => pages.delete(url));
    pages.set(url, page);
  }
  return pages.get(url);
}

function internalLink(event) {
  const link = event.target.closest?.("a[href]");
  if (!link || link.origin !== location.origin || link.target || link.hasAttribute("download")) return null;
  if (link.pathname === location.pathname && link.hash) return null;
  return link;
}

async function show(url, { push, scrollY = 0 }) {
  let html;
  try {
    html = await fetchPage(url);
  } catch {
    location.href = url;
    return;
  }
  const next = new DOMParser().parseFromString(html, "text/html");
  document.title = next.title;
  document.querySelector("main").replaceWith(next.querySelector("main"));
  if (push) history.pushState({ scrollY: 0 }, "", url);
  window.scrollTo(0, scrollY);
}

document.addEventListener("mouseover", (event) => {
  const link = internalLink(event);
  if (link) fetchPage(link.href).catch(() => {});
});

document.addEventListener("click", (event) => {
  if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  const link = internalLink(event);
  if (!link) return;
  event.preventDefault();
  if (link.href === location.href) return;
  history.replaceState({ scrollY: window.scrollY }, "");
  show(link.href, { push: true });
});

window.addEventListener("popstate", (event) => {
  show(location.href, { push: false, scrollY: event.state?.scrollY ?? 0 });
});
