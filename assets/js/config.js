/* ==========================================================================
   BGLRGM — SITE CONFIGURATION
   Edit this one file to change contact details, form behaviour, branding
   and legal text across the whole website.
   ========================================================================== */

const SITE = {

  /* ---------- Identity ---------- */
  name:        "BGLRGM Vocational College",
  legalName:   "BGLRGM Institute of Vocational Education Training (OPC) Private Limited",
  subName:     "BGLRGM Institute of Vocational Education & Training",
  tagline:     "Vocational Education • Skill Development • Career-Oriented Learning",
  motto:       "Learn • Grow • Succeed",
  regions:     "Tamil Nadu • Karnataka • Pan India",

  /* ---------- Logo files (assets/img/) ----------
     logoImage      emblem only — used in the header beside the institution name
     logoFull       full lockup with the BGLRGM wordmark — login card, printed panels
     logoFullWhite  white version of the lockup — used on the dark blue footer
     logoText       fallback initials shown only if logoImage is left blank        */
  logoText:      "BG",
  logoImage:     "assets/img/logo.png",
  logoFull:      "assets/img/logo-full.png",
  logoFullWhite: "assets/img/logo.png",
  logoMarkWhite: "assets/img/logo.png",

  /* ---------- Statutory / corporate ---------- */
  cin:         "U85306KA2025OPC197402",
  incorporated:"28 January 2025",
  gstRate:     18,                // % — displayed on all fee/payment screens

  /* ---------- Contact ---------- */
  phone:       "+91 95003 22006",
  phoneAlt:    "+91 97900 77618",
  whatsapp:    "919500322006",    // digits only, with country code
  email:       "admissions@bglrgm.com",
  admissionEmail: "admissions@bglrgm.com",

  /* ---------- Offices ----------
     Registered office = Bengaluru (Karnataka)
     Corporate office  = Chennai (Tamil Nadu)
     Always print the full address, exactly as below.                     */
  registeredOffice: {
    label: "Registered Office — Karnataka",
    lines: ["No. 21, 3rd Floor, 9th Main, 6th Cross,",
            "RK Layout – 2nd Stage, Padmanabha Nagar,",
            "Bengaluru – 560070, Karnataka, India."],
    phone: "+91 95003 22006"
  },
  corporateOffice: {
    label: "Corporate Office — Tamil Nadu",
    lines: ["No. 130, BBR Towers, 2nd Floor, IOB Bank Upstairs,",
            "Mudichur Road, West Tambaram,",
            "Chennai – 600045, Tamil Nadu, India."],
    phone: "+91 95003 22006"
  },

  /* ---------- Social ----------
     Put the full address of each page. A channel or page address is better
     than a single video, because it never goes out of date.
     Leave a line as "" and that button simply does not appear.          */
  social: {
    youtube:   "https://www.youtube.com/live/yv9H_095se8",
    facebook:  "",
    instagram: "",
    linkedin:  "",
    x:         ""
  },

  /* ---------- Form submission ----------
     mode: "whatsapp" | "email" | "both"
     "both" shows two buttons; nothing is sent to a server. */
  forms: {
    mode: "both",
    whatsappNumber: "919500322006",
    mailTo: "admissions@bglrgm.com",
    successText: "Thank you. Your details have been prepared — choose WhatsApp or Email to send them to our admission team."
  },

  /* ---------- Demo mode ----------
     All login portals, results, verification and payment screens run on
     sample data held in demo-data.js. Set demoMode:false once a real
     backend API is connected and point apiBase at it. */
  demoMode: true,
  apiBase:  "",

  copyrightYear: 2026
};
