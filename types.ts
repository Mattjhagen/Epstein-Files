import React from 'react';

export interface ReportSection {
  id: string;
  title: string;
  content: React.ReactNode;
}

export interface EvidenceRow {
  individual: string;
  role: string;
  verifiedEvidence: string;
  rawIntelligence: string;
  dojStatus: string;
}

export interface Attachment {
  name: string;
  type: 'PDF' | 'VIDEO' | 'IMAGE' | 'DATA';
  size: string;
  description: string;
}