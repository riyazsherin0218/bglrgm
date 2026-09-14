/* ==========================================================================
   BGLRGM — CONTENT DATA
   Programmes, courses, branches, news, downloads and partner lists.
   Add or edit entries here; every page reads from this file.
   ========================================================================== */

/* ---------- Branches ---------- */
const BRANCHES = [
  { name:"Chennai — Head Office", state:"Tamil Nadu", type:"Registered / Head Office",
    unit:"Dr. RG Academy — BGLRGM Study & Training Centre",
    address:"No. 130 B, BBR Towers, 2nd Floor, IOB Bank Upstairs, Mudichur Road, West Tambaram, Chennai – 600 045",
    phone:"+91 95003 22006",
    map:"https://www.google.com/maps?q=West+Tambaram+Mudichur+Road+Chennai+600045&output=embed",
    programmes:"All Certificate, Diploma, Advanced Diploma, Skill Development, B.Voc.* & M.Voc.* programmes" },

  { name:"Bengaluru — Corporate Office", state:"Karnataka", type:"Corporate Office",
    unit:"BGLRGM Institute of Vocational Education & Training",
    address:"No. 21, 2nd Floor, 9th Main, 6th Cross, RK Layout 2nd Stage, Padmanabhanagar, Bengaluru – 560 070",
    phone:"+91 95003 22006",
    map:"https://www.google.com/maps?q=Padmanabhanagar+Bengaluru+560070&output=embed",
    programmes:"Administration, partner coordination, examinations and certification" },

  { name:"Chengalpattu Branch", state:"Tamil Nadu", type:"Branch / Training Centre",
    unit:"Dr. RG Academy",
    address:"No. 192, Anna Nagar, 6th Cross Street, Chengalpattu – 603 001",
    phone:"+91 95144 49241",
    map:"https://www.google.com/maps?q=Anna+Nagar+Chengalpattu+603001&output=embed",
    programmes:"Healthcare, paramedical, hospitality, IT and skill development programmes" },

  { name:"Cheyyar Branch", state:"Tamil Nadu", type:"Branch / Training Centre",
    unit:"Dr. RG Academy",
    address:"No. 143, Mandi Street, Near ICICI Bank, Cheyyar – 604 407",
    phone:"+91 95144 49249",
    map:"https://www.google.com/maps?q=Mandi+Street+Cheyyar+604407&output=embed",
    programmes:"Certificate, diploma and short-term vocational programmes" },

  { name:"Villupuram Branch", state:"Tamil Nadu", type:"Branch / Training Centre",
    unit:"Dr. RG Academy",
    address:"Raja Rajeshwari Nagar, Near New Bus Stand, Villupuram – 605 602",
    phone:"+91 95144 49245",
    map:"https://www.google.com/maps?q=Raja+Rajeshwari+Nagar+Villupuram+605602&output=embed",
    programmes:"Healthcare, hospital administration, retail and computer applications" },

  { name:"Tindivanam Branch", state:"Tamil Nadu", type:"Branch / Training Centre",
    unit:"Dr. RG Academy",
    address:"No. 63, Perumal Kovil Street, Tindivanam, Villupuram District – 604 001",
    phone:"+91 95144 49243",
    map:"https://www.google.com/maps?q=Perumal+Kovil+Street+Tindivanam+604001&output=embed",
    programmes:"Certificate, diploma, skill development and Earn While You Learn programmes" }
];

/* ---------- Programme categories ---------- */
const PROG_CATEGORIES = [
  { id:"certificate", icon:"🎓", name:"Certificate Courses",
    desc:"Short, focused programmes designed to develop specific occupational skills." },
  { id:"adv-certificate", icon:"📜", name:"Advanced Certificate Courses",
    desc:"Advanced certificate programmes for specialised knowledge and skills." },
  { id:"diploma", icon:"🏅", name:"Diploma Courses",
    desc:"Structured programmes providing comprehensive occupational knowledge and practical training." },
  { id:"adv-diploma", icon:"🎖️", name:"Advanced Diploma Courses",
    desc:"Extended programmes offering advanced knowledge, specialisation and practical experience." },
  { id:"prof-diploma", icon:"💼", name:"Professional Diploma Courses",
    desc:"Career-focused programmes aligned with professional competencies and job roles." },
  { id:"professional", icon:"👔", name:"Professional Programmes",
    desc:"Specialised programmes for professionals, career progression and upskilling." },
  { id:"skill", icon:"🛠️", name:"Skill Development Courses",
    desc:"Practical competency-based training focused on employability and workplace skills." },
  { id:"vocational", icon:"⚙️", name:"Vocational Courses",
    desc:"Occupation-based training aligned with practical and industry requirements." },
  { id:"short-term", icon:"⏱️", name:"Short-Term Courses",
    desc:"Focused skill programmes generally completed within weeks or months." },
  { id:"job-oriented", icon:"🎯", name:"Job-Oriented Courses",
    desc:"Training focused on particular occupations and employment competencies." },
  { id:"industry", icon:"🏭", name:"Industry-Oriented Courses",
    desc:"Programmes developed around relevant industry practices and workplace requirements." },
  { id:"other", icon:"➕", name:"Other Vocational Programmes",
    desc:"Customised, sponsored and specialised vocational training." }
];

/* ---------- Sectors ---------- */
const SECTORS = ["Healthcare","Hospital Management","Paramedical","Hospitality","Hotel Management",
  "Information Technology","Management","Logistics","Retail","Beauty & Wellness","Agriculture",
  "Technical","Banking & Finance","Education","Other"];

const LEVELS = ["Certificate","Advanced Certificate","Diploma","Advanced Diploma",
  "Professional Diploma","Professional Programme","Skill Development","Short-Term","B.Voc.","M.Voc."];

const ELIGIBILITY = ["8th Pass","10th Pass","12th Pass","ITI","Diploma","Graduate","Postgraduate","Any"];

/* ---------- Course catalogue ----------
   level | sector | duration | eligibility | mode | ewyl (Earn While You Learn eligible) */
const COURSES = [
  /* Healthcare & paramedical */
  {name:"Certificate in General Duty Assistant", level:"Certificate", sector:"Healthcare", duration:"6 Months", elig:"10th Pass", mode:"Offline", ewyl:true},
  {name:"Certificate in Patient Care Assistant", level:"Certificate", sector:"Healthcare", duration:"6 Months", elig:"10th Pass", mode:"Offline", ewyl:true},
  {name:"Certificate in Home Health Aide", level:"Certificate", sector:"Healthcare", duration:"3 Months", elig:"10th Pass", mode:"Offline", ewyl:true},
  {name:"Certificate in Phlebotomy Technician", level:"Certificate", sector:"Paramedical", duration:"6 Months", elig:"12th Pass", mode:"Offline", ewyl:true},
  {name:"Certificate in Emergency Medical Technician", level:"Certificate", sector:"Paramedical", duration:"1 Year", elig:"12th Pass", mode:"Offline", ewyl:true},
  {name:"Diploma in Medical Laboratory Technology", level:"Diploma", sector:"Paramedical", duration:"2 Years", elig:"12th Pass", mode:"Offline", ewyl:true},
  {name:"Diploma in Operation Theatre Technology", level:"Diploma", sector:"Paramedical", duration:"2 Years", elig:"12th Pass", mode:"Offline", ewyl:true},
  {name:"Diploma in Dialysis Technology", level:"Diploma", sector:"Paramedical", duration:"2 Years", elig:"12th Pass", mode:"Offline", ewyl:true},
  {name:"Diploma in Radiology & Imaging Technology", level:"Diploma", sector:"Paramedical", duration:"2 Years", elig:"12th Pass", mode:"Offline", ewyl:true},
  {name:"Diploma in Cardiac Care Technology", level:"Diploma", sector:"Paramedical", duration:"2 Years", elig:"12th Pass", mode:"Offline", ewyl:false},
  {name:"Diploma in Optometry Technology", level:"Diploma", sector:"Paramedical", duration:"2 Years", elig:"12th Pass", mode:"Offline", ewyl:false},
  {name:"Advanced Diploma in Hospital Administration", level:"Advanced Diploma", sector:"Hospital Management", duration:"18 Months", elig:"Graduate", mode:"Hybrid", ewyl:true},
  {name:"Professional Diploma in Hospital Front Office & Billing", level:"Professional Diploma", sector:"Hospital Management", duration:"1 Year", elig:"12th Pass", mode:"Offline", ewyl:true},
  {name:"Certificate in Medical Coding & Billing", level:"Certificate", sector:"Healthcare", duration:"6 Months", elig:"Graduate", mode:"Hybrid", ewyl:false},
  {name:"Certificate in Nutrition & Dietetics", level:"Certificate", sector:"Healthcare", duration:"6 Months", elig:"12th Pass", mode:"Hybrid", ewyl:false},
  {name:"Advanced Certificate in Geriatric Care", level:"Advanced Certificate", sector:"Healthcare", duration:"9 Months", elig:"12th Pass", mode:"Offline", ewyl:true},

  /* Hospitality */
  {name:"Diploma in Hotel Management", level:"Diploma", sector:"Hotel Management", duration:"2 Years", elig:"12th Pass", mode:"Offline", ewyl:true},
  {name:"Advanced Diploma in Hotel & Hospitality Management", level:"Advanced Diploma", sector:"Hospitality", duration:"18 Months", elig:"12th Pass", mode:"Offline", ewyl:true},
  {name:"Certificate in Food & Beverage Service", level:"Certificate", sector:"Hospitality", duration:"6 Months", elig:"10th Pass", mode:"Offline", ewyl:true},
  {name:"Certificate in Food Production / Culinary Skills", level:"Certificate", sector:"Hospitality", duration:"6 Months", elig:"10th Pass", mode:"Offline", ewyl:true},
  {name:"Certificate in Housekeeping Operations", level:"Certificate", sector:"Hospitality", duration:"4 Months", elig:"10th Pass", mode:"Offline", ewyl:true},
  {name:"Certificate in Front Office Operations", level:"Certificate", sector:"Hospitality", duration:"4 Months", elig:"12th Pass", mode:"Offline", ewyl:true},
  {name:"Diploma in Bakery & Confectionery", level:"Diploma", sector:"Hospitality", duration:"1 Year", elig:"10th Pass", mode:"Offline", ewyl:false},
  {name:"Short-Term Course in Barista & Café Operations", level:"Short-Term", sector:"Hospitality", duration:"2 Months", elig:"Any", mode:"Offline", ewyl:false},
  {name:"Diploma in Travel & Tourism Management", level:"Diploma", sector:"Hospitality", duration:"1 Year", elig:"12th Pass", mode:"Hybrid", ewyl:false},

  /* IT */
  {name:"Diploma in Computer Applications", level:"Diploma", sector:"Information Technology", duration:"1 Year", elig:"10th Pass", mode:"Hybrid", ewyl:false},
  {name:"Advanced Diploma in Full Stack Web Development", level:"Advanced Diploma", sector:"Information Technology", duration:"1 Year", elig:"12th Pass", mode:"Hybrid", ewyl:true},
  {name:"Professional Diploma in Data Analytics", level:"Professional Diploma", sector:"Information Technology", duration:"9 Months", elig:"Graduate", mode:"Hybrid", ewyl:false},
  {name:"Certificate in Python Programming", level:"Certificate", sector:"Information Technology", duration:"3 Months", elig:"12th Pass", mode:"Online", ewyl:false},
  {name:"Certificate in Graphic & UI/UX Design", level:"Certificate", sector:"Information Technology", duration:"6 Months", elig:"12th Pass", mode:"Hybrid", ewyl:false},
  {name:"Advanced Certificate in Cyber Security Essentials", level:"Advanced Certificate", sector:"Information Technology", duration:"6 Months", elig:"Graduate", mode:"Hybrid", ewyl:false},
  {name:"Professional Programme in Artificial Intelligence & Data Science", level:"Professional Programme", sector:"Information Technology", duration:"1 Year", elig:"Graduate", mode:"Hybrid", ewyl:false},
  {name:"Certificate in Hardware & Networking", level:"Certificate", sector:"Information Technology", duration:"6 Months", elig:"10th Pass", mode:"Offline", ewyl:true},
  {name:"Certificate in Digital Marketing", level:"Certificate", sector:"Information Technology", duration:"4 Months", elig:"12th Pass", mode:"Hybrid", ewyl:false},

  /* Management, retail, logistics, banking */
  {name:"Diploma in Business Administration", level:"Diploma", sector:"Management", duration:"1 Year", elig:"12th Pass", mode:"Hybrid", ewyl:false},
  {name:"Advanced Diploma in Logistics & Supply Chain Management", level:"Advanced Diploma", sector:"Logistics", duration:"1 Year", elig:"12th Pass", mode:"Hybrid", ewyl:true},
  {name:"Certificate in Warehouse Operations", level:"Certificate", sector:"Logistics", duration:"4 Months", elig:"10th Pass", mode:"Offline", ewyl:true},
  {name:"Certificate in Retail Sales Associate", level:"Certificate", sector:"Retail", duration:"3 Months", elig:"10th Pass", mode:"Offline", ewyl:true},
  {name:"Diploma in Retail Management", level:"Diploma", sector:"Retail", duration:"1 Year", elig:"12th Pass", mode:"Offline", ewyl:true},
  {name:"Professional Diploma in Banking & Financial Services", level:"Professional Diploma", sector:"Banking & Finance", duration:"9 Months", elig:"Graduate", mode:"Hybrid", ewyl:false},
  {name:"Certificate in Accounting with Tally & GST", level:"Certificate", sector:"Banking & Finance", duration:"4 Months", elig:"12th Pass", mode:"Hybrid", ewyl:false},
  {name:"Professional Programme in Human Resource Management", level:"Professional Programme", sector:"Management", duration:"9 Months", elig:"Graduate", mode:"Hybrid", ewyl:false},
  {name:"Certificate in Office Administration & Secretarial Practice", level:"Certificate", sector:"Management", duration:"6 Months", elig:"12th Pass", mode:"Offline", ewyl:false},

  /* Beauty, agriculture, technical */
  {name:"Certificate in Beauty Therapy", level:"Certificate", sector:"Beauty & Wellness", duration:"6 Months", elig:"8th Pass", mode:"Offline", ewyl:true},
  {name:"Certificate in Hair Styling & Salon Operations", level:"Certificate", sector:"Beauty & Wellness", duration:"4 Months", elig:"8th Pass", mode:"Offline", ewyl:true},
  {name:"Diploma in Cosmetology", level:"Diploma", sector:"Beauty & Wellness", duration:"1 Year", elig:"10th Pass", mode:"Offline", ewyl:false},
  {name:"Certificate in Yoga & Wellness Instruction", level:"Certificate", sector:"Beauty & Wellness", duration:"6 Months", elig:"12th Pass", mode:"Hybrid", ewyl:false},
  {name:"Diploma in Agriculture Technology", level:"Diploma", sector:"Agriculture", duration:"1 Year", elig:"10th Pass", mode:"Offline", ewyl:false},
  {name:"Certificate in Organic Farming & Horticulture", level:"Certificate", sector:"Agriculture", duration:"4 Months", elig:"8th Pass", mode:"Offline", ewyl:false},
  {name:"Certificate in Food Processing & Preservation", level:"Certificate", sector:"Agriculture", duration:"6 Months", elig:"10th Pass", mode:"Offline", ewyl:true},
  {name:"Certificate in Electrical Technician", level:"Certificate", sector:"Technical", duration:"6 Months", elig:"8th Pass", mode:"Offline", ewyl:true},
  {name:"Certificate in Welding Technology", level:"Certificate", sector:"Technical", duration:"4 Months", elig:"8th Pass", mode:"Offline", ewyl:true},
  {name:"Diploma in Automobile Service Technology", level:"Diploma", sector:"Technical", duration:"1 Year", elig:"10th Pass", mode:"Offline", ewyl:true},
  {name:"Certificate in AC & Refrigeration Servicing", level:"Certificate", sector:"Technical", duration:"4 Months", elig:"8th Pass", mode:"Offline", ewyl:true},
  {name:"Certificate in Solar Panel Installation Technician", level:"Certificate", sector:"Technical", duration:"3 Months", elig:"10th Pass", mode:"Offline", ewyl:true},
  {name:"Skill Development Programme in Employability & Soft Skills", level:"Skill Development", sector:"Education", duration:"2 Months", elig:"Any", mode:"Hybrid", ewyl:false},
  {name:"Skill Development Programme in Spoken English & Communication", level:"Skill Development", sector:"Education", duration:"3 Months", elig:"Any", mode:"Hybrid", ewyl:false},
  {name:"Certificate in Pre-Primary Teacher Training", level:"Certificate", sector:"Education", duration:"1 Year", elig:"12th Pass", mode:"Offline", ewyl:false}
];

/* ---------- B.Voc. ---------- */
const BVOC = [
  { group:"Healthcare & Allied Sciences", items:[
    "B.Voc. Healthcare Management","B.Voc. Hospital Management","B.Voc. Patient Care Management",
    "B.Voc. Medical Laboratory Technology","B.Voc. Medical Imaging Technology",
    "B.Voc. Operation Theatre Technology","B.Voc. Dialysis Technology","B.Voc. Optometry",
    "B.Voc. Emergency Medical Technology","B.Voc. Nutrition & Dietetics"]},
  { group:"Hospitality & Tourism", items:[
    "B.Voc. Hotel Management","B.Voc. Hospitality Management",
    "B.Voc. Tourism & Hospitality Management","B.Voc. Food Processing","B.Voc. Catering Technology"]},
  { group:"Information Technology", items:[
    "B.Voc. Information Technology","B.Voc. Software Development","B.Voc. Web Technology",
    "B.Voc. Cyber Security","B.Voc. Artificial Intelligence & Data Science"]},
  { group:"Management & Commerce", items:[
    "B.Voc. Business Administration","B.Voc. Banking & Financial Services",
    "B.Voc. Retail Management","B.Voc. Logistics & Supply Chain Management"]}
];

/* ---------- M.Voc. ---------- */
const MVOC = ["Healthcare Management","Hospital Administration","Hospital Management",
  "Medical Laboratory Technology","Hotel Management","Hospitality Management",
  "Tourism & Hospitality Management","Information Technology","Business & Management",
  "Logistics & Supply Chain Management","Other available vocational specialisations"];

/* ---------- News & events ---------- */
const NEWS = [
  { d:"24", m:"Aug", y:"2026", cat:"Admissions",
    title:"Admissions open for the 2026–27 academic session",
    text:"Applications are being accepted for Certificate, Diploma, Advanced Diploma, Skill Development and Earn While You Learn programmes across all centres." },
  { d:"12", m:"Aug", y:"2026", cat:"Industry",
    title:"Hospital partnership expands OJT places in Chennai & Chengalpattu",
    text:"Additional on-the-job training positions are now available for paramedical and hospital administration learners." },
  { d:"02", m:"Aug", y:"2026", cat:"Scholarship",
    title:"Merit scholarship screening for the new intake begins",
    text:"Eligible merit applicants may apply for scholarship support of up to 90% subject to the applicable scholarship policy." },
  { d:"21", m:"Jul", y:"2026", cat:"Events",
    title:"Skill competition and career guidance camp at Villupuram",
    text:"A one-day event covering employability skills, interview practice and employer interaction for final-semester learners." },
  { d:"08", m:"Jul", y:"2026", cat:"Examination",
    title:"Practical examination schedule published for Diploma programmes",
    text:"Candidates may download the practical timetable and hall ticket from the examination portal." },
  { d:"30", m:"Jun", y:"2026", cat:"Placement",
    title:"Placement drive for hospitality and retail learners at Tindivanam",
    text:"Participating employers conducted interviews for front office, food & beverage and retail roles." }
];

/* ---------- Downloads ---------- */
const DOWNLOADS = [
  {name:"Prospectus 2026–27", note:"Programme list, eligibility, fee heads and centre details", type:"PDF"},
  {name:"Admission Application Form", note:"Offline application form for all programmes", type:"PDF"},
  {name:"Fee Structure", note:"Programme-wise fee heads. GST extra where applicable", type:"PDF"},
  {name:"Academic Calendar 2026–27", note:"Term dates, examinations and holidays", type:"PDF"},
  {name:"Examination Timetable", note:"Theory and practical examination schedule", type:"PDF"},
  {name:"Student Handbook", note:"Rules, attendance, conduct and student services", type:"PDF"},
  {name:"Internship Form", note:"Internship nomination and reporting format", type:"PDF"},
  {name:"On-the-Job Training (OJT) Form", note:"OJT allocation, log book and supervisor assessment", type:"PDF"},
  {name:"Earn While You Learn Application", note:"Workplace-learning application for eligible learners", type:"PDF"},
  {name:"Scholarship Application Form", note:"Merit scholarship application and document checklist", type:"PDF"},
  {name:"Vocational Training Partner Application", note:"Application for institutions and training centres", type:"PDF"},
  {name:"Industry Training Partner Application", note:"Application for hospitals, hotels, companies and employers", type:"PDF"},
  {name:"Grievance Form", note:"Student grievance submission format", type:"PDF"},
  {name:"Migration / Transfer Request", note:"Centre transfer and record migration request", type:"PDF"}
];

/* ---------- Partner categories shown as logo placeholders ---------- */
const PARTNER_TYPES = ["Hospitals","Hotels & Resorts","IT Companies","Logistics Firms",
  "Retail Chains","Manufacturing Units","Wellness Centres","Diagnostic Labs",
  "Training Institutes","NGOs & Trusts","Skill Centres","Employers"];

/* ---------- Documents required ---------- */
const DOCS_REQUIRED = ["Passport-size photograph","10th mark sheet / certificate",
  "12th mark sheet / certificate (where applicable)","Transfer certificate",
  "Community certificate (where applicable)","Aadhaar / government photo ID",
  "Previous qualification certificate (ITI / Diploma / Degree, where applicable)",
  "Migration certificate (where applicable)","Bank passbook copy (for stipend, where applicable)"];
