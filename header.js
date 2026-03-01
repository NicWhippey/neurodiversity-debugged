/**
 * Shared site components — single source of truth for config, header, footer,
 * and contact details.
 *
 * Include on every page:  <script src="/header.js" defer></script>
 *
 * Placeholders:
 *   <div id="site-header"></div>          → replaced with <header>
 *   <div id="site-footer"></div>          → replaced with <footer>
 *   <a class="site-email"></a>            → mailto link showing the email address
 *   <a class="site-email">custom text</a>→ mailto link keeping the custom text
 */
(function () {

  // ══════════════════════════════════════════════════════════
  //  Site-wide config — edit ONLY here when details change
  // ══════════════════════════════════════════════════════════
  const SITE = {
    email:  'neurodiversity.debugged@gmail.com',
    author: 'Nic Whippey',
    year:   2026,
    name:   'Neurodiversity Debugged'
  };

  // ── Logo: { brain } with curly brackets ──
  const logoSVG = `<span class="site-logo" aria-hidden="true" style="display:flex;align-items:center;gap:0">
    <span style="font-family:'Courier New',monospace;font-size:2rem;font-weight:300;color:white;line-height:1;margin-right:-6px">{</span>
    <img src="/icons/brain-svgrepo-com.svg" alt="" width="30" height="30" style="filter:brightness(0) invert(1);display:block">
    <span style="font-family:'Courier New',monospace;font-size:2rem;font-weight:300;color:white;line-height:1;margin-left:-6px">}</span>
  </span>`;

  // ── Navigation links ──
  const navLinks = [
    { href: '/',                       label: 'Home' },
    { href: '/send-rights-ai-helper.html', label: 'SEND Rights AI Helper' },
    { href: '/resources.html',         label: 'Resources' },
    { href: '/out-loud.html',          label: 'Out Loud' },
    { href: '/about.html',             label: 'About' }
  ];

  // Work out which page we're on for aria-current
  const path = window.location.pathname.replace(/index\.html$/, '');

  const navHTML = navLinks.map(function (link) {
    const linkPath = link.href.replace(/index\.html$/, '');
    const isCurrent = path === linkPath;
    return '<a href="' + link.href + '"' +
      (isCurrent ? ' aria-current="page"' : '') +
      '>' + link.label + '</a>';
  }).join('\n      ');

  // ── Header ──
  const headerHTML = `<header>
  <div class="container">
    <a href="/" class="site-title">
      ${logoSVG}
      <span>Neurodiversity<br>Debugged</span>
    </a>
    <nav aria-label="Main navigation">
      ${navHTML}
    </nav>
  </div>
</header>`;

  const headerEl = document.getElementById('site-header');
  if (headerEl) {
    headerEl.outerHTML = headerHTML;
  } else {
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
  }

  // ── Footer ──
  const footerHTML = `<footer>
  <div class="container">
    <span>&copy; ${SITE.author} ${SITE.year} &middot; ${SITE.name}</span>
  </div>
</footer>`;

  const footerEl = document.getElementById('site-footer');
  if (footerEl) {
    footerEl.outerHTML = footerHTML;
  }

  // ── Contact email links ──
  // Any <a class="site-email"> gets its href set to mailto:SITE.email.
  // If the element is empty, the email address is used as the link text.
  document.querySelectorAll('a.site-email').forEach(function (el) {
    el.href = 'mailto:' + SITE.email;
    if (!el.textContent.trim()) {
      el.textContent = SITE.email;
    }
  });

})();
