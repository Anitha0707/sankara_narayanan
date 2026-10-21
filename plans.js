// Plan data for cards + pop-ups. Plan names/numbers follow licindia.in/insurance-plan (Oct 2026).
// To add a plan, copy one block. cat = New | Endowment | Whole Life | Money Back | Child | Term
// Set isNew:true for a NEW badge and "launch" for the availability line.
const P=(id,cat,icon,name,no,type,short,facts,extra={})=>Object.assign({id,cat,icon,name,no,type,short,facts},extra);
window.PLAN_CATS=["All","New","Endowment","Whole Life","Money Back","Child","Term"];
window.PLANS=[
// ---------- NEW LAUNCHES ----------
P("platinum","New","💎","LIC’s Bima Platinum","Plan 770","Non-participating, non-linked, individual savings plan","Limited-premium plan with guaranteed additions, booster and regular income.",
 [["Guaranteed Additions","₹70 per ₹1,000 of annual premium, every year of the premium-paying term"],["Booster Income","70% of Basic Sum Assured on survival to end of (premium-paying term + 5) years"],["Regular Income","10% of Basic Sum Assured every year of the payout period (policy term − premium-paying term)"],["Premium-paying terms","7, 10, 12, 15 or 18 years"],["Minimum Sum Assured","₹3 lakh (multiples of ₹10,000; no upper limit, subject to underwriting)"],["Entry age","30 days completed to 55 years (varies with term)"],["Maturity age","28 to 75 years"]],{isNew:true,launch:"Available from 7 Sep 2026"}),
P("raksha","New","🛡️","LIC’s Jeevan Raksha","Plan 894","Non-participating, non-linked, pure-risk plan","Pure-protection plan that secures your family if the worst happens.",
 [["Benefit","Guaranteed, fixed death benefit to the family during the policy term"],["Premium options","Single, regular or limited premium"],["Sum Assured","₹5 lakh to ₹24 lakh (subject to underwriting)"],["Entry age","18 to 45 years"],["Maturity age","33 to 60 years"],["Extras","Special rates for women, high Sum Assured rebate, rider options"]],{isNew:true,launch:"Available from 7 Sep 2026"}),
P("dhara","New","🌅","LIC’s New Jeevan Dhara-II","Plan 892","Non-participating, non-linked deferred annuity plan","Guaranteed lifelong annuity income for retirement.",
 [["Benefit","Annuity payments for life after the deferment period"],["Annuity rates","Guaranteed at policy inception"],["Top-up Annuity","Pay additional premium during deferment to increase income"],["Premium options","Regular or single premium"],["Annuity options","Single-life and joint-life"],["Minimum vesting age","30 years"]],{isNew:true,launch:"Available from 19 Oct 2026"}),
P("cancer","New","🎗️","LIC’s New Cancer Cover","Plan 908","Non-participating, non-linked health plan","Fixed lump-sum payout on diagnosis of specified early or major-stage cancer.",
 [["Early-stage cancer","25% of the applicable sum assured on diagnosis"],["Major-stage cancer","100% of the applicable sum assured on diagnosis"],["Entry age","18 to 65 years"],["Maturity age","28 to 75 years"]],{isNew:true,launch:"Available from 19 Oct 2026"}),
P("shield","New","🏥","LIC’s Health Shield","Plan 907","Non-participating, non-linked pure-risk health plan","Fixed-benefit health cover for the whole family.",
 [["Cover","Fixed-benefit cover for specified health risks, for the entire family"],["Entry age (Principal Insured)","18 to 65 years"],["No Claim Benefit","Cover increases for claim-free years"]],{isNew:true,launch:"Available from 19 Oct 2026"}),
// ---------- WHOLE LIFE ----------
P("umang","Whole Life","🌟","LIC’s Jeevan Umang","Plan 745","Participating, non-linked whole-life plan","Lifelong cover to age 100 with a guaranteed annual income of 8% after premiums end.",
 [["Survival benefit","8% of Basic Sum Assured every year from the end of the premium-paying term"],["Life cover","Whole life – policy term is 100 minus age at entry"],["Premium-paying terms","15, 20, 25 or 30 years"],["Minimum Sum Assured","₹2 lakh (no upper limit)"],["Maximum entry age","55 / 50 / 45 / 40 years for 15 / 20 / 25 / 30-year terms"],["Bonus","Simple reversionary bonuses and final additional bonus, if declared"],["Riders","Accidental death & disability, accident, term assurance, premium waiver"]]),
P("utsav","Whole Life","🎉","LIC’s Jeevan Utsav","Plan 771","Non-linked, non-participating whole-life plan","Guaranteed regular income and whole-life cover. A single-premium version (Plan 883) is also available.",
 [["Benefit","Guaranteed regular income after the premium-paying term, with lifelong cover"],["Policy term","100 minus age at entry"],["Entry age","30 days to 65 years"],["Variant","Jeevan Utsav Single Premium – Plan 883"]]),
// ---------- ENDOWMENT ----------
P("endow","Endowment","🌱","LIC’s New Endowment Plan","Plan 714","Participating, non-linked endowment plan","Savings and protection together – maturity benefit with bonuses.",
 [["Benefit","Sum assured plus bonuses on death or maturity"],["Policy term","12 to 35 years"],["Entry age","8 to 55 years"]]),
P("anand","Endowment","😊","LIC’s New Jeevan Anand","Plan 715","Participating, non-linked endowment with whole-life cover","Get a maturity benefit and continue to enjoy life cover afterwards.",
 [["Benefit","Maturity benefit with bonuses; life cover continues after maturity"],["Policy term","15 to 35 years"],["Entry age","18 to 50 years"]]),
P("lakshya","Endowment","🎯","LIC’s Jeevan Lakshya","Plan 733","Participating, non-linked endowment plan","Plan toward goals such as a child’s education or marriage, with income to the family if you are not around.",
 [["Benefit","Annual income plus lump sum to the family on death; lump sum on maturity"],["Policy term","13 to 25 years"],["Entry age","18 to 50 years"]]),
P("labh","Endowment","📈","LIC’s Jeevan Labh","Plan 736","Participating, non-linked, limited-premium endowment plan","Pay for a limited period, enjoy cover and a maturity benefit with bonuses.",
 [["Policy term","16, 21 or 25 years"],["Premium-paying term","10, 15 or 16 years"],["Minimum Sum Assured","₹2 lakh"],["Entry age","8 to 59 years"],["Maximum maturity age","75 years"]]),
// ---------- CHILD ----------
P("amrit","Child","👶","LIC’s Amritbaal","Plan 774","Non-linked, non-participating child endowment plan","Secure your child’s education and future with guaranteed additions.",
 [["Premium options","Single premium or limited premium"],["Entry age","30 days to 13 years"],["Maximum maturity age","25 years"]]),
P("cmb","Child","🎒","LIC’s New Children’s Money Back Plan","Plan 732","Participating, non-linked money-back plan","Periodic payouts timed for a child’s education milestones.",
 [["Benefit","Survival benefits at fixed intervals plus maturity benefit with bonuses"],["Entry age","0 to 12 years"]]),
P("tarun","Child","🧒","LIC’s Jeevan Tarun","Plan 734","Participating, non-linked plan for children","Flexible payouts for teenagers and young adults’ education and career needs.",
 [["Benefit","Survival benefits with a maturity benefit and bonuses"],["Entry age","90 days to 12 years"]]),
// ---------- MONEY BACK ----------
P("bshree","Money Back","💰","LIC’s Bima Shree","Plan 748","Participating, non-linked money-back plan","Money-back plan for high-net-worth buyers.",
 [["Benefit","Survival benefits at regular intervals plus maturity benefit"],["Minimum Sum Assured","₹10 lakh"]]),
P("mb20","Money Back","🔁","LIC’s New Money Back Plan – 20 Years","Plan 720","Participating, non-linked money-back plan","Receive part of the sum assured during the term while keeping full life cover.",
 [["Policy term","20 years"],["Benefit","Periodic survival payments plus final maturity payment and bonuses"],["Life cover","Full sum assured stays on during the term"]]),
P("mb25","Money Back","🔁","LIC’s New Money Back Plan – 25 Years","Plan 721","Participating, non-linked money-back plan","Longer-term money-back plan with regular payouts.",
 [["Policy term","25 years"],["Benefit","Periodic survival payments plus final maturity payment and bonuses"],["Life cover","Full sum assured stays on during the term"]]),
// ---------- TERM ----------
P("amar","Term","🔒","LIC’s New Jeevan Amar","Plan 955","Non-participating, non-linked pure-risk term plan","Affordable high cover for your family’s financial security.",
 [["Benefit","Death benefit to the family during the policy term"],["Entry age","18 to 65 years"],["Policy term","10 to 40 years"],["Minimum Sum Assured","₹25 lakh"]]),
P("tech","Term","💻","LIC’s New Tech-Term","Plan 954","Online pure-risk term plan","Pure term cover available only through LIC’s online application.",
 [["Purchase","Online only – no intermediary involved"],["Benefit","Death benefit during the policy term"]]),
P("digi","Term","📲","LIC’s Digi Term","Plan 876","Pure-risk term plan","Low-cost term cover designed for easy online purchase.",
 [["Benefit","Death benefit during the policy term"]]),
P("yuva","Term","🧑‍💼","LIC’s Yuva Term","Plan 875","Pure-risk term plan for young earners","Term cover built for young professionals starting out.",
 [["Benefit","Death benefit during the policy term"]]),
P("saral","Term","📋","LIC’s Saral Jeevan Bima","Plan 859","Standard individual pure-risk term plan","Simple, standard-terms life cover.",
 [["Benefit","Death benefit during the policy term"],["Sum Assured","₹5 lakh to ₹25 lakh"],["Entry age","18 to 65 years"]])
];

// ---------- OTHER PROVIDERS (top 5 each) ----------
window.PLANS.push(
 // LIC Housing Finance
 P("hfl-home","Home Loan","🏠","LIC HFL Home Loan","LIC Housing Finance","Housing loan","Loan to buy a ready-to-move or under-construction home.",
  [["Purpose","Purchase of ready-to-move or under-construction house / flat"],["Tenure","Flexible tenures, up to 30 years"],["Also available","Balance transfer of an existing home loan and top-up loans for existing customers"]],{prov:"LIC HFL"}),
 P("hfl-construct","Home Loan","🧱","LIC HFL Home Construction Loan","LIC Housing Finance","Housing loan","Finance for building your own house on a plot you own.",
  [["Purpose","Construction of your own home"],["Eligibility","Subject to income, repayment capacity and property value"]],{prov:"LIC HFL"}),
 P("hfl-plot","Home Loan","📐","LIC HFL Plot Loan","LIC Housing Finance","Plot loan","Buy a residential plot and build your home on it.",
  [["Purpose","Purchase of a residential plot for constructing a home"],["Construction","Home to be built within 3 years"]],{prov:"LIC HFL"}),
 P("hfl-improve","Home Loan","🛠️","LIC HFL Home Improvement & Extension Loan","LIC Housing Finance","Housing loan","Repair, renovate or extend your existing home.",
  [["Purpose","Home improvement, repair, renovation and extension"],["Who can apply","Existing as well as new customers"]],{prov:"LIC HFL"}),
 P("hfl-pension","Home Loan","👴","LIC HFL Home Loan for Pensioners","LIC Housing Finance","Housing loan","Home loan for people with a pension income.",
  [["Eligibility","Individuals with pension benefit"],["Tenure","Up to 80 years of age"]],{prov:"LIC HFL"}),
 // National Insurance
 P("ni-mediplus","Health","🩺","National Mediclaim Plus Policy","National Insurance","Individual health (indemnity) policy","Comprehensive individual health cover with a wide choice of sum insured.",
  [["Cover","Hospitalisation expenses for an individual"],["Sum insured","Options from ₹2 lakh to ₹50 lakh"]],{prov:"National Insurance"}),
 P("ni-parivar","Health","👨‍👩‍👧","National Parivar Mediclaim Plus Policy","National Insurance","Family floater health policy","Family floater cover with wider benefits than the standard Parivar Mediclaim.",
  [["Cover","Entire family under a single sum insured"],["Benefits","Higher coverage and wider medical benefits"]],{prov:"National Insurance"}),
 P("ni-senior","Health","🧓","National Senior Citizen Mediclaim Policy","National Insurance","Health policy for senior citizens","Health insurance designed for senior citizens.",
  [["Cover","Hospitalisation expenses for senior citizens"],["Eligibility","Senior citizens – age limits as per policy wording"]],{prov:"National Insurance"}),
 P("ni-young","Health","🧑","National Young India Mediclaim Policy","National Insurance","Individual and family floater health policy","Modern health cover for young individuals and families.",
  [["Cover","Individual and family floater options"],["Benefits","Maternity, mental healthcare and AYUSH cover; restoration benefit; optional critical illness cover"]],{prov:"National Insurance"}),
 P("ni-car","Motor","🚗","National Private Car Package Policy","National Insurance","Motor insurance","Comprehensive cover for your private car.",
  [["Cover","Own damage plus third-party liability (a package policy)"],["Note","Third-party cover is mandatory under the Motor Vehicles Act, 1988"]],{prov:"National Insurance"}),
 // Star Health
 P("sh-optima","Health","👪","Star Family Health Optima","Star Health","Family floater health plan","Health cover for the whole family under one plan.",
  [["Cover","Family floater health insurance"],["Entry age","18 to 65 years; newborn from the 16th day"]],{prov:"Star Health"}),
 P("sh-comp","Health","🛡️","Star Comprehensive Insurance Policy","Star Health","Individual and family health plan","Wide-ranging cover with lifetime renewal.",
  [["Cover","Individual or family floater"],["Renewal","Lifetime renewal"],["Entry age","Adults 18 to 65 years; dependent children 3 months to 25 years"]],{prov:"Star Health"}),
 P("sh-senior","Health","🌿","Star Senior Citizens Red Carpet","Star Health","Health plan for senior citizens","Health cover designed for senior citizens.",
  [["Cover","Hospitalisation and related expenses for senior citizens"],["Eligibility","Senior citizens – entry age as per policy wording"]],{prov:"Star Health"}),
 P("sh-diabetes","Health","🍬","Star Diabetes Safe","Star Health","Specialty health plan","Cover for people with type 1 or type 2 diabetes.",
  [["Cover","In-patient hospitalisation due to diabetes complications and other illnesses"],["Options","Individual and family floater"],["Entry age","18 to 65 years"]],{prov:"Star Health"}),
 P("sh-cardiac","Health","❤️","Star Cardiac Care","Star Health","Specialty health plan","Specialty cover for people with heart conditions.",
  [["Cover","Cardiac, non-cardiac and accidental treatment"],["Note","India’s first specialty policy for cardiac patients"]],{prov:"Star Health"})
);
window.PLANS.forEach(p=>{p.prov=p.prov||"LIC"});
window.PROVIDERS=["LIC","LIC HFL","National Insurance","Star Health"];
// the 6 LIC plans shown first (3 + 3); the rest open with "Show all"
window.FEATURED_LIC=["platinum","raksha","dhara","cancer","shield","umang"];
