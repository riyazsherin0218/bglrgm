/* ==========================================================================
   BGLRGM — SHARED LAYOUT
   Injects the top bar, logo bar, main navigation, footer and floating
   action buttons into every page. Edit the menu in one place: NAV below.
   ========================================================================== */

/* Work out how deep the current page sits, so links resolve from
   /index.html, /pages/*.html and /legal/*.html alike. */
const ROOT = (function () {
  var s = document.currentScript ||
          Array.prototype.slice.call(document.scripts).filter(function (x) {
            return (x.src || '').indexOf('layout.js') > -1; })[0];
  var src = s ? s.getAttribute('src') : 'assets/js/layout.js';
  return src.replace(/assets\/js\/layout\.js.*$/, '');
})();

const P = function (f) { return ROOT + f; };

/* ---------- Menu definition ---------- */
const NAV = [
  { label: "Home", href: "index.html" },

  { label: "About Us", href: "pages/about.html", sub: [
    { l: "About BGLRGM", h: "pages/about.html" },
    { l: "Vision & Mission", h: "pages/about.html#vision" },
    { l: "Our Objectives", h: "pages/about.html#objectives" },
    { l: "Leadership & Governance", h: "pages/leadership.html" },
    { l: "Council & Committee", h: "pages/leadership.html#councils" },
    { l: "Advisory Committee", h: "pages/leadership.html#advisory" },
    { l: "Why BGLRGM?", h: "pages/about.html#why" },
    { l: "Infrastructure", h: "pages/about.html#infrastructure" },
    { l: "Academic Approach", h: "pages/about.html#approach" },
    { l: "Training Methodology", h: "pages/about.html#methodology" },
    { l: "Events", h: "pages/events.html" },
    { l: "News & Events", h: "pages/news.html" }
  ]},

  { label: "Programmes", href: "pages/programmes.html", sub: [
    { head: "Programme categories" },
    { l: "All Programmes & Course Finder", h: "pages/programmes.html" },
    { l: "Certificate Courses", h: "pages/programmes.html?level=Certificate" },
    { l: "Advanced Certificate Courses", h: "pages/programmes.html?level=Advanced+Certificate" },
    { l: "Diploma Courses", h: "pages/programmes.html?level=Diploma" },
    { l: "Advanced Diploma Courses", h: "pages/programmes.html?level=Advanced+Diploma" },
    { l: "Professional Diploma Courses", h: "pages/programmes.html?level=Professional+Diploma" },
    { l: "Professional Programmes", h: "pages/programmes.html?level=Professional+Programme" },
    { l: "Skill Development Courses", h: "pages/programmes.html?level=Skill+Development" },
    { l: "Short-Term Courses", h: "pages/programmes.html?level=Short-Term" },
    { head: "Degree programmes" },
    { l: "Bachelor of Vocation – B.Voc.*", h: "pages/bvoc.html" },
    { l: "Master of Vocation – M.Voc.*", h: "pages/mvoc.html" },
    { l: "Doctoral / Ph.D. Information*", h: "pages/phd.html" }
  ]},

  { label: "Admissions", href: "pages/admissions.html", sub: [
    { l: "Apply Online", h: "pages/apply.html" },
    { l: "Eligibility", h: "pages/admissions.html#eligibility" },
    { l: "Admission Process", h: "pages/admissions.html#process" },
    { l: "Fee Structure", h: "pages/admissions.html#fees" },
    { l: "Scholarship", h: "pages/scholarship.html" },
    { l: "Documents Required", h: "pages/admissions.html#documents" },
    { l: "Prospectus", h: "pages/downloads.html" },
    { l: "Admission Verification", h: "pages/verification.html#admission" },
    { l: "Admission Enquiry", h: "pages/contact.html" }
  ]},

  { label: "Academics", href: "pages/academics.html", sub: [
    { l: "Academic Calendar", h: "pages/academics.html#calendar" },
    { l: "Academic Regulations", h: "legal/academic-regulations.html" },
    { l: "Examinations", h: "pages/exams.html" },
    { l: "Examination Timetable", h: "pages/exams.html#timetable" },
    { l: "Hall Ticket", h: "pages/exams.html#hallticket" },
    { l: "Results", h: "pages/results.html" },
    { l: "Internal Assessment", h: "pages/academics.html#assessment" },
    { l: "Practical Training", h: "pages/academics.html#practical" },
    { l: "Internship & OJT", h: "pages/academics.html#ojt" },
    { l: "Earn While You Learn", h: "pages/earn-while-you-learn.html" },
    { l: "Downloads", h: "pages/downloads.html" }
  ]},

  { label: "Students", href: "pages/student-services.html", sub: [
    { l: "Student Login", h: "pages/login.html?role=student" },
    { l: "Student Services", h: "pages/student-services.html" },
    { l: "Scholarship", h: "pages/scholarship.html" },
    { l: "Hostel & Accommodation", h: "pages/hostel.html" },
    { l: "Career Services", h: "pages/career.html" },
    { l: "Downloads", h: "pages/downloads.html" },
    { l: "Alumni", h: "pages/alumni.html" },
    { l: "Grievance Redressal", h: "pages/grievance.html" },
    { l: "Pay Online", h: "pages/payment.html" }
  ]},

  { label: "Placements", href: "pages/career.html", sub: [
    { l: "Career Guidance", h: "pages/career.html#guidance" },
    { l: "Internship", h: "pages/career.html#internship" },
    { l: "On-the-Job Training", h: "pages/career.html#ojt" },
    { l: "Earn While You Learn", h: "pages/earn-while-you-learn.html" },
    { l: "Industry Experience Certificate", h: "pages/industry-experience.html" },
    { l: "Resume & Interview Training", h: "pages/career.html#training" },
    { l: "Placement Assistance", h: "pages/career.html#placement" },
    { l: "Entrepreneurship", h: "pages/career.html#entrepreneurship" },
    { l: "Employer Services", h: "pages/employer-services.html" }
  ]},

  { label: "Partners", href: "pages/collaborations.html", sub: [
    { l: "Academic & University Collaborations", h: "pages/collaborations.html#academic" },
    { l: "National Collaborations", h: "pages/collaborations.html#national" },
    { l: "International Collaborations", h: "pages/collaborations.html#international" },
    { l: "Industry Partners", h: "pages/industry-partners.html" },
    { l: "Vocational Training Partners", h: "pages/become-partner.html" },
    { l: "Internship / OJT Partners", h: "pages/industry-partners.html#ojt" },
    { l: "Placement Partners", h: "pages/industry-partners.html#placement" },
    { l: "Become a Partner", h: "pages/become-partner.html" },
    { l: "Partner Verification", h: "pages/verification.html#partner" }
  ]},

  { label: "Career", href: "pages/current-openings.html", sub: [
    { l: "Current Openings", h: "pages/current-openings.html" },
    { l: "Teaching & Faculty Positions", h: "pages/current-openings.html?dept=Academics" },
    { l: "Administrative Positions", h: "pages/current-openings.html?dept=Administration" },
    { l: "Apply / Send Your Resume", h: "pages/current-openings.html#apply" }
  ]},

  { label: "Verify", href: "pages/verification.html", sub: [
    { l: "Student Verification", h: "pages/verification.html#student" },
    { l: "Admission Verification", h: "pages/verification.html#admission" },
    { l: "Certificate Verification", h: "pages/verification.html#certificate" },
    { l: "Industry Experience Certificate", h: "pages/verification.html#experience" },
    { l: "Fee / Payment Verification", h: "pages/verification.html#payment" },
    { l: "Staff Verification", h: "pages/verification.html#staff" },
    { l: "Member Verification", h: "pages/verification.html#member" },
    { l: "Training Partner Verification", h: "pages/verification.html#partner" }
  ]},

  { label: "Login", href: "pages/login.html", sub: [
    { l: "Student Login", h: "pages/login.html?role=student" },
    { l: "Staff Login", h: "pages/login.html?role=staff" },
    { l: "Member Login", h: "pages/login.html?role=member" },
    { l: "Vocational Training Partner", h: "pages/login.html?role=partner" },
    { l: "Industry Training Partner", h: "pages/login.html?role=industry" },
    { l: "Branch / Centre Login", h: "pages/login.html?role=branch" },
    { l: "Employer Login", h: "pages/login.html?role=employer" },
    { l: "Admin Login", h: "pages/login.html?role=admin" }
  ]},

  /* The Branches menu builds itself from the BRANCHES list in data.js, then
     adds Our Team at the bottom. Add a centre there and it appears here too. */
  { label: "Branches", href: "pages/branches.html", subFrom: "branches" },
  { label: "Events", href: "pages/events.html" },
  { label: "Gallery", href: "pages/gallery.html" },
  { label: "Contact", href: "pages/contact.html" }
];


/* ---------- Social buttons ----------
   Built from SITE.social — a platform with an empty address is skipped, so
   every button on the page is a working link. */
const SOCIAL_ICONS = {
  youtube:  '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M23 12s0-3.5-.45-5.18a2.6 2.6 0 0 0-1.83-1.84C19.04 4.5 12 4.5 12 4.5s-7.04 0-8.72.48A2.6 2.6 0 0 0 1.45 6.8C1 8.5 1 12 1 12s0 3.5.45 5.18a2.6 2.6 0 0 0 1.83 1.84c1.68.48 8.72.48 8.72.48s7.04 0 8.72-.48a2.6 2.6 0 0 0 1.83-1.84C23 15.5 23 12 23 12ZM9.75 15.27V8.73L15.5 12l-5.75 3.27Z"/></svg>',
  facebook: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 2.89h-2.33v6.99A10 10 0 0 0 22 12Z"/></svg>',
  instagram:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85C2.38 3.92 3.89 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16Zm0 3.68a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32Zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.41-10.4a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88Z"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"/></svg>',
  x:        '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.66l7.73-8.83L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.08 4.13H5.11l11.97 15.64Z"/></svg>'
};

function socialLinks(cls) {
  var order = ['youtube', 'facebook', 'instagram', 'linkedin', 'x'];
  var labels = { youtube:'YouTube', facebook:'Facebook', instagram:'Instagram', linkedin:'LinkedIn', x:'X' };
  var out = order.filter(function (k) {
    return SITE.social && SITE.social[k] && SITE.social[k] !== '#';
  }).map(function (k) {
    return '<a href="' + SITE.social[k] + '" target="_blank" rel="noopener" ' +
           'aria-label="' + labels[k] + '" title="' + labels[k] + '">' + SOCIAL_ICONS[k] + '</a>';
  }).join('');
  return out ? '<div class="' + cls + '">' + out + '</div>' : '';
}

/* ---------- Header ---------- */
function renderHeader() {
  var quick = [
    ["Student Login", "pages/login.html?role=student"],
    ["Staff Login", "pages/login.html?role=staff"],
    ["Member Login", "pages/login.html?role=member"],
    ["Training Partner", "pages/login.html?role=partner"],
    ["Exams", "pages/exams.html"],
    ["Results", "pages/results.html"],
    ["Certificate Verification", "pages/verification.html#certificate"],
    ["Pay Online", "pages/payment.html"]
  ];

  var topLinks = quick.map(function (q, i) {
    return (i ? '<span class="sep">|</span>' : '') + '<a href="' + P(q[1]) + '">' + q[0] + '</a>';
  }).join('');

  var navHtml = NAV.map(function (item) {
    var subs = '';

    /* Branches: one line per centre, then Our Team */
    if (item.subFrom === 'branches') {
      var list = [{ head: 'Our centres' }, { l: 'All Branches & Centres', h: 'pages/branches.html' }];
      if (typeof BRANCHES !== 'undefined') {
        BRANCHES.forEach(function (b) {
          list.push({ l: b.name, h: 'pages/branches.html' });
        });
      }
      list.push({ head: 'People' });
      list.push({ l: 'Our Team', h: 'pages/our-team.html' });
      list.push({ l: 'Leadership & Governance', h: 'pages/leadership.html' });
      item = { label: item.label, href: item.href, sub: list };
    }

    if (item.sub) {
      subs = '<ul class="subnav">' + item.sub.map(function (s) {
        return s.head ? '<li class="sub-head">' + s.head + '</li>'
                      : '<li><a href="' + P(s.h) + '">' + s.l + '</a></li>';
      }).join('') + '</ul>';
    }
    return '<li class="' + (item.sub ? 'has-sub' : '') + '">' +
           '<a href="' + P(item.href) + '">' + item.label + '</a>' + subs + '</li>';
  }).join('');

  var mark = SITE.logoImage
    ? '<img class="brand-logo" src="' + P(SITE.logoImage) + '" alt="' + SITE.name + ' logo">'
    : '<div class="brand-mark">' + SITE.logoText + '</div>';

  return '' +
  '<div class="topbar"><div class="wrap">' +
    '<div class="topbar-links">' + topLinks + '</div>' +
    '<div class="topbar-contact">' +
      '<a href="tel:' + SITE.phone.replace(/\s/g, '') + '">☎ ' + SITE.phone + '</a>' +
      '<a href="mailto:' + SITE.email + '">✉ ' + SITE.email + '</a>' +
      socialLinks('topbar-social') +
    '</div>' +
  '</div></div>' +

  '<div class="logobar"><div class="wrap">' +
    '<a class="brand" href="' + P('index.html') + '">' + mark +
      '<div class="brand-text"><b>' + SITE.name + '</b>' +
      '<span>' + SITE.subName + '</span>' +
      '<em>' + SITE.motto + ' &nbsp;·&nbsp; ' + SITE.regions + '</em></div>' +
    '</a>' +
    '<div class="helpline">' +
      '<div class="helpline-item"><small>Admission Helpline</small><b>' + SITE.phone + '</b></div>' +
      '<div class="helpline-item"><small>Support</small><b>' + SITE.phoneAlt + '</b></div>' +
      '<a class="btn btn-gold" href="' + P('pages/apply.html') + '">Apply Now</a>' +
    '</div>' +
  '</div></div>' +

  '<nav class="mainnav"><div class="wrap">' +
    '<div class="navbar-top"><span class="lbl">Menu</span>' +
      '<button class="navtoggle" id="navtoggle" aria-label="Toggle menu">☰</button></div>' +
    '<ul class="navlist" id="navlist">' + navHtml + '</ul>' +
  '</div></nav>';
}

/* the footer map shows the registered office (Bengaluru) */
function footerMap() {
  if (typeof BRANCHES === 'undefined' || !BRANCHES.length) return '';
  var reg = BRANCHES.filter(function (b) {
    return (b.type || '').toLowerCase().indexOf('registered') > -1;
  })[0];
  return (reg || BRANCHES[0]).map;
}

/* ---------- Footer ---------- */
function renderFooter() {
  var col = function (title, links) {
    return '<div><h5>' + title + '</h5>' + links.map(function (l) {
      return '<a href="' + P(l[1]) + '">' + l[0] + '</a>';
    }).join('') + '</div>';
  };

  var footMark = SITE.logoFullWhite
    ? '<img class="footer-logo" src="' + P(SITE.logoFullWhite) + '" alt="' + SITE.name + ' logo">'
    : '<div class="brand-mark">' + SITE.logoText + '</div>';

  return '' +
  '<footer class="footer"><div class="wrap">' +
    '<div class="fcols">' +

      '<div>' +
        '<a class="fbrand" href="' + P('index.html') + '">' + footMark +
          '<span class="fbrand-text">' +
            '<b>' + SITE.name + '</b>' +
            '<span>' + SITE.subName + '</span>' +
          '</span>' +
        '</a>' +
        '<address><b class="office-label">' + SITE.registeredOffice.label + '</b>' +
          SITE.registeredOffice.lines.join('<br>') + '</address>' +
        '<address><b class="office-label">' + SITE.corporateOffice.label + '</b>' +
          SITE.corporateOffice.lines.join('<br>') + '</address>' +
        '<a href="tel:' + SITE.phone.replace(/\s/g, '') + '">☎ ' + SITE.phone + '</a>' +
        '<a href="mailto:' + SITE.email + '">✉ ' + SITE.email + '</a>' +
        socialLinks('socials') +

      '</div>' +

      col("Programmes", [
        ["Certificate", "pages/programmes.html?level=Certificate"],
        ["Diploma", "pages/programmes.html?level=Diploma"],
        ["Advanced Diploma", "pages/programmes.html?level=Advanced+Diploma"],
        ["Professional Diploma", "pages/programmes.html?level=Professional+Diploma"],
        ["Skill Development", "pages/programmes.html?level=Skill+Development"],
        ["Short-Term", "pages/programmes.html?level=Short-Term"],
        ["B.Voc.*", "pages/bvoc.html"],
        ["M.Voc.*", "pages/mvoc.html"],
        ["Ph.D. Information*", "pages/phd.html"]
      ]) +

      col("Student Services", [
        ["Apply Online", "pages/apply.html"],
        ["Student Login", "pages/login.html?role=student"],
        ["Examinations", "pages/exams.html"],
        ["Hall Ticket", "pages/exams.html#hallticket"],
        ["Results", "pages/results.html"],
        ["Scholarship", "pages/scholarship.html"],
        ["Hostel & Accommodation", "pages/hostel.html"],
        ["Pay Fees", "pages/payment.html"],
        ["Grievance Redressal", "pages/grievance.html"]
      ]) +

      col("Placements & Career", [
        ["Current Openings", "pages/current-openings.html"],
        ["Internship & OJT", "pages/career.html#ojt"],
        ["Earn While You Learn", "pages/earn-while-you-learn.html"],
        ["Industry Experience", "pages/industry-experience.html"],
        ["Placement Assistance", "pages/career.html#placement"],
        ["Alumni", "pages/alumni.html"],
        ["Industry Training Partners", "pages/industry-partners.html"],
        ["Become a Partner", "pages/become-partner.html"],
        ["Employer Services", "pages/employer-services.html"],
        ["Collaborations", "pages/collaborations.html"]
      ]) +

      col("Verification & Login", [
        ["Certificate Verification", "pages/verification.html#certificate"],
        ["Student Verification", "pages/verification.html#student"],
        ["Fee / Payment Verification", "pages/verification.html#payment"],
        ["Partner Verification", "pages/verification.html#partner"],
        ["Staff Login", "pages/login.html?role=staff"],
        ["Member Login", "pages/login.html?role=member"],
        ["Training Partner Login", "pages/login.html?role=partner"],
        ["Industry Partner Login", "pages/login.html?role=industry"],
        ["Branch / Centre Login", "pages/login.html?role=branch"]
      ]) +

      '<div><h5>Institution</h5>' +
        '<a href="' + P('pages/about.html') + '">About BGLRGM</a>' +
        '<a href="' + P('pages/leadership.html') + '">Leadership</a>' +
        '<a href="' + P('pages/branches.html') + '">Our Branches</a>' +
        '<a href="' + P('pages/our-team.html') + '">Our Team</a>' +
        '<a href="' + P('pages/gallery.html') + '">Gallery</a>' +
        '<a href="' + P('pages/events.html') + '">Events</a>' +
        '<a href="' + P('pages/news.html') + '">News & Events</a>' +
        '<a href="' + P('pages/downloads.html') + '">Downloads</a>' +
        '<a href="' + P('pages/contact.html') + '">Contact Us</a>' +
        '<div style="margin-top:1rem;border-radius:8px;overflow:hidden;border:1px solid rgba(255,255,255,.15)">' +
          '<iframe title="Registered office location" src="' + footerMap() + '" width="100%" height="130" ' +
          'style="border:0;display:block" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>' +
        '</div>' +
      '</div>' +

    '</div>' +

    '<div class="footer-strip">' +
      '<div>' +
        '<a href="' + P('legal/recognition-disclosure.html') + '">Recognition &amp; Certification</a> · ' +
        '<a href="' + P('legal/privacy-policy.html') + '">Privacy Policy</a> · ' +
        '<a href="' + P('legal/terms.html') + '">Terms &amp; Conditions</a> · ' +
        '<a href="' + P('legal/refund-policy.html') + '">Refund &amp; Cancellation</a> · ' +
        '<a href="' + P('legal/fee-policy.html') + '">Fee Policy</a> · ' +
        '<a href="' + P('legal/scholarship-policy.html') + '">Scholarship Policy</a> · ' +
        '<a href="' + P('legal/examination-regulations.html') + '">Examination Regulations</a> · ' +
        '<a href="' + P('legal/academic-regulations.html') + '">Academic Regulations</a> · ' +
        '<a href="' + P('legal/grievance-policy.html') + '">Grievance Policy</a> · ' +
        '<a href="' + P('legal/code-of-conduct.html') + '">Code of Conduct</a> · ' +
        '<a href="' + P('legal/anti-ragging.html') + '">Anti-Ragging</a> · ' +
        '<a href="' + P('legal/posh.html') + '">POSH / ICC</a> · ' +
        '<a href="' + P('legal/disclaimer.html') + '">Disclaimer</a>' +
      '</div>' +
    '</div>' +
  '</div>' +

  '<div class="footer-legal"><div class="wrap">' +
    '<p style="margin:0 0 .4rem">© ' + SITE.copyrightYear + ' ' + SITE.name + '. All Rights Reserved. ' +
    SITE.legalName + ' · CIN: ' + SITE.cin + '</p>' +
    '<p style="margin:0">B.Voc., M.Voc., Ph.D. and other university degrees are awarded only by the respective ' +
    'legally authorised university / institution. Programme-specific recognition, certification and collaboration ' +
    'details are published on the <a href="' + P('legal/recognition-disclosure.html') + '">Recognition &amp; ' +
    'Certification Disclosure</a> page. GST at the applicable rate, including ' + SITE.gstRate +
    '% where legally applicable, may be charged on specified taxable courses and services.</p>' +
  '</div></div>' +
  '</footer>';
}

/* ---------- Floating buttons ---------- */
function renderFab() {
  return '<div class="fab">' +
    '<a class="wa" href="https://wa.me/' + SITE.whatsapp + '?text=' +
      encodeURIComponent('Hello BGLRGM, I would like to know more about your programmes.') +
      '" target="_blank" rel="noopener" title="WhatsApp">✆</a>' +
    '<a class="call" href="tel:' + SITE.phone.replace(/\s/g, '') + '" title="Call us">☎</a>' +
    '<a class="top" href="#" id="backtotop" title="Back to top">▲</a>' +
  '</div>';
}

/* ---------- Mount ---------- */
document.addEventListener('DOMContentLoaded', function () {
  var h = document.getElementById('site-header');
  var f = document.getElementById('site-footer');
  if (h) h.innerHTML = renderHeader();
  if (f) f.innerHTML = renderFooter() + renderFab();

  /* mobile menu */
  var t = document.getElementById('navtoggle');
  var list = document.getElementById('navlist');
  if (t && list) {
    t.addEventListener('click', function () { list.classList.toggle('open'); });
    list.querySelectorAll('li.has-sub > a').forEach(function (a) {
      a.addEventListener('click', function (e) {
        if (window.innerWidth <= 860) {
          var li = a.parentElement;
          if (!li.classList.contains('open')) { e.preventDefault(); li.classList.add('open'); }
        }
      });
    });
  }

  /* highlight current section in nav */
  var here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navlist > li > a').forEach(function (a) {
    if ((a.getAttribute('href') || '').split('/').pop().split('?')[0] === here) {
      a.parentElement.classList.add('active');
    }
  });

  /* sticky header: shrink it once the page is scrolled */
  var hdr = document.getElementById('site-header');
  if (hdr) {
    var compact = false;
    var onScroll = function () {
      var want = window.pageYOffset > 90;
      if (want !== compact) { compact = want; hdr.classList.toggle('compact', want); }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    /* the header is added after the page loads, so re-run an #anchor jump
       once it is in place — otherwise the target sits under the header */
    if (location.hash) {
      var target = document.getElementById(location.hash.slice(1));
      if (target) setTimeout(function () { target.scrollIntoView(); }, 30);
    }
  }

  var top = document.getElementById('backtotop');
  if (top) top.addEventListener('click', function (e) {
    e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
