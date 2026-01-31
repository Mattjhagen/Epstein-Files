import React, { useState } from 'react';
import { REPORT_TITLE, REPORT_SUBTITLE, PUBLISH_DATE, EVIDENCE_DATA, ATTACHMENTS } from './constants';
import EvidenceTable from './components/EvidenceTable';
import SectionViewer from './components/SectionViewer';
import AttachmentsPanel from './components/AttachmentsPanel';
import Navigation from './components/Navigation';
import ForensicAssistant from './components/ForensicAssistant';
import { ReportSection } from './types';
import { Menu, X, FileText, Globe, Share2, Twitter, Facebook, Linkedin, Link as LinkIcon } from 'lucide-react';
import { triggerDownload, shareReport, openSocialShare } from './utils/actions';

const App: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Defining content here to include components like EvidenceTable
  const sections: ReportSection[] = [
    {
      id: "intro",
      title: "1. Introduction: The Architecture of Disclosure",
      content: (
        <>
          <h3 className="text-xl font-bold text-slate-800 mt-4 mb-2">1.1 The Statutory Mandate and the Scope of Release</h3>
          <p className="mb-4">
            On January 30, 2026, the United States Department of Justice (DOJ), acting under the compulsion of the <em>Epstein Files Transparency Act</em> signed into law by President Donald Trump on November 19, 2025, executed the release of approximately 3.5 million pages of documents, 2,000 video files, and over 180,000 images related to the investigation of Jeffrey Epstein and Ghislaine Maxwell.
          </p>
          <p className="mb-4">
            This disclosure, described by Deputy Attorney General Todd Blanche as the "final" release bringing the Department into compliance with the Act, represents the single largest shedding of federal investigative material concerning the Epstein enterprise to date.
          </p>
          <blockquote className="pl-4 border-l-4 border-slate-300 italic text-slate-600 my-6">
            "The sheer volume of this data... necessitated a review process involving over 500 Department attorneys."
          </blockquote>
          <p className="mb-4">
            Unlike previous disclosures... this tranche is comprised of <strong>raw federal investigative data</strong>. It aggregates material from five primary sources: the SDNY and SDFL criminal cases against Epstein; the SDNY prosecution of Ghislaine Maxwell; the probes into Epstein’s custodial death; and multiple ancillary FBI investigations.
          </p>
          <h3 className="text-xl font-bold text-slate-800 mt-8 mb-2">1.2 The "Missing" 2.5 Million Pages</h3>
          <p className="mb-4">
            While the release is massive, it is not total. The DOJ identified over 6 million potentially responsive pages but released only 3.5 million. The discrepancy is attributed to Duplication, Privilege, and Statutory Exceptions (CSAM/Violence).
          </p>
        </>
      )
    },
    {
      id: "executive",
      title: "2. The Executive Branch: Presidential Implications",
      content: (
        <>
          <p className="mb-4">
            The January 2026 files place the United States Presidency—both past and present—at the center of the Epstein narrative.
          </p>
          <h3 className="text-xl font-bold text-slate-800 mt-6 mb-2">2.1 President Donald Trump: The "Sensationalist" Defense</h3>
          <p className="mb-4">
            In an unprecedented move, the DOJ included a preamble specifically addressing the contents relating to President Donald Trump, asserting that "Some of the documents contain untrue and sensationalist claims... submitted to the FBI right before the 2020 election."
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li><strong>The NTOC Allegations:</strong> Raw inputs from the public include an "Orgy" allegation and a Rape allegation. The DOJ argues that if these had credibility, they would have been weaponized previously.</li>
            <li><strong>The "Virginia" Email:</strong> An email from April 18, 2011, reveals Epstein attempting to leverage his connection: <em>"Before I call Trump, with regard vrginina [sic], are there any other alternatives"</em>.</li>
            <li><strong>Flight Logs:</strong> Confirmed at least eight flights taken by Trump on Epstein's aircraft during the 1990s.</li>
          </ul>

           <h3 className="text-xl font-bold text-slate-800 mt-6 mb-2">2.2 Howard Lutnick: The Cabinet Secretary’s Hidden Ties</h3>
           <p className="mb-4">
             Documents reveal planned family excursions by Lutnick to Epstein's private island in late 2012, contradicting public denials. Epstein wrote: <em>"nice seeing you, read #2 dot three."</em>
           </p>

           <h3 className="text-xl font-bold text-slate-800 mt-6 mb-2">2.3 Bill Clinton: The Ubiquitous Presence</h3>
           <p className="mb-4">
             Former President Bill Clinton remains a central figure through confirmed physical presence and raw tips. The release includes an inventory listing the "bizarre painting of Clinton in a blue dress."
           </p>

           <EvidenceTable data={EVIDENCE_DATA} />
        </>
      )
    },
    {
      id: "royal",
      title: "3. The Royal Dossier: Prince Andrew",
      content: (
        <>
          <p className="mb-4">
            The release provides a forensic dismantling of Prince Andrew’s defense.
          </p>
          <h3 className="text-xl font-bold text-slate-800 mt-6 mb-2">3.1 The "Irina" Emails</h3>
          <p className="mb-4">
             Epstein to Andrew (2010): <em>"I have a friend who i think you might enjoy having dinner with, her name is irina... 26, russian, clevere [sic] beautiful, trustworthy."</em><br/>
             Andrew's Reply: <em>"Would be delighted to see her."</em>
          </p>
          <h3 className="text-xl font-bold text-slate-800 mt-6 mb-2">3.2 Corroboration of the Massage Allegation</h3>
          <p className="mb-4">
            An email from literary agent John Brockman explicitly references Andrew receiving a foot massage at Epstein's NY mansion in September 2010, destroying public denials.
          </p>
        </>
      )
    },
    {
      id: "tech",
      title: "4. The Titan of Tech: Elon Musk",
      content: (
        <>
           <p className="mb-4">
             While Musk has aggressively denied ties, email chains show him actively soliciting invitations.
           </p>
           <div className="bg-slate-50 p-4 rounded border-l-4 border-slate-400 mb-4">
             <p className="font-mono text-sm text-slate-700">From: Elon Musk<br/>To: Jeffrey Epstein<br/>Date: Nov 2012</p>
             <p className="mt-2 italic">"What day/night will be the wildest party on =our [your] island?"</p>
           </div>
           <p className="mb-4">
             This contradicts Musk's public statement that he "REFUSED" an invite. While scheduling conflicts may have prevented specific visits, the intent is established in the file.
           </p>
        </>
      )
    },
    {
      id: "strategist",
      title: "5. The Strategist: Steve Bannon",
      content: (
        <>
          <p className="mb-4">
             Files expose Steve Bannon as a key operational ally in Epstein's reputation management.
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li><strong>Media Manipulation:</strong> Bannon proposed a documentary on the "real story" to counter the #MeToo movement.</li>
            <li><strong>The Apple Watch:</strong> Epstein gifted Bannon and his son Hermes Apple Watches in late 2018.</li>
            <li><strong>OPSEC:</strong> Bannon avoided "wired" locations like the Regency Hotel, opting for Epstein's townhouse via rear entrance.</li>
          </ul>
        </>
      )
    },
    {
      id: "raw_intel",
      title: "6. Raw Intelligence: NTOC Tips",
      content: (
        <>
          <p className="mb-4">
            The inclusion of the National Threat Operations Center (NTOC) tips introduces volatile, unverified reports.
          </p>
          <h3 className="text-xl font-bold text-slate-800 mt-4 mb-2">The "Alexander Brothers" Complaint</h3>
          <p className="mb-4">
            A detailed complaint alleges Oren and Tal Alexander were involved in rapes at Epstein's NY residence. This same complaint linked Trump/Clinton, creating a complex web of credibility issues where specific allegations are mixed with "sensationalist" claims.
          </p>
           <h3 className="text-xl font-bold text-slate-800 mt-4 mb-2">The Robin Leach Allegation</h3>
           <p className="mb-4">
             A particularly gruesome tip alleges the late Robin Leach participated in a murder at a Trump golf course (1995-1996). This is an unadjudicated accusation against a deceased figure, highlighting the dangers of the "over-collection" policy.
           </p>
        </>
      )
    },
    {
       id: "financial",
       title: "7. Financial Ties: The Mandelson Connection",
       content: (
         <>
           <p className="mb-4">
             Peter Mandelson, former British Cabinet Minister, is implicated through his husband, Reinaldo Avila da Silva.
           </p>
           <p className="mb-4">
             Records show Epstein transferred £10,000 to da Silva in 2009. Mandelson instructed Epstein to structure payments as a "loan" to avoid gift-tax filing, maintaining financial benefits while obscuring the nature of the relationship.
           </p>
         </>
       )
    },
    {
      id: "systemic",
      title: "8. Systemic Failures",
      content: (
        <>
          <h3 className="text-xl font-bold text-slate-800 mt-4 mb-2">8.1 The Doxing of Survivors</h3>
          <p className="mb-4">
            Despite claims of rigorous review, the release accidentally unmasked multiple survivors, causing "unspeakable pain."
          </p>
          <h3 className="text-xl font-bold text-slate-800 mt-4 mb-2">8.2 The "Missing Minute" Resolved</h3>
          <p className="mb-4">
            The release includes full, uncut surveillance footage from the MCC on the night of Epstein's death, debunking "missing minute" conspiracy theories.
          </p>
        </>
      )
    },
    {
      id: "conclusion",
      title: "9. Conclusion: The Legacy of the Files",
      content: (
        <>
          <p className="text-lg font-medium text-slate-800 mb-6">
            The January 30, 2026 release is a watershed moment in the documentation of elite impunity.
          </p>
          <p className="mb-4">
            The most overarching conclusion is the destruction of the "social pariah" myth. After his 2008 conviction, Epstein was not shunned. He was paying politicians' partners, hosting Royals, emailing tech titans, and advising White House strategists.
          </p>
          <p className="mb-4">
             The network was not a secret cabal operating in the shadows, but an open secret tolerated, funded, and utilized by the highest echelons of Western power.
          </p>
        </>
      )
    }
  ];

  return (
    <div className="min-h-screen font-sans text-slate-900 bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
             <div className="bg-red-900 text-white p-2 rounded-sm">
                <FileText size={24} />
             </div>
             <div>
                <h1 className="text-lg md:text-xl font-serif font-bold leading-tight text-slate-900">
                  Forensic Analysis
                </h1>
                <p className="text-xs text-red-800 font-bold uppercase tracking-wider">DOJ Epstein Files Release</p>
             </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6 text-sm font-medium text-slate-600">
             <span className="flex items-center"><Globe size={16} className="mr-2"/> Public Record</span>
             <span className="text-slate-300">|</span>
             <span>{PUBLISH_DATE}</span>
             <button 
                onClick={() => triggerDownload("Forensic_Analysis_Epstein_Release_2026.pdf")}
                className="bg-slate-900 text-white px-4 py-2 rounded hover:bg-slate-800 transition-colors"
             >
                Download PDF
             </button>
          </div>

          <button 
            className="md:hidden text-slate-800 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden overflow-y-auto">
          <Navigation sections={sections} />
        </div>
      )}

      {/* Hero Section */}
      <div className="bg-slate-900 text-white py-16 md:py-24">
         <div className="container mx-auto px-4 md:px-8 max-w-5xl text-center">
            <span className="inline-block py-1 px-3 border border-red-500 text-red-400 text-xs font-bold uppercase tracking-widest mb-6 rounded">
              Special Report
            </span>
            <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight">
              {REPORT_TITLE}
            </h1>
            <p className="text-lg md:text-xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed">
              {REPORT_SUBTITLE}
            </p>
         </div>
      </div>

      <main className="container mx-auto px-4 md:px-8 py-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Sidebar (Desktop) */}
          <aside className="hidden md:block md:col-span-3 lg:col-span-3">
             <Navigation sections={sections} />
          </aside>

          {/* Main Content */}
          <article className="md:col-span-9 lg:col-span-7">
            {sections.map(section => (
              <SectionViewer key={section.id} section={section} />
            ))}

            {/* Attachments Section */}
            <section id="attachments" className="scroll-mt-24 pt-8 border-t border-slate-200">
               <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6">
                 Related Attachments & Data
               </h2>
               <AttachmentsPanel attachments={ATTACHMENTS} />
            </section>
          </article>

          {/* Extra Column for Desktop Visuals (Optional or empty for focus) */}
          <div className="hidden lg:block lg:col-span-2">
             <div className="sticky top-24 bg-white p-4 rounded border border-slate-200 shadow-sm">
                <h4 className="font-bold text-xs uppercase text-slate-400 mb-4">Share Report</h4>
                <div className="flex space-x-2">
                   <button 
                     onClick={() => shareReport(REPORT_TITLE, REPORT_SUBTITLE)}
                     className="p-2 bg-slate-100 rounded hover:bg-slate-200 text-slate-600 transition-colors"
                     title="Share via..."
                   >
                      <Share2 size={16} />
                   </button>
                   <button 
                     onClick={() => openSocialShare('facebook', REPORT_TITLE)}
                     className="p-2 bg-blue-600 rounded hover:bg-blue-700 text-white transition-colors"
                     title="Share on Facebook"
                   >
                     <Facebook size={16} />
                   </button>
                   <button 
                     onClick={() => openSocialShare('twitter', REPORT_TITLE)}
                     className="p-2 bg-sky-500 rounded hover:bg-sky-600 text-white transition-colors"
                     title="Share on X (Twitter)"
                   >
                     <Twitter size={16} />
                   </button>
                   <button 
                     onClick={() => openSocialShare('linkedin', REPORT_TITLE)}
                     className="p-2 bg-blue-800 rounded hover:bg-blue-900 text-white transition-colors"
                     title="Share on LinkedIn"
                   >
                     <Linkedin size={16} />
                   </button>
                </div>
                <div className="mt-8">
                   <h4 className="font-bold text-xs uppercase text-slate-400 mb-2">Source</h4>
                   <p className="text-xs text-slate-600">
                     Official Department of Justice Release Repository.
                   </p>
                </div>
             </div>
          </div>
        </div>
      </main>
      
      {/* Forensic AI Assistant */}
      <ForensicAssistant />

      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800 mt-12">
        <div className="container mx-auto px-4 md:px-8 text-center md:text-left">
           <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                 <h5 className="text-white font-bold mb-4">About this Archive</h5>
                 <p className="text-sm">
                   This digital archive serves as a permanent record of the Jan 30, 2026 Epstein Files release, complying with the Transparency Act.
                 </p>
              </div>
              <div>
                 <h5 className="text-white font-bold mb-4">Sections</h5>
                 <ul className="text-sm space-y-2">
                    <li><a href="#intro" className="hover:text-white">Introduction</a></li>
                    <li><a href="#executive" className="hover:text-white">Executive Branch</a></li>
                    <li><a href="#royal" className="hover:text-white">Royal Dossier</a></li>
                 </ul>
              </div>
              <div>
                 <h5 className="text-white font-bold mb-4">Data</h5>
                 <ul className="text-sm space-y-2">
                    <li><a href="#attachments" className="hover:text-white">Flight Logs</a></li>
                    <li><a href="#attachments" className="hover:text-white">Video Evidence</a></li>
                    <li><a href="#attachments" className="hover:text-white">NTOC Tips</a></li>
                 </ul>
              </div>
              <div>
                 <h5 className="text-white font-bold mb-4">Legal</h5>
                 <ul className="text-sm space-y-2">
                    <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                    <li><a href="#" className="hover:text-white">Accessibility</a></li>
                    <li><a href="#" className="hover:text-white">FOIA Requests</a></li>
                 </ul>
              </div>
           </div>
           <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
              <p>&copy; 2026 Forensic Analysis Archive. All rights reserved.</p>
              <p className="mt-2 md:mt-0">Built for public transparency.</p>
           </div>
        </div>
      </footer>
    </div>
  );
};

export default App;