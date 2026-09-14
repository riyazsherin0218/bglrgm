# BGLRGM Vocational College — Website

Static website for **BGLRGM Institute of Vocational Education & Training**
(BGLRGM Institute of Vocational Education Training (OPC) Private Limited, CIN U85306KA2025OPC197402).

Plain HTML, CSS and JavaScript — no build step, no framework, no server required.
Open `index.html` in a browser, or upload the whole folder to any web host.

---

## 1. Folder structure

```
bglrgm-website/
├── index.html                 Homepage
├── README.md                  This file
├── assets/
│   ├── css/style.css          All styling (one file)
│   ├── js/config.js           ← EDIT THIS: contact details, forms, GST, branding
│   ├── js/data.js             ← EDIT THIS: courses, branches, news, downloads
│   ├── js/demo-data.js        Sample records for the portals / verification / results
│   ├── js/layout.js           Header, navigation menu and footer (defined once)
│   ├── js/main.js             Slider, tabs, accordions, forms, course finder
│   └── img/                   Hero background SVGs + image placeholder
├── pages/                     31 public pages and portals
└── legal/                     13 policy and disclosure pages
```

## 2. Pages

**Public** — about, programmes (with course finder), bvoc, mvoc, phd, admissions, apply,
academics, earn-while-you-learn, industry-experience, scholarship, career, collaborations,
industry-partners, become-partner, employer-services, student-services, hostel, branches,
gallery, downloads, news, alumni, grievance, contact.

**Portals & transactions** — login (8 roles), portal (role-based dashboard), exams
(notifications, timetable, hall ticket), results, verification (8 verification types),
payment (with GST calculation).

**Legal** — recognition & certification disclosure, terms, privacy, refund, fee policy,
scholarship policy, examination regulations, academic regulations, grievance policy,
code of conduct, anti-ragging, POSH/ICC, disclaimer.

---

## 3. What to change first

### `assets/js/config.js`
Phone numbers, WhatsApp number, email, office addresses, social links, GST rate, logo.

```js
logoImage: "assets/img/logo.png"   // add your logo file and set this; leave "" to use the BG mark
forms: { mode: "both" }            // "whatsapp" | "email" | "both"
```

### `assets/js/data.js`
- `BRANCHES` — the six centres and offices (name, address, phone, map, programmes)
- `COURSES` — the full course catalogue used by the course finder and every dropdown
- `BVOC` / `MVOC` — degree specialisation lists
- `NEWS` — news and events cards
- `DOWNLOADS` — download centre rows

### `assets/js/layout.js`
The `NAV` array at the top is the whole menu. Add, remove or rename an item there and it
changes on every page.

### Logo files
The BGLRGM logo has been cut out of the supplied artwork (background removed) and exported
in the sizes the site needs. All of them live in `assets/img/`:

| File | Where it is used |
|---|---|
| `logo.png` | Emblem only — header, beside the institution name |
| `logo-full.png` | Full lockup with the BGLRGM wordmark — login card, hall ticket, mark statement, fee receipt |
| `logo-white.png` | White version of the lockup — the dark blue footer |
| `logo-mark-white.png` | White emblem, spare (dark backgrounds) |
| `favicon.ico`, `favicon-32.png` | Browser tab icon |
| `apple-touch-icon.png` | Icon when the site is saved to a phone home screen |

To swap in different artwork later, replace these files keeping the same names, or point
`logoImage` / `logoFull` / `logoFullWhite` in `config.js` at new ones. Sizes are controlled by
`.brand-logo`, `.footer-logo`, `.login-logo` and `.panel-logo` in `style.css`.

### Other images
`assets/img/` also holds three hero background SVGs and a placeholder. Replace them with real
photographs (same filenames) or edit the `background-image` values in `index.html`.

---

## 4. Forms

No server is used. Every form is submitted through **WhatsApp** or **Email**:
the form contents are formatted into a message and opened in `wa.me` or the visitor's mail
client. Switch behaviour with `SITE.forms.mode` in `config.js`.

To move to real server-side submission, replace the submit handler in
`assets/js/main.js` → `initForms()` with a `fetch()` POST to your endpoint.

---

## 5. Demo mode (portals, results, verification, payment)

`SITE.demoMode = true` in `config.js`. All login portals, result lookups, certificate and
partner verification, hall tickets and the payment receipt run on the sample records in
`assets/js/demo-data.js` so the flows can be demonstrated without a backend.

**Demo credentials** (shown on the login page):

| Role | Username | Password |
|---|---|---|
| Student | BG2026001 | student123 |
| Staff | STF1042 | staff123 |
| Member | MEM20851 | member123 |
| Training Partner | VTP0217 | partner123 |
| Industry Partner | ITP0093 | industry123 |
| Branch / Centre | BR006 | branch123 |
| Employer | EMP0451 | employer123 |
| Admin | ADMIN01 | admin123 |

Sample result: enrollment `BG2026001`, date of birth `14 June 2004`.
Sample certificate: `BG/CERT/2026/000318`. Sample partner: `VTP0217`, `ITP0093`.

### Going live with a real backend
These flows must move server-side before real use — a record that can be verified by editing
a JavaScript file is not a verification. The parts that need a real backend and database are:

1. **Authentication** — role-based accounts, hashed passwords, sessions, password reset.
2. **Certificate & record verification** — server lookup against an issue register, with the
   QR code encoding a verification URL rather than a decorative block.
3. **Payments** — a payment gateway, server-generated receipts, and GST invoicing.
4. **Results & hall tickets** — generated from examination data, not from the browser.
5. **Partner and employer portals** — scoped data access per organisation, with an audit trail.

Set `SITE.demoMode = false` and `SITE.apiBase = "https://..."`, then replace the lookup
functions at the bottom of `demo-data.js` with API calls. Nothing else needs restructuring —
every page already reads through those functions.

---

## 6. GST

`SITE.gstRate = 18`. It is displayed on the payment page, admissions fee section, download
centre, examination fee notice and in the footer of every page. Elements tagged
`data-gst` are filled automatically, so changing the number in `config.js` updates the
whole site.

---

## 7. Compliance notes already built in

- **Recognition & Certification Disclosure** page states that B.Voc., M.Voc. and Ph.D. degrees
  are awarded only by the legally authorised university, and what each programme page must
  disclose (awarding institution, certification authority, nature of collaboration, programme,
  session, recognition information).
- Every degree reference on the site carries an asterisk and links to that disclosure.
- Placement text states that placement assistance is not a guarantee of employment.
- Earn While You Learn text states that stipend depends on programme, employer, eligibility
  and availability.
- Scholarship text states that the percentage is subject to the applicable policy.
- The Ph.D. page provides guidance only and states that no degree is awarded by BGLRGM.
- Demonstration records are labelled as such on every screen that shows them.

Fill in the real awarding institution for each degree programme before publishing those pages.

---

## 8. Hosting

Upload the folder to any static host — shared hosting via FTP, Netlify, Vercel, GitHub Pages,
Cloudflare Pages or an S3 bucket. There is nothing to compile and no dependency to install.
Point the domain at the folder containing `index.html`.

For a live site, add: a favicon, real Open Graph images, Google Analytics or similar,
a `sitemap.xml` and `robots.txt`, and an SSL certificate (most hosts provide one free).
