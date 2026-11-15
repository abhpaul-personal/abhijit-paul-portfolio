const title = "Agentic AI Onboarding for ONDC Sellers";
const imageDir = "/projects/agentic-ai-onboarding";

export const ondcProject = {
  title,
  label: "Personal project",
  path: "/projects/agentic-ai-onboarding",
  liveUrl: "https://agentic-onboarding-ondc.vercel.app/",
  codeUrl: "https://github.com/abhpaul-personal/agentic-onboarding-ondc",
  tags: [
    "Agentic AI",
    "Human-in-the-loop",
    "B2B SaaS",
    "Data mapping",
    "Next.js",
    "Claude API",
  ],
  cardText:
    "Small sellers get onboarded to ONDC, but far fewer go live with a complete, compliant catalog. I designed and built an agentic onboarding flow that turns messy seller files into ONDC-ready catalogs, with five human approval gates for anything legal or financial, and a run-once cache that replays agent results instead of paying for the same model call twice.",
  metaDescription:
    "I designed and built an agentic onboarding flow that turns messy seller files into ONDC-ready catalogs, with five human approval gates.",
  hero: {
    src: `${imageDir}/hero.webp`,
    width: 1440,
    height: 765,
    alt: `${title} landing page with the headline and the two-stage flow diagram.`,
  },
  gallery: [
    {
      src: `${imageDir}/mapping-review.webp`,
      width: 1312,
      height: 730,
      caption:
        "The reviewer sees each proposed mapping with its confidence, risk level and reason.",
      alt: `${title} mapping review screen. The reviewer sees each proposed mapping with its confidence, risk level and reason.`,
    },
    {
      src: `${imageDir}/gstin-caught.webp`,
      width: 1312,
      height: 424,
      caption:
        "A real checksum catches a GSTIN the model misread from a certificate image.",
      alt: `${title} verification screen. A real checksum catches a GSTIN the model misread from a certificate image.`,
    },
    {
      src: `${imageDir}/bulk-g0.webp`,
      width: 1312,
      height: 618,
      caption: "Bulk onboarding: two planted seller errors caught before approval.",
      alt: `${title} bulk onboarding screen. Two planted seller errors caught before approval.`,
    },
    {
      src: `${imageDir}/scorecard.webp`,
      width: 1312,
      height: 212,
      caption: "Every run is scored against ground truth.",
      alt: `${title} scorecard screen. Every run is scored against ground truth.`,
    },
  ],
  problem:
    "Seller apps re-key catalogs by hand from Excel sheets, price-list photos and WhatsApp messages. Statutory fields such as MRP, net quantity and FSSAI licence are often missing, so many sellers who are onboarded never go live with a compliant catalog.",
  built:
    "A two-stage flow. Stage 1 onboards each seller once: an intake agent reads the business, GST, FSSAI and bank details, a verification step runs real checks, and a reviewer approves the seller. Stage 2 runs for every catalog: agents extract the items, map the seller's columns to ONDC attributes with a confidence score and a reason, classify each item and validate it. A person approves at every gate where a wrong value would carry legal or financial risk, and anything the agents cannot resolve goes to a fallback queue.",
  decisions: [
    "An agent never invents a statutory value. It can only extract it, pre-fill it from the approved seller profile, or ask the seller.",
    "Deterministic checks run as real code: GSTIN checksum, FSSAI expiry, IFSC format, barcode check digit, MRP versus price and duplicates.",
    "Run once, replay forever: each agent step is cached by a hash of its input, prompt, schema and model, so the public demo replays real model output and never calls the model again.",
  ],
  testing: [
    "On one sample seller, the model misread the GSTIN on a certificate image. The checksum check caught it and the reviewer sent it back at the approval gate. This is the case the design exists for.",
    "In bulk onboarding of 12 cooperative sellers, both planted errors (an invalid GSTIN and an expired FSSAI licence) were caught before approval.",
    "On the evaluation kit's trap catalog of 32 rows, the flow catches all 13 planted errors (bad barcodes, prices above MRP, missing FSSAI licences, duplicates and an unsupported \"organic\" claim), and no agent invents a statutory value.",
    "Lighthouse 100 on accessibility, best practices and SEO on all four main pages, and 100 on performance on desktop, with 238 unit tests and 16 end-to-end tests including accessibility checks.",
  ],
  howBuilt:
    "PRD first, then nine milestones with Claude Code, reviewing and approving each one. The PRD and a synthetic evaluation kit with ground truth are in the repo.",
  footnote:
    "Personal project, not affiliated with ONDC. All sellers and identifiers in the demo are fictional test data.",
} as const;
