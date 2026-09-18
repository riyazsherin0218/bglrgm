/* ==========================================================================
   BGLRGM — CONTENT DATA
   Programmes, courses, branches, news, downloads and partner lists.
   Add or edit entries here; every page reads from this file.
   ========================================================================== */

/* ---------- Branches ----------
   Each branch also carries an "incharge" block, shown on the right-hand side
   of the branch card on pages/branches.html:
     name          the officer's name              e.g. "Mr. R. Karthik"
     designation   role at that centre             e.g. "Centre In-charge"
     qualification degrees / credentials           e.g. "M.Sc., B.Ed."
     phone         direct number (shown as a call link)
     email         direct email (leave "" to hide)
     photo         file name inside assets/img/staff/ — e.g. "chennai.jpg".
                   Leave "" and the card shows the grey placeholder avatar.
   Use a square photo (600x600 or larger) for the best result.            */
const BRANCHES = [
  { name:"Chennai — Corporate Office", state:"Tamil Nadu", type:"Corporate Office",
    unit:"Dr. RG Academy — BGLRGM Study & Training Centre",
    address:"No. 130, BBR Towers, 2nd Floor, IOB Bank Upstairs, Mudichur Road, West Tambaram, Chennai – 600045, Tamil Nadu, India.",
    phone:"+91 95003 22006",
    map:"https://www.google.com/maps?q=West+Tambaram+Mudichur+Road+Chennai+600045&output=embed",
    programmes:"All Certificate, Diploma, Advanced Diploma, Skill Development, B.Voc.* & M.Voc.* programmes" ,
    incharge:{ name:"Ms. Charumathi P", designation:"Nursing Tutor", qualification:"B.Sc. (Nursing)",
               phone:"+91 82202 88985", email:"", photo:"chennai.jpg" }},

  { name:"Bengaluru — Registered Office", state:"Karnataka", type:"Registered Office",
    unit:"BGLRGM Institute of Vocational Education & Training",
    address:"No. 21, 3rd Floor, 9th Main, 6th Cross, RK Layout – 2nd Stage, Padmanabha Nagar, Bengaluru – 560070, Karnataka, India.",
    phone:"+91 95003 22006",
    map:"https://www.google.com/maps?q=Padmanabhanagar+Bengaluru+560070&output=embed",
    programmes:"Administration, partner coordination, examinations and certification" ,
    incharge:{ name:"Mr. Manoj", designation:"Centre Coordinator", qualification:"",
               phone:"+91 73380 17339", email:"", photo:"bengaluru.jpg" }},

  { name:"Chengalpattu Branch", state:"Tamil Nadu", type:"Branch / Training Centre",
    unit:"Dr. RG Academy",
    address:"No. 192, Anna Nagar, 6th Cross Street, Chengalpattu – 603 001",
    phone:"+91 95144 49241",
    map:"https://www.google.com/maps?q=Anna+Nagar+Chengalpattu+603001&output=embed",
    programmes:"Healthcare, paramedical, hospitality, IT and skill development programmes" ,
    incharge:{ name:"Ms. Sowmiya", designation:"Centre Coordinator", qualification:"",
               phone:"+91 90030 68930", email:"", photo:"chengalpattu.jpg" }},

  { name:"Cheyyar Branch", state:"Tamil Nadu", type:"Branch / Training Centre",
    unit:"Dr. RG Academy",
    address:"No. 143, Mandi Street, Near ICICI Bank, Cheyyar – 604 407",
    phone:"+91 95144 49249",
    map:"https://www.google.com/maps?q=Mandi+Street+Cheyyar+604407&output=embed",
    programmes:"Certificate, diploma and short-term vocational programmes" ,
    incharge:{ name:"Mrs. Thilagavathi", designation:"Centre Coordinator", qualification:"",
               phone:"+91 95001 46585", email:"", photo:"cheyyar.jpg" }},

  { name:"Villupuram Branch", state:"Tamil Nadu", type:"Branch / Training Centre",
    unit:"Dr. RG Academy",
    address:"Raja Rajeshwari Nagar, Near New Bus Stand, Villupuram – 605 602",
    phone:"+91 95144 49245",
    map:"https://www.google.com/maps?q=Raja+Rajeshwari+Nagar+Villupuram+605602&output=embed",
    programmes:"Healthcare, hospital administration, retail and computer applications" ,
    incharge:{ name:"Mr. Pushparaj", designation:"Centre Coordinator", qualification:"",
               phone:"+91 90035 59761", email:"", photo:"villupuram.jpg" }},

  { name:"Tindivanam Branch", state:"Tamil Nadu", type:"Branch / Training Centre",
    unit:"Dr. RG Academy",
    address:"No. 63, Perumal Kovil Street, Tindivanam, Villupuram District – 604 001",
    phone:"+91 95144 49243",
    map:"https://www.google.com/maps?q=Perumal+Kovil+Street+Tindivanam+604001&output=embed",
    programmes:"Certificate, diploma, skill development and Earn While You Learn programmes" ,
    incharge:{ name:"Mrs. Shobana", designation:"Centre Coordinator", qualification:"",
               phone:"+91 73975 06070", email:"", photo:"tindivanam.jpg" }}
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

/* ==========================================================================
   CURRENT OPENINGS  —  job vacancies shown on pages/current-openings.html
   --------------------------------------------------------------------------
   ONLY degree and postgraduate level positions are advertised here. Do not
   add vacancies whose minimum qualification is a diploma or below.

   TO POST A NEW VACANCY: copy one block below, change the details, and put it
   at the TOP of the list (newest first). Nothing else needs editing.
   TO CLOSE A VACANCY:    change  status:"open"  to  status:"closed"
                          (it stays listed as Closed), or delete the block.

   dept must be either "Academics / Faculty" or "Administration" — the Career
   menu filters on those two values.

   Fields: role, dept, type, location, positions, experience, qualification,
           salary, posted, lastDate, summary, duties[], requirements[], status
   Use "" for anything you do not want to show.
   ========================================================================== */
const OPENINGS = [

  { role:"Professor",
    dept:"Academics / Faculty", type:"Full-time",
    location:"Chennai — Corporate Office", positions:1,
    experience:"10+ years of teaching or industry experience",
    qualification:"Master's degree in the relevant discipline; Ph.D. preferred",
    salary:"As per institutional norms", posted:"16 Sep 2026", lastDate:"31 Oct 2026",
    summary:"Lead a discipline area — curriculum, teaching standards and the development of junior faculty across our programmes.",
    duties:["Lead curriculum design and academic standards for the discipline",
            "Teach at degree and postgraduate level",
            "Mentor and develop assistant and associate faculty",
            "Guide project, research and industry-linked work",
            "Represent the discipline on the Academic Council"],
    requirements:["Master's degree in the relevant discipline; Ph.D. preferred",
                  "Substantial teaching or senior industry experience",
                  "Published or applied work in the field is an advantage"],
    status:"open" },

  { role:"Associate Professor",
    dept:"Academics / Faculty", type:"Full-time",
    location:"Chennai — Corporate Office", positions:2,
    experience:"7+ years of teaching or industry experience",
    qualification:"Master's degree in the relevant discipline; Ph.D. desirable",
    salary:"As per institutional norms", posted:"16 Sep 2026", lastDate:"31 Oct 2026",
    summary:"Teach and develop programme content at degree level, and support the academic quality of the discipline across centres.",
    duties:["Deliver theory and practical sessions at degree level",
            "Develop lesson plans, assessments and learning material",
            "Support internal assessment and examination processes",
            "Guide learners through projects and workplace training",
            "Assist in faculty review and academic planning"],
    requirements:["Master's degree in the relevant discipline",
                  "Proven teaching record or senior professional experience",
                  "Comfortable teaching in English; Tamil or Kannada an advantage"],
    status:"open" },

  { role:"Assistant Professor",
    dept:"Academics / Faculty", type:"Full-time",
    location:"Bengaluru — Registered Office", positions:4,
    experience:"2+ years (fresh postgraduates with strong academics may apply)",
    qualification:"Master's degree in the relevant discipline",
    salary:"As per institutional norms", posted:"16 Sep 2026", lastDate:"31 Oct 2026",
    summary:"Teach degree-level subjects, run practical sessions and support learners through assessment, projects and workplace training.",
    duties:["Conduct theory and practical classes as per the approved curriculum",
            "Maintain attendance, internal assessment and academic records",
            "Support learners in projects, internships and OJT",
            "Prepare learners for examinations and certification",
            "Participate in faculty development and academic reviews"],
    requirements:["Master's degree in the relevant discipline",
                  "Clear communication and classroom presence",
                  "Willingness to travel to branch centres when required"],
    status:"open" },

  { role:"Principal / Head of Department",
    dept:"Academics / Faculty", type:"Full-time",
    location:"Chennai — Corporate Office", positions:1,
    experience:"12+ years, including academic leadership",
    qualification:"Master's degree in the relevant discipline; Ph.D. desirable",
    salary:"As per institutional norms", posted:"16 Sep 2026", lastDate:"31 Oct 2026",
    summary:"Lead a school or department — its faculty, its programmes and its academic results — reporting to the Director.",
    duties:["Academic and administrative leadership of the department",
            "Faculty allocation, review and development",
            "Programme delivery, timetabling and academic calendar compliance",
            "Examination, assessment and result oversight for the department",
            "Liaison with industry partners for workplace training"],
    requirements:["Master's degree in the relevant discipline; Ph.D. desirable",
                  "Demonstrated academic leadership experience",
                  "Strong administrative and reporting discipline"],
    status:"open" },

  { role:"Vocational Trainer — Healthcare & Paramedical",
    dept:"Academics / Faculty", type:"Full-time",
    location:"Chennai — Corporate Office", positions:2,
    experience:"2+ years",
    qualification:"Bachelor's or Master's degree in nursing, paramedical or allied health sciences",
    salary:"As per institutional norms", posted:"16 Sep 2026", lastDate:"31 Oct 2026",
    summary:"Deliver classroom and practical training for healthcare and paramedical programmes, and support learners through their on-the-job training placements.",
    duties:["Conduct theory and practical sessions as per the approved curriculum",
            "Maintain attendance, internal assessment and training records",
            "Coordinate with hospital partners for OJT placement and review",
            "Prepare learners for practical examinations and certification"],
    requirements:["Degree-level qualification in healthcare or allied health sciences",
                  "Comfortable teaching in Tamil and English",
                  "Willing to travel to branch centres when required"],
    status:"open" },

  { role:"Placement Officer",
    dept:"Administration", type:"Full-time",
    location:"Chennai — Corporate Office", positions:1,
    experience:"3+ years in placement, recruitment or business development",
    qualification:"Any Bachelor's degree; MBA preferred",
    salary:"As per institutional norms", posted:"16 Sep 2026", lastDate:"31 Oct 2026",
    summary:"Build and maintain employer relationships and place learners into internships, on-the-job training and jobs across our sectors.",
    duties:["Identify and onboard hiring partners across healthcare, hospitality, retail and IT",
            "Organise placement drives and interview rounds at the centres",
            "Prepare learners with resume, grooming and interview practice",
            "Maintain the placement and employer database"],
    requirements:["Any Bachelor's degree; MBA preferred",
                  "Employer network in Tamil Nadu or Karnataka",
                  "Strong communication and follow-up discipline"],
    status:"open" },

  { role:"Admission Counsellor",
    dept:"Administration", type:"Full-time",
    location:"Bengaluru — Registered Office", positions:2,
    experience:"1-3 years (degree-holding freshers with good communication may apply)",
    qualification:"Any Bachelor's degree",
    salary:"Fixed salary + incentive", posted:"16 Sep 2026", lastDate:"31 Oct 2026",
    summary:"Guide prospective learners and parents through programme selection, eligibility, fees and the admission process.",
    duties:["Attend to walk-in, telephone and online enquiries",
            "Explain programmes, eligibility, fee structure and scholarship options",
            "Follow up on enquiries and complete admission documentation",
            "Maintain daily enquiry and admission reports"],
    requirements:["Any Bachelor's degree",
                  "Fluent in Kannada or Tamil, plus English",
                  "Comfortable with counselling targets and follow-up calls"],
    status:"open" },

  { role:"Centre Coordinator",
    dept:"Administration", type:"Full-time",
    location:"Villupuram Branch", positions:1,
    experience:"2+ years in an institution or training centre",
    qualification:"Any Bachelor's degree",
    salary:"As per institutional norms", posted:"16 Sep 2026", lastDate:"31 Oct 2026",
    summary:"Run the day-to-day operations of the centre — batches, trainers, learner records and reporting to the head office.",
    duties:["Schedule batches, trainers and practical sessions",
            "Maintain learner attendance, fee and examination records",
            "Handle learner queries and first-level grievance support",
            "Send weekly reports to the head office"],
    requirements:["Any Bachelor's degree",
                  "Local to Villupuram or nearby",
                  "Working knowledge of MS Office / Google Sheets"],
    status:"open" }
];

/* ==========================================================================
   EVENTS  —  shown on pages/events.html
   --------------------------------------------------------------------------
   TO ADD AN EVENT OR A GREETING:
     1. Put the picture in assets/img/events/  (square or landscape, max 1200px)
     2. Copy a block below, change the details, and put it at the TOP
   cat:  "Greeting" | "Campus Event" | "Placement Drive" | "Announcement"
   when: the date shown on the card. Set  upcoming:true  for an event that has
         not happened yet — it then also appears in the Upcoming strip.
   ========================================================================== */
const EVENTS = [
  { title:"Ganesh Chaturthi Greetings",
    cat:"Greeting",
    when:"August 2026",
    img:"ganesh-chaturthi-2026.jpg",
    text:"Best wishes from BGLRGM Institute of Vocational Education Training to all our learners, staff, partners and their families.",
    upcoming:false }
];


/* ==========================================================================
   UGC GUIDELINES SECTION  —  shown on the home page (index.html #ugc)
   --------------------------------------------------------------------------
   UGC_LEVELS  — the NSQF credit ladder table
   UGC_DOCS    — the official document cards
                   file: "name.pdf"  → the PDF must sit in assets/docs/ugc/
                   url : "https://…" → opens the document on the official site
                 Use ONE of file OR url per card, not both.
   NEP_PARAS   — the three NEP 2020, Chapter 16 paragraph cards
   UGC_VIDEOS  — optional YouTube videos. Leave the array empty to hide the
                 whole "Watch" block. id = the part after  watch?v=
   TO ADD A NEW DOCUMENT: drop the PDF in assets/docs/ugc/ and copy a block
   below, or just add a url entry — nothing else needs changing.
   ========================================================================== */

/* Source: UGC Guidelines for B.Voc., Table 1 (Awards) and Table 3 (Credits) */
const UGC_LEVELS = [
  { level:"Level 5", award:"Diploma",           credits:"60 credits · 1 year (two semesters)",
    split:"36 skill component + 24 general education" },
  { level:"Level 6", award:"Advanced Diploma",  credits:"120 credits · 2 years (four semesters)",
    split:"72 skill component + 48 general education" },
  { level:"Level 7", award:"B.Voc. Degree",     credits:"180 credits · 3 years (six semesters)",
    split:"108 skill component + 72 general education" }
];

const UGC_DOCS = [
  { title:"UGC Guidelines for B.Voc.",
    note:"Guidelines for introduction of the Bachelor of Vocation (B.Voc.) programme in universities and colleges under the National Skills Qualifications Framework — objectives, levels of awards, curriculum, credit calculation, examination, infrastructure and faculty.",
    year:"University Grants Commission",
    file:"ugc-guidelines-b-voc.pdf" },

  { title:"Guidelines for Skill-Based Education under NSQF",
    note:"UGC guidelines for providing skill-based education under the National Skills Qualifications Framework in universities and colleges.",
    year:"University Grants Commission",
    url:"https://www.ugc.gov.in/pdfnews/6556003_Guidelines-for-providing-Skill-Based-Education-under-NSQF.pdf" },

  { title:"NSQF — Revised Guidelines",
    note:"The revised National Skills Qualifications Framework guidelines, covering level descriptors, credit framework and alignment of qualifications.",
    year:"University Grants Commission",
    url:"https://www.ugc.gov.in/pdfnews/2237047_NSQF-Revised-Guidelines.pdf" },

  { title:"National Higher Education Qualifications Framework (NHEQF)",
    note:"The qualifications framework for higher education in India, setting out levels, credits and learning outcomes for degrees including vocational degrees.",
    year:"University Grants Commission",
    url:"https://www.ugc.gov.in/pdfnews/2990035_Final-NHEQF.pdf" },

  { title:"National Education Policy 2020",
    note:"The full policy document. Chapter 16, Reimagining Vocational Education, is the policy basis for vocational degree programmes.",
    year:"Ministry of Education, Government of India",
    url:"https://dsel.education.gov.in/sites/default/files/NEP_Final_English.pdf" },

  { title:"UGC NSQF Portal",
    note:"The UGC's NSQF portal, where the vocational and skill-development guidelines and circulars are published.",
    year:"University Grants Commission",
    url:"https://nsqf.ugc.ac.in/Home/Guideline" }
];

/* Summarised from NEP 2020, Chapter 16 — Reimagining Vocational Education */
const NEP_PARAS = [
  { no:"16.4",
    head:"50% exposure to vocational education by 2025",
    text:"The policy aims to overcome the social status hierarchy attached to vocational education. By 2025, at least 50% of learners through the school and higher education system are to have exposure to vocational education, with vocational education integrated into mainstream education in a phased manner over the next decade." },

  { no:"16.5",
    head:"Institutions working with industry and ITIs",
    text:"Schools, ITIs, polytechnics, local industry and skill centres are to collaborate so that learners get hands-on vocational exposure, and Lok Vidya — vocational knowledge developed in India — is made accessible to students through the vocational education stream." },

  { no:"16.6",
    head:"Vocational education inside higher education",
    text:"Higher education institutions are to offer vocational education either on their own or in partnership with industry and NGOs. B.Voc. degrees introduced in 2013 continue, and vocational courses are also to be available to all other students as part of multidisciplinary degree programmes." }
];

/* Leave empty to hide the "Watch" block. Example: { id:"dQw4w9WgXcQ", title:"What is B.Voc.?" } */
const UGC_VIDEOS = [];
