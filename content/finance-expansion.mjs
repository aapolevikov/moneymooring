function list(items, ordered = false) {
  const tag = ordered ? "ol" : "ul";
  return `<${tag}>${items.map((item) => `<li>${item}</li>`).join("")}</${tag}>`;
}

function comparisonTable(headers, rows) {
  return `<div class="table-scroll"><table><thead><tr>${headers.map((header) => `<th>${header}</th>`).join("")}</tr></thead><tbody>${rows.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
}

function guide(config) {
  return {
    slug: config.slug,
    hub: config.hub,
    title: config.title,
    description: config.description,
    readTime: config.readTime || 9,
    takeaways: config.takeaways,
    sections: [
      [
        config.overviewTitle,
        config.overview.map((paragraph) => `<p>${paragraph}</p>`).join("")
      ],
      [
        config.stepsTitle,
        `<p>${config.stepsIntro}</p>${list(config.steps, true)}`
      ],
      [
        config.exampleTitle,
        `<p>${config.exampleIntro}</p>${comparisonTable(config.tableHeaders, config.tableRows)}<p>${config.exampleNote}</p>`
      ],
      [
        config.checklistTitle,
        `<p>${config.checklistIntro}</p>${list(config.checklist.map((item) => `<strong>${item[0]}</strong> ${item[1]}`), false)}<p>${config.caution}</p>`
      ]
    ],
    faqs: config.faqs,
    sources: config.sources
  };
}

export const expansionArticles = [
  guide({
    slug: "checking-account-fees-guide",
    hub: "Savings & banking",
    title: "Checking Account Fees: A Practical Comparison Guide",
    description: "Compare checking accounts by monthly fees, overdraft rules, ATM access, deposit holds and the services you actually use.",
    takeaways: [
      "A no-monthly-fee account can still create costs through overdrafts, out-of-network ATMs, checks or returned payments.",
      "For one-time debit-card and ATM transactions, an institution generally needs your opt-in before charging an overdraft fee.",
      "Deposit availability, branch access, customer service and bill-pay tools can matter as much as a headline fee.",
      "Compare accounts with your own monthly behavior instead of choosing from a single advertised feature."
    ],
    overviewTitle: "Start with your real account activity",
    overview: [
      "Checking accounts are operating tools: income arrives, bills leave and short-term spending happens between those two events. The best comparison begins with the transactions you actually make in a normal month. Count direct deposits, debit purchases, cash withdrawals, paper checks, transfers and any occasions when the balance becomes tight.",
      "Next, separate fees you can reliably avoid from fees that depend on perfect timing. A monthly maintenance fee waived by a direct deposit may be predictable if your employer always pays that way. An overdraft waiver based on an uncertain balance is less dependable. Also review what happens when a transaction is declined, returned or covered from another account.",
      "Finally, confirm whether the institution is an FDIC-insured bank or a federally insured credit union and identify the legal institution holding the deposit. A financial app’s brand name may not be the insured bank’s name."
    ],
    stepsTitle: "A five-step account comparison",
    stepsIntro: "Use the same checklist for every institution so one attractive feature does not hide an expensive limitation.",
    steps: [
      "<strong>Map the monthly fee.</strong> Record the base fee, every waiver route and what happens in a month when the waiver condition is missed.",
      "<strong>Read the overdraft choices.</strong> Distinguish debit-card opt-in, checks, recurring electronic payments, linked-account transfers and any non-sufficient-funds policy.",
      "<strong>Test access.</strong> Check branch locations, in-network ATMs, cash-deposit options, transfer limits and the institution’s funds-availability policy.",
      "<strong>List service costs.</strong> Include checks, wire transfers, stop payments, official checks, foreign transactions and replacement cards if you use them.",
      "<strong>Confirm support and safety.</strong> Review fraud-reporting channels, account alerts, customer-service hours and deposit-insurance status."
    ],
    exampleTitle: "Illustrative monthly-cost comparison",
    exampleIntro: "Assume a customer makes two out-of-network ATM withdrawals and sometimes falls below a balance waiver. These are hypothetical terms, not current bank quotes.",
    tableHeaders: ["Feature", "Account A", "Account B", "What to verify"],
    tableRows: [
      ["Monthly fee", "$0", "$12, waivable", "Exact waiver rules"],
      ["ATM use", "$3 per outside ATM", "Two outside-ATM fees waived", "Operator fees may still apply"],
      ["Overdraft setup", "Transactions generally declined", "Optional paid coverage", "Which transaction types are covered"],
      ["Cash deposits", "Limited retail network", "Branches and ATMs", "Availability timing"]
    ],
    exampleNote: "Account A appears cheaper until regular cash deposits or outside-ATM use are included. Account B may cost nothing in a qualifying month but should be evaluated at the full fee if the waiver is uncertain.",
    checklistTitle: "Questions to ask before opening",
    checklistIntro: "Save the current fee schedule and account agreement. Marketing pages can summarize an account, but the agreement controls the details.",
    checklist: [
      ["Monthly cost:", "What is the fee, and which waiver can I meet consistently?"],
      ["Low-balance handling:", "Will a payment be declined, returned, covered or transferred from another account?"],
      ["Deposits:", "When will checks, cash and electronic transfers become available?"],
      ["Access:", "Can I deposit cash and withdraw money where I live and travel?"],
      ["Exit:", "Is there an early account-closing fee or a process for moving automatic payments?"]
    ],
    caution: "Account rules and fees can change. Recheck the current agreement before opening the account and keep enough margin for pending transactions that have not yet posted.",
    faqs: [
      ["Can a bank charge an overdraft fee if I did not opt in?", "For one-time debit-card and ATM transactions, a bank generally cannot charge an overdraft fee unless you opted in. Checks and recurring electronic payments can be treated differently, so review the agreement."],
      ["Is a free checking account always free?", "Not necessarily. The account may have no monthly maintenance fee but still charge for certain ATMs, checks, wires, stop payments, returned items or other services."],
      ["Should I choose a bank only by its app?", "No. Digital usability matters, but also compare deposit insurance, fees, access, support, transfer limits and the time it takes deposited funds to become available."]
    ],
    sources: [
      ["CFPB — Bank accounts and services", "https://www.consumerfinance.gov/consumer-tools/bank-accounts/"],
      ["CFPB — Managing your checking account", "https://files.consumerfinance.gov/f/documents/cfpb_adult-fin-ed_consumer-guide-to-managing-your-checking-account.pdf"]
    ]
  }),
  guide({
    slug: "joint-bank-accounts-beneficiaries",
    hub: "Savings & banking",
    title: "Joint Bank Accounts and Beneficiaries: Ownership and FDIC Basics",
    description: "Understand how joint ownership, withdrawal rights and named beneficiaries affect account control and FDIC insurance categories.",
    takeaways: [
      "A qualifying joint account is owned by two or more living people who generally have equal withdrawal rights.",
      "Each co-owner’s shares of joint accounts at the same insured bank are added together for insurance calculations.",
      "Naming a payable-on-death beneficiary can move a deposit into the FDIC trust-account category when requirements are met.",
      "Account access, inheritance intent and deposit insurance are separate questions that should all be documented."
    ],
    overviewTitle: "Ownership changes more than insurance",
    overview: [
      "Adding a joint owner can give that person immediate authority to withdraw money. That is different from naming a beneficiary who receives funds after the owner’s death. Before changing a title, decide whether the goal is shared daily access, help with bill payment, estate transfer, deposit-insurance planning or some combination.",
      "For FDIC purposes, joint accounts form a separate ownership category when the requirements are satisfied. The FDIC generally divides each joint account according to the ownership shares shown in the bank records, or assumes equal shares when the records do not state otherwise. Each person’s joint shares at the same insured bank are then combined.",
      "A payable-on-death or in-trust-for designation is generally analyzed under the trust-account rules rather than the joint-account rules. Complex trusts, multiple beneficiaries and deposits spread through fintech programs require careful review with the FDIC’s current tools."
    ],
    stepsTitle: "Document the purpose before changing a title",
    stepsIntro: "A short written inventory can prevent an account change from solving one problem while creating another.",
    steps: [
      "<strong>Identify the legal bank.</strong> Use FDIC BankFind and do not assume different apps or branches represent different insured institutions.",
      "<strong>List every owner and beneficiary.</strong> Copy names from the bank records and note who can withdraw during the owner’s lifetime.",
      "<strong>Group deposits by category.</strong> Separate single, joint, certain retirement and trust deposits before calculating coverage.",
      "<strong>Check estate consequences.</strong> State law and account contracts affect what happens at death; deposit insurance does not replace estate advice.",
      "<strong>Revisit after changes.</strong> Marriage, divorce, death, a new beneficiary or a bank merger can change the analysis."
    ],
    exampleTitle: "A simple joint-share example",
    exampleIntro: "Assume Alex and Morgan have two qualifying joint accounts at the same FDIC-insured bank and the records show equal ownership. The figures are illustrative.",
    tableHeaders: ["Joint deposit", "Balance", "Alex share", "Morgan share"],
    tableRows: [
      ["Checking", "$180,000", "$90,000", "$90,000"],
      ["CD", "$260,000", "$130,000", "$130,000"],
      ["Combined joint shares", "$440,000", "$220,000", "$220,000"]
    ],
    exampleNote: "In this simplified example, each owner has $220,000 in the joint category at that bank, below the standard $250,000 amount. Other joint accounts owned by either person at the same bank must also be included.",
    checklistTitle: "Review points for owners and beneficiaries",
    checklistIntro: "Use the actual account records, not family assumptions, when reviewing access and coverage.",
    checklist: [
      ["Access now:", "Does each co-owner have equal withdrawal rights, and is that intended?"],
      ["Ownership record:", "Are the names and shares accurate in the bank’s records?"],
      ["Beneficiary record:", "Is the beneficiary living, eligible and correctly identified?"],
      ["Bank total:", "Have all deposits at the same legal institution been included?"],
      ["Professional advice:", "Do estate, tax or incapacity questions require an attorney or tax professional?"]
    ],
    caution: "This guide explains general FDIC categories and is not estate-planning advice. Use the FDIC Electronic Deposit Insurance Estimator for the exact titles and consult qualified advisers for legal or tax consequences.",
    faqs: [
      ["Does adding another joint account increase insurance automatically?", "No. Each co-owner’s shares of all qualifying joint accounts at the same insured bank are added together before the standard insurance amount is applied."],
      ["Is a beneficiary the same as a joint owner?", "No. A joint owner generally has rights during the owners’ lifetimes. A payable-on-death beneficiary generally receives funds after death and can change the FDIC ownership category."],
      ["Do different branches count as different banks?", "No. Branches of the same legal insured bank are one institution for FDIC coverage calculations."]
    ],
    sources: [
      ["FDIC — Your Insured Deposits", "https://www.fdic.gov/resources/deposit-insurance/brochures/insured-deposits/"],
      ["FDIC — Electronic Deposit Insurance Estimator", "https://edie.fdic.gov/fdic_info_calculator.html"]
    ]
  }),
  guide({
    slug: "variable-income-budget",
    hub: "Budgeting & emergency funds",
    title: "How to Budget With Variable Income",
    description: "Build a cash-flow plan for freelance, commission, seasonal or irregular income without pretending every month will look the same.",
    takeaways: [
      "Budget from a conservative income floor, not the best recent month.",
      "Separate essential monthly bills, irregular obligations, flexible spending and business taxes before setting discretionary targets.",
      "A holding account can smooth strong months into predictable transfers during weaker months.",
      "Review cash flow by pay date and bill date, not only by monthly totals."
    ],
    overviewTitle: "Plan for timing as well as totals",
    overview: [
      "Variable income creates two different problems: the total amount can change and the arrival date can move. A monthly budget that says income exceeds expenses may still fail if rent is due before a client payment arrives. Start with a calendar showing expected deposits, fixed due dates and the minimum cash needed between them.",
      "Choose a conservative planning income from a longer history rather than one strong month. Someone with a full year of records might examine the lower normal months, remove unusual windfalls and use that amount as the operating floor. New freelancers can build the plan from signed work and cash already received, then update it as invoices are paid.",
      "When income exceeds the floor, assign the difference deliberately: upcoming taxes, annual bills, emergency reserves, business expenses and future low-income months should be funded before lifestyle increases."
    ],
    stepsTitle: "Build a variable-income system",
    stepsIntro: "The goal is not a perfect forecast. It is a repeatable order for allocating every deposit.",
    steps: [
      "<strong>Calculate the survival number.</strong> Total housing, basic utilities, food, transport, insurance and required debt payments.",
      "<strong>Create a bill calendar.</strong> Place each due date beside realistic income dates and identify weeks with a cash shortfall.",
      "<strong>Set deposit percentages or priorities.</strong> Reserve taxes and business costs first when they apply, then fund the household floor.",
      "<strong>Use buffers.</strong> Keep an operating cushion for timing differences and a separate emergency fund for genuine shocks.",
      "<strong>Reconcile monthly.</strong> Replace estimates with actual income, preserve records and adjust the next month without treating every variance as failure."
    ],
    exampleTitle: "Illustrative income-floor plan",
    exampleIntro: "Suppose monthly net receipts have ranged from $4,000 to $7,200. The household chooses a $4,200 operating floor and allocates stronger months to future obligations.",
    tableHeaders: ["Priority", "Monthly target", "Strong-month action"],
    tableRows: [
      ["Essential household costs", "$3,000", "Fund the next month first"],
      ["Irregular bills", "$400", "Top up annual-expense sinking funds"],
      ["Emergency reserve", "$300", "Add until the chosen target is met"],
      ["Flexible spending", "$500", "Increase only after higher priorities"],
      ["Excess above floor", "Variable", "Taxes, future income smoothing or long-term goals"]
    ],
    exampleNote: "The figures are illustrative. A self-employed worker should calculate taxes using current federal, state and local rules rather than copying a generic percentage.",
    checklistTitle: "A monthly review that takes less time",
    checklistIntro: "Keep the review focused on decisions that change the next 30 days.",
    checklist: [
      ["Receipts:", "Which invoices or commissions were actually paid?"],
      ["Calendar:", "Which bills arrive before the next confirmed deposit?"],
      ["Reserves:", "Are tax, annual-bill and emergency balances still separate?"],
      ["Floor:", "Does the conservative income assumption still reflect recent history?"],
      ["Next action:", "Which one expense or due date needs adjustment now?"]
    ],
    caution: "Do not count an invoice, potential sale or expected commission as available cash until the payment is sufficiently certain for your situation. Business owners should also keep personal and business records appropriately separated.",
    faqs: [
      ["Should I average my income?", "An average can help with long-term planning, but a conservative floor is usually safer for monthly commitments because the average can be lifted by a few unusually strong months."],
      ["How large should an income-smoothing buffer be?", "There is no universal amount. Base it on the gap between low and normal months, the stability of your clients or commissions, and how quickly spending can be reduced."],
      ["Is an emergency fund different from a tax reserve?", "Yes. Expected taxes and annual bills are planned obligations. An emergency fund is for unplanned financial shocks, so keeping them separate makes the available cushion clearer."]
    ],
    sources: [
      ["CFPB — Your Money, Your Goals toolkit", "https://www.consumerfinance.gov/consumer-tools/educator-tools/your-money-your-goals/toolkit/"],
      ["CFPB — Bill calendar", "https://www.consumerfinance.gov/archive/blog/budget-help-manage-your-monthly-expenses-bill-calendar/"]
    ]
  }),
  guide({
    slug: "bill-calendar-guide",
    hub: "Budgeting & emergency funds",
    title: "Bill Calendar Guide: Match Due Dates to Your Pay Cycle",
    description: "Create a bill calendar that shows what is due, when income arrives and where timing gaps can trigger late fees or overdrafts.",
    takeaways: [
      "A bill calendar connects due dates to pay dates and reveals cash-flow problems that a monthly total can hide.",
      "Include variable, quarterly and annual obligations rather than listing only fixed monthly bills.",
      "Automatic payment does not remove the need to confirm the balance and processing date.",
      "A short weekly review is usually more useful than rebuilding the entire budget every day."
    ],
    overviewTitle: "Why a calendar can outperform a category list",
    overview: [
      "A traditional budget groups expenses by category. A bill calendar adds the missing time dimension. If $2,400 of bills and $3,000 of income fall in the same month, the total appears comfortable. But a $1,700 rent payment on the first can still fail when the largest paycheck arrives on the fifth.",
      "Gather statements and account histories, then record the bill name, estimated amount, due date, payment method and account used. Mark paydays and other dependable deposits on the same page. For variable bills such as utilities, use a cautious estimate and replace it when the statement arrives.",
      "Add non-monthly obligations as early reminders. Insurance renewals, subscriptions, school costs, taxes and annual memberships are easier to handle when the calendar points to a sinking fund several months in advance."
    ],
    stepsTitle: "Set up the calendar in one pass",
    stepsIntro: "Paper, a spreadsheet and a calendar app can all work. Choose the format you will actually review.",
    steps: [
      "<strong>Collect every bill.</strong> Use statements and transaction history to catch charges that do not arrive by mail.",
      "<strong>Record due and processing dates.</strong> An automatic debit may leave before, on or after the stated due date depending on the provider.",
      "<strong>Add income dates.</strong> Use confirmed net amounts and note deposits that are variable or delayed by weekends.",
      "<strong>Mark tight intervals.</strong> Compare the running account balance after each expected transaction, not just the month-end result.",
      "<strong>Create a weekly check-in.</strong> Confirm new statements, upcoming debits and any change that requires a transfer or due-date request."
    ],
    exampleTitle: "A two-paycheck month",
    exampleIntro: "This illustrative calendar shows why timing matters even when total monthly income exceeds scheduled bills.",
    tableHeaders: ["Date", "Expected event", "Amount", "Planning note"],
    tableRows: [
      ["1st", "Rent debit", "−$1,700", "Needs prior-month cash"],
      ["5th", "Paycheck", "+$1,500", "Too late to fund rent"],
      ["12th", "Utilities and card minimum", "−$390", "Verify variable utility amount"],
      ["19th", "Paycheck", "+$1,500", "Funds second-half bills"],
      ["25th", "Insurance and phone", "−$330", "Leave room for pending purchases"]
    ],
    exampleNote: "The month ends positive before food and transport, but the first-week balance is the pressure point. Possible solutions include carrying part of the prior paycheck forward or asking whether a provider allows a due-date change.",
    checklistTitle: "Weekly five-minute review",
    checklistIntro: "Pick the same day each week and work from the next two weeks of activity.",
    checklist: [
      ["Statements:", "Have any estimated bills posted with a different amount?"],
      ["Autopay:", "Is the funding account correct and sufficiently funded?"],
      ["Pending items:", "Are card purchases or checks still unposted?"],
      ["Due dates:", "Do weekends or holidays change processing timing?"],
      ["Shortfall plan:", "Can spending pause, money move or a provider be contacted before the due date?"]
    ],
    caution: "A bill calendar is a planning tool, not a guarantee that transactions will post in the expected order. Maintain a cushion and monitor the actual account when the balance is close.",
    faqs: [
      ["Should subscriptions go on the bill calendar?", "Yes. Include monthly and annual subscriptions so renewals are visible before the account is charged."],
      ["Can I change a bill due date?", "Some creditors and service providers allow a change, but policies vary. Ask how the change affects the next statement and whether a transition payment is required."],
      ["Does autopay prevent late payments?", "Autopay can reduce missed due dates, but it can fail because of an insufficient balance, expired card, changed account or processing issue. Review confirmations and statements."]
    ],
    sources: [
      ["CFPB — Bill calendar", "https://www.consumerfinance.gov/archive/blog/budget-help-manage-your-monthly-expenses-bill-calendar/"],
      ["CFPB — Your Money, Your Goals toolkit", "https://www.consumerfinance.gov/consumer-tools/educator-tools/your-money-your-goals/toolkit/"]
    ]
  }),
  guide({
    slug: "annual-credit-reports-guide",
    hub: "Credit scores & reports",
    title: "Annual Credit Reports: How to Request and Review All Three",
    description: "Request official credit reports, compare the three nationwide files and organize disputes without paying a look-alike service.",
    takeaways: [
      "AnnualCreditReport.com is the official federally authorized site for free reports from the three nationwide credit reporting companies.",
      "A credit report and a credit score are different products; the report contains the account information used by scoring systems.",
      "Review identity details, account ownership, payment status, balances, inquiries and public-record information.",
      "Preserve copies, confirmation numbers and supporting documents if you dispute an error."
    ],
    overviewTitle: "Start with the official access point",
    overview: [
      "Credit reports from Equifax, Experian and TransUnion can differ because creditors do not necessarily report the same information to every company or update on the same day. Review all three rather than assuming one file represents the complete picture.",
      "Use AnnualCreditReport.com, the official site directed by federal law. Look-alike sites may sell monitoring or require payment information. Requesting your own report does not create a lender hard inquiry, and a report does not automatically include every type of credit score.",
      "Save or print each report in a secure place. The layout can differ, so create one review sheet with columns for the bureau, creditor, account identifier, status and action needed."
    ],
    stepsTitle: "Review the reports in a consistent order",
    stepsIntro: "A repeatable sequence makes it easier to spot a mismatch across three different formats.",
    steps: [
      "<strong>Verify identity data.</strong> Check names, addresses and employers while recognizing that an old accurate address is not automatically an error.",
      "<strong>Match each account.</strong> Confirm the creditor, account type, ownership role and whether you recognize the account.",
      "<strong>Inspect status and dates.</strong> Review payment history, date opened, reported balance, limit and any collection or charge-off notation.",
      "<strong>Check inquiries.</strong> Separate requests connected to your applications from account review or other permissible access.",
      "<strong>Flag evidence.</strong> For each suspected error, identify the statement, identity-theft report or other document that supports your position."
    ],
    exampleTitle: "Three-report review sheet",
    exampleIntro: "Use a private worksheet with masked account numbers. This example shows the structure, not real consumer data.",
    tableHeaders: ["Item", "Report A", "Report B", "Report C"],
    tableRows: [
      ["Credit card ending 1234", "Open, current", "Open, current", "Not listed"],
      ["Closed auto loan", "Closed, paid", "Closed, paid", "Shows balance — review"],
      ["Address", "Current and old", "Current", "Current and unfamiliar — investigate"],
      ["Application inquiry", "Listed", "Listed", "Not listed"]
    ],
    exampleNote: "A difference is not automatically an error. Check dates and creditor reporting before disputing. If information is inaccurate, dispute it with the reporting company and, when appropriate, the company that supplied it.",
    checklistTitle: "Keep a clean review record",
    checklistIntro: "Credit files contain sensitive information. Store them securely and avoid sending complete reports through unsecured messages.",
    checklist: [
      ["Source:", "Use the official AnnualCreditReport.com address rather than a search advertisement."],
      ["Coverage:", "Review all three nationwide reports."],
      ["Evidence:", "Match each disputed fact to a statement, letter or identity-theft document."],
      ["Tracking:", "Save submission dates, confirmation numbers and responses."],
      ["Follow-up:", "Review the corrected file and escalate through the CFPB complaint process if an eligible dispute remains unresolved."]
    ],
    caution: "Report availability and special access programs can change. Follow the current instructions on AnnualCreditReport.com and the CFPB site rather than relying on an old schedule.",
    faqs: [
      ["Will checking my own report hurt my score?", "Requesting your own credit report is not the same as a lender hard inquiry and does not itself lower a credit score."],
      ["Why are the three reports different?", "Creditors may report to one, two or all three companies, and updates can arrive at different times. Compare the underlying facts before treating a difference as an error."],
      ["Does the free report include a credit score?", "Not necessarily. A credit report contains account and other file information; a credit score is a separate numerical product based on a scoring model."]
    ],
    sources: [
      ["AnnualCreditReport.com — Official free credit reports", "https://www.annualcreditreport.com/index.action"],
      ["CFPB — Consumer reporting companies", "https://www.consumerfinance.gov/consumer-tools/credit-reports-and-scores/consumer-reporting-companies/"]
    ]
  }),
  guide({
    slug: "credit-utilization-explained",
    hub: "Credit scores & reports",
    title: "Credit Utilization Explained: Balances, Limits and Reporting Dates",
    description: "Calculate revolving credit utilization and understand why reported balances, account limits and timing can affect the number.",
    takeaways: [
      "Utilization compares reported revolving balances with available revolving credit limits.",
      "Overall utilization and the percentage on an individual card can both be relevant to scoring models.",
      "The balance on a credit report may reflect a statement or reporting date rather than today’s live account balance.",
      "No single utilization percentage guarantees a score or a specific score change."
    ],
    overviewTitle: "A ratio based on reported information",
    overview: [
      "Credit utilization is commonly calculated by dividing a revolving account balance by its credit limit. A card reporting a $900 balance against a $3,000 limit has 30% utilization for that account. Overall utilization applies the same idea to the combined reported balances and limits across included revolving accounts.",
      "Scoring systems are proprietary and there are multiple models. Utilization is important in many models, but the result also depends on payment history, age and mix of accounts, recent applications and the rest of the credit file. Treat utilization as one manageable input, not a promise of a particular score.",
      "The report usually receives a balance on the creditor’s reporting cycle. Paying a card today does not guarantee the report changes today. Check the account statement and report dates before assuming a payment was ignored."
    ],
    stepsTitle: "Calculate and interpret the ratio",
    stepsIntro: "Use balances and limits from the same reporting snapshot so the comparison is internally consistent.",
    steps: [
      "<strong>List revolving accounts.</strong> Record the reported balance and reported limit for each credit card or other included revolving line.",
      "<strong>Calculate each card.</strong> Divide that card’s balance by its limit and multiply by 100.",
      "<strong>Calculate the total.</strong> Add balances, add limits and divide the two totals; do not average the card percentages.",
      "<strong>Check timing.</strong> Compare the report’s update date with the statement closing date and recent payments.",
      "<strong>Protect payment history first.</strong> A lower balance does not replace the need to make at least the required payment on time."
    ],
    exampleTitle: "Per-card and overall utilization",
    exampleIntro: "This simplified example uses reported balances from the same period.",
    tableHeaders: ["Account", "Reported balance", "Reported limit", "Utilization"],
    tableRows: [
      ["Card A", "$900", "$3,000", "30%"],
      ["Card B", "$100", "$2,000", "5%"],
      ["Card C", "$0", "$5,000", "0%"],
      ["Overall", "$1,000", "$10,000", "10%"]
    ],
    exampleNote: "Averaging 30%, 5% and 0% would produce the wrong overall figure because the limits differ. The combined calculation is $1,000 divided by $10,000.",
    checklistTitle: "Ways to manage the number responsibly",
    checklistIntro: "Choose actions that improve the underlying debt position rather than moving balances only for appearance.",
    checklist: [
      ["Pay on time:", "Protect the required payment before optimizing the reported balance."],
      ["Reduce principal:", "Lowering revolving debt can reduce utilization and interest cost."],
      ["Review reports:", "Correct inaccurate balances or limits through the normal dispute process."],
      ["Avoid unnecessary risk:", "Do not increase spending simply because a credit limit rises."],
      ["Compare dates:", "Allow for the creditor’s reporting cycle before rechecking the file."]
    ],
    caution: "Closing an account or requesting a limit change can affect available credit and other parts of the file. Consider fees, account age, spending control and lender rules instead of acting on utilization alone.",
    faqs: [
      ["Is 30% a guaranteed target?", "No. No single percentage guarantees approval or a score. Lower reported revolving balances may help some models, but the whole credit file matters."],
      ["Should I carry interest to build credit?", "No. Carrying a balance is not required to create payment history and can add interest cost. Follow the account terms and pay in full when feasible."],
      ["Why did utilization stay high after I paid?", "The credit report may still show the balance from an earlier reporting date. Confirm the payment posted and allow for the creditor’s next update cycle."]
    ],
    sources: [
      ["CFPB — Credit reports and scores", "https://www.consumerfinance.gov/consumer-tools/credit-reports-and-scores/"],
      ["CFPB — Credit score myths and utilization", "https://www.consumerfinance.gov/archive/blog/credit-score-myths-might-be-holding-you-back-improving-your-credit/"]
    ]
  }),
  guide({
    slug: "credit-card-grace-period",
    hub: "Credit cards",
    title: "Credit Card Grace Periods: How Purchase Interest Can Be Avoided",
    description: "Understand the time between a billing cycle and payment due date, when purchase interest may be avoided and how a grace period can be lost.",
    takeaways: [
      "A grace period is the time between the end of a billing cycle and the payment due date.",
      "Card issuers are not required to provide a grace period, though many cards provide one for purchases.",
      "Paying the statement balance in full by the due date can preserve a purchase grace period when the agreement provides it.",
      "Cash advances and balance transfers often follow different interest rules."
    ],
    overviewTitle: "A grace period belongs to specific balances",
    overview: [
      "A credit-card statement closes at the end of a billing cycle and lists a payment due date. When the agreement provides a purchase grace period and its conditions are met, purchase balances shown on that statement can be paid by the due date without periodic interest.",
      "The phrase does not mean a few extra days after the due date, and it does not necessarily apply to every transaction type. Cash advances often begin accruing interest from the transaction date. Balance transfers can also have separate promotional or standard terms.",
      "If the statement balance is not paid in full, the account may lose the purchase grace period. New purchases can then begin accruing interest according to the agreement. The number of cycles needed to restore the grace period also depends on the contract."
    ],
    stepsTitle: "Read the statement in the right order",
    stepsIntro: "Use the current statement and card agreement together; an app’s current balance can include activity from a later cycle.",
    steps: [
      "<strong>Find the statement balance.</strong> This is the balance at the cycle close, not necessarily the live balance today.",
      "<strong>Find the due date.</strong> Confirm the issuer’s cutoff time and an electronic or mail payment’s expected delivery.",
      "<strong>Identify transaction categories.</strong> Purchases, transfers and cash advances can have different APRs and grace-period rules.",
      "<strong>Check eligibility.</strong> Review whether a balance carried from the prior cycle removed the purchase grace period.",
      "<strong>Save payment confirmation.</strong> Confirm the payment posted and review the next statement for interest."
    ],
    exampleTitle: "Statement balance versus current balance",
    exampleIntro: "Assume a card with an eligible purchase grace period closes on June 30 and the statement balance is due July 25.",
    tableHeaders: ["Event", "Amount", "What it means"],
    tableRows: [
      ["Statement closes", "$1,200", "Amount subject to the statement’s due date"],
      ["New July purchase", "$150", "Usually belongs to the next statement"],
      ["Current app balance", "$1,350", "Includes both cycles"],
      ["Payment by July 25", "$1,200", "Can satisfy the prior statement balance if posted on time"]
    ],
    exampleNote: "The example is simplified. Pending transactions, adjustments, installment features and the specific agreement can change the amount needed to preserve a grace period.",
    checklistTitle: "Before relying on a grace period",
    checklistIntro: "Look for contract language, not a general assumption about how cards work.",
    checklist: [
      ["Coverage:", "Does the grace period apply to purchases only or to other balances?"],
      ["Condition:", "Must the full statement or another defined balance be paid?"],
      ["Deadline:", "What date and payment cutoff time apply?"],
      ["Restoration:", "What happens after a balance is carried?"],
      ["Interest check:", "Does the next statement show residual or trailing interest?"]
    ],
    caution: "If cash flow is tight, make at least the required minimum payment on time even when the full statement balance is not possible. Paying only the minimum generally does not preserve a purchase grace period.",
    faqs: [
      ["Are card issuers required to offer a grace period?", "No. A card issuer is not required to provide one, so read the account disclosures."],
      ["Does a grace period apply to cash advances?", "Usually not. Cash advances commonly begin accruing interest on the transaction date and may also have a fee."],
      ["Is the payment due date the same as the statement closing date?", "No. The statement closing date ends the billing cycle; the due date comes later and is the deadline for the required payment shown on that statement."]
    ],
    sources: [
      ["CFPB — What is a grace period?", "https://www.consumerfinance.gov/ask-cfpb/what-is-a-grace-period-for-a-credit-card-en-47/"],
      ["CFPB — How credit card interest is calculated", "https://www.consumerfinance.gov/ask-cfpb/how-does-my-credit-card-company-calculate-the-amount-of-interest-i-owe-en-51/"]
    ]
  }),
  guide({
    slug: "minimum-credit-card-payment-cost",
    hub: "Credit cards",
    title: "Minimum Credit Card Payments: Cost, Timing and a Payoff Plan",
    description: "Understand what the required minimum prevents, what it does not prevent and how additional payments change a revolving balance.",
    takeaways: [
      "The minimum payment is the least amount the issuer requires by the due date; the formula is defined by the account agreement.",
      "Paying the minimum on time can avoid a missed required payment, but interest can continue and payoff can take much longer.",
      "Statements generally include a minimum-payment warning and a comparison showing the effect of a higher payment.",
      "A fixed payment above the changing minimum can create a clearer payoff path when the budget allows."
    ],
    overviewTitle: "Minimum does not mean low total cost",
    overview: [
      "A credit-card minimum payment may be a small percentage of the balance, a dollar floor, interest and fees plus part of principal, or another formula described in the agreement. Because the minimum often falls as the balance falls, paying only that changing amount can stretch repayment.",
      "At least the minimum must reach the issuer by the due date to keep the required payment current. A late or missed payment can trigger fees, account consequences and negative credit reporting. Paying the minimum does not normally stop purchase interest when a balance is carried.",
      "Use the statement’s payoff disclosures as a starting point. Then test a fixed monthly amount that fits the household budget and leaves room for essentials and an emergency cushion."
    ],
    stepsTitle: "Turn the statement into an action plan",
    stepsIntro: "Begin with the actual balance, APRs, due date and minimum shown by the issuer.",
    steps: [
      "<strong>Protect the due date.</strong> Schedule at least the minimum with enough time for processing.",
      "<strong>Stop avoidable growth.</strong> Consider pausing new card spending while paying a carried balance.",
      "<strong>Choose an extra amount.</strong> A consistent fixed payment can reduce principal faster than a declining minimum.",
      "<strong>Review multiple APRs.</strong> Purchases, transfers and cash advances may accrue at different rates.",
      "<strong>Recalculate after changes.</strong> New transactions, rate changes and fees alter the payoff timeline."
    ],
    exampleTitle: "Illustrative payment comparison",
    exampleIntro: "Assume a $4,000 balance and no new purchases. The numbers below illustrate planning concepts and are not a lender quote or exact amortization schedule.",
    tableHeaders: ["Payment approach", "First-month payment", "Principal direction", "Planning trade-off"],
    tableRows: [
      ["Statement minimum", "Issuer formula", "Usually slowest", "Lowest required cash today"],
      ["Fixed $150", "$150", "Faster than a lower minimum", "Requires stable budget room"],
      ["Fixed $250", "$250", "Faster still", "Less cash for other goals"],
      ["Full statement balance", "$4,000", "Eliminates carried balance", "Requires available cash"]
    ],
    exampleNote: "Use the issuer’s statement warning or a reputable calculator with the exact APR and balance. If the card has more than one APR, a single-rate estimate will be incomplete.",
    checklistTitle: "Monthly payoff review",
    checklistIntro: "A short review prevents a plan from drifting after a new fee, rate change or purchase.",
    checklist: [
      ["Minimum:", "Has the required amount or due date changed?"],
      ["Interest:", "How much finance charge appeared this cycle?"],
      ["New charges:", "Did spending offset the payment?"],
      ["Extra payment:", "Can a windfall or reduced expense safely lower principal?"],
      ["Hardship:", "Should the issuer or a nonprofit credit counselor be contacted before a payment is missed?"]
    ],
    caution: "Do not drain money needed for housing, food, utilities, insurance or other priority obligations solely to accelerate a card payment. If repayment is not sustainable, seek help before falling behind.",
    faqs: [
      ["Does paying the minimum avoid interest?", "Usually not when a balance is carried. It satisfies the required payment, but interest generally continues under the agreement."],
      ["Why does my minimum payment change?", "The issuer’s formula can respond to the balance, interest, fees, past-due amounts and plan features. Review the current statement and agreement."],
      ["Can I pay more than once a month?", "Generally yes, but confirm how the issuer credits payments and always ensure at least the minimum is received by the due date."]
    ],
    sources: [
      ["CFPB — Know Before You Owe: Credit cards", "https://www.consumerfinance.gov/data-research/credit-card-data/know-you-owe-credit-cards/"],
      ["CFPB — Credit card contract definitions", "https://www.consumerfinance.gov/data-research/credit-card-data/know-you-owe-credit-cards/credit-card-contract-definitions/"]
    ]
  }),
  guide({
    slug: "debt-collection-validation-rights",
    hub: "Debt management",
    title: "Debt Collection Validation Notices: A Response Checklist",
    description: "Review a debt collector’s validation information, preserve the response deadline and decide what to verify before paying or disputing.",
    takeaways: [
      "A validation notice generally identifies the collector, creditor, account information, itemized amount and a 30-day dispute period.",
      "A written dispute or original-creditor request within the stated validation period can trigger important federal protections.",
      "Verify the collector and debt before sharing sensitive information or making a payment.",
      "State law can add protections and can affect time-barred debt, so legal advice may be appropriate."
    ],
    overviewTitle: "Treat the first notice as a document review",
    overview: [
      "A debt collector generally must provide validation information in the initial communication or within five days, unless an exception applies. The notice is designed to help identify the debt and explain how to dispute it. It should include the current creditor, an itemization of the amount and the end date of the validation period.",
      "Do not assume a familiar creditor name proves the caller or message is legitimate. Independently find the collector’s contact information, preserve the original envelope or electronic message and avoid sending a full Social Security number, bank login or payment credentials before verification.",
      "If the debt is unfamiliar, the amount is wrong or identity theft may be involved, act before the listed deadline. A timely written dispute generally requires the collector to pause collection of the disputed amount until it provides verification or a judgment copy."
    ],
    stepsTitle: "Respond without losing the paper trail",
    stepsIntro: "This is a general federal framework. State deadlines and remedies can differ.",
    steps: [
      "<strong>Save the notice.</strong> Record the date received and keep the envelope, email headers or screenshot.",
      "<strong>Match the identifiers.</strong> Compare the creditor, partial account number and itemized amount with your records.",
      "<strong>Verify the collector independently.</strong> Use a reliable directory or state regulator rather than a phone number supplied in an unexpected message.",
      "<strong>Choose the response.</strong> If appropriate, send a dispute or original-creditor request in writing before the validation-period end date.",
      "<strong>Keep proof.</strong> Preserve the letter, attachments and delivery confirmation, then review the collector’s response."
    ],
    exampleTitle: "Validation notice review grid",
    exampleIntro: "Use a private checklist rather than writing sensitive data on a shared device.",
    tableHeaders: ["Notice item", "What to check", "Possible next step"],
    tableRows: [
      ["Current creditor", "Recognized legal name", "Compare with statements"],
      ["Account reference", "Matches your records", "Do not publish full number"],
      ["Itemization", "Starting amount, interest, fees, credits", "Request clarification if inconsistent"],
      ["Validation end date", "Calendar the exact date", "Send a timely written response if needed"],
      ["Collector contact", "Independently verified", "Use a documented channel"]
    ],
    exampleNote: "Making a payment or acknowledging an old debt can have legal consequences in some states. Get state-specific legal advice before acting on a possibly time-barred debt.",
    checklistTitle: "Red flags and escalation",
    checklistIntro: "Legitimate collection activity is regulated. Pressure does not remove your right to verify information.",
    checklist: [
      ["Threats:", "Be cautious of arrest threats, secrecy demands or immediate payment pressure."],
      ["Payment method:", "Treat demands for gift cards, cryptocurrency or unusual transfers as a serious warning."],
      ["Identity theft:", "Use IdentityTheft.gov and the credit-report dispute process when an account is not yours."],
      ["Complaint record:", "Document the issue before contacting the CFPB or state regulator."],
      ["Legal papers:", "Do not ignore a lawsuit or court deadline; seek qualified legal help quickly."]
    ],
    caution: "This article is educational and not legal advice. Debt-collection rights, statutes of limitation and court procedures can depend on the debt and state law.",
    faqs: [
      ["How long is the validation period?", "The federal validation period generally ends 30 days after the consumer receives or is assumed to receive the validation information. Use the exact end date shown on the notice."],
      ["Must a dispute be in writing?", "A written dispute within the validation period can trigger specific verification and collection-pause protections. Follow the notice instructions and keep delivery proof."],
      ["Should I ignore a collector if I do not recognize the debt?", "No. Verify the collector, review the validation information and respond through a documented channel when appropriate. Never ignore formal court papers."]
    ],
    sources: [
      ["CFPB — Validation information requirements", "https://www.consumerfinance.gov/ask-cfpb/what-information-does-a-debt-collector-have-to-give-me-about-the-debt-en-331/"],
      ["CFPB — Regulation F validation notices", "https://www.consumerfinance.gov/rules-policy/regulations/1006/34/"]
    ]
  }),
  guide({
    slug: "nonprofit-credit-counseling-guide",
    hub: "Debt management",
    title: "Nonprofit Credit Counseling and Debt Management Plans",
    description: "Understand what a credit counselor can do, how a debt management plan works and which fees, creditors and risks to verify.",
    takeaways: [
      "Credit counseling can include budgeting help, debt education and a review of repayment options.",
      "A debt management plan typically routes one payment through the counseling organization to participating creditors.",
      "Nonprofit status does not automatically make every service free, suitable or high quality.",
      "Debt management is different from debt settlement, consolidation lending and credit repair."
    ],
    overviewTitle: "Counseling first, plan second",
    overview: [
      "A reputable credit-counseling session begins with the household’s income, required expenses, debts and goals. The counselor may help build a budget and explain options. A debt management plan is one possible outcome, not something every consumer needs.",
      "Under a plan, the consumer generally makes a scheduled payment to the counseling organization, which sends payments to participating creditors. Creditors may agree to different terms, but results are not guaranteed and not every debt or creditor necessarily participates.",
      "Before enrolling, ask for written fees, the complete creditor list, the proposed payment, the plan duration, what happens to card accounts and how missed payments are handled. Continue paying creditors until written confirmation shows the plan is active."
    ],
    stepsTitle: "Evaluate an organization and proposal",
    stepsIntro: "Nonprofit status is only one fact. Review the actual service, costs and contract.",
    steps: [
      "<strong>Start with the counseling session.</strong> Avoid an organization that recommends a plan before reviewing the full budget and debts.",
      "<strong>Verify credentials and complaints.</strong> Check state licensing requirements, independent accreditation and regulator records where applicable.",
      "<strong>Get every cost in writing.</strong> Ask about setup, monthly and educational fees and whether assistance is available.",
      "<strong>Confirm creditor participation.</strong> Compare the proposal with statements and contact creditors when needed.",
      "<strong>Monitor after enrollment.</strong> Review monthly statements to confirm each creditor receives and credits payments."
    ],
    exampleTitle: "Counseling, management and settlement compared",
    exampleIntro: "The labels can sound similar, but the consumer’s obligation and risk differ.",
    tableHeaders: ["Approach", "Basic structure", "Key question"],
    tableRows: [
      ["Credit counseling", "Education and budget review", "Is the advice useful without enrollment?"],
      ["Debt management plan", "One scheduled payment distributed to participating creditors", "What fees and creditor terms apply?"],
      ["Debt consolidation loan", "New loan repays old balances", "Does APR plus fees reduce total cost?"],
      ["Debt settlement", "Company seeks less than full balance, often after missed payments", "What are collection, credit, tax and lawsuit risks?"]
    ],
    exampleNote: "A lower monthly payment can result from reduced interest, a longer timeline or both. Review the total paid and the impact on other financial priorities.",
    checklistTitle: "Before signing a debt management agreement",
    checklistIntro: "A sustainable plan should leave enough money for current housing, utilities, food, insurance and transportation.",
    checklist: [
      ["Full payment:", "What amount will leave the bank account, including organization fees?"],
      ["Creditors:", "Which balances participate and which remain outside the plan?"],
      ["Terms:", "Are any interest or fee changes confirmed rather than estimated?"],
      ["Accounts:", "Will cards be closed or restricted?"],
      ["Failure plan:", "What happens after a late or missed plan payment?"]
    ],
    caution: "Do not stop paying creditors based only on a sales conversation. Obtain written activation details, confirm payment handling and review creditor statements throughout the plan.",
    faqs: [
      ["Is nonprofit credit counseling free?", "Some education or initial counseling may be free or low cost, but plans can have setup or monthly fees. Ask for a complete written schedule."],
      ["Does a debt management plan erase debt?", "No. It is generally a structured repayment arrangement, not debt forgiveness."],
      ["Is credit counseling the same as debt settlement?", "No. Counseling organizations generally focus on budgeting and repayment. Debt settlement companies seek negotiated reductions and can involve different credit, collection, tax and legal risks."]
    ],
    sources: [
      ["CFPB — What is credit counseling?", "https://www.consumerfinance.gov/ask-cfpb/what-is-credit-counseling-en-1451/"],
      ["CFPB — Counseling, settlement and consolidation", "https://www.consumerfinance.gov/ask-cfpb/what-is-the-difference-between-credit-counseling-and-debt-settlement-debt-consolidation-or-credit-repair-en-1449/"]
    ]
  }),
  guide({
    slug: "personal-loan-prequalification",
    hub: "Personal loans",
    title: "Personal Loan Prequalification: What to Compare Before Applying",
    description: "Use personal-loan prequalification carefully, distinguish soft and hard credit inquiries and compare the final disclosure rather than an estimate.",
    takeaways: [
      "Prequalification is an initial estimate, not approval or a guaranteed final offer.",
      "A lender may use a soft inquiry for an estimate and a hard inquiry after an application, but the process varies.",
      "Compare APR, fees, amount received, monthly payment, term and total repayment.",
      "Optional add-ons and payment-access permissions deserve the same scrutiny as the stated rate."
    ],
    overviewTitle: "An estimate before a credit decision",
    overview: [
      "Personal-loan prequalification can show possible terms based on information you provide and, in some cases, a limited credit review. It can help narrow a search, but the lender may change the terms or decline the application after verifying income, identity, obligations and credit.",
      "Ask exactly when the lender will obtain a credit report and whether the request is a soft or hard inquiry. A hard inquiry occurs when a lender obtains a report in connection with an application or other credit decision and can affect a score. Labels such as prequalified and preapproved are not used identically by every lender.",
      "The final comparison should use formal disclosures and the amount that reaches you after any deducted fee. A lower advertised rate can still produce a worse result if the term is longer, the origination fee is larger or optional products are included."
    ],
    stepsTitle: "A safer comparison sequence",
    stepsIntro: "Keep the loan purpose and affordable payment fixed while comparing lenders.",
    steps: [
      "<strong>Define the amount needed.</strong> Borrowing extra raises total cost even when the payment looks manageable.",
      "<strong>Ask about the inquiry.</strong> Confirm whether checking estimated terms affects the credit file and when a hard inquiry occurs.",
      "<strong>Compare matching terms.</strong> A 36-month quote and a 60-month quote are not equivalent even if the APR is similar.",
      "<strong>Review net proceeds.</strong> Subtract any fee withheld from the amount delivered.",
      "<strong>Inspect payment authorization.</strong> Understand automatic-debit terms, failed-payment rules and how to revoke authorization."
    ],
    exampleTitle: "Estimated offer comparison",
    exampleIntro: "These hypothetical figures show why the payment alone is incomplete.",
    tableHeaders: ["Item", "Estimate A", "Estimate B", "Question"],
    tableRows: [
      ["Requested amount", "$10,000", "$10,000", "Same need?"],
      ["Origination fee", "$0", "$500 deducted", "How much cash arrives?"],
      ["Term", "36 months", "48 months", "How long is the obligation?"],
      ["Monthly payment", "Higher", "Lower", "What is total repayment?"],
      ["Status", "Prequalified", "Prequalified", "What can still change?"]
    ],
    exampleNote: "Estimate B could show a lower payment because repayment lasts longer while delivering only $9,500. Use the disclosed APR and total of payments for the actual offer.",
    checklistTitle: "Before the full application",
    checklistIntro: "Pause if a lender will not explain its process or provide the required disclosures.",
    checklist: [
      ["Identity:", "Is the lender licensed where required and reachable through independently verified contact details?"],
      ["Credit:", "When does a hard inquiry occur?"],
      ["Cash received:", "Will any fee be deducted before funding?"],
      ["Contract:", "Are add-on products optional and separately priced?"],
      ["Budget:", "Does the payment still fit after essential expenses and variable bills?"]
    ],
    caution: "Do not submit many full applications merely to reveal basic terms. Start with lenders that explain the inquiry and disclosure process, and protect Social Security numbers and bank credentials from unverified sites.",
    faqs: [
      ["Does prequalification guarantee approval?", "No. The lender can verify information, obtain a report and change or decline the offer during underwriting."],
      ["Will prequalification affect my credit score?", "It depends on the lender’s process. Ask whether it uses a soft inquiry for estimates and when a hard inquiry occurs."],
      ["Is the lowest monthly payment the best loan?", "Not necessarily. A longer term can reduce the payment while increasing total interest. Compare APR, fees, net proceeds, term and total repayment."]
    ],
    sources: [
      ["CFPB — When lenders obtain a credit report", "https://www.consumerfinance.gov/ask-cfpb/when-will-a-lender-run-a-credit-check-or-obtain-a-copy-of-my-credit-report-en-322/"],
      ["CFPB — Personal installment loans", "https://www.consumerfinance.gov/ask-cfpb/what-is-a-personal-installment-loan-en-2114/"]
    ]
  }),
  guide({
    slug: "personal-loan-payment-calculator",
    hub: "Personal loans",
    title: "Personal Loan Payment Calculator: Formula, Fees and Total Cost",
    description: "Estimate a fixed-rate installment payment and compare it with origination fees, net proceeds and total repayment.",
    takeaways: [
      "A standard amortizing payment depends on principal, periodic rate and number of payments.",
      "An origination fee can reduce the cash received even when the stated loan amount is unchanged.",
      "APR is designed to reflect interest and certain finance charges, making it more useful than the interest rate alone.",
      "A calculator estimate must be checked against the lender’s final disclosures and payment schedule."
    ],
    overviewTitle: "The payment is one part of the loan",
    overview: [
      "For a fixed-rate, fully amortizing loan with equal monthly payments, the standard formula uses the amount financed, monthly interest rate and total number of payments. The result allocates early payments more heavily to interest and later payments more heavily to principal.",
      "Real offers can include an origination fee, documentation charge, optional insurance or other costs. A fee deducted from proceeds means the borrower receives less cash than the face amount. APR can include interest and certain required finance charges, but optional products and late fees may sit outside the estimate.",
      "Use a calculator to compare scenarios, not to recreate a lender’s legal disclosure. Rounding, first-payment timing and state rules can produce differences."
    ],
    stepsTitle: "Build an estimate from the disclosure",
    stepsIntro: "Use the same inputs for each offer and keep a copy of the calculation.",
    steps: [
      "<strong>Enter principal.</strong> Distinguish the stated loan amount from the cash delivered after deducted fees.",
      "<strong>Convert the annual rate.</strong> For a simple monthly model, divide the annual rate by 12 and express it as a decimal.",
      "<strong>Count payments.</strong> Multiply years by 12 for a monthly schedule unless the contract uses another frequency.",
      "<strong>Calculate total scheduled payments.</strong> Multiply the payment by the number of payments.",
      "<strong>Add or identify fees.</strong> Compare total cost and net proceeds, then verify them in the formal disclosure."
    ],
    exampleTitle: "Illustrative fixed-loan estimate",
    exampleIntro: "Assume a $12,000 fixed-rate loan at a hypothetical 10% annual interest rate for 36 monthly payments, with no additional fees.",
    tableHeaders: ["Input or result", "Illustrative value", "Why it matters"],
    tableRows: [
      ["Principal", "$12,000", "Amount used in the payment formula"],
      ["Monthly rate", "10% ÷ 12", "Periodic rate for the estimate"],
      ["Number of payments", "36", "Longer terms usually lower payment but extend interest"],
      ["Estimated payment", "About $387", "Rounded planning estimate"],
      ["Estimated total paid", "About $13,939", "Payment × 36, before other charges"]
    ],
    exampleNote: "If a $600 origination fee were deducted, the borrower might receive $11,400 while repaying the contract based on $12,000. The disclosed APR should reflect applicable finance charges.",
    checklistTitle: "Inputs that commonly break calculators",
    checklistIntro: "A clean-looking result can still be wrong when the underlying loan is not a simple fixed monthly installment.",
    checklist: [
      ["Rate type:", "Is the rate fixed for the full term?"],
      ["Payment pattern:", "Are there equal monthly payments, a balloon or a deferred period?"],
      ["Fees:", "Which charges are financed, deducted or paid separately?"],
      ["Add-ons:", "Has optional insurance or another product been included?"],
      ["Early payoff:", "How does the contract handle prepayment and accrued interest?"]
    ],
    caution: "Do not rely on a generic calculator for a variable-rate, balloon, interest-only or irregular-payment loan. Use the lender’s payment schedule and required disclosures.",
    faqs: [
      ["Why is the APR higher than the interest rate?", "APR can incorporate interest plus certain required finance charges, so it may be higher when the loan has an origination or similar fee."],
      ["Does a longer term make a loan cheaper?", "It can lower the monthly payment, but the borrower may pay interest for more months. Compare total repayment."],
      ["Can my lender’s payment differ from the estimate?", "Yes. Rounding, timing, fees and contract structure can change the result. The lender’s final disclosures control."]
    ],
    sources: [
      ["CFPB — Personal installment loan fees", "https://www.consumerfinance.gov/ask-cfpb/do-personal-installment-loans-have-fees-en-2120/"],
      ["CFPB — Interest rate versus APR", "https://www.consumerfinance.gov/ask-cfpb/what-is-the-difference-between-a-loan-interest-rate-and-the-apr-en-733/"]
    ]
  }),
  guide({
    slug: "mortgage-closing-costs",
    hub: "Mortgages & home buying",
    title: "Mortgage Closing Costs: Read the Loan Estimate and Cash to Close",
    description: "Separate loan costs, other closing costs, prepaids, escrow funding, lender credits and the cash required at mortgage closing.",
    takeaways: [
      "Closing costs are upfront charges for the mortgage and property transfer; they are different from the down payment.",
      "The Loan Estimate shows estimated rate, payment, closing costs and cash to close after a complete application.",
      "Compare lender-controlled charges across Loan Estimates based on the same loan scenario.",
      "A lender credit can reduce upfront cash in exchange for a higher interest rate or other trade-off."
    ],
    overviewTitle: "Read cash to close as a reconciliation",
    overview: [
      "The Loan Estimate is a standardized three-page form provided after a lender receives the six pieces of information that make up an application for this purpose. It separates loan costs from other costs and calculates estimated cash to close.",
      "Loan costs can include origination charges and required services. Other costs can include taxes, government charges, prepaids and the initial escrow deposit. Some items are controlled by the lender, some can be shopped and others depend on the property or government.",
      "Cash to close starts with the down payment and closing costs, then reflects deposits, seller credits, lender credits and other adjustments. Compare the Closing Disclosure with the most recent Loan Estimate before signing."
    ],
    stepsTitle: "Compare estimates without mixing scenarios",
    stepsIntro: "Ask lenders to quote the same loan amount, product type, term and rate-lock assumptions.",
    steps: [
      "<strong>Check page one.</strong> Confirm loan amount, rate structure, projected payment, taxes, insurance and whether escrowed amounts are included.",
      "<strong>Compare Section A.</strong> Origination charges are lender-controlled and can include points or processing charges.",
      "<strong>Review services.</strong> Separate services you cannot shop for from those where you can choose a provider.",
      "<strong>Inspect credits and prepaids.</strong> A credit can trade upfront cost for a higher rate; prepaids are not the same as lender fees.",
      "<strong>Reconcile cash to close.</strong> Confirm deposits, seller credits and every change on the Closing Disclosure."
    ],
    exampleTitle: "Illustrative cash-to-close bridge",
    exampleIntro: "These numbers are educational and do not represent typical costs in a particular market.",
    tableHeaders: ["Component", "Illustrative amount", "Treatment"],
    tableRows: [
      ["Down payment", "$40,000", "Part of cash to close, not a closing cost"],
      ["Loan costs", "$5,400", "Origination and required services"],
      ["Other costs", "$4,100", "Taxes, prepaids and escrow items"],
      ["Earnest-money deposit", "−$5,000", "Credit for amount already paid"],
      ["Estimated cash to close", "$44,500", "Subject to final reconciliation"]
    ],
    exampleNote: "The cash-to-close number can change as taxes, insurance, credits and prorations are finalized. Ask the lender or settlement agent to explain every change.",
    checklistTitle: "Documents and fraud precautions",
    checklistIntro: "Closing involves large transfers. Verify instructions through a known, independently confirmed contact.",
    checklist: [
      ["Loan Estimate:", "Keep each lender’s official form, not only a worksheet."],
      ["Closing Disclosure:", "Review it during the required review window."],
      ["Wire instructions:", "Confirm changes by calling a trusted number, not the number in an unexpected email."],
      ["Cash reserve:", "Do not spend every available dollar on closing if the home needs immediate repairs or the budget requires a cushion."],
      ["Questions:", "Resolve unfamiliar fees or term changes before signing."]
    ],
    caution: "Mortgage rules can differ by loan type and transaction. This guide does not replace the lender’s disclosures, a housing counselor, attorney or tax adviser.",
    faqs: [
      ["Are closing costs the same as the down payment?", "No. Closing costs are charges connected with the loan and transfer; the down payment reduces the amount financed. Both can affect cash to close."],
      ["Does no closing cost mean the fees disappear?", "Not necessarily. Costs may be covered through a lender credit associated with a higher rate or otherwise built into the transaction."],
      ["When do I receive the Closing Disclosure?", "For most covered mortgages, consumers generally receive it at least three business days before closing so they can review the final terms."]
    ],
    sources: [
      ["CFPB — Loan Estimate explainer", "https://www.consumerfinance.gov/owning-a-home/loan-estimate/"],
      ["CFPB — Closing Disclosure explainer", "https://www.consumerfinance.gov/owning-a-home/closing-disclosure/"]
    ]
  }),
  guide({
    slug: "mortgage-preapproval-documents",
    hub: "Mortgages & home buying",
    title: "Mortgage Preapproval Documents and Questions to Prepare",
    description: "Organize income, asset, debt and identity records for mortgage preapproval while understanding what the letter does and does not promise.",
    takeaways: [
      "A preapproval letter is a lender’s tentative willingness to lend up to an amount; it is not a guaranteed mortgage offer.",
      "Lenders use the words prequalification and preapproval differently and may request different levels of documentation.",
      "Prepare consistent records for income, assets, debts, identity and large or unusual transactions.",
      "A preapproval amount is not a household affordability target."
    ],
    overviewTitle: "Prepare for verification, not just a letter",
    overview: [
      "A mortgage preapproval can help a buyer show a seller that financing appears possible. The lender may review income, assets, debts and credit, then issue a letter based on assumptions and information available at that time.",
      "Documentation varies by lender and employment type. Common requests include recent pay statements, tax forms, bank or investment statements, identity documents and information about debts. Self-employed borrowers may need business and personal tax records, profit-and-loss information or additional explanations.",
      "Organize complete statements rather than screenshots that omit the account owner, period or page numbers. Preserve the source of down-payment and closing funds, and ask before moving large sums between accounts."
    ],
    stepsTitle: "Build a clean application folder",
    stepsIntro: "Use secure lender channels for sensitive documents and confirm the recipient independently.",
    steps: [
      "<strong>Income folder.</strong> Collect pay statements, W-2s or applicable self-employment and tax records for the periods requested.",
      "<strong>Asset folder.</strong> Save complete statements for accounts used for down payment, closing and reserves.",
      "<strong>Debt list.</strong> Reconcile reported obligations with current statements and document any disputed item.",
      "<strong>Housing budget.</strong> Set your own ceiling using taxes, insurance, association charges, maintenance and utilities.",
      "<strong>Question list.</strong> Ask about credit inquiries, expiration, assumptions, required reserves and what could change the decision."
    ],
    exampleTitle: "Document matrix by financial question",
    exampleIntro: "The lender’s actual list controls. This matrix helps explain why a document may be requested.",
    tableHeaders: ["Question", "Possible document", "Review point"],
    tableRows: [
      ["What income is stable?", "Pay records or tax documents", "Periods and definitions vary"],
      ["Where is cash held?", "Complete account statements", "Ownership and large deposits"],
      ["What debts are owed?", "Credit report and statements", "Payment and balance accuracy"],
      ["Who is applying?", "Identity information", "Use a secure channel"],
      ["What is affordable?", "Household budget", "Different from lender maximum"]
    ],
    exampleNote: "Do not create or alter documents to make the application appear stronger. Inconsistent or false information can delay or end the process and can carry serious consequences.",
    checklistTitle: "Questions the preapproval letter cannot answer",
    checklistIntro: "The letter is useful for shopping, but the final loan still depends on underwriting, property and market conditions.",
    checklist: [
      ["Rate:", "Is any rate quoted, and is it locked?"],
      ["Property:", "What appraisal, insurance, title or condition issues remain?"],
      ["Expiration:", "When does the letter expire and what refresh is needed?"],
      ["Changes:", "Could new debt, job changes or asset movements affect underwriting?"],
      ["Offers:", "When can official Loan Estimates from competing lenders be compared?"]
    ],
    caution: "Avoid taking on new credit, changing jobs or moving funds without understanding the potential effect on the application. Ask the lender before making a material financial change.",
    faqs: [
      ["Is preapproval the same as approval?", "No. It is tentative and subject to verification, underwriting, the property and other conditions."],
      ["Does preapproval commit me to a lender?", "No. A preapproval letter helps with home shopping; compare official Loan Estimates before choosing a lender."],
      ["How long does a preapproval last?", "Letters can expire, and lender practices vary. Check the date and refresh requirements on the specific letter."]
    ],
    sources: [
      ["CFPB — Get a preapproval letter", "https://www.consumerfinance.gov/owning-a-home/explore/get-a-preapproval-letter/"],
      ["CFPB — Shopping for a mortgage", "https://www.consumerfinance.gov/consumer-tools/mortgages/shopping-for-a-mortgage/"]
    ]
  }),
  guide({
    slug: "uninsured-underinsured-motorist-coverage",
    hub: "Auto insurance",
    title: "Uninsured and Underinsured Motorist Coverage",
    description: "Understand the purpose of uninsured and underinsured motorist coverage and the state-specific limits, definitions and stacking rules to verify.",
    takeaways: [
      "Uninsured motorist coverage can respond when an at-fault driver has no applicable liability insurance, subject to policy and state law.",
      "Underinsured motorist coverage addresses a gap when the at-fault driver’s liability limit is insufficient for a covered loss.",
      "Bodily injury and property damage components can be offered or required differently by state.",
      "Limits, deductibles, offsets, stacking and hit-and-run rules must be read in the actual policy."
    ],
    overviewTitle: "Coverage for another driver’s insurance gap",
    overview: [
      "Liability insurance pays for covered harm an insured driver causes to others. Uninsured motorist coverage is designed for certain losses involving a driver without applicable insurance. Underinsured motorist coverage can apply when that driver has insurance but not enough to cover a qualifying loss.",
      "The exact protection is state-specific. Some policies focus on bodily injury, some offer property-damage coverage, and some states require an offer, a rejection form or particular limits. A deductible can apply to property damage even when bodily-injury coverage has none.",
      "Do not assume the limit shown on the declarations page is available in every accident. Definitions of an insured person, covered vehicle, hit-and-run event, offset and stacking can materially change a claim."
    ],
    stepsTitle: "Review the declarations and policy together",
    stepsIntro: "The declarations page gives the headline limit; the policy explains when it applies.",
    steps: [
      "<strong>Identify each coverage.</strong> Separate uninsured bodily injury, underinsured bodily injury and any property-damage coverage.",
      "<strong>Compare limits.</strong> Review how the chosen limit relates to liability and medical coverage.",
      "<strong>Read definitions.</strong> Confirm who is insured while driving, riding or walking.",
      "<strong>Check state rules.</strong> Ask the state insurance department about offers, rejection forms and stacking.",
      "<strong>Understand claims duties.</strong> Notice deadlines, police reports and consent-to-settle provisions may matter."
    ],
    exampleTitle: "Three simplified accident scenarios",
    exampleIntro: "These examples show the coverage question, not a promise that a particular policy will pay.",
    tableHeaders: ["Scenario", "Primary issue", "Document to check"],
    tableRows: [
      ["At-fault driver has no insurance", "Uninsured motorist eligibility", "Policy definition and state law"],
      ["At-fault driver has a low liability limit", "Underinsured motorist calculation", "Limit, offsets and exhaustion terms"],
      ["Hit-and-run driver is unknown", "Phantom-vehicle requirements", "Contact, report and notice provisions"],
      ["Damage to your vehicle only", "Property-damage protection", "UMPD, collision and deductible terms"]
    ],
    exampleNote: "Collision coverage can sometimes address vehicle damage regardless of the other driver’s insurance, while uninsured property-damage coverage may have different requirements.",
    checklistTitle: "Questions for an agent or insurer",
    checklistIntro: "Ask for answers tied to the policy form and endorsement numbers.",
    checklist: [
      ["People:", "Who is covered inside and outside the insured vehicle?"],
      ["Limits:", "Is the amount per person, per accident or combined?"],
      ["Vehicles:", "Can limits from multiple vehicles or policies be stacked?"],
      ["Property:", "Is vehicle damage included and what deductible applies?"],
      ["Procedure:", "What must be reported, to whom and by when?"]
    ],
    caution: "Insurance law and contract wording vary widely by state. Use this guide to prepare questions, then rely on the policy and your state insurance department.",
    faqs: [
      ["Is uninsured motorist coverage required?", "Requirements vary by state. Some require it, some require insurers to offer it, and others allow different choices."],
      ["Is underinsured coverage the same as uninsured coverage?", "No. Underinsured coverage concerns an at-fault driver whose insurance is insufficient; uninsured coverage concerns a driver with no applicable insurance or another defined uninsured situation."],
      ["Does it pay to repair my car?", "Only if the policy includes an applicable property-damage component or another coverage such as collision responds. Check the declarations and policy."]
    ],
    sources: [
      ["NAIC — Auto insurance consumer guide", "https://content.naic.org/consumer/auto-insurance.htm"],
      ["NAIC — Consumer auto shopping tool", "https://content.naic.org/sites/default/files/inline-files/topic_transparency_readability_consumer_auto_tool.pdf"]
    ]
  }),
  guide({
    slug: "auto-insurance-claim-checklist",
    hub: "Auto insurance",
    title: "Auto Insurance Claim Checklist After a Crash",
    description: "Prioritize safety, document the scene, notify the insurer and track estimates, repairs, rental costs and claim communications.",
    takeaways: [
      "Safety and medical needs come before insurance documentation.",
      "Photographs, witness details and an incident or police report can preserve facts while they are fresh.",
      "Report the claim promptly through a verified insurer channel and ask what the policy requires next.",
      "Keep a dated claim log with expenses, estimates, adjuster messages and settlement documents."
    ],
    overviewTitle: "Start with people, then preserve facts",
    overview: [
      "After a crash, move to a safe place if possible, call emergency services when needed and follow local reporting requirements. Do not risk injury to photograph a dangerous roadway. Be courteous, exchange required information and avoid speculating about fault at the scene.",
      "Document vehicle positions, visible damage, the surroundings, road conditions and relevant signs when it is safe. Collect names, contact details, insurer information and witness details. A police or incident report can help preserve the record but does not replace the insurer’s investigation.",
      "Notify the insurer or agent promptly. Ask for the claim number, adjuster contact, coverage being investigated, deductible, repair process, rental terms and any deadline for submitting documents."
    ],
    stepsTitle: "A claim workflow from scene to closure",
    stepsIntro: "Keep original files and send copies through the insurer’s secure method.",
    steps: [
      "<strong>At the scene.</strong> Address safety, injuries and legal reporting; exchange information and document only when safe.",
      "<strong>Open the claim.</strong> Use the number on the policy, insurer website or verified app rather than an unsolicited link.",
      "<strong>Protect the vehicle.</strong> Ask about towing and storage to avoid unnecessary charges and make reasonable temporary protection when appropriate.",
      "<strong>Review estimates.</strong> Understand approved repair facilities, parts, supplements, deductible and total-loss procedure.",
      "<strong>Close carefully.</strong> Read any release or settlement, confirm outstanding rental and medical issues and save the final documents."
    ],
    exampleTitle: "Claim file checklist",
    exampleIntro: "Organize the claim by document type rather than keeping everything in one message thread.",
    tableHeaders: ["Folder", "Examples", "Tracking detail"],
    tableRows: [
      ["Incident", "Photos, report, witness notes", "Original date and location"],
      ["Coverage", "Policy, declarations, deductible", "Applicable endorsements"],
      ["Vehicle", "Estimates, supplements, invoices", "Repair status"],
      ["Expenses", "Towing, storage, rental receipts", "What requires approval"],
      ["Communication", "Emails, call notes, letters", "Date, person and next action"]
    ],
    exampleNote: "If another insurer contacts you, understand who it represents before giving a statement or signing a release. Your own insurer or a qualified attorney can explain options in a complex injury or liability dispute.",
    checklistTitle: "Questions for the adjuster",
    checklistIntro: "Write down the answer and the policy provision when the question concerns coverage.",
    checklist: [
      ["Next deadline:", "What document or inspection is due, and when?"],
      ["Repair:", "Who selects the shop, and how are supplemental damages handled?"],
      ["Transport:", "What towing, storage and rental amounts are authorized?"],
      ["Deductible:", "When is it paid and can recovery from another party change it?"],
      ["Escalation:", "How can a disputed delay or decision be reviewed?"]
    ],
    caution: "State law controls many claim practices and deadlines. Contact the state insurance department if the insurer does not resolve a documented concern through its normal process.",
    faqs: [
      ["Should I admit fault at the scene?", "Provide accurate facts and cooperate with legal requirements, but avoid guesses or conclusions about fault while the event is still being investigated."],
      ["Can I choose my repair shop?", "Rules vary by state. Ask the insurer and state insurance department about your rights and how estimates or supplemental repairs are handled."],
      ["What if the insurer delays or denies the claim?", "Request a written explanation tied to the policy, preserve the claim record and use the insurer’s appeal process. You can also contact the state insurance department."]
    ],
    sources: [
      ["NAIC — Crash documentation and claim tips", "https://content.naic.org/article/consumer-insight-dont-be-crash-dummy"],
      ["NAIC — How to file an insurance complaint", "https://content.naic.org/consumer/how-to-file-complaint"]
    ]
  }),
  guide({
    slug: "flood-insurance-basics",
    hub: "Home & life insurance",
    title: "Flood Insurance Basics: Building, Contents and Waiting Periods",
    description: "Understand why standard homeowners coverage usually excludes flood, how building and contents protection differ and what to check before a policy begins.",
    takeaways: [
      "Most homeowners and renters policies do not cover flood damage, so separate flood insurance may be needed.",
      "NFIP building coverage and contents coverage protect different property and are generally purchased separately.",
      "Coverage limits, exclusions, basement restrictions and separate deductibles affect the claim result.",
      "An NFIP policy generally has a waiting period, with defined exceptions, so buying only when a storm approaches can be too late."
    ],
    overviewTitle: "Flood is a separate insurance decision",
    overview: [
      "Homeowners insurance often covers certain sudden water losses inside a home but generally excludes the peril of flood. The National Flood Insurance Program defines flood and provides standardized policies through participating insurers. Private flood policies may use different limits and terms.",
      "NFIP building coverage can protect the structure and specified systems, while contents coverage addresses covered personal belongings. The two coverages have separate limits and generally separate deductibles. A renter usually considers contents rather than the building itself.",
      "Coverage is not unlimited. Property outside the insured building, certain basement contents, vehicles, currency, temporary housing and business-interruption loss can be limited or excluded. Read the current policy form rather than relying on a general list."
    ],
    stepsTitle: "Review risk and coverage before renewal season",
    stepsIntro: "A flood map is useful, but risk does not end at the boundary of a high-risk zone.",
    steps: [
      "<strong>Check location information.</strong> Review FEMA mapping and local drainage or wildfire conditions without treating the map as a guarantee.",
      "<strong>Estimate building needs.</strong> Separate the home’s structure and systems from land value.",
      "<strong>Inventory contents.</strong> Photograph belongings, keep receipts when available and note items stored below grade.",
      "<strong>Compare policy forms.</strong> Review NFIP and private options for definitions, limits, deductibles, replacement terms and exclusions.",
      "<strong>Plan the start date.</strong> Confirm the waiting period and any exception before assuming coverage is active."
    ],
    exampleTitle: "Building versus contents questions",
    exampleIntro: "The actual policy controls. This table helps organize the review.",
    tableHeaders: ["Property or cost", "Possible category", "Question to verify"],
    tableRows: [
      ["Foundation and installed systems", "Building", "Is the cause a covered flood?"],
      ["Furniture and clothing", "Contents", "What valuation method applies?"],
      ["Finished basement belongings", "Limited or excluded", "What basement restrictions apply?"],
      ["Temporary lodging", "Often not NFIP coverage", "Is other assistance or private coverage available?"],
      ["Vehicle", "Not building or contents", "Would comprehensive auto coverage respond?"]
    ],
    exampleNote: "A mortgage requirement sets a minimum insurance obligation, not necessarily the amount a household needs to rebuild or replace belongings.",
    checklistTitle: "Before purchasing a policy",
    checklistIntro: "Ask for a written summary and the full form, including endorsements.",
    checklist: [
      ["Definition:", "What events satisfy the policy’s definition of flood?"],
      ["Limits:", "Are building and contents limits adequate and separate?"],
      ["Valuation:", "Is the claim paid on replacement cost or actual cash value for each property type?"],
      ["Deductibles:", "How many deductibles can apply to one event?"],
      ["Start date:", "When does coverage become effective?"]
    ],
    caution: "Federal program terms, limits and pricing rules can change. Check current NFIP guidance and the exact policy at purchase or renewal.",
    faqs: [
      ["Does homeowners insurance cover flood?", "Most homeowners policies do not cover flood damage. Separate flood coverage may be needed."],
      ["Are building and contents one NFIP coverage?", "No. They are separate coverages with separate limits and generally separate deductibles."],
      ["Can I buy coverage immediately before a storm?", "An NFIP policy generally has a 30-day waiting period, with specified exceptions. Confirm the effective date in writing."]
    ],
    sources: [
      ["NFIP — Flood insurance basics", "https://www.floodsmart.gov/flood-insurance-basics"],
      ["NFIP — Buying a flood policy", "https://www.floodsmart.gov/get-insured/buy-a-policy"]
    ]
  }),
  guide({
    slug: "life-insurance-needs-framework",
    hub: "Home & life insurance",
    title: "How Much Life Insurance? A Needs-Based Planning Framework",
    description: "Estimate a life-insurance need from dependents, income replacement, debts, education, final expenses and financial resources already available.",
    takeaways: [
      "A needs-based estimate starts with obligations survivors would face and subtracts dependable resources available to meet them.",
      "Income replacement should reflect the years and expenses that actually depend on the insured person.",
      "Employer coverage can change after a job ends and should be reviewed separately from an individual policy.",
      "Beneficiary designations, policy ownership, taxes and estate questions can require qualified professional advice."
    ],
    overviewTitle: "Replace a financial contribution, not a salary headline",
    overview: [
      "A simple salary multiple is quick, but it can ignore the household’s actual structure. A needs-based estimate lists the costs and income gaps that death would create: housing, caregiving, education, debts, final expenses and the time dependents need support.",
      "Then subtract resources that are reasonably available for those needs, such as dedicated savings, existing individual policies and certain survivor benefits. Do not automatically count retirement assets or a home if using them would undermine the survivors’ plan.",
      "Repeat the calculation for each adult. An unpaid caregiver can create a large replacement cost even without wages. A business owner may also need separate succession or buy-sell planning."
    ],
    stepsTitle: "Build the estimate in layers",
    stepsIntro: "Keep the assumptions visible so the estimate can be updated after a life change.",
    steps: [
      "<strong>Immediate cash needs.</strong> Estimate final expenses, legal costs and short-term household liquidity.",
      "<strong>Debt and housing.</strong> Decide which balances should be repaid and which can continue within survivor income.",
      "<strong>Income or service replacement.</strong> Estimate the annual gap and the number of years it matters.",
      "<strong>Future goals.</strong> Add education, dependent care or other commitments with a clear timeframe.",
      "<strong>Available resources.</strong> Subtract assets and existing coverage that are dependable and appropriate for these purposes."
    ],
    exampleTitle: "Illustrative needs worksheet",
    exampleIntro: "These figures are hypothetical and deliberately rounded. They do not represent a recommendation.",
    tableHeaders: ["Need or resource", "Illustrative amount", "Reasoning question"],
    tableRows: [
      ["Immediate and final costs", "$30,000", "What cash is needed quickly?"],
      ["Debt or housing support", "$220,000", "Which balances should be retired?"],
      ["Income and caregiving gap", "$450,000", "How much and for how many years?"],
      ["Education or other goals", "$100,000", "What commitments remain?"],
      ["Dedicated resources", "−$200,000", "Which assets and policies are truly available?"],
      ["Preliminary gap", "$600,000", "Before product design and professional review"]
    ],
    exampleNote: "The framework does not choose term, permanent or employer coverage. First estimate the need, then compare products and affordability.",
    checklistTitle: "Review beyond the death benefit",
    checklistIntro: "Policy quality includes definitions, exclusions, riders, premiums and insurer information, not only the face amount.",
    checklist: [
      ["Beneficiary:", "Is the designation current and coordinated with estate documents?"],
      ["Premium:", "Can the household maintain it for the intended period?"],
      ["Term:", "Does the coverage period match the financial dependency?"],
      ["Employer plan:", "What happens after job change, retirement or leave?"],
      ["Insurer:", "Review licensing, financial information and complaint resources through state regulators."]
    ],
    caution: "Life-insurance taxation, ownership and estate consequences can be complex. Consult licensed insurance, legal and tax professionals for advice about a specific household or policy.",
    faqs: [
      ["Is ten times income always enough?", "No universal multiple fits every household. Dependents, caregiving, debt, time horizon, assets and existing coverage can materially change the need."],
      ["Should I include employer life insurance?", "Include it only after reviewing the amount, portability and what happens when employment ends."],
      ["Does a stay-at-home caregiver need coverage?", "Possibly. Replacing childcare, transportation, household management and other services can create a significant cost even without lost wages."]
    ],
    sources: [
      ["NAIC — Life insurance consumer resources", "https://content.naic.org/consumer/life-insurance.htm"],
      ["NAIC — Life insurance coverage review", "https://content.naic.org/article/life-insurance-very-important-beneficiaries-yet-less-half-consumers-are-confident-they-have-enough"]
    ]
  }),
  guide({
    slug: "employer-match-vesting",
    hub: "Retirement, taxes & benefits",
    title: "401(k) Employer Match and Vesting: Read Your Plan",
    description: "Separate your own retirement contributions from employer contributions and understand matching formulas, vesting schedules and job-change decisions.",
    takeaways: [
      "Your own 401(k) contributions and their earnings are always fully vested.",
      "Employer matching or other contributions can follow a vesting schedule unless the plan provides immediate vesting.",
      "The match formula, eligible compensation, contribution timing and true-up rules are plan-specific.",
      "Leaving before a vesting milestone can forfeit the unvested portion of employer contributions."
    ],
    overviewTitle: "Match and vesting answer different questions",
    overview: [
      "An employer match explains how the employer contributes when the employee contributes. Vesting explains when employer-provided money becomes nonforfeitable. A person can receive matching deposits on statements but still forfeit an unvested portion after leaving.",
      "Employees are always fully vested in their own contributions and related earnings. Employer contributions may vest immediately, gradually or after a cliff period, subject to federal minimum standards and the plan’s more generous terms. Safe-harbor and certain other plans can have different rules.",
      "The Summary Plan Description and benefit statement should explain the formula, eligible pay, contribution deadlines, vesting service and forfeiture rules. Payroll settings alone cannot show the complete benefit."
    ],
    stepsTitle: "Translate the plan into four numbers",
    stepsIntro: "Use current plan documents and year-to-date payroll records.",
    steps: [
      "<strong>Employee contribution rate.</strong> Confirm traditional, Roth or other available deferral choices and current legal limits.",
      "<strong>Match formula.</strong> Identify the employer percentage and the employee contribution needed to receive the available match.",
      "<strong>Eligible compensation.</strong> Check whether bonuses, commissions or other pay are included.",
      "<strong>Vested percentage.</strong> Determine credited service and the schedule that applies to employer money.",
      "<strong>Timing rules.</strong> Ask whether each paycheck must include a contribution or whether the plan has a year-end true-up."
    ],
    exampleTitle: "Illustrative match and vesting record",
    exampleIntro: "Assume a plan matches 50% of employee contributions up to 6% of eligible pay and uses a graded vesting schedule. Actual plans vary.",
    tableHeaders: ["Item", "Illustrative value", "Interpretation"],
    tableRows: [
      ["Eligible pay", "$60,000", "Defined by the plan"],
      ["Employee contribution", "6% = $3,600", "Always vested"],
      ["Employer match", "3% = $1,800", "Before vesting analysis"],
      ["Vested employer percentage", "40%", "Based on assumed service schedule"],
      ["Vested employer amount", "$720", "Simplified, excluding investment change"]
    ],
    exampleNote: "A job-change decision should also consider salary, health coverage, career opportunity and plan rules. Vesting is one factor, not a reason to remain in an unsafe or unsuitable job.",
    checklistTitle: "Before changing contributions or jobs",
    checklistIntro: "Ask the plan administrator for written answers when a statement is unclear.",
    checklist: [
      ["Formula:", "What contribution captures the full available employer match?"],
      ["True-up:", "Can uneven contributions miss a match without a year-end adjustment?"],
      ["Service date:", "When does the next vesting milestone occur?"],
      ["Forfeiture:", "What happens to unvested money after separation, rehire or a break in service?"],
      ["Fees and investments:", "Does the contribution level still fit the budget and available options?"]
    ],
    caution: "Tax limits and plan terms change. Use current IRS guidance and your plan documents before adjusting payroll deferrals.",
    faqs: [
      ["Can I lose my own 401(k) contributions?", "No. Your employee contributions and their earnings are fully vested. Vesting schedules generally concern employer contributions."],
      ["Does every employer match contributions?", "No. A match is a plan feature, not a universal requirement. Read the plan documents."],
      ["What is cliff vesting?", "A cliff schedule provides no vested percentage before a stated service point and 100% at that point. The plan may instead use graded or immediate vesting."]
    ],
    sources: [
      ["U.S. Department of Labor — Retirement plan and vesting guide", "https://www.dol.gov/agencies/ebsa/about-ebsa/our-activities/resource-center/publications/what-you-should-know-about-your-retirement-plan"],
      ["IRS — 401(k) plans", "https://www.irs.gov/retirement-plans/401k-plans"]
    ]
  }),
  guide({
    slug: "required-minimum-distributions-basics",
    hub: "Retirement, taxes & benefits",
    title: "Required Minimum Distributions: Accounts, Timing and Calculation",
    description: "Understand which retirement accounts require annual distributions, when deadlines apply and how prior-year balances and IRS factors are used.",
    takeaways: [
      "RMDs generally apply to traditional IRAs and many employer retirement plans beginning at the applicable age under current law.",
      "Roth IRAs and designated Roth accounts generally do not require lifetime RMDs for the original owner under current federal rules.",
      "The calculation generally divides the prior December 31 balance by an IRS life-expectancy factor.",
      "The first-year delay option can place two taxable distributions in one calendar year."
    ],
    overviewTitle: "A withdrawal rule, not a spending rule",
    overview: [
      "A required minimum distribution is the minimum amount federal tax rules require an account owner to withdraw for a year. The money does not have to be spent; after distribution and any tax withholding, it can be saved or invested in a taxable account if appropriate.",
      "Under current rules, the applicable starting age is generally 73 for people who reach age 72 after 2022 and age 73 before 2033. Later cohorts can have a different applicable age. Traditional, SEP and SIMPLE IRAs generally require distributions even if the owner is working.",
      "Some workplace plans can allow a non-5% owner to delay distributions until retirement. Each employer plan usually must satisfy its own RMD, while multiple traditional IRAs can generally be calculated separately and the total withdrawn from one or more IRAs."
    ],
    stepsTitle: "Prepare the calculation before year-end",
    stepsIntro: "Custodians may estimate the amount, but the account owner remains responsible for the correct distribution.",
    steps: [
      "<strong>List covered accounts.</strong> Separate traditional IRAs, inherited accounts, workplace plans and Roth accounts because the rules differ.",
      "<strong>Find prior-year balances.</strong> Use the December 31 value for each relevant account.",
      "<strong>Select the correct table.</strong> The IRS Uniform Lifetime, Joint and Last Survivor or Single Life table may apply depending on the facts.",
      "<strong>Calculate each amount.</strong> Divide the balance by the applicable life-expectancy factor and account for any special adjustment.",
      "<strong>Schedule distribution and withholding.</strong> Allow processing time and plan for federal and state tax consequences."
    ],
    exampleTitle: "Simplified RMD calculation",
    exampleIntro: "Assume a prior December 31 traditional IRA balance of $265,000 and an applicable IRS factor of 26.5. The factor is illustrative for this example; verify the correct table and year.",
    tableHeaders: ["Input", "Illustrative value", "Calculation"],
    tableRows: [
      ["Prior December 31 balance", "$265,000", "Custodian year-end value"],
      ["Life-expectancy factor", "26.5", "From applicable IRS table"],
      ["Calculated RMD", "$10,000", "$265,000 ÷ 26.5"],
      ["Tax withholding", "Chosen separately", "Does not change gross distribution requirement"]
    ],
    exampleNote: "Inherited accounts, annuities, multiple employer plans and qualified charitable distributions need additional analysis. Do not apply this simplified example to them.",
    checklistTitle: "Avoid deadline and aggregation errors",
    checklistIntro: "Review the plan early enough to correct a rejected or incomplete transaction.",
    checklist: [
      ["First year:", "Would delaying the first RMD create two taxable distributions in the following year?"],
      ["Aggregation:", "Which IRAs can be combined, and which employer plans must distribute separately?"],
      ["Roth status:", "Is the account a Roth IRA, designated Roth account or inherited Roth account?"],
      ["Charitable planning:", "Does a qualified charitable distribution fit and meet current rules?"],
      ["Proof:", "Keep year-end balances, calculations, distribution confirmations and tax forms."]
    ],
    caution: "RMD rules are technical and have changed in recent years. Verify current IRS guidance and consult a tax professional for inherited accounts, missed distributions or unusual plan terms.",
    faqs: [
      ["Do Roth IRAs require lifetime RMDs?", "Under current federal rules, Roth IRAs do not require lifetime RMDs for the original owner. Beneficiary rules still apply."],
      ["Can I take all IRA RMDs from one IRA?", "Generally, traditional IRA RMDs are calculated for each IRA and the total can be withdrawn from one or more IRAs. Employer plans generally must satisfy their RMDs separately."],
      ["Can I wait until April 1 for every RMD?", "No. The April 1 option generally applies only to the first required year. Later annual RMDs are generally due by December 31."]
    ],
    sources: [
      ["IRS — Required minimum distribution FAQs", "https://www.irs.gov/retirement-plans/retirement-plan-and-ira-required-minimum-distributions-faqs"],
      ["IRS — Retirement plan resources", "https://www.irs.gov/retirement-plans"]
    ]
  })
];
