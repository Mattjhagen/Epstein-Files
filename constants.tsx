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
