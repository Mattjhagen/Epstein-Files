import React from 'react';
import { EvidenceRow, Attachment } from './types';

export const EVIDENCE_DATA: EvidenceRow[] = [
  {
    individual: "Donald Trump",
    role: "President (Former/Current)",
    verifiedEvidence: "Flight logs (1990s); 2011 Epstein email intent to call; Photos",
    rawIntelligence: "NTOC tips alleging rape & 'orgy parties'",
    dojStatus: "Claims labeled 'unfounded and false'"
  },
  {
    individual: "Howard Lutnick",
    role: "Secretary of Commerce",
    verifiedEvidence: "Emails (2012) planning family island trip; 'Nice seeing you' confirmation",
    rawIntelligence: "N/A",
    dojStatus: "Contradicts public denial of post-2005 contact"
  },
  {
    individual: "Bill Clinton",
    role: "President (Former)",
    verifiedEvidence: "Flight logs; Photos; Painting inventory",
    rawIntelligence: "NTOC tips alleging 'orgy party' presence",
    dojStatus: "No specific DOJ disclaimer issued"
  },
  {
    individual: "Steve Bannon",
    role: "White House Strategist",
    verifiedEvidence: "Texts (2018-19) re: media strategy; Apple Watch gift receipt",
    rawIntelligence: "N/A",
    dojStatus: "Relationship confirmed operational/strategic"
  }
];

export const ATTACHMENTS: Attachment[] = [
  { name: "Full_Release_Batch_1.pdf", type: "PDF", size: "1.2 GB", description: "The primary corpus of 3.5 million pages." },
  { name: "MCC_Surveillance_Video_Uncut.mp4", type: "VIDEO", size: "4.5 GB", description: "Full uncut surveillance footage from the night of death." },
  { name: "Flight_Logs_Master.csv", type: "DATA", size: "24 MB", description: "Digitized flight manifests from 1995-2015." },
  { name: "Epstein_Musk_Emails.pdf", type: "PDF", size: "4 MB", description: "Extracted correspondence 2012-2013." },
  { name: "NTOC_Complaint_Log.xlsx", type: "DATA", size: "12 MB", description: "Raw spreadsheet of National Threat Operations Center tips." }
];

export const REPORT_TITLE = "Forensic Analysis of the January 30, 2026 Department of Justice Epstein Files Release";
export const REPORT_SUBTITLE = "A Comprehensive Review of Investigative Materials, Identified Individuals, and Institutional Implications";
export const PUBLISH_DATE = "January 30, 2026";

export const AI_SYSTEM_INSTRUCTION = `You are the Forensic AI Assistant for the "Epstein Files Release 2026" report. Your role is to answer questions about the report accurately, professionally, and objectively based ONLY on the provided context.

CONTEXT - REPORT SUMMARY:
1. OVERVIEW: On Jan 30, 2026, the DOJ released 3.5 million pages of documents, 2,000 videos, and 180,000 images related to Jeffrey Epstein and Ghislaine Maxwell, complying with the "Epstein Files Transparency Act" signed by Donald Trump in 2025. It is raw investigative data.
2. MISSING DATA: 2.5 million pages were withheld due to privilege, duplication, or CSAM/violence exceptions.
3. EXECUTIVE FIGURES:
   - Donald Trump: Confirmed flight logs (1990s) and a 2011 email from Epstein planning to call him. Raw NTOC tips allege rape/orgies, but DOJ explicitly labeled these "unfounded and false" sensationalist claims from before the 2020 election.
   - Howard Lutnick (Commerce Sec): Emails show 2012 family island trip plans, contradicting denials.
   - Bill Clinton: Confirmed presence via flight logs/photos. Painting of him in blue dress listed in inventory.
   - Steve Bannon: Confirmed operational relationship. 2018 texts on media strategy. Received Apple Watch gift.
4. PRINCE ANDREW: Emails confirm he met "Irina" (26, Russian) for dinner in 2010. Literary agent John Brockman email confirms Andrew received a foot massage at Epstein's NY mansion in Sept 2010.
5. ELON MUSK: Emails (Nov 2012) show Musk asking "What day/night will be the wildest party on your island?", contradicting his claim he refused invites.
6. RAW INTEL (NTOC): Contains unverified tips. "Alexander Brothers" complaint alleges rapes. A tip claims Robin Leach was involved in a murder at a Trump golf course (1995-96) - this is unverified/unadjudicated.
7. FINANCIAL: Peter Mandelson (UK) implicated via husband Reinaldo Avila da Silva receiving £10k loan in 2009.
8. SYSTEMIC FAILURES: Survivors were accidentally unmasked/doxed in the release.
9. EPSTEIN DEATH: Full uncut MCC surveillance video released, debunking "missing minute" theories.

TONE: Clinical, forensic, journalistic. Do not speculate beyond the text. If asked about something not in the report, state that it is not covered in the current release.`;
