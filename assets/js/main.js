/* ==========================================================================
   BGLRGM — SHARED BEHAVIOUR
   Slider, accordions, tabs, counters, forms, course finder.
   ========================================================================== */

/* ---------- Small helpers ---------- */
function qs(s, c) { return (c || document).querySelector(s); }
function qsa(s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); }
function param(n) { return new URLSearchParams(location.search).get(n); }
function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (m) {
  return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[m]; }); }

/* Institution logo for printable panels — hall tickets, mark statements, receipts.
   Pass white:true for the version used on a dark background. */
function siteLogo(h, white) {
  var f = white ? SITE.logoFullWhite : SITE.logoFull;
  if (!f) return '<b>' + SITE.name + '</b>';
  return '<img class="panel-logo" src="' + ROOT + f + '" alt="' + SITE.name +
         '" style="height:' + (h || 44) + 'px;width:auto">';
}

/* ==========================================================================
   HERO SLIDER
   ========================================================================== */
function initSlider() {
  var slides = qsa('.slide');
  if (slides.length < 1) return;
  var dots = qs('.hero-dots');
  var i = 0, timer;

  if (dots) {
    dots.innerHTML = slides.map(function (_, n) {
      return '<button aria-label="Slide ' + (n + 1) + '"' + (n ? '' : ' class="on"') + '></button>';
    }).join('');
  }

  function go(n) {
    i = (n + slides.length) % slides.length;
    slides.forEach(function (s, k) { s.classList.toggle('on', k === i); });
    if (dots) qsa('button', dots).forEach(function (b, k) { b.classList.toggle('on', k === i); });
  }
  function play() { timer = setInterval(function () { go(i + 1); }, 6000); }
  function reset() { clearInterval(timer); play(); }

  if (dots) qsa('button', dots).forEach(function (b, k) {
    b.addEventListener('click', function () { go(k); reset(); }); });
  var p = qs('.hero-arrow.prev'), n = qs('.hero-arrow.next');
  if (p) p.addEventListener('click', function () { go(i - 1); reset(); });
  if (n) n.addEventListener('click', function () { go(i + 1); reset(); });
  go(0); play();
}

/* ==========================================================================
   ACCORDIONS & TABS
   ========================================================================== */
function initAccordions() {
  qsa('.acc > button').forEach(function (b) {
    b.addEventListener('click', function () { b.parentElement.classList.toggle('open'); });
  });
}

function initTabs() {
  qsa('.tabs').forEach(function (bar) {
    var panes = bar.getAttribute('data-panes');
    qsa('button', bar).forEach(function (b) {
      b.addEventListener('click', function () {
        qsa('button', bar).forEach(function (x) { x.classList.remove('on'); });
        b.classList.add('on');
        qsa('#' + panes + ' > .tabpane').forEach(function (p) {
          p.classList.toggle('on', p.id === b.getAttribute('data-tab'));
        });
        if (history.replaceState) history.replaceState(null, '', '#' + b.getAttribute('data-tab'));
      });
    });
  });
  /* open a tab from the URL hash, e.g. verification.html#certificate */
  if (location.hash) {
    var btn = qs('.tabs button[data-tab="' + location.hash.slice(1) + '"]');
    if (btn) btn.click();
  }
}

/* ==========================================================================
   COUNTERS
   ========================================================================== */
function initCounters() {
  var els = qsa('[data-count]');
  if (!els.length) return;
  var run = function (el) {
    var target = parseFloat(el.getAttribute('data-count'));
    var suffix = el.getAttribute('data-suffix') || '';
    var step = target / 60, cur = 0;
    var t = setInterval(function () {
      cur += step;
      if (cur >= target) { cur = target; clearInterval(t); }
      el.textContent = (target % 1 ? cur.toFixed(1) : Math.floor(cur)) + suffix;
    }, 22);
  };
  if (!('IntersectionObserver' in window)) { els.forEach(run); return; }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { run(e.target); io.unobserve(e.target); }
    });
  }, { threshold: .4 });
  els.forEach(function (el) { io.observe(el); });
}

/* ==========================================================================
   FORMS — WhatsApp / Email submission (no server required)
   ========================================================================== */
function collectForm(form) {
  var out = [];
  qsa('input,select,textarea', form).forEach(function (el) {
    if (!el.name || el.type === 'submit' || el.type === 'button') return;
    if ((el.type === 'checkbox' || el.type === 'radio') && !el.checked) return;
    var label = el.getAttribute('data-label') ||
      (el.closest('.field') && qs('label', el.closest('.field'))
        ? qs('label', el.closest('.field')).textContent.replace('*', '').trim()
        : el.name);
    if (String(el.value).trim() !== '') out.push(label + ': ' + el.value);
  });
  return out;
}

function validateForm(form) {
  var ok = true;
  qsa('[required]', form).forEach(function (el) {
    if (!String(el.value).trim()) { el.style.borderColor = '#c62828'; ok = false; }
    else { el.style.borderColor = ''; }
  });
  var mob = qs('[name=mobile]', form);
  if (mob && mob.value && !/^[0-9+\-\s()]{10,15}$/.test(mob.value)) { mob.style.borderColor = '#c62828'; ok = false; }
  var mail = qs('[name=email]', form);
  if (mail && mail.value && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(mail.value)) { mail.style.borderColor = '#c62828'; ok = false; }
  return ok;
}

function initForms() {
  qsa('form[data-form]').forEach(function (form) {
    var title = form.getAttribute('data-form');
    var msg = qs('.formmsg', form);

    /* build the send buttons according to SITE.forms.mode */
    var holder = qs('.form-actions', form);
    if (holder) {
      var mode = SITE.forms.mode;
      var html = '';
      if (mode === 'whatsapp' || mode === 'both')
        html += '<button type="submit" class="btn btn-primary" data-send="whatsapp">Send via WhatsApp</button> ';
      if (mode === 'email' || mode === 'both')
        html += '<button type="submit" class="btn btn-outline" data-send="email">Send via Email</button>';
      holder.innerHTML = html;
    }

    var chosen = 'whatsapp';
    qsa('[data-send]', form).forEach(function (b) {
      b.addEventListener('click', function () { chosen = b.getAttribute('data-send'); });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!validateForm(form)) {
        if (msg) { msg.className = 'formmsg err'; msg.textContent = 'Please complete the highlighted fields correctly.'; }
        return;
      }
      var body = title + '\n' + '-'.repeat(title.length) + '\n' + collectForm(form).join('\n') +
                 '\n\nSubmitted from the ' + SITE.name + ' website.';
      if (chosen === 'email') {
        window.location.href = 'mailto:' + SITE.forms.mailTo +
          '?subject=' + encodeURIComponent(title + ' — ' + SITE.name) +
          '&body=' + encodeURIComponent(body);
      } else {
        window.open('https://wa.me/' + SITE.forms.whatsappNumber + '?text=' + encodeURIComponent(body), '_blank');
      }
      if (msg) { msg.className = 'formmsg ok'; msg.textContent = SITE.forms.successText; }
    });
  });
}

/* ==========================================================================
   COURSE FINDER
   ========================================================================== */
function initCourseFinder() {
  var host = qs('#course-results');
  if (!host || typeof COURSES === 'undefined') return;

  var fLevel = qs('#f-level'), fSector = qs('#f-sector'), fElig = qs('#f-elig'),
      fMode = qs('#f-mode'), fText = qs('#f-text'), count = qs('#course-count');

  function fill(sel, arr, all) {
    if (!sel) return;
    sel.innerHTML = '<option value="">' + all + '</option>' +
      arr.map(function (v) { return '<option>' + esc(v) + '</option>'; }).join('');
  }
  fill(fLevel, LEVELS.filter(function (l) { return l !== 'B.Voc.' && l !== 'M.Voc.'; }), 'All programme levels');
  fill(fSector, SECTORS, 'All sectors');
  fill(fElig, ELIGIBILITY, 'Any eligibility');
  fill(fMode, ['Offline', 'Online', 'Hybrid'], 'All modes');

  /* preselect from the URL (?level=Diploma&sector=Healthcare) */
  if (param('level') && fLevel) fLevel.value = param('level');
  if (param('sector') && fSector) fSector.value = param('sector');

  function render() {
    var L = fLevel ? fLevel.value : '', S = fSector ? fSector.value : '',
        E = fElig ? fElig.value : '', M = fMode ? fMode.value : '',
        T = fText ? fText.value.trim().toLowerCase() : '';

    var rows = COURSES.filter(function (c) {
      return (!L || c.level === L) && (!S || c.sector === S) &&
             (!E || E === 'Any' || c.elig === E || c.elig === 'Any') &&
             (!M || c.mode === M) &&
             (!T || c.name.toLowerCase().indexOf(T) > -1 || c.sector.toLowerCase().indexOf(T) > -1);
    });

    if (count) count.textContent = rows.length + (rows.length === 1 ? ' programme' : ' programmes') + ' found';

    host.innerHTML = rows.length ? rows.map(function (c) {
      return '<div class="course-row">' +
        '<div><h4>' + esc(c.name) + '</h4>' +
        '<div class="course-meta">' +
          '<span>Level: <b>' + esc(c.level) + '</b></span>' +
          '<span>Sector: <b>' + esc(c.sector) + '</b></span>' +
          '<span>Duration: <b>' + esc(c.duration) + '</b></span>' +
          '<span>Eligibility: <b>' + esc(c.elig) + '</b></span>' +
          '<span>Mode: <b>' + esc(c.mode) + '</b></span>' +
          (c.ewyl ? '<span class="pill pill-gold">Earn While You Learn</span>' : '') +
        '</div></div>' +
        '<div style="display:flex;gap:.5rem;flex-wrap:wrap">' +
          '<a class="btn btn-sm btn-outline" href="contact.html">Enquire</a>' +
          '<a class="btn btn-sm btn-primary" href="apply.html?course=' + encodeURIComponent(c.name) + '">Apply</a>' +
        '</div></div>';
    }).join('')
      : '<div class="card center"><p class="mb0">No programme matches these filters. Try widening your search, ' +
        'or <a href="contact.html">contact our admission team</a>.</p></div>';
  }

  [fLevel, fSector, fElig, fMode].forEach(function (s) { if (s) s.addEventListener('change', render); });
  if (fText) fText.addEventListener('input', render);
  var btn = qs('#f-search'); if (btn) btn.addEventListener('click', function (e) { e.preventDefault(); render(); });
  var clr = qs('#f-clear'); if (clr) clr.addEventListener('click', function (e) {
    e.preventDefault();
    [fLevel, fSector, fElig, fMode].forEach(function (s) { if (s) s.value = ''; });
    if (fText) fText.value = ''; render();
  });
  render();
}

/* ==========================================================================
   SHARED PARTIAL RENDERERS
   ========================================================================== */
function renderBranchCards(host, list) {
  var el = qs(host); if (!el) return;
  el.innerHTML = (list || BRANCHES).map(function (b) {
    return '<div class="branch">' +
      '<span class="type">' + esc(b.type) + ' · ' + esc(b.state) + '</span>' +
      '<h4>' + esc(b.name) + '</h4>' +
      '<p class="small muted" style="margin:.1rem 0 .5rem">' + esc(b.unit) + '</p>' +
      '<address>' + esc(b.address) + '</address>' +
      '<div class="ph">☎ <a href="tel:' + b.phone.replace(/\s/g, '') + '">' + esc(b.phone) + '</a></div>' +
      '</div>';
  }).join('');
}

function renderNewsCards(host, limit) {
  var el = qs(host); if (!el) return;
  el.innerHTML = NEWS.slice(0, limit || NEWS.length).map(function (n) {
    return '<article class="news-card">' +
      '<div class="news-thumb"><div class="date"><b>' + n.d + '</b><span>' + n.m + ' ' + n.y + '</span></div></div>' +
      '<div class="news-body"><span class="pill pill-blue">' + esc(n.cat) + '</span>' +
      '<h4 style="margin-top:.5rem">' + esc(n.title) + '</h4>' +
      '<p>' + esc(n.text) + '</p></div></article>';
  }).join('');
}

function renderProgrammeCards(host, limit) {
  var el = qs(host); if (!el) return;
  el.innerHTML = PROG_CATEGORIES.slice(0, limit || PROG_CATEGORIES.length).map(function (c) {
    return '<a class="prog-card" href="' + (location.pathname.indexOf('/pages/') > -1 ? '' : 'pages/') +
      'programmes.html#' + c.id + '"><div class="ico">' + c.icon + '</div>' +
      '<b>' + esc(c.name) + '</b><small>' + esc(c.desc) + '</small></a>';
  }).join('');
}

function renderLogoWall(host) {
  var el = qs(host); if (!el) return;
  el.innerHTML = PARTNER_TYPES.map(function (p) {
    return '<div class="logo-box">' + esc(p) + '<br><span style="opacity:.6">Partner logo</span></div>';
  }).join('');
}

/* ==========================================================================
   BOOT
   ========================================================================== */
document.addEventListener('DOMContentLoaded', function () {
  initSlider();
  initAccordions();
  initTabs();
  initCounters();
  initForms();
  initCourseFinder();
  renderBranchCards('#branch-cards');
  renderNewsCards('#news-cards', qs('#news-cards') && qs('#news-cards').getAttribute('data-limit'));
  renderProgrammeCards('#programme-cards');
  renderLogoWall('#logo-wall');

  /* stamp the GST rate wherever it is referenced */
  qsa('[data-gst]').forEach(function (e) { e.textContent = SITE.gstRate + '%'; });
  qsa('[data-site-phone]').forEach(function (e) { e.textContent = SITE.phone; });
  qsa('[data-site-email]').forEach(function (e) { e.textContent = SITE.email; });
});
