import { expansionArticles } from "./finance-expansion.mjs";

export const checkedDate = "July 28, 2026";
export const isoDate = "2026-07-28";

export const existingArticleTitles = {
  "high-yield-savings-accounts.html": "High-Yield Savings Accounts: How to Compare APYs and Fees",
  "cd-vs-savings-account.html": "CDs vs. Savings Accounts: Liquidity, Rates and Trade-Offs",
  "emergency-fund-how-much.html": "Emergency Funds: How to Set a Practical Savings Target",
  "improve-credit-score-fast.html": "How Credit Scores Change: Fast and Slow Factors",
  "balance-transfer-credit-cards.html": "Balance Transfer Credit Cards: Fees, Timelines and Payoff Planning",
  "cash-back-credit-cards-guide.html": "Cash-Back Credit Cards: Rewards, Fees and Interest",
  "avalanche-vs-snowball.html": "Debt Avalanche vs. Debt Snowball: How the Two Payoff Methods Compare",
  "debt-consolidation-loans.html": "Debt Consolidation Loans: Benefits, Fees and Risks",
  "personal-loans-explained.html": "Personal Loans: Rates, Fees and Prequalification",
  "fha-vs-conventional-loans.html": "FHA vs. Conventional Loans: Down Payments, Insurance and Eligibility",
  "how-much-house-can-you-afford.html": "How Much House Can You Afford? A Practical Budget Framework",
  "mortgage-refinance-guide.html": "Mortgage Refinancing: Costs, Break-Even Math and Timing",
  "car-insurance-for-seniors.html": "Car Insurance for Older Drivers: Coverage and Quote Comparison",
  "home-insurance-what-it-covers.html": "Homeowners Insurance: Coverage, Limits and Common Gaps",
  "term-vs-whole-life-insurance.html": "Term vs. Whole Life Insurance: Costs and Trade-Offs"
};

export const hubs = [
  {
    key: "Savings & banking",
    short: "Banking",
    path: "/savings.html",
    title: "Savings & Banking",
    description: "Understand insured deposits, savings accounts, CDs, fees and the trade-offs behind advertised yields.",
    intro: "Use this section to decide where cash belongs, how access affects return, and what deposit insurance does—and does not—protect.",
    image: "/assets/topic-savings-v1.jpg",
    alt: "Savings planning still life with a glass savings vessel and notebook",
    articleImage: "/assets/article-savings-v1.jpg",
    articleAlt: "Bank statement folder, account ledgers and brass key on a forest-green desk",
    articles: [
      ["High-Yield Savings Accounts: How to Compare APYs and Fees", "/articles/high-yield-savings-accounts.html", "Compare yield, access, minimums and fees without relying on a promotional rate alone."],
      ["CDs vs. Savings Accounts: Liquidity, Rates and Trade-Offs", "/articles/cd-vs-savings-account.html", "Match a deposit product to when you need the money and understand early-withdrawal trade-offs."],
      ["FDIC Deposit Insurance: Coverage Rules and Common Mistakes", "/articles/fdic-deposit-insurance-explained.html", "Learn the standard limit, ownership categories and why opening more accounts at one bank may not add coverage."],
      ["Checking Account Fees: A Practical Comparison Guide", "/articles/checking-account-fees-guide.html", "Compare maintenance fees, overdraft choices, ATM access, holds and everyday service costs."],
      ["Joint Bank Accounts and Beneficiaries: Ownership and FDIC Basics", "/articles/joint-bank-accounts-beneficiaries.html", "Separate joint-owner access from beneficiary designations and understand the related FDIC categories."]
    ],
    sources: [
      ["FDIC deposit insurance resources", "https://www.fdic.gov/resources/deposit-insurance/"],
      ["CFPB bank account resources", "https://www.consumerfinance.gov/consumer-tools/bank-accounts/"]
    ]
  },
  {
    key: "Budgeting & emergency funds",
    short: "Budgeting",
    path: "/budgeting.html",
    title: "Budgeting & Emergency Funds",
    description: "Build a working monthly plan, prepare for irregular bills and create a cash buffer for genuine emergencies.",
    intro: "A useful budget is a decision system, not a restriction. These guides separate routine spending, irregular bills and true financial shocks.",
    image: "/assets/topic-budgeting-v1.jpg",
    alt: "Forest-green budgeting notebook, blank calendar sheet and organized envelopes",
    articleImage: "/assets/article-budgeting-v1.jpg",
    articleAlt: "Blank monthly calendar, budgeting notebook and organized envelopes in warm daylight",
    articles: [
      ["How to Build a Monthly Budget That Matches Your Pay Cycle", "/articles/how-to-build-a-monthly-budget.html", "Turn income, bills and flexible spending into a week-by-week plan you can maintain."],
      ["Sinking Funds: A Practical System for Irregular Expenses", "/articles/sinking-funds-guide.html", "Convert annual and seasonal bills into predictable monthly savings targets."],
      ["Emergency Funds: How to Set a Practical Savings Target", "/articles/emergency-fund-how-much.html", "Define what counts as an emergency and set a target based on essential spending and household risk."],
      ["How to Budget With Variable Income", "/articles/variable-income-budget.html", "Build a conservative cash-flow plan for freelance, commission or seasonal earnings."],
      ["Bill Calendar Guide: Match Due Dates to Your Pay Cycle", "/articles/bill-calendar-guide.html", "Put income and due dates on one calendar to expose timing gaps before they create fees."]
    ],
    sources: [
      ["CFPB Your Money, Your Goals toolkit", "https://www.consumerfinance.gov/consumer-tools/educator-tools/your-money-your-goals/toolkit/"],
      ["CFPB emergency fund guide", "https://www.consumerfinance.gov/an-essential-guide-to-building-an-emergency-fund/"]
    ]
  },
  {
    key: "Credit scores & reports",
    short: "Credit reports",
    path: "/credit-scores.html",
    title: "Credit Scores & Reports",
    description: "Review credit files, dispute errors, understand score factors and protect access to your reports.",
    intro: "Credit reports contain the underlying account information; scores summarize parts of that file. Start with accuracy, then work on durable habits.",
    image: "/assets/topic-credit-scores-v1.jpg",
    alt: "Magnifying glass over neutral paper sheets on a dark green editorial desk",
    articleImage: "/assets/article-credit-reports-v1.jpg",
    articleAlt: "Magnifying glass, abstract credit report pages and brass security lock",
    articles: [
      ["How to Dispute Errors on Your Credit Reports", "/articles/how-to-dispute-credit-report-errors.html", "Document the problem, contact both the reporting company and furnisher, and preserve a clear paper trail."],
      ["Credit Freezes: What They Block and How to Manage Them", "/articles/credit-freeze-guide.html", "Understand the free federal security-freeze process and when a temporary lift is needed."],
      ["How Credit Scores Change: Fast and Slow Factors", "/articles/improve-credit-score-fast.html", "Separate actions that may affect utilization quickly from improvements that require a longer payment history."],
      ["Annual Credit Reports: How to Request and Review All Three", "/articles/annual-credit-reports-guide.html", "Use the official access point, compare all three nationwide files and organize any dispute."],
      ["Credit Utilization Explained: Balances, Limits and Reporting Dates", "/articles/credit-utilization-explained.html", "Calculate per-card and overall utilization without treating one percentage as a score promise."]
    ],
    sources: [
      ["CFPB credit reports and scores", "https://www.consumerfinance.gov/consumer-tools/credit-reports-and-scores/"],
      ["FTC identity theft recovery", "https://www.identitytheft.gov/"]
    ]
  },
  {
    key: "Credit cards",
    short: "Credit cards",
    path: "/credit-cards.html",
    title: "Credit Cards",
    description: "Understand APR, rewards, balance transfers, fees and the payment choices that determine a card’s real cost.",
    intro: "A card can be a payment tool or expensive revolving debt. These guides focus on statements, interest math and clear comparison criteria.",
    image: "/assets/topic-credit-cards-v1.jpg",
    alt: "Three unbranded payment cards arranged on a refined neutral surface",
    articleImage: "/assets/article-credit-cards-v1.jpg",
    articleAlt: "Unbranded payment cards, statement pages and a brass payment timeline",
    articles: [
      ["Credit Card APR and Interest: A Statement-by-Statement Guide", "/articles/credit-card-apr-interest-explained.html", "See how purchase APR, daily periodic rates, grace periods and multiple balances interact."],
      ["Balance Transfer Credit Cards: Fees, Timelines and Payoff Planning", "/articles/balance-transfer-credit-cards.html", "Calculate the transfer fee, required monthly payment and deadline before moving a balance."],
      ["Cash-Back Credit Cards: Rewards, Fees and Interest", "/articles/cash-back-credit-cards-guide.html", "Compare reward structures without ignoring annual fees, caps or the cost of carrying a balance."],
      ["Credit Card Grace Periods: How Purchase Interest Can Be Avoided", "/articles/credit-card-grace-period.html", "Read the cycle, due date and transaction rules that determine whether purchase interest applies."],
      ["Minimum Credit Card Payments: Cost, Timing and a Payoff Plan", "/articles/minimum-credit-card-payment-cost.html", "See what the required minimum protects, what it does not, and how extra payments change payoff."]
    ],
    sources: [
      ["CFPB credit card resources", "https://www.consumerfinance.gov/consumer-tools/credit-cards/"],
      ["Federal Reserve consumer credit information", "https://www.federalreserve.gov/consumerscommunities.htm"]
    ]
  },
  {
    key: "Debt management",
    short: "Debt",
    path: "/debt.html",
    title: "Debt Management",
    description: "Organize balances, compare payoff methods and evaluate whether consolidation changes the cost or only the payment.",
    intro: "The first step is a complete debt list. From there, choose a repayment order, protect required payments and compare any new loan against the old total cost.",
    image: "/assets/topic-debt-v1.jpg",
    alt: "Disordered paper forms becoming a clear descending sequence of blocks",
    articleImage: "/assets/article-debt-v1.jpg",
    articleAlt: "Organized debt ledger, sealed letters and descending balance markers",
    articles: [
      ["Debt-to-Income Ratio: Calculation, Uses and Limits", "/articles/debt-to-income-ratio.html", "Calculate monthly DTI using gross income and understand what the number leaves out of a household budget."],
      ["Debt Avalanche vs. Debt Snowball: How the Two Payoff Methods Compare", "/articles/avalanche-vs-snowball.html", "Compare interest-minimizing and momentum-focused repayment orders with the same sample balances."],
      ["Debt Consolidation Loans: Benefits, Fees and Risks", "/articles/debt-consolidation-loans.html", "Test whether a new loan reduces total cost after fees and whether the payment fits your cash flow."],
      ["Debt Collection Validation Notices: A Response Checklist", "/articles/debt-collection-validation-rights.html", "Review the collector, itemized debt and response deadline before paying or disputing."],
      ["Nonprofit Credit Counseling and Debt Management Plans", "/articles/nonprofit-credit-counseling-guide.html", "Understand counseling, plan fees, creditor participation and the difference from settlement."]
    ],
    sources: [
      ["CFPB debt collection resources", "https://www.consumerfinance.gov/consumer-tools/debt-collection/"],
      ["CFPB debt-to-income explanation", "https://www.consumerfinance.gov/ask-cfpb/what-is-a-debt-to-income-ratio-en-1791/"]
    ]
  },
  {
    key: "Personal loans",
    short: "Personal loans",
    path: "/personal-loans.html",
    title: "Personal Loans",
    description: "Compare secured and unsecured borrowing, APR, origination fees, prequalification and repayment terms.",
    intro: "A lower payment is not automatically a lower-cost loan. Compare the amount received, APR, required payment, total of payments and collateral risk.",
    image: "/assets/topic-personal-loans-v1.jpg",
    alt: "Two ordered rows of blank comparison cards beside a brass balance weight",
    articleImage: "/assets/article-personal-loans-v1.jpg",
    articleAlt: "Personal-loan comparison page, blank calculator and brass balance on a green desk",
    articles: [
      ["Secured vs. Unsecured Personal Loans: Risk and Cost", "/articles/secured-vs-unsecured-personal-loans.html", "Understand collateral, lender remedies and the questions to ask before pledging an asset."],
      ["Personal Loan APR and Fees: How to Compare Offers", "/articles/personal-loan-apr-fees.html", "Compare the cash you receive with the total repayment after origination and other disclosed fees."],
      ["Personal Loans: Rates, Fees and Prequalification", "/articles/personal-loans-explained.html", "Use prequalification carefully and compare term length, payment and total cost before accepting a loan."],
      ["Personal Loan Prequalification: What to Compare Before Applying", "/articles/personal-loan-prequalification.html", "Distinguish an estimate from approval and ask when a hard credit inquiry occurs."],
      ["Personal Loan Payment Calculator: Formula, Fees and Total Cost", "/articles/personal-loan-payment-calculator.html", "Estimate a fixed payment while accounting for net proceeds, APR and total repayment."]
    ],
    sources: [
      ["CFPB personal installment loan fees", "https://www.consumerfinance.gov/ask-cfpb/do-personal-installment-loans-have-fees-en-2120/"],
      ["CFPB APR explanation", "https://www.consumerfinance.gov/ask-cfpb/what-is-the-difference-between-a-loan-interest-rate-and-the-apr-en-733/"]
    ]
  },
  {
    key: "Mortgages & home buying",
    short: "Mortgages",
    path: "/mortgages.html",
    title: "Mortgages & Home Buying",
    description: "Plan affordability, compare loan structures and understand the costs that sit outside the advertised mortgage rate.",
    intro: "Home affordability starts with the household budget, not a lender maximum. Compare cash to close, monthly housing cost and long-term flexibility.",
    image: "/assets/topic-mortgages-v1.jpg",
    alt: "Architectural house model, blueprint and key on a neutral surface",
    articleImage: "/assets/article-mortgages-v1.jpg",
    articleAlt: "Architectural house model, closing folder, blueprint and brass key",
    articles: [
      ["FHA vs. Conventional Loans: Down Payments, Insurance and Eligibility", "/articles/fha-vs-conventional-loans.html", "Compare the two loan paths across credit profile, mortgage insurance and long-term cost."],
      ["How Much House Can You Afford? A Practical Budget Framework", "/articles/how-much-house-can-you-afford.html", "Build a housing ceiling from income, debts, cash reserves, taxes, insurance and maintenance."],
      ["Mortgage Refinancing: Costs, Break-Even Math and Timing", "/articles/mortgage-refinance-guide.html", "Estimate break-even time and compare the new term with the remaining cost of the current loan."],
      ["Mortgage Closing Costs: Read the Loan Estimate and Cash to Close", "/articles/mortgage-closing-costs.html", "Separate lender fees, prepaids, escrow, credits, down payment and cash to close."],
      ["Mortgage Preapproval Documents and Questions to Prepare", "/articles/mortgage-preapproval-documents.html", "Organize income, asset and debt records while treating the letter as tentative."]
    ],
    sources: [
      ["CFPB mortgage resources", "https://www.consumerfinance.gov/consumer-tools/mortgages/"],
      ["HUD homebuyer resources", "https://www.hud.gov/helping-americans/loans"]
    ]
  },
  {
    key: "Auto insurance",
    short: "Auto insurance",
    path: "/auto-insurance.html",
    title: "Auto Insurance",
    description: "Understand liability, collision, comprehensive coverage, deductibles and a repeatable quote-comparison process.",
    intro: "Auto coverage is regulated by state and policy wording matters. Compare the same limits and deductibles before treating one quote as cheaper.",
    image: "/assets/topic-auto-insurance-v1.jpg",
    alt: "Unbranded sedan model protected beneath a clear glass form",
    articleImage: "/assets/article-auto-insurance-v1.jpg",
    articleAlt: "Sedan model, policy folder, blank incident checklist and camera",
    articles: [
      ["Auto Insurance Coverage Types: Liability, Collision and Comprehensive", "/articles/auto-insurance-coverage-types.html", "Learn what major coverage categories generally protect and which choices depend on state law or a lender."],
      ["Auto Insurance Deductibles and Quote Comparison", "/articles/auto-insurance-deductibles-quotes.html", "Hold coverage limits constant, compare deductibles and check exclusions before choosing a quote."],
      ["Car Insurance for Older Drivers: Coverage and Quote Comparison", "/articles/car-insurance-for-seniors.html", "Review changing mileage, driver lists, discounts and coverage rather than assuming age alone determines price."],
      ["Uninsured and Underinsured Motorist Coverage", "/articles/uninsured-underinsured-motorist-coverage.html", "Understand another driver’s insurance gap and the state-specific policy rules to check."],
      ["Auto Insurance Claim Checklist After a Crash", "/articles/auto-insurance-claim-checklist.html", "Prioritize safety, preserve facts and organize the claim from first notice to settlement."]
    ],
    sources: [
      ["NAIC auto insurance consumer guide", "https://content.naic.org/consumer/auto-insurance.htm"],
      ["NAIC auto insurance topics", "https://content.naic.org/insurance-topics/auto-insurance"]
    ]
  },
  {
    key: "Home & life insurance",
    short: "Home & life",
    path: "/insurance.html",
    title: "Home & Life Insurance",
    description: "Read policy limits, exclusions, valuation methods and the core trade-offs in property and life coverage.",
    intro: "Insurance transfers defined risks; it does not make every loss disappear. Start with what is covered, what is excluded and how a claim would be valued.",
    image: "/assets/topic-insurance-v1.jpg",
    alt: "Modern home and car models protected beneath a clear architectural canopy",
    articleImage: "/assets/article-home-life-insurance-v1.jpg",
    articleAlt: "Home model under a glass canopy beside flood-risk contours and planning documents",
    articles: [
      ["Homeowners Insurance: Coverage, Limits and Common Gaps", "/articles/home-insurance-what-it-covers.html", "Review dwelling, personal property, liability and additional-living-expense coverage alongside exclusions."],
      ["Renters Insurance: Property, Liability and Loss-of-Use Coverage", "/articles/renters-insurance-guide.html", "Separate the landlord’s building policy from protection for your belongings and personal liability."],
      ["Term vs. Whole Life Insurance: Costs and Trade-Offs", "/articles/term-vs-whole-life-insurance.html", "Compare a defined coverage term with permanent coverage and cash-value features."],
      ["Flood Insurance Basics: Building, Contents and Waiting Periods", "/articles/flood-insurance-basics.html", "Separate building and contents protection and confirm limits, deductibles and effective dates."],
      ["How Much Life Insurance? A Needs-Based Planning Framework", "/articles/life-insurance-needs-framework.html", "Estimate survivor needs from obligations, income gaps, caregiving and available resources."]
    ],
    sources: [
      ["NAIC homeowners insurance resources", "https://content.naic.org/consumer/homeowners-insurance.htm"],
      ["NAIC life insurance resources", "https://content.naic.org/consumer/life-insurance.htm"]
    ]
  },
  {
    key: "Retirement, taxes & benefits",
    short: "Retirement",
    path: "/retirement-taxes-benefits.html",
    title: "Retirement, Taxes & Benefits",
    description: "Understand workplace plans, IRAs, Social Security timing and the tax treatment attached to different retirement choices.",
    intro: "Retirement planning combines savings vehicles, taxes and public benefits. These guides explain the rules without predicting returns or replacing tax advice.",
    image: "/assets/topic-retirement-v1.jpg",
    alt: "Brass hourglass, green planning book, compass and ascending blocks",
    articleImage: "/assets/article-retirement-v1.jpg",
    articleAlt: "Retirement plan folder, blank calendar, contribution ledger and brass compass",
    articles: [
      ["401(k) Basics: Contributions, Matching and Vesting", "/articles/401k-basics.html", "Read the plan documents, capture employer contributions and understand the difference between traditional and Roth deferrals."],
      ["Traditional vs. Roth IRA: Tax Timing and Withdrawal Rules", "/articles/traditional-vs-roth-ira.html", "Compare possible deductions today with the conditions for tax-free qualified Roth distributions."],
      ["Social Security Retirement Benefits: Eligibility and Claiming Age", "/articles/social-security-retirement-basics.html", "Understand work credits, early claiming, full retirement age and why an SSA estimate matters."],
      ["401(k) Employer Match and Vesting: Read Your Plan", "/articles/employer-match-vesting.html", "Separate your own contributions from employer money and understand the plan’s vesting schedule."],
      ["Required Minimum Distributions: Accounts, Timing and Calculation", "/articles/required-minimum-distributions-basics.html", "Review covered accounts, first-year timing, prior-year balances and IRS life-expectancy factors."]
    ],
    sources: [
      ["IRS retirement plan resources", "https://www.irs.gov/retirement-plans"],
      ["Social Security retirement benefits", "https://www.ssa.gov/retirement"]
    ]
  }
];

export const articleAssignments = Object.fromEntries(
  hubs.flatMap((hub) => hub.articles.map((article) => [article[1].split("/").pop(), hub.key]))
);

export const newArticles = [
  {
    slug: "fdic-deposit-insurance-explained",
    hub: "Savings & banking",
    title: "FDIC Deposit Insurance: Coverage Rules and Common Mistakes",
    description: "How FDIC insurance applies by depositor, bank and ownership category, including what is covered and what is not.",
    readTime: 8,
    takeaways: [
      "The standard insurance amount is $250,000 per depositor, per insured bank, for each ownership category.",
      "Checking, savings, money market deposit accounts and CDs can be covered; stocks, mutual funds and crypto assets are not FDIC deposits.",
      "Multiple accounts at the same bank do not automatically create separate coverage when they use the same ownership category.",
      "Use the FDIC BankFind and EDIE tools when balances or ownership structures are complex."
    ],
    sections: [
      ["Start with the three-part rule", `<p>FDIC coverage is not simply “$250,000 per account.” The standard amount is applied <strong>per depositor, per insured bank, for each ownership category</strong>. All three parts matter.</p><p>If one person has a checking account, savings account and CD titled as single accounts at the same insured bank, those balances are generally added together for the single-account category. Moving part of the money from savings to a second CD at that same bank does not create a new category.</p>`],
      ["What the FDIC generally covers", `<div class="table-scroll"><table><thead><tr><th>Commonly covered deposits</th><th>Not FDIC deposit products</th></tr></thead><tbody><tr><td>Checking and savings accounts</td><td>Stocks and bonds</td></tr><tr><td>Money market deposit accounts</td><td>Mutual funds and brokerage money market funds</td></tr><tr><td>Certificates of deposit</td><td>Crypto assets and safe-deposit-box contents</td></tr><tr><td>Cashier’s checks and certain official bank items</td><td>Life insurance policies and annuities</td></tr></tbody></table></div><p>Coverage is automatic for eligible deposits at an FDIC-insured bank. The logo alone is not enough for a new fintech app: identify the insured bank that actually holds the deposit and review the account agreement.</p>`],
      ["A simple aggregation example", `<p>Suppose Jordan holds $80,000 in checking, $120,000 in savings and a $90,000 CD, all as single-owner deposits at the same insured bank. The category total is $290,000. Under the standard $250,000 amount, $40,000 would be above the standard limit unless another valid ownership category or arrangement applies.</p><p>This is an educational example, not a coverage determination. Trust accounts, joint accounts, retirement accounts and business accounts have specific requirements. Use the FDIC’s Electronic Deposit Insurance Estimator for the actual titles and beneficiaries.</p>`],
      ["Checklist before a balance grows", `<ul class="checklist"><li>Confirm the institution in FDIC BankFind.</li><li>List every deposit held at that legal bank, including accounts opened through different brands.</li><li>Group deposits by ownership category rather than product name.</li><li>Include accrued interest when estimating the balance.</li><li>Use EDIE or contact the FDIC for complex trust or beneficiary structures.</li></ul>`]
    ],
    faqs: [
      ["Are separate branches treated as separate banks?", "No. Branches of the same legal bank are part of one insured institution for coverage calculations."],
      ["Does a joint account receive only $250,000 total?", "Joint-account coverage is calculated by ownership share and has specific requirements. Use EDIE for the actual account title and owners."],
      ["Is a brokerage money market fund FDIC-insured?", "Generally no. A money market mutual fund is an investment product, not a bank money market deposit account."]
    ],
    sources: [
      ["FDIC — What We Do and the standard insurance amount", "https://www.fdic.gov/about/what-we-do"],
      ["FDIC — Electronic Deposit Insurance Estimator", "https://edie.fdic.gov/"]
    ]
  },
  {
    slug: "how-to-build-a-monthly-budget",
    hub: "Budgeting & emergency funds",
    title: "How to Build a Monthly Budget That Matches Your Pay Cycle",
    description: "A practical cash-flow budget that connects paydays, due dates, flexible spending and savings without relying on a perfect month.",
    readTime: 9,
    takeaways: [
      "Start with actual take-home income and bill timing, not an idealized monthly average.",
      "Separate fixed obligations, flexible essentials, goals and nonessential spending.",
      "A week-by-week cash-flow view can reveal shortages that a monthly total hides.",
      "Review the plan after each pay cycle and adjust categories rather than abandoning the budget."
    ],
    sections: [
      ["Build the baseline from real transactions", `<p>Collect one to three months of statements and pay records. Record take-home income, required bills, everyday essentials and irregular spending. If income changes, use a conservative base amount and treat income above that level as variable.</p><p>A budget is workable only when the timing is visible. A household can earn enough over a month and still overdraw before the second paycheck if rent, insurance and debt payments cluster early.</p>`],
      ["Use four practical buckets", `<div class="table-scroll"><table><thead><tr><th>Bucket</th><th>Examples</th><th>Planning rule</th></tr></thead><tbody><tr><td>Required</td><td>Housing, utilities, minimum debt payments</td><td>Fund first and schedule by due date</td></tr><tr><td>Flexible essentials</td><td>Food, fuel, household items</td><td>Set a weekly guardrail</td></tr><tr><td>Future needs</td><td>Emergency savings, sinking funds, retirement</td><td>Automate a realistic amount</td></tr><tr><td>Optional</td><td>Dining, entertainment, upgrades</td><td>Spend from what remains</td></tr></tbody></table></div>`],
      ["Cash-flow example", `<p>Assume take-home pay of $2,400 on the 1st and 15th. Required bills total $2,700, flexible essentials are planned at $900, savings at $400 and optional spending at $500. The monthly plan balances at $4,500, leaving $300 of margin.</p><p>The next step is to assign each bill to the paycheck that arrives before its due date. If the first half requires $2,650 but the first paycheck is $2,400, move a due date when the provider allows it, use existing buffer cash, or reduce a flexible category before the month begins.</p>`],
      ["A 20-minute payday review", `<ol><li>Confirm income received and current account balance.</li><li>Reserve money for bills due before the next paycheck.</li><li>Transfer planned savings and sinking-fund amounts.</li><li>Set the remaining weekly spending limit.</li><li>Record one adjustment for the next cycle.</li></ol><p>The CFPB cash-flow tool uses beginning balance, weekly resources and weekly expenses for the same reason: timing is part of the budget.</p>`]
    ],
    faqs: [
      ["Do I need a budgeting app?", "No. A spreadsheet, paper worksheet or separate bank subaccounts can work if the system shows income, due dates and remaining flexible money."],
      ["What if income is irregular?", "Start with a conservative income floor, keep required spending below that amount where possible and direct stronger months toward reserves and irregular bills."],
      ["Should savings be treated as an expense?", "It is usually easier to follow a plan when savings has a defined amount and transfer date rather than receiving whatever is left."]
    ],
    sources: [
      ["CFPB — Your Money, Your Goals toolkit", "https://www.consumerfinance.gov/consumer-tools/educator-tools/your-money-your-goals/toolkit/"],
      ["CFPB — Creating a cash flow budget", "https://www.consumerfinance.gov/documents/10038/cfpb_creating-cash-flow-budget_tool_2021-08.pdf"]
    ]
  },
  {
    slug: "sinking-funds-guide",
    hub: "Budgeting & emergency funds",
    title: "Sinking Funds: A Practical System for Irregular Expenses",
    description: "How to turn annual, seasonal and predictable expenses into monthly savings targets without confusing them with emergencies.",
    readTime: 7,
    takeaways: [
      "A sinking fund is for a known category with an uncertain or future payment date.",
      "Divide the target shortfall by the number of pay periods remaining.",
      "Keep emergency savings separate so predictable bills do not consume the shock absorber.",
      "Review targets at least quarterly as quotes, plans and due dates change."
    ],
    sections: [
      ["Sinking fund versus emergency fund", `<p>A car registration renewal, annual insurance premium and holiday travel are irregular, but they are not surprises. A sinking fund spreads those known costs across earlier pay periods. An emergency fund is reserved for unplanned events such as urgent repairs or loss of income.</p><p>The distinction prevents a predictable annual bill from repeatedly draining the emergency balance.</p>`],
      ["Calculate the contribution", `<p>Use: <strong>(target amount − current balance) ÷ pay periods remaining</strong>.</p><p>If a $1,200 annual bill is due in eight months and $240 is already saved, the remaining $960 divided by 16 biweekly paychecks equals $60 per paycheck. The example is illustrative; use the actual quote and due date.</p>`],
      ["Choose categories worth separating", `<ul><li>Insurance premiums and property taxes not escrowed</li><li>Vehicle maintenance, registration and tires</li><li>Medical deductibles or planned care</li><li>School costs, gifts and seasonal travel</li><li>Home maintenance and appliance replacement</li></ul><p>Do not create so many categories that the system becomes impossible to maintain. Start with the three expenses that most often disrupt the budget.</p>`],
      ["Monthly checklist", `<ul class="checklist"><li>Confirm each target and due date.</li><li>Automate transfers just after payday.</li><li>Label the balance so it is not mistaken for general spending money.</li><li>Recalculate after using a fund.</li><li>Move completed contributions to the next priority instead of letting them disappear into spending.</li></ul>`]
    ],
    faqs: [
      ["Where should sinking funds be kept?", "A separate insured savings account or clearly labeled subaccounts can work when the money is accessible before the due date."],
      ["Can one account hold several sinking funds?", "Yes, if a spreadsheet or bank feature tracks each category so the total is not double-counted."],
      ["What if the target changes?", "Update the remaining shortfall and divide it by the pay periods left. If the new amount is unaffordable, adjust timing or scope before borrowing."]
    ],
    sources: [
      ["CFPB — Savings plan tool", "https://files.consumerfinance.gov/f/201508_cfpb_savings-plan-tool.pdf"],
      ["CFPB — Emergency fund guide", "https://www.consumerfinance.gov/an-essential-guide-to-building-an-emergency-fund/"]
    ]
  },
  {
    slug: "how-to-dispute-credit-report-errors",
    hub: "Credit scores & reports",
    title: "How to Dispute Errors on Your Credit Reports",
    description: "A documentation-first process for reviewing credit reports and disputing inaccurate or incomplete information.",
    readTime: 9,
    takeaways: [
      "Review the report from each nationwide credit reporting company because the files can differ.",
      "Dispute inaccurate information with both the reporting company and the business that furnished it.",
      "State exactly what is wrong and include copies—not originals—of supporting records.",
      "Keep confirmation numbers, letters and dates so you can escalate an incomplete response."
    ],
    sections: [
      ["Identify a specific, supportable error", `<p>Common errors include mixed identity information, accounts that do not belong to you, incorrect payment status, duplicate debts, wrong balances and incorrect credit limits. Highlight the exact field and compare it with statements, payoff letters or identity-theft records.</p><p>A dispute that only says “this is wrong” may lack enough information. Explain what should be corrected and why.</p>`],
      ["Contact both sides of the data flow", `<p>The CFPB recommends disputing with the credit reporting company and the company that supplied the information, often called the furnisher. Use the dispute address shown on the report or the companies’ secure dispute channels. Keep copies of everything submitted.</p><div class="table-scroll"><table><thead><tr><th>Recipient</th><th>What to include</th></tr></thead><tbody><tr><td>Credit reporting company</td><td>Report confirmation, item identifier, explanation and supporting copies</td></tr><tr><td>Information furnisher</td><td>Account details, the disputed field and records showing the correct information</td></tr></tbody></table></div>`],
      ["Track the result", `<p>Review the investigation response and a fresh copy of the affected report. If the correction is made, check the other reporting companies. If the result is incomplete, send a focused follow-up with missing evidence and consider the CFPB complaint process after the direct dispute is no longer pending and applicable waiting requirements are met.</p><p>Suspected identity theft requires a different recovery path. Use IdentityTheft.gov to create a recovery plan and preserve the identity-theft report.</p>`],
      ["Dispute file checklist", `<ul class="checklist"><li>Copy of the report with the item marked</li><li>Plain-language explanation of the error</li><li>Copies of statements, letters or identity records</li><li>Date and delivery confirmation</li><li>Investigation result and updated report</li></ul>`]
    ],
    faqs: [
      ["Will filing a dispute lower my score?", "The act of filing a legitimate dispute is not itself a score-improvement strategy or a guaranteed score change. The effect depends on whether report data changes."],
      ["Should I pay a credit-repair company to dispute errors?", "You can dispute inaccurate information yourself for free. Be cautious of anyone promising to remove accurate negative information."],
      ["What if the account is the result of identity theft?", "Use IdentityTheft.gov and follow the specialized blocking and recovery steps in addition to contacting the reporting companies."]
    ],
    sources: [
      ["CFPB — How to dispute an error on your credit report", "https://www.consumerfinance.gov/ask-cfpb/how-do-i-dispute-an-error-on-my-credit-report-en-314/"],
      ["CFPB — Common credit report errors", "https://www.consumerfinance.gov/ask-cfpb/what-are-common-credit-report-errors-that-i-should-look-for-on-my-credit-report-en-313/"]
    ]
  },
  {
    slug: "credit-freeze-guide",
    hub: "Credit scores & reports",
    title: "Credit Freezes: What They Block and How to Manage Them",
    description: "What a security freeze does, what it does not do and how to place or temporarily lift one with each credit reporting company.",
    readTime: 7,
    takeaways: [
      "A security freeze limits prospective creditors’ access to a credit file, which can help prevent new-account identity theft.",
      "Federal law gives consumers the right to place and remove freezes for free.",
      "A freeze does not stop use of existing accounts or every type of report access.",
      "You must contact Equifax, Experian and TransUnion separately."
    ],
    sections: [
      ["What a freeze changes", `<p>When a freeze is active, a prospective creditor generally cannot access the frozen file to evaluate a new application. Because most lenders will not open an account without that access, a freeze can create a useful barrier against new-account fraud.</p><p>You can still review your own reports. Existing creditors and certain government, monitoring, employment, tenant-screening or insurance uses may be treated differently under applicable law.</p>`],
      ["Freeze, fraud alert and paid lock", `<div class="table-scroll"><table><thead><tr><th>Tool</th><th>Core purpose</th><th>Cost</th></tr></thead><tbody><tr><td>Security freeze</td><td>Restricts access for many new-credit decisions</td><td>Free by federal law</td></tr><tr><td>Fraud alert</td><td>Asks businesses to verify identity before new credit</td><td>Free</td></tr><tr><td>Credit lock</td><td>Commercial product that may be bundled with monitoring</td><td>May carry a fee</td></tr></tbody></table></div><p>The CFPB notes that paid locks are no more effective than the free security-freeze right.</p>`],
      ["How to manage the three freezes", `<ol><li>Go directly to each nationwide reporting company’s official freeze page.</li><li>Use a strong, unique account credential and store recovery information safely.</li><li>When applying for credit, ask which report the lender expects to use.</li><li>Temporarily lift the relevant freeze for a defined period, then confirm it is active again.</li></ol>`],
      ["What a freeze does not replace", `<p>Continue monitoring existing bank and card accounts, use unique passwords and respond to identity-theft notices. A freeze cannot reverse an unauthorized transaction, stop tax identity theft or prevent takeover of an existing account.</p>`]
    ],
    faqs: [
      ["Does freezing a report affect a credit score?", "A security freeze restricts access; it does not change the account history used to calculate a score."],
      ["Can I apply for an apartment with a freeze?", "Tenant screening may use consumer reports outside the federal freeze rule. Ask the screening company or property manager what access is required."],
      ["How quickly can an online freeze be lifted?", "The CFPB states that a nationwide reporting company generally must remove an online or telephone freeze within one hour of a valid request."]
    ],
    sources: [
      ["CFPB — What is a credit or security freeze?", "https://www.consumerfinance.gov/ask-cfpb/what-is-a-credit-freeze-or-security-freeze-on-my-credit-report-en-1341/"],
      ["FTC — IdentityTheft.gov recovery resources", "https://www.identitytheft.gov/"]
    ]
  },
  {
    slug: "credit-card-apr-interest-explained",
    hub: "Credit cards",
    title: "Credit Card APR and Interest: A Statement-by-Statement Guide",
    description: "How purchase APR, daily periodic rates, grace periods and multiple balance categories affect credit card interest.",
    readTime: 9,
    takeaways: [
      "Credit card APR is an annual expression of the price of borrowing, but many issuers calculate interest daily.",
      "A statement may contain different APRs for purchases, balance transfers and cash advances.",
      "A purchase grace period can often avoid interest when the statement balance is paid in full by the due date.",
      "Paying more than the minimum generally reduces both payoff time and interest cost."
    ],
    sections: [
      ["Find every rate on the statement", `<p>Start with the interest-charge calculation section. Match each balance category to its APR and balance subject to interest. A promotional balance transfer can coexist with purchases at a different rate, and a cash advance may have its own rate and fee.</p>`],
      ["From annual rate to daily charge", `<p>Many issuers use a daily periodic rate. A simplified estimate divides APR by 365, although the agreement may use 360 or another disclosed method. With a hypothetical 24% APR using 365 days, the daily rate is about 0.0658%. A $2,000 balance held constant for 30 days would generate roughly $39.45 in simple estimated interest before compounding and transaction timing.</p><p>This example is illustrative. The statement’s average daily balance and card agreement control the actual charge.</p>`],
      ["Grace periods and carried balances", `<p>On many cards, paying the full statement balance by the due date preserves a grace period on new purchases. If a balance is carried, new purchases may begin accruing interest under the agreement. Cash advances commonly work differently and may accrue interest immediately.</p><div class="table-scroll"><table><thead><tr><th>Statement amount</th><th>What it generally means</th></tr></thead><tbody><tr><td>Minimum payment</td><td>Amount required to keep the account from being past due</td></tr><tr><td>Statement balance</td><td>Transactions and adjustments included in the closed billing cycle</td></tr><tr><td>Current balance</td><td>Statement balance plus later activity, subject to pending items</td></tr></tbody></table></div>`],
      ["A safer payment workflow", `<ul class="checklist"><li>Confirm the due date and minimum.</li><li>Identify balances with promotional expiration dates.</li><li>Read the grace-period language.</li><li>Pay the full statement balance when possible.</li><li>If carrying debt, stop new charges on that card and direct additional payment toward the highest-cost balance.</li></ul>`]
    ],
    faqs: [
      ["Is APR the same as the amount charged each month?", "No. APR is an annual rate. The actual charge depends on balances, days, transaction types and the issuer’s disclosed calculation method."],
      ["Can I avoid purchase interest by paying the current balance?", "Paying at least the full statement balance by the due date generally matters for a purchase grace period, but check the agreement and whether a balance was already carried."],
      ["Does a 0% offer mean the transfer is free?", "Not necessarily. A balance-transfer fee may apply, and the standard APR can begin after the promotional period."]
    ],
    sources: [
      ["CFPB — Credit card interest rate and APR", "https://www.consumerfinance.gov/ask-cfpb/what-is-a-credit-card-interest-rate-what-does-apr-mean-en-44/"],
      ["CFPB — How card interest is calculated", "https://www.consumerfinance.gov/ask-cfpb/how-does-my-credit-card-company-calculate-the-amount-of-interest-i-owe-en-51/"]
    ]
  },
  {
    slug: "debt-to-income-ratio",
    hub: "Debt management",
    title: "Debt-to-Income Ratio: Calculation, Uses and Limits",
    description: "How to calculate monthly debt-to-income ratio, what lenders may use it for and why it is not a complete household budget.",
    readTime: 7,
    takeaways: [
      "DTI divides monthly debt payments by gross monthly income.",
      "Use required monthly debt payments, not account balances, in the basic calculation.",
      "Lender limits vary by product and underwriting rules.",
      "DTI excludes many living costs, so a manageable lender ratio can still feel unaffordable."
    ],
    sections: [
      ["The formula", `<p><strong>DTI = total required monthly debt payments ÷ gross monthly income × 100.</strong> Gross income is generally income before taxes and payroll deductions.</p><p>Using the CFPB’s example structure, if required monthly debt payments total $2,000 and gross monthly income is $6,000, DTI is 33.3%.</p>`],
      ["What usually enters the numerator", `<ul><li>Mortgage or rent when required by the lender’s calculation</li><li>Auto, student and personal loan payments</li><li>Credit card minimum payments</li><li>Court-ordered obligations when applicable</li></ul><p>Groceries, utilities, childcare, taxes and insurance may not appear in the standard total even though they strongly affect affordability.</p>`],
      ["DTI is not a spending target", `<div class="table-scroll"><table><thead><tr><th>DTI can help show</th><th>DTI does not fully show</th></tr></thead><tbody><tr><td>Required debt load relative to gross income</td><td>Take-home pay after tax and benefits</td></tr><tr><td>Change after adding a proposed loan</td><td>Childcare, food, health and transport costs</td></tr><tr><td>A lender’s underwriting input</td><td>Emergency savings or job stability</td></tr></tbody></table></div>`],
      ["Use two calculations", `<p>Calculate lender-style DTI, then build a separate cash-flow test using take-home income and all essential expenses. If the proposed payment works in one calculation but not the other, the household budget is the more important warning.</p>`]
    ],
    faqs: [
      ["Is there one maximum DTI for every loan?", "No. The CFPB notes that different products and lenders use different limits and underwriting rules."],
      ["Does paying off a credit card help DTI?", "It can reduce the required monthly debt payment used in the numerator, but the exact underwriting treatment depends on the lender."],
      ["Should rent be included?", "Mortgage underwriting commonly evaluates housing and total debt ratios. For personal planning, include housing in the broader cash-flow test even if a specific lender formula differs."]
    ],
    sources: [
      ["CFPB — What is a debt-to-income ratio?", "https://www.consumerfinance.gov/ask-cfpb/what-is-a-debt-to-income-ratio-en-1791/"],
      ["CFPB — Debt-to-income calculator", "https://files.consumerfinance.gov/f/documents/cfpb_your-money-your-goals_debt_income_calc_tool_2018-11_ADA.pdf"]
    ]
  },
  {
    slug: "secured-vs-unsecured-personal-loans",
    hub: "Personal loans",
    title: "Secured vs. Unsecured Personal Loans: Risk and Cost",
    description: "How collateral changes a personal loan, what default may put at risk and how to compare secured and unsecured offers.",
    readTime: 8,
    takeaways: [
      "A secured loan gives the lender a legal interest in identified collateral; an unsecured loan does not rely on pledged collateral.",
      "Collateral can affect approval or pricing but creates a direct asset-loss risk after default.",
      "Unsecured does not mean consequence-free: collection, lawsuits and credit reporting can still follow nonpayment.",
      "Compare APR, payment, total of payments, fees and collateral—not the rate alone."
    ],
    sections: [
      ["The legal and practical difference", `<p>A secured loan is connected to collateral described in the agreement. Depending on the loan and state law, default can allow repossession or foreclosure-like remedies against that asset. An unsecured installment loan is based on the borrower’s promise and underwriting rather than a pledged asset.</p><p>Read the security-interest section carefully. A loan advertised as personal credit can still be secured by a vehicle, savings account or other property.</p>`],
      ["Side-by-side questions", `<div class="table-scroll"><table><thead><tr><th>Question</th><th>Secured offer</th><th>Unsecured offer</th></tr></thead><tbody><tr><td>What backs repayment?</td><td>Named collateral plus borrower obligation</td><td>Borrower obligation without pledged collateral</td></tr><tr><td>Default risk</td><td>Collection and possible loss of collateral</td><td>Collection, possible lawsuit and credit damage</td></tr><tr><td>Comparison focus</td><td>APR, lien terms, valuation and release</td><td>APR, fees, term and collection terms</td></tr></tbody></table></div>`],
      ["Illustrative decision", `<p>Suppose two loans provide the same net cash and payment, but the secured option uses a paid-off vehicle as collateral. A modest APR reduction must be weighed against losing transportation if the household cannot pay. That risk may be unacceptable even when the total finance charge is lower.</p>`],
      ["Before signing", `<ul class="checklist"><li>Identify every asset listed as collateral.</li><li>Confirm the net amount you receive after fees.</li><li>Compare APR and total of payments for the same term.</li><li>Ask when and how the lien will be released.</li><li>Test the payment against a reduced-income month.</li></ul>`]
    ],
    faqs: [
      ["Is a car title loan a normal secured personal loan?", "It is secured by the vehicle title but often has distinct short-term risks and state rules. Treat it as a separate high-risk product and review regulator guidance."],
      ["Can a secured loan build credit?", "Only if the lender reports the account to credit reporting companies; confirm the policy rather than assuming."],
      ["Can an unsecured lender take property?", "Not automatically under a security interest, but a creditor may pursue collection or a court judgment subject to law."]
    ],
    sources: [
      ["CFPB — Personal installment loan fees", "https://www.consumerfinance.gov/ask-cfpb/do-personal-installment-loans-have-fees-en-2120/"],
      ["CFPB — Ask CFPB consumer loan resources", "https://www.consumerfinance.gov/ask-cfpb/"]
    ]
  },
  {
    slug: "personal-loan-apr-fees",
    hub: "Personal loans",
    title: "Personal Loan APR and Fees: How to Compare Offers",
    description: "A comparison framework for personal loan APR, origination fees, net proceeds, monthly payment and total repayment.",
    readTime: 8,
    takeaways: [
      "APR combines the interest rate with certain loan fees and is generally better for price comparison than rate alone.",
      "An origination fee can reduce the cash delivered even when repayment is based on the full loan amount.",
      "Compare offers with the same amount and term whenever possible.",
      "Optional insurance and add-ons increase cost and should be evaluated separately."
    ],
    sections: [
      ["Five numbers to put in one row", `<ol><li>Amount financed</li><li>Cash delivered after deducted fees</li><li>APR</li><li>Monthly payment and number of payments</li><li>Total of payments</li></ol><p>The lowest monthly payment may come from the longest term and can produce the highest total cost.</p>`],
      ["Origination-fee example", `<p>A lender approves a $10,000 loan and deducts a 5% origination fee from proceeds. The borrower receives $9,500 but may repay based on the $10,000 amount. Another offer with no deducted fee and a slightly higher note rate could deliver more usable cash or cost less overall. APR and the federal disclosures help make that comparison.</p><p>The figures are illustrative, not a market quote.</p>`],
      ["Comparison table", `<div class="table-scroll"><table><thead><tr><th>Offer field</th><th>Why it matters</th></tr></thead><tbody><tr><td>APR</td><td>Standardized annual cost measure including certain fees</td></tr><tr><td>Net proceeds</td><td>Cash actually available after deducted charges</td></tr><tr><td>Term</td><td>Changes payment size and time paying interest</td></tr><tr><td>Prepayment terms</td><td>Determines whether early payoff carries a charge</td></tr><tr><td>Optional products</td><td>May add cost without being required for the loan</td></tr></tbody></table></div>`],
      ["Red flags", `<ul><li>A demand for an upfront payment before funds are delivered</li><li>Pressure to act without receiving disclosures</li><li>A “guaranteed approval” claim regardless of ability to repay</li><li>Payment requested by gift card, crypto or wire to an individual</li><li>Unclear lender identity or licensing</li></ul>`]
    ],
    faqs: [
      ["Is the interest rate the same as APR?", "No. The CFPB explains that APR includes the interest rate plus certain additional fees charged with the loan."],
      ["Are all add-on products mandatory?", "Credit or disability insurance may be optional. Read the disclosure and ask for the offer without optional products."],
      ["Does prequalification guarantee approval?", "No. It is usually an initial estimate based on limited information; final approval and terms can change after verification."]
    ],
    sources: [
      ["CFPB — Personal installment loan fees", "https://www.consumerfinance.gov/ask-cfpb/do-personal-installment-loans-have-fees-en-2120/"],
      ["CFPB — Interest rate versus APR", "https://www.consumerfinance.gov/ask-cfpb/what-is-the-difference-between-a-loan-interest-rate-and-the-apr-en-733/"]
    ]
  },
  {
    slug: "auto-insurance-coverage-types",
    hub: "Auto insurance",
    title: "Auto Insurance Coverage Types: Liability, Collision and Comprehensive",
    description: "A plain-English guide to major auto insurance coverage categories and the questions to ask under your state’s rules.",
    readTime: 9,
    takeaways: [
      "Liability coverage generally addresses injuries or property damage you cause to others, subject to policy limits.",
      "Collision generally covers damage to the insured vehicle from a crash; comprehensive generally addresses many non-collision causes.",
      "State requirements vary, and a lender or lessor may require physical-damage coverage.",
      "Coverage names are not enough—compare limits, deductibles, exclusions and endorsements."
    ],
    sections: [
      ["Liability protects against claims by others", `<p>Bodily injury liability generally responds to covered injuries you cause, while property damage liability generally addresses covered damage to another person’s vehicle or property. Minimum requirements vary by state and may be far below the potential cost of a serious crash.</p>`],
      ["Physical damage to your own car", `<div class="table-scroll"><table><thead><tr><th>Coverage</th><th>Generally addresses</th><th>Common limitation</th></tr></thead><tbody><tr><td>Collision</td><td>Crash with another vehicle or object, or rollover</td><td>Deductible and vehicle value</td></tr><tr><td>Comprehensive</td><td>Theft, fire, weather, vandalism, animal impact and other listed non-collision events</td><td>Deductible and exclusions</td></tr><tr><td>Liability</td><td>Covered injury or damage caused to others</td><td>Policy limit; does not repair your own car</td></tr></tbody></table></div><p>The policy controls. “Full coverage” is marketing shorthand, not a standardized promise that every loss is covered.</p>`],
      ["Other coverage to ask about", `<ul><li>Uninsured and underinsured motorist coverage</li><li>Medical payments or personal injury protection</li><li>Rental reimbursement</li><li>Roadside assistance and towing</li><li>Gap coverage for a financed vehicle</li></ul><p>Requirements and availability depend on state law and the insurer.</p>`],
      ["Build a declarations-page checklist", `<ul class="checklist"><li>Named drivers and garaging address are accurate.</li><li>Liability limits are written per person, per accident and for property damage where applicable.</li><li>Collision and comprehensive deductibles are affordable in cash.</li><li>Financed or leased vehicle requirements are satisfied.</li><li>Endorsements and exclusions are read, not assumed.</li></ul>`]
    ],
    faqs: [
      ["Is collision coverage required by law?", "NAIC materials note that collision is generally optional under state law, but a lender or lessor may require it."],
      ["Does comprehensive include every non-crash loss?", "It covers many listed non-collision causes, but the contract, exclusions and deductible determine a specific claim."],
      ["What does uninsured motorist coverage do?", "It can provide protection when a covered loss involves a driver with no insurance or insufficient insurance, subject to state rules and policy terms."]
    ],
    sources: [
      ["NAIC — What does auto insurance cover?", "https://content.naic.org/article/what-does-auto-insurance-cover"],
      ["NAIC — Consumer auto insurance guide", "https://content.naic.org/consumer/auto-insurance.htm"]
    ]
  },
  {
    slug: "auto-insurance-deductibles-quotes",
    hub: "Auto insurance",
    title: "Auto Insurance Deductibles and Quote Comparison",
    description: "How deductibles affect claims and premiums, plus a controlled process for comparing auto insurance quotes.",
    readTime: 8,
    takeaways: [
      "A deductible is the amount paid by the policyholder on a covered claim before the insurer’s payment.",
      "Higher deductibles may reduce premium but increase the cash needed after a loss.",
      "Quotes are comparable only when drivers, vehicles, limits, deductibles and endorsements match.",
      "Check complaint and licensing information with the state insurance department."
    ],
    sections: [
      ["Choose a deductible you can actually pay", `<p>The NAIC explains that comprehensive and collision commonly carry deductibles. A higher deductible usually lowers premium, but the policyholder absorbs more of a covered loss. Keep at least the chosen deductible accessible; otherwise a repaired car can still create new debt.</p>`],
      ["Hold variables constant", `<div class="table-scroll"><table><thead><tr><th>Keep identical across quotes</th><th>Verify separately</th></tr></thead><tbody><tr><td>Drivers, vehicles and annual mileage</td><td>Discount eligibility and renewal conditions</td></tr><tr><td>Liability limits</td><td>Claims service and complaint record</td></tr><tr><td>Collision/comprehensive deductibles</td><td>Repair network or parts provisions</td></tr><tr><td>Optional coverages</td><td>Installment fees and payment method charges</td></tr></tbody></table></div>`],
      ["Annual-cost example", `<p>Quote A is $120 less per year but uses a $1,000 collision deductible; Quote B uses $500. The annual saving equals $10 per month, while the additional claim exposure is $500. Neither option is automatically better—the choice depends on emergency cash and expected use of coverage.</p><p>Illustrative numbers are used only to show the comparison method.</p>`],
      ["Renewal checklist", `<ul class="checklist"><li>Update mileage and household drivers.</li><li>Review vehicle value before keeping physical-damage coverage unchanged.</li><li>Ask which discounts require documentation or a monitoring program.</li><li>Compare at least two quotes using the same declaration details.</li><li>Do not cancel the old policy until the new coverage is active.</li></ul>`]
    ],
    faqs: [
      ["Does liability coverage have a deductible?", "Liability coverage is usually expressed through limits rather than a collision-style deductible, but policy and state terms control."],
      ["Should an older car always drop collision coverage?", "No. Compare premium and deductible with the car’s value and your ability to replace it. A blanket age rule can be misleading."],
      ["Can bundling guarantee the lowest price?", "No. A bundle discount may help, but compare the total premium and matched coverage across insurers."]
    ],
    sources: [
      ["NAIC — Consumer’s Guide to Auto Insurance", "https://content.naic.org/sites/default/files/publication-aut-pp-consumer-auto.pdf"],
      ["NAIC — Auto insurance consumer resources", "https://content.naic.org/consumer/auto-insurance.htm"]
    ]
  },
  {
    slug: "renters-insurance-guide",
    hub: "Home & life insurance",
    title: "Renters Insurance: Property, Liability and Loss-of-Use Coverage",
    description: "What renters insurance generally covers, how replacement cost differs from actual cash value and where common gaps remain.",
    readTime: 8,
    takeaways: [
      "A landlord’s building policy generally does not insure a tenant’s belongings.",
      "Renters policies commonly combine personal property, liability and additional-living-expense coverage.",
      "Actual cash value subtracts depreciation; replacement-cost coverage uses the cost of a comparable new item, subject to terms.",
      "Flood and certain high-value items can require separate coverage or endorsements."
    ],
    sections: [
      ["Three core protections", `<div class="table-scroll"><table><thead><tr><th>Coverage</th><th>General purpose</th></tr></thead><tbody><tr><td>Personal property</td><td>Repair or replace covered belongings after a covered loss</td></tr><tr><td>Personal liability</td><td>Respond to certain covered injury or property-damage claims</td></tr><tr><td>Additional living expenses</td><td>Pay eligible extra costs when a covered loss makes the home uninhabitable</td></tr></tbody></table></div><p>Limits, deductibles, exclusions and claim conditions determine the actual payment.</p>`],
      ["Replacement cost versus actual cash value", `<p>Actual cash value generally reflects depreciation. Replacement-cost coverage generally uses the cost of a comparable replacement without subtracting normal depreciation, subject to policy terms and proof of replacement. The second option may cost more but can materially change a claim result.</p>`],
      ["Inventory before choosing a limit", `<p>Walk room by room and record furniture, electronics, clothing, tools and household items. Photograph higher-value property and store receipts or model numbers outside the home. Jewelry, collectibles, firearms, business equipment and other categories can have special sublimits.</p>`],
      ["Common gaps to ask about", `<ul class="checklist"><li>Flood and surface-water damage</li><li>Earthquake</li><li>Home business equipment and liability</li><li>Roommates who are not named insureds</li><li>High-value items above category sublimits</li><li>Whether loss-of-use has a dollar or time limit</li></ul>`]
    ],
    faqs: [
      ["Does the landlord’s insurance cover my belongings?", "Generally no. The landlord’s policy protects the building and the landlord’s interests, not the tenant’s personal property."],
      ["Are belongings covered away from home?", "Some policies provide off-premises coverage, but limits and exclusions apply. Check the contract before relying on it."],
      ["Does renters insurance cover flooding?", "Standard renters coverage generally excludes flood damage. Separate flood coverage may be available, including contents coverage through the NFIP in participating communities."]
    ],
    sources: [
      ["NAIC — Renters insurance consumer guidance", "https://content.naic.org/article/consumer_insight_renting_your_home_protect_your_belongings_renters_insurance.htm"],
      ["FEMA — National Flood Insurance Program", "https://www.fema.gov/flood-insurance"]
    ]
  },
  {
    slug: "401k-basics",
    hub: "Retirement, taxes & benefits",
    title: "401(k) Basics: Contributions, Matching and Vesting",
    description: "How traditional and Roth 401(k) contributions, employer matching, vesting and plan fees fit together.",
    readTime: 9,
    takeaways: [
      "A 401(k) allows eligible employees to direct part of wages to an individual workplace retirement account.",
      "Traditional elective deferrals generally postpone federal income tax; designated Roth deferrals are included in current taxable income.",
      "Employer contributions may follow a matching formula and can be subject to a vesting schedule.",
      "The plan document, fee disclosure and investment menu control the choices available to you."
    ],
    sections: [
      ["Read the plan before choosing a percentage", `<p>Find the summary plan description, eligibility date, employer contribution formula, vesting schedule, investment menu, loan rules and fee disclosures. A contribution decision without the match formula can leave compensation unclaimed.</p>`],
      ["Traditional and Roth deferrals", `<div class="table-scroll"><table><thead><tr><th>Feature</th><th>Traditional 401(k)</th><th>Designated Roth 401(k)</th></tr></thead><tbody><tr><td>Current federal taxable income</td><td>Elective deferrals generally excluded</td><td>Deferrals generally included</td></tr><tr><td>Qualified retirement distribution</td><td>Generally taxable</td><td>Generally tax-free when requirements are met</td></tr><tr><td>Employer contribution treatment</td><td colspan="2">Depends on plan design and current law; read the plan record</td></tr></tbody></table></div><p>State tax treatment can differ. Contribution limits change over time, so use the current IRS page rather than an old article number.</p>`],
      ["Matching and vesting example", `<p>A hypothetical plan matches 50 cents per dollar on employee contributions up to 6% of pay. Contributing 6% would produce a 3% employer contribution under that formula. Whether the employer money is immediately yours depends on vesting terms; your own salary deferrals are always fully vested.</p>`],
      ["Annual review checklist", `<ul class="checklist"><li>Confirm beneficiary designations.</li><li>Review the employer match and vesting schedule.</li><li>Check total investment and administration fees.</li><li>Rebalance only according to a documented allocation plan.</li><li>Use current IRS limits before increasing contributions.</li><li>Understand loan and hardship-withdrawal consequences before using them.</li></ul>`]
    ],
    faqs: [
      ["Should I always choose Roth contributions?", "No. The choice depends on current and expected tax circumstances, plan options and broader retirement strategy. It is not determined by age alone."],
      ["Can an employer match be forfeited?", "Employer contributions can be subject to a vesting schedule. Leaving before vesting may forfeit the unvested portion."],
      ["Are 401(k) fees visible?", "Plans must provide fee information, but you may need to read participant disclosures and fund expense data rather than relying on the account dashboard."]
    ],
    sources: [
      ["IRS — 401(k) plans", "https://www.irs.gov/retirement-plans/401k-plans"],
      ["U.S. Department of Labor — Retirement plans and benefits", "https://www.dol.gov/general/topic/retirement"]
    ]
  },
  {
    slug: "traditional-vs-roth-ira",
    hub: "Retirement, taxes & benefits",
    title: "Traditional vs. Roth IRA: Tax Timing and Withdrawal Rules",
    description: "How traditional and Roth IRAs differ on deductions, tax timing, eligibility and distributions.",
    readTime: 9,
    takeaways: [
      "Traditional IRA contributions may be deductible depending on income, filing status and workplace-plan coverage.",
      "Roth contributions are not deductible, but qualified distributions may be tax-free.",
      "Eligibility and contribution limits change, so verify the current IRS rules for the tax year.",
      "Tax treatment, liquidity needs and retirement timing matter more than a simple age rule."
    ],
    sections: [
      ["The central trade-off is tax timing", `<p>A traditional IRA may provide a deduction now when requirements are met, while distributions are generally taxed later. A Roth IRA uses after-tax contributions; qualified distributions can be tax-free when the rules are satisfied.</p>`],
      ["Side-by-side framework", `<div class="table-scroll"><table><thead><tr><th>Question</th><th>Traditional IRA</th><th>Roth IRA</th></tr></thead><tbody><tr><td>Contribution deduction</td><td>May be available</td><td>Not available</td></tr><tr><td>Income limit to contribute</td><td>No upper income limit for contribution, but deduction rules apply</td><td>Eligibility phases out under current income rules</td></tr><tr><td>Qualified withdrawals</td><td>Generally taxable</td><td>May be tax-free</td></tr><tr><td>Lifetime RMDs for owner</td><td>Generally apply under current law</td><td>Generally do not apply to the original owner</td></tr></tbody></table></div>`],
      ["Avoid stale contribution numbers", `<p>IRA limits, income phaseouts and required-distribution rules can change. Use the IRS page for the tax year in which the contribution is made. Do not copy a prior-year limit from a calculator or social post.</p>`],
      ["Decision checklist", `<ul class="checklist"><li>Confirm taxable compensation and current eligibility.</li><li>Check workplace retirement coverage and deduction rules.</li><li>Compare current marginal tax rate with plausible retirement scenarios.</li><li>Keep emergency cash separate from retirement accounts.</li><li>Review early-distribution taxes and exceptions before withdrawing.</li><li>Coordinate beneficiary designations with the estate plan.</li></ul>`]
    ],
    faqs: [
      ["Can I contribute to both types in one year?", "Potentially, but the combined contribution is subject to the annual IRA limit and eligibility rules."],
      ["Can I deduct every traditional IRA contribution?", "No. Deductibility can be limited by income, filing status and participation in a workplace retirement plan."],
      ["Are Roth contributions always available to high-income taxpayers?", "Direct Roth contribution eligibility is subject to current income limits. Use current IRS guidance and professional tax advice for alternatives."]
    ],
    sources: [
      ["IRS — Individual retirement arrangements", "https://www.irs.gov/retirement-plans/individual-retirement-arrangements-iras"],
      ["IRS — Topic 451, IRAs", "https://www.irs.gov/taxtopics/tc451"]
    ]
  },
  {
    slug: "social-security-retirement-basics",
    hub: "Retirement, taxes & benefits",
    title: "Social Security Retirement Benefits: Eligibility and Claiming Age",
    description: "A practical overview of Social Security work credits, early claiming, full retirement age and benefit estimates.",
    readTime: 9,
    takeaways: [
      "Workers can typically qualify for retirement benefits after enough covered work, commonly described as 40 credits or about 10 years.",
      "Retirement benefits may start as early as 62, but claiming before full retirement age permanently reduces the monthly amount.",
      "Full retirement age depends on birth year and reaches 67 for people born in 1960 or later.",
      "Use a personal my Social Security estimate because benefit amounts depend on the worker’s earnings record."
    ],
    sections: [
      ["Eligibility begins with covered work", `<p>Social Security retirement benefits are based on work on which Social Security taxes were paid. The SSA states that workers can typically receive benefits after 10 years or more of covered work, but individual eligibility and family benefits can differ.</p>`],
      ["Claiming age changes the monthly amount", `<div class="table-scroll"><table><thead><tr><th>Timing</th><th>General effect</th></tr></thead><tbody><tr><td>Before full retirement age</td><td>Permanently reduced monthly worker benefit</td></tr><tr><td>At full retirement age</td><td>Unreduced benefit based on the worker’s record</td></tr><tr><td>After full retirement age, up to age 70</td><td>Delayed retirement credits can increase the monthly worker benefit</td></tr></tbody></table></div><p>Full retirement age varies by birth year. The SSA calculator is the authoritative place to confirm it.</p>`],
      ["Use your own earnings record", `<p>Create or sign in to a my Social Security account and review the earnings history. Missing wages can reduce estimates. Compare benefit estimates at several claiming ages alongside other income, health coverage, work plans, survivor needs and longevity—not just the first available payment.</p>`],
      ["Before filing", `<ul class="checklist"><li>Confirm the earnings record.</li><li>Check full retirement age by birth year.</li><li>Compare estimates at multiple claiming ages.</li><li>Review spouse, survivor and dependent benefit possibilities.</li><li>Understand the earnings test if working before full retirement age.</li><li>Coordinate the first payment with cash reserves and retirement-account withdrawals.</li></ul>`]
    ],
    faqs: [
      ["Is full retirement age always 67?", "No. It depends on birth year, although it reaches 67 for people born in 1960 or later."],
      ["Can I work while receiving retirement benefits?", "Yes, but earnings before full retirement age can temporarily reduce current benefits under the earnings test. Use the current SSA rules."],
      ["Does waiting always produce more lifetime money?", "Waiting can increase the monthly amount, but lifetime results depend on longevity, household benefits, taxes and other circumstances."]
    ],
    sources: [
      ["Social Security Administration — Retirement benefits", "https://www.ssa.gov/retirement"],
      ["SSA — Full retirement age calculator", "https://www.ssa.gov/benefits/retirement/planner/ageincrease.html"]
    ]
  }
];

newArticles.push(...expansionArticles);
