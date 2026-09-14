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
    { l: "Leadership", h: "pages/about.html#leadership" },
    { l: "Why BGLRGM?", h: "pages/about.html#why" },
    { l: "Infrastructure", h: "pages/about.html#infrastructure" },
    { l: "Academic Approach", h: "pages/about.html#approach" },
    { l: "Training Methodology", h: "pages/about.html#methodology" },
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

  { label: "Career", href: "pages/career.html", sub: [
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

  { label: "Branches", href: "pages/branches.html" },
  { label: "Gallery", href: "pages/gallery.html" },
  { label: "Contact", href: "pages/contact.html" }
];

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
        '<a href="' + P('index.html') + '" style="display:block">' + footMark + '</a>' +
        '<p style="margin:.8rem 0 1rem;font-size:.82rem;line-height:1.5">' + SITE.subName + '</p>' +
        '<address>' + SITE.registeredOffice.lines.join('<br>') + '</address>' +
        '<a href="tel:' + SITE.phone.replace(/\s/g, '') + '">☎ ' + SITE.phone + '</a>' +
        '<a href="mailto:' + SITE.email + '">✉ ' + SITE.email + '</a>' +
        '<div class="socials">' +
          '<a href="' + SITE.social.facebook + '" aria-label="Facebook">f</a>' +
          '<a href="' + SITE.social.instagram + '" aria-label="Instagram">◎</a>' +
          '<a href="' + SITE.social.youtube + '" aria-label="YouTube">▶</a>' +
          '<a href="' + SITE.social.linkedin + '" aria-label="LinkedIn">in</a>' +
        '</div>' +
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

      col("Career & Partners", [
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
        '<a href="' + P('pages/branches.html') + '">Our Branches</a>' +
        '<a href="' + P('pages/gallery.html') + '">Gallery</a>' +
        '<a href="' + P('pages/news.html') + '">News & Events</a>' +
        '<a href="' + P('pages/downloads.html') + '">Downloads</a>' +
        '<a href="' + P('pages/contact.html') + '">Contact Us</a>' +
        '<div style="margin-top:1rem;border-radius:8px;overflow:hidden;border:1px solid rgba(255,255,255,.15)">' +
          '<iframe title="Location map" src="' + BRANCHES[0].map + '" width="100%" height="130" ' +
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

  var top = document.getElementById('backtotop');
  if (top) top.addEventListener('click', function (e) {
    e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
