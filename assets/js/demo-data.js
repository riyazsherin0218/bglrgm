/* ==========================================================================
   BGLRGM — DEMO DATA (front-end only)
   Every login, result, verification and payment screen on this site runs on
   the sample records below so the flows can be demonstrated without a server.
   When a real backend is built, set SITE.demoMode = false in config.js and
   replace the lookup functions at the bottom with API calls to SITE.apiBase.
   ========================================================================== */

const DEMO_LOGINS = {
  student:  { user: "BG2026001",  pass: "student123",  name: "Priya Raman",      extra: "Diploma in Medical Laboratory Technology — Semester 3" },
  staff:    { user: "STF1042",    pass: "staff123",    name: "R. Karthikeyan",   extra: "Senior Faculty — Paramedical Sciences, Chennai" },
  member:   { user: "MEM20851",   pass: "member123",   name: "Dr. S. Anitha",    extra: "Institutional Member — Valid to 31 Mar 2027" },
  partner:  { user: "VTP0217",    pass: "partner123",  name: "Dr. RG Academy — Villupuram", extra: "Vocational Training Partner" },
  industry: { user: "ITP0093",    pass: "industry123", name: "Sree Multispeciality Hospital", extra: "Industry Training Partner — Healthcare" },
  branch:   { user: "BR006",      pass: "branch123",   name: "Tindivanam Branch", extra: "Branch / Centre Administrator" },
  employer: { user: "EMP0451",    pass: "employer123", name: "Southline Logistics Pvt Ltd", extra: "Registered Employer" },
  admin:    { user: "ADMIN01",    pass: "admin123",    name: "System Administrator", extra: "Head Office — Bengaluru" }
};

const ROLE_LABELS = {
  student:"Student", staff:"Staff", member:"Member",
  partner:"Vocational Training Partner", industry:"Industry Training Partner",
  branch:"Branch / Centre", employer:"Employer", admin:"Administrator"
};

/* ---------- Student record ---------- */
const DEMO_STUDENT = {
  enrollment:"BG2026001", name:"Priya Raman", dob:"2004-06-14",
  programme:"Diploma in Medical Laboratory Technology",
  level:"Diploma", sector:"Paramedical", duration:"2 Years",
  centre:"Chennai — Head Office", session:"2026–27", semester:"Semester 3",
  admissionDate:"12 June 2026", status:"Active", attendance:"91%",
  ewyl:true, ojt:"Sree Multispeciality Hospital — Laboratory Department",
  subjects:[
    {code:"MLT301", name:"Clinical Biochemistry",        ia:"18/25", ext:"61/75", total:"79/100", grade:"A",  res:"Pass"},
    {code:"MLT302", name:"Clinical Pathology",           ia:"20/25", ext:"58/75", total:"78/100", grade:"A",  res:"Pass"},
    {code:"MLT303", name:"Microbiology",                 ia:"17/25", ext:"55/75", total:"72/100", grade:"B+", res:"Pass"},
    {code:"MLT304", name:"Histotechnology",              ia:"19/25", ext:"60/75", total:"79/100", grade:"A",  res:"Pass"},
    {code:"MLT305P",name:"Laboratory Practical – III",   ia:"22/25", ext:"66/75", total:"88/100", grade:"A+", res:"Pass"},
    {code:"MLT306", name:"Employability & Soft Skills",  ia:"21/25", ext:"63/75", total:"84/100", grade:"A+", res:"Pass"}
  ],
  fees:[
    {head:"Admission Fee",   amount:5000,  gst:false, date:"12 Jun 2026", receipt:"RCPT/26/000118", status:"Paid"},
    {head:"Tuition Fee — Semester 3", amount:18000, gst:false, date:"05 Jul 2026", receipt:"RCPT/26/000342", status:"Paid"},
    {head:"Examination Fee — Semester 3", amount:1500, gst:true, date:"18 Aug 2026", receipt:"RCPT/26/000915", status:"Paid"},
    {head:"Certificate Fee", amount:750, gst:true, date:"—", receipt:"—", status:"Pending"}
  ]
};

/* ---------- Results lookup (enrollment + DOB) ---------- */
const DEMO_RESULTS = [
  { enrollment:"BG2026001", dob:"2004-06-14", name:"Priya Raman",
    programme:"Diploma in Medical Laboratory Technology", semester:"Semester 3",
    session:"April 2026", total:"480 / 600", percentage:"80.00%", cgpa:"8.0", result:"PASS",
    subjects: DEMO_STUDENT.subjects },
  { enrollment:"BG2026114", dob:"2003-11-02", name:"Mohammed Arif",
    programme:"Advanced Diploma in Hotel & Hospitality Management", semester:"Semester 2",
    session:"April 2026", total:"441 / 600", percentage:"73.50%", cgpa:"7.4", result:"PASS",
    subjects:[
      {code:"HHM201", name:"Food & Beverage Service",   ia:"18/25", ext:"54/75", total:"72/100", grade:"B+", res:"Pass"},
      {code:"HHM202", name:"Front Office Operations",   ia:"17/25", ext:"52/75", total:"69/100", grade:"B",  res:"Pass"},
      {code:"HHM203", name:"Housekeeping Management",   ia:"19/25", ext:"55/75", total:"74/100", grade:"B+", res:"Pass"},
      {code:"HHM204", name:"Food Production",           ia:"20/25", ext:"58/75", total:"78/100", grade:"A",  res:"Pass"},
      {code:"HHM205P",name:"Practical & Industry Log",  ia:"21/25", ext:"58/75", total:"79/100", grade:"A",  res:"Pass"},
      {code:"HHM206", name:"Communication Skills",      ia:"18/25", ext:"51/75", total:"69/100", grade:"B",  res:"Pass"}
    ]}
];

/* ---------- Certificates ---------- */
const DEMO_CERTIFICATES = [
  { cert:"BG/CERT/2026/000318", enrollment:"BG2025214", name:"Lakshmi Devi S",
    programme:"Certificate in General Duty Assistant", level:"Certificate",
    centre:"Chengalpattu Branch", year:"2026", result:"PASS — First Class",
    issued:"14 May 2026", status:"Valid" },
  { cert:"BG/CERT/2026/000452", enrollment:"BG2025097", name:"Vignesh Kumar M",
    programme:"Diploma in Hotel Management", level:"Diploma",
    centre:"Chennai — Head Office", year:"2026", result:"PASS — Distinction",
    issued:"02 June 2026", status:"Valid" }
];

/* ---------- Industry experience certificates ---------- */
const DEMO_EXPERIENCE = [
  { cert:"BG/EXP/2026/000077", enrollment:"BG2025214", name:"Lakshmi Devi S",
    organisation:"Sree Multispeciality Hospital, Chengalpattu", department:"General Ward",
    role:"General Duty Assistant — Trainee", period:"01 Sep 2025 to 28 Feb 2026",
    skills:"Patient handling, vital signs monitoring, infection control, ward documentation",
    completion:"Completed", signatory:"HR Manager, Sree Multispeciality Hospital", status:"Valid" }
];

/* ---------- Admissions ---------- */
const DEMO_ADMISSIONS = [
  { app:"APP/2026/004417", name:"Priya Raman", programme:"Diploma in Medical Laboratory Technology",
    centre:"Chennai — Head Office", applied:"02 June 2026", stage:"Admission Confirmed",
    enrollment:"BG2026001", status:"Confirmed" },
  { app:"APP/2026/005190", name:"Sathish Kumar R", programme:"Certificate in Electrical Technician",
    centre:"Tindivanam Branch", applied:"18 August 2026", stage:"Document Verification",
    enrollment:"—", status:"In Process" }
];

/* ---------- Payments / receipts ---------- */
const DEMO_PAYMENTS = [
  { receipt:"RCPT/26/000915", txn:"TXN2608261145", enrollment:"BG2026001", name:"Priya Raman",
    head:"Examination Fee — Semester 3", base:1500, gst:270, amount:1770,
    mode:"UPI", date:"18 August 2026", status:"Success" },
  { receipt:"RCPT/26/000342", txn:"TXN0507260931", enrollment:"BG2026001", name:"Priya Raman",
    head:"Tuition Fee — Semester 3", base:18000, gst:0, amount:18000,
    mode:"Net Banking", date:"05 July 2026", status:"Success" }
];

/* ---------- Staff / members / partners ---------- */
const DEMO_STAFF = [
  { id:"STF1042", name:"R. Karthikeyan", designation:"Senior Faculty — Paramedical Sciences",
    centre:"Chennai — Head Office", since:"June 2025", status:"Active" },
  { id:"STF1108", name:"J. Meenakshi", designation:"Training Coordinator — Hospitality",
    centre:"Villupuram Branch", since:"January 2026", status:"Active" }
];

const DEMO_MEMBERS = [
  { id:"MEM20851", name:"Dr. S. Anitha", category:"Institutional Member",
    since:"01 April 2025", valid:"31 March 2027", status:"Active" }
];

const DEMO_PARTNERS = [
  { id:"VTP0217", org:"Dr. RG Academy — Villupuram", type:"Vocational Training Partner",
    location:"Villupuram, Tamil Nadu",
    areas:"Healthcare, Paramedical, Hospitality, Skill Development",
    valid:"31 March 2027", status:"Approved" },
  { id:"VTP0233", org:"Dr. RG Academy — Cheyyar", type:"Vocational Training Partner",
    location:"Cheyyar, Tamil Nadu",
    areas:"Certificate & Short-Term Vocational Programmes",
    valid:"31 March 2027", status:"Approved" },
  { id:"ITP0093", org:"Sree Multispeciality Hospital", type:"Industry Training Partner",
    location:"Chengalpattu, Tamil Nadu",
    areas:"Internship, OJT, Earn While You Learn — Healthcare",
    valid:"31 March 2027", status:"Approved" },
  { id:"ITP0121", org:"Southline Logistics Pvt Ltd", type:"Industry Training Partner",
    location:"Chennai, Tamil Nadu",
    areas:"Warehouse Operations, Logistics & Supply Chain OJT",
    valid:"31 December 2026", status:"Approved" }
];

/* ---------- Examination timetable ---------- */
const DEMO_TIMETABLE = [
  { date:"12 Nov 2026", day:"Thursday", session:"FN 10.00 – 13.00", code:"MLT301", subject:"Clinical Biochemistry" },
  { date:"14 Nov 2026", day:"Saturday", session:"FN 10.00 – 13.00", code:"MLT302", subject:"Clinical Pathology" },
  { date:"17 Nov 2026", day:"Tuesday",  session:"FN 10.00 – 13.00", code:"MLT303", subject:"Microbiology" },
  { date:"19 Nov 2026", day:"Thursday", session:"FN 10.00 – 13.00", code:"MLT304", subject:"Histotechnology" },
  { date:"21 Nov 2026", day:"Saturday", session:"AN 14.00 – 17.00", code:"MLT306", subject:"Employability & Soft Skills" },
  { date:"24–26 Nov 2026", day:"Tue–Thu", session:"As allotted",     code:"MLT305P",subject:"Laboratory Practical – III" }
];

/* ---------- Academic calendar ---------- */
const DEMO_CALENDAR = [
  { period:"01 – 30 June 2026",      item:"Admission — first phase" },
  { period:"01 – 31 July 2026",      item:"Admission — second phase and late admission" },
  { period:"15 July 2026",           item:"Commencement of classes — odd semester" },
  { period:"20 – 26 September 2026", item:"Internal assessment – I" },
  { period:"01 – 31 October 2026",   item:"Practical training / industrial visits" },
  { period:"05 November 2026",       item:"Hall ticket release — odd semester examinations" },
  { period:"12 – 26 November 2026",  item:"Odd semester theory and practical examinations" },
  { period:"20 December 2026",       item:"Publication of odd semester results" },
  { period:"02 January 2027",        item:"Commencement of classes — even semester" },
  { period:"01 March – 30 April 2027", item:"Internship / OJT block for eligible learners" }
];

/* ==========================================================================
   LOOKUP HELPERS — swap these for API calls when a backend is added
   ========================================================================== */
function demoLogin(role, user, pass) {
  var r = DEMO_LOGINS[role];
  if (!r) return null;
  return (user.trim().toUpperCase() === r.user.toUpperCase() && pass === r.pass) ? r : null;
}
function findResult(en, dob) {
  return DEMO_RESULTS.find(function (r) {
    return r.enrollment.toUpperCase() === String(en).trim().toUpperCase() && r.dob === dob; }) || null;
}
function findCertificate(v) {
  v = String(v).trim().toUpperCase();
  return DEMO_CERTIFICATES.find(function (c) {
    return c.cert.toUpperCase() === v || c.enrollment.toUpperCase() === v; }) || null;
}
function findExperience(v) {
  v = String(v).trim().toUpperCase();
  return DEMO_EXPERIENCE.find(function (c) {
    return c.cert.toUpperCase() === v || c.enrollment.toUpperCase() === v; }) || null;
}
function findAdmission(v) {
  v = String(v).trim().toUpperCase();
  return DEMO_ADMISSIONS.find(function (a) {
    return a.app.toUpperCase() === v || a.enrollment.toUpperCase() === v; }) || null;
}
function findPayment(en, ref) {
  en = String(en).trim().toUpperCase(); ref = String(ref).trim().toUpperCase();
  return DEMO_PAYMENTS.find(function (p) {
    return p.enrollment.toUpperCase() === en &&
           (p.receipt.toUpperCase() === ref || p.txn.toUpperCase() === ref); }) || null;
}
function findStudent(v) {
  v = String(v).trim().toUpperCase();
  return DEMO_STUDENT.enrollment.toUpperCase() === v ? DEMO_STUDENT : null;
}
function findStaff(v) {
  v = String(v).trim().toUpperCase();
  return DEMO_STAFF.find(function (s) {
    return s.id.toUpperCase() === v || s.name.toUpperCase() === v; }) || null;
}
function findMember(v) {
  v = String(v).trim().toUpperCase();
  return DEMO_MEMBERS.find(function (m) {
    return m.id.toUpperCase() === v || m.name.toUpperCase() === v; }) || null;
}
function findPartner(v) {
  v = String(v).trim().toUpperCase();
  return DEMO_PARTNERS.find(function (p) {
    return p.id.toUpperCase() === v || p.org.toUpperCase().indexOf(v) > -1; }) || null;
}

/* Deterministic decorative QR-style block (visual placeholder only) */
function qrBlock(seed) {
  var s = 0, i;
  for (i = 0; i < String(seed).length; i++) s = (s * 31 + String(seed).charCodeAt(i)) % 99991;
  var cells = '';
  for (i = 0; i < 100; i++) {
    s = (s * 1103515245 + 12345) % 2147483648;
    cells += (s >> 16) % 2 ? '<i></i>' : '<i style="background:#fff"></i>';
  }
  return '<div class="qr-box">' + cells + '</div>';
}
