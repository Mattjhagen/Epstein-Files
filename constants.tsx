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
  { name: "NTOC_Complaint_Log.xlsx", type: "DATA", size: "12 MB", description: "Raw spreadsheet of National Threat Operations Center tips." },
  { name: "Lutnick_Island_Emails_2012.pdf", type: "PDF", size: "2.1 MB", description: "Emails detailing Howard Lutnick's family trip to Little St. James." },
  { name: "Prince_Andrew_Irina_Chain.pdf", type: "PDF", size: "1.8 MB", description: "Email chain regarding procurement of 'Irina' and massage allegation." },
  { name: "Epstein_Musk_Wildest_Party.pdf", type: "PDF", size: "1.5 MB", description: "Elon Musk emails requesting access to island parties (2012-2013)." },
  { name: "Bannon_Texts_Media_Strategy.pdf", type: "PDF", size: "3.2 MB", description: "SMS logs between Steve Bannon and Epstein regarding reputation management." },
  { name: "Mandelson_Wire_Transfers.pdf", type: "PDF", size: "850 KB", description: "Bank records of transfers to Reinaldo Avila da Silva." },
  { name: "Clinton_Blue_Dress_Painting_Inventory.jpg", type: "IMAGE", size: "4.1 MB", description: "Property inventory listing the painting of Bill Clinton." }
];

export const REPORT_TITLE = "Forensic Analysis of the January 30, 2026 Department of Justice Epstein Files Release";
export const REPORT_SUBTITLE = "A Comprehensive Review of Investigative Materials, Identified Individuals, and Institutional Implications";
export const PUBLISH_DATE = "January 30, 2026";

export const FULL_REPORT_TEXT = `Forensic Analysis of the January 30, 2026 Department of Justice Epstein Files Release: A Comprehensive Review of Investigative Materials, Identified Individuals, and Institutional Implications

1. Introduction: The Architecture of Disclosure
1.1 The Statutory Mandate and the Scope of Release
On January 30, 2026, the United States Department of Justice (DOJ), acting under the compulsion of the Epstein Files Transparency Act signed into law by President Donald Trump on November 19, 2025, executed the release of approximately 3.5 million pages of documents, 2,000 video files, and over 180,000 images related to the investigation of Jeffrey Epstein and Ghislaine Maxwell. This disclosure, described by Deputy Attorney General Todd Blanche as the "final" release bringing the Department into compliance with the Act, represents the single largest shedding of federal investigative material concerning the Epstein enterprise to date.

Unlike previous disclosures, which were largely the product of civil litigation—specifically the Giuffre v. Maxwell defamation suit—this tranche is comprised of raw federal investigative data. It aggregates material from five primary sources: the Southern District of New York (SDNY) and Southern District of Florida (SDFL) criminal cases against Epstein; the SDNY prosecution of Ghislaine Maxwell; the probes into Epstein’s custodial death; and multiple ancillary FBI investigations. The sheer volume of this data, characterized by Deputy Attorney General Blanche as "two Eiffel Towers of pages", necessitated a review process involving over 500 Department attorneys.

The forensic significance of this release lies not only in its size but in its uncurated nature. The DOJ explicitly noted that it "erred on the side of over-collecting materials," resulting in the publication of raw, unverified tips submitted to the FBI's National Threat Operations Center (NTOC), alongside verified forensic evidence such as flight logs, bank records, and seized electronic communications. This methodological choice has created a complex evidentiary landscape where proven financial transactions sit alongside "sensationalist" and uncorroborated allegations, requiring a disciplined analytical approach to distinguish between established fact and raw intelligence.

1.2 The "Missing" 2.5 Million Pages and Procedural Limitations
While the release is massive, it is not total. The DOJ identified over 6 million potentially responsive pages but released only 3.5 million. The discrepancy is attributed to three primary exclusionary criteria:
1. Duplication: The removal of identical documents shared between the SDNY and SDFL files.
2. Privilege: The withholding of materials protected by attorney-client privilege and the deliberative process privilege.
3. Statutory Exceptions: The exclusion of materials depicting child sexual abuse material (CSAM), extreme violence, or victim-identifying information, as mandated by the Act.

Despite these explanations, the withholding of nearly half the identified corpus has drawn sharp criticism from legislative architects of the Transparency Act, including Representative Ro Khanna, who expressed skepticism regarding the Department's claim of full compliance. This report proceeds with the understanding that while this release is the definitive public record provided by the state, it remains a curated subset of the government's total knowledge base.

1.3 Methodology of This Report
This report provides a granular analysis of the individuals named, the nature of their associations with Epstein, and the implications of the newly released data. The analysis is divided into sectors of influence—Political, Financial, Royal, and Media—reflecting the compartmentalized yet interconnected nature of Epstein’s network. Each section synthesizes the raw document data (emails, flight logs, tips) with the forensic context of the investigation, differentiating clearly between verified interactions and uncorroborated allegations.

2. The Executive Branch: Presidential Implications and the DOJ Preamble
The January 2026 files place the United States Presidency—both past and present—at the center of the Epstein narrative. However, the nature of the evidence varies wildly between verifiable historical contact and unverified, explosive allegations contained in raw police tips.

2.1 President Donald Trump: The "Sensationalist" Defense
In an unprecedented move, the Department of Justice included a preamble to the release specifically addressing the contents of the files as they relate to President Donald Trump. This disclaimer asserts that "Some of the documents contain untrue and sensationalist claims against President Trump that were submitted to the FBI right before the 2020 election" and characterizes these claims as "unfounded and false".

2.1.1 The NTOC Allegations
The source of this controversy is a spreadsheet summary of complaints made to the FBI's National Threat Operations Center (NTOC). These are raw inputs from the public, unvetted by investigators at the point of receipt.
• The "Orgy" Allegation: One tipster, whose account was logged in the files, alleged that Trump attended "big orgy parties" organized by Epstein. The complaint details the presence of "older Victoria's Secret models," young girls, and other high-profile figures, including Bill Clinton.
• The Rape Allegation: A more severe, specific complaint claims that the tipster was raped by Trump at age 13, with Ghislaine Maxwell present. This allegation mirrors the structure of other accusations against Epstein's circle but appears in the file as a raw report rather than the subject of a developed prosecutorial file.
• Forensic Assessment: The DOJ's vigorous defense—stating that if these claims had a "shred of credibility, they certainly would have been weaponized against President Trump already"—suggests that federal investigators found no corroborating evidence to elevate these tips to active criminal investigations. This distinction is crucial: the files document that the accusation was made to the FBI, not that the FBI found the accusation to be true.

2.1.2 The "Virginia" Email and Continued Contact
Beyond the raw tips, the files contain verified correspondence that challenges the timeline of Trump's estrangement from Epstein. Trump has long maintained that he severed ties with Epstein in the mid-2000s, banning him from Mar-a-Lago. However, an email from April 18, 2011, reveals Epstein attempting to leverage his connection to Trump years after his 2008 conviction.
• The Communication: Epstein wrote to an associate, William Riley: "Before I call Trump, with regard vrginina [sic], are there any other alternatives".
• Implication: This correspondence suggests Epstein believed he still possessed a direct line of communication to Trump in 2011. The reference to "vrginina" likely refers to Virginia Giuffre, who was active in litigation at the time. While there is no evidence in the file that the call was placed or accepted, the intent to contact Trump contradicts the narrative of a total, impermeable firewall between the two men post-2008.

2.1.3 Flight Logs and Historical Ties
The release re-confirms the extensive historical relationship between Trump and Epstein.
• Flight Frequency: The flight logs included in the release document at least eight flights taken by Trump on Epstein's aircraft during the 1990s.
• Social Intersection: Photos and videos released verify their co-attendance at social functions, including a 1992 party at Mar-a-Lago and the 1993 wedding of Trump to Marla Maples, where Epstein appears as a guest. These records serve to cement the depth of their integration in the Palm Beach/New York social circuit prior to Epstein’s first criminal prosecution.

2.2 Howard Lutnick: The Cabinet Secretary’s Hidden Ties
Perhaps the most politically damaging revelation for the current administration concerns Howard Lutnick, the serving Secretary of Commerce. Lutnick had previously issued public denials regarding his relationship with Epstein, stating he was "revolted" by the financier and cut ties in 2005. The January 2026 files provide irrefutable documentary evidence that this statement was false.

2.2.1 The 2012 Family Island Trip
Emails from late 2012 detail a planned family excursion by Lutnick to Epstein’s private island, Little St. James—a location now synonymous with sex trafficking.
• The Invitation: On November 20, 2012, Epstein’s executive assistant, Lesley Groff, emailed Lutnick noting that "Jeffrey Epstein understands you will be down in St Thomas some over the holidays" and facilitated the exchange of contact numbers.
• The Acceptance: On December 19, 2012, Lutnick emailed Epstein directly (addressing him as "Jeff") to coordinate the visit. He wrote: "We are landing in St Thomas early Saturday afternoon... Where are you located (what is exact location for my captain)?? Does Sunday evening for dinner sound good?".
• The Logistics: Lutnick specified that the party would include his wife, children, and friends. This detail is forensic dynamite; it indicates that Lutnick viewed Epstein not merely as a business contact, but as a socially acceptable host for his family, four years after Epstein registered as a sex offender.
• The Meeting: On December 24, 2012, Epstein emailed his assistant to "please forward to howard lutnik [sic]," with the message: "nice seeing you, read #2 dot three." This confirms the meeting took place.

2.2.2 Political Fundraising
The documents further implicate Lutnick in facilitating Epstein’s re-entry into political donor circles. A document from 2015 suggests Lutnick invited Epstein to a fundraiser for Hillary Clinton, demonstrating Lutnick's role as a bridge between the disgraced financier and the political establishment of both parties.

2.3 Bill Clinton: The Ubiquitous Presence
Former President Bill Clinton remains a central figure in the Epstein files, primarily through the confirmation of his physical presence in Epstein’s orbit and the same raw tips that implicate Trump.
• Flight Logs and Photos: The release includes unredacted flight logs confirming Clinton’s extensive travel on the "Lolita Express." New photographs depict Clinton at Epstein’s residences, and the files include an inventory of Epstein’s possessions that lists the bizarre painting of Clinton in a blue dress.
• The "Orgy" Allegations: The NTOC complaint that alleges Trump’s presence at "big orgy parties" also names Clinton as a participant. Specifically, the tipster claims Clinton was present at events involving "older Victoria's Secret models" and young girls. As with the Trump allegations, these remain in the realm of raw, unverified intelligence, distinct from the corroborated flight logs.

3. The Royal Dossier: Prince Andrew and the "Irina" Emails
The January 2026 release provides a forensic dismantling of Prince Andrew’s defense, particularly his claims of a distant relationship with Epstein and his denial of specific sexual acts. The files introduce new characters and corroborate specific timelines that place the Duke of York in direct, intimate contact with women procured by Epstein.

3.1 The "Irina" Correspondence: Procurement in Writing
The most significant new evidence regarding Prince Andrew is a series of emails concerning a Russian woman identified only as "Irina." These emails serve as a case study in Epstein’s procurement methodology.
• The Pitch: In 2010, after his release from prison, Epstein emailed Andrew ("The Duke") with a proposition: "I have a friend who i think you might enjoy having dinner with, her name is irina she will be london 20-24 [sic]." Epstein described her as "26, russian, clevere [sic] beautiful, trustworthy".
• The Acceptance: Andrew’s reply was immediate and enthusiastic: "Would be delighted to see her. Will she be bringing a message from you? Please give her my contact details to get in touch." He signed the email "HRH The Duke of York KG".
• Forensic Significance: This exchange contradicts Andrew’s assertion that he maintained contact with Epstein solely out of a misplaced sense of loyalty or to sever ties. The request for a meeting with a "friend" described solely by her age, nationality, and physical attributes ("beautiful") bears the hallmarks of a transactional introduction.

3.2 Corroboration of the Massage Allegation
The files contain a smoking gun regarding Andrew’s sexual interactions. An email exchange between literary agent John Brockman and technology writer Evgeny Morozov, seized by investigators, explicitly references Andrew receiving a foot massage.
• The Witness Account: Brockman wrote: "I realized that the recipient of Irina's foot massage was His Royal Highness, Prince Andrew, the Duke of York".
• Location and Context: The email places this event at Epstein’s New York mansion in September 2010. This independent verification by a third party (Brockman) destroys Andrew’s public denials of receiving massages or intimate touches from young women at Epstein’s properties. It links the "Irina" from the emails directly to physical acts.

3.3 The 2010 Dinner: A Celebration, Not a Breakup
Prince Andrew has famously claimed that his visit to New York in December 2010 was a somber mission to end his friendship with Epstein. The documents reveal it was, in fact, a high-society celebration.
• The "Fast, Fun Dinner": Emails from publicist Peggy Siegal describe the organization of a dinner party in Andrew's honor at Epstein’s home. Siegal pitched the event to prospective guests as a "very interesting, fast, fun dinner".
• The Guest List: The files reveal a tentative guest list that included major figures from media and entertainment: Woody Allen, George Stephanopoulos, Katie Couric, and Charlie Rose.
• Implication: The presence of top-tier US journalists at a dinner hosted by a registered sex offender for a British Royal indicates the normalization of Epstein’s status in 2010.

3.4 The "Super Sperm" Moniker
The files reveal a level of crude familiarity between Epstein and Andrew. In one email chain, Epstein refers to the Prince as "super sperm". This nickname, likely a reference to Andrew’s bachelor lifestyle or sexual exploits, indicates a relationship bonded by locker-room banter.

4. The Titan of Tech: Elon Musk’s "Wildest Party"
The files provide a corrective to the public narrative surrounding Elon Musk’s relationship with Epstein. While Musk has aggressively denied any substantive ties—tweeting in 2024 that he "REFUSED" an invite to the island—the DOJ release contains email chains that show him actively soliciting invitations.

4.1 The Solicitation Emails (2012-2013)
The correspondence between Musk and Epstein is characterized by Musk’s initiative in seeking access to Epstein’s social circle and properties.
• "The Wildest Party": In November 2012, Musk emailed Epstein with a specific request: "What day/night will be the wildest party on =our [your] island?". The use of the phrase "wildest party" suggests Musk was not seeking a business meeting or a quiet vacation, but specifically looking to participate in the hedonistic culture Epstein was infamous for.
• The Helicopter Request: In December 2013, Musk wrote again: "Will be in the BVI/St. Bart's area over the holidays. Is there a good time to visit?" Epstein replied with characteristic hospitality: "always space for you," and offered to "send heli [helicopter] for you".

4.2 The Disconnect: Public Denials vs. Private Reality
The forensic value of these emails lies in their contradiction of Musk’s public statements.
• Public Claim: Musk stated, "Epstein tried to get me to go to his island and I REFUSED."
• Private Reality: Musk wrote, "When should we head to your island on the 2nd?".
• Outcome: While follow-up emails suggest that scheduling conflicts may have prevented specific visits from occurring as planned, the intent to visit and the desire to party are established facts of the file.

5. The Strategist: Steve Bannon’s Reputation Management
The files expose Steve Bannon, the former White House Chief Strategist, as a key operational ally in Epstein’s attempts to rehabilitate his image in the years leading up to his 2019 arrest. Their relationship was transactional, strategic, and deeply integrated.

5.1 Media Manipulation and the Documentary
Texts from 2018 and 2019 show Bannon advising Epstein on how to navigate the media landscape, specifically regarding the #MeToo movement and the Brett Kavanaugh hearings.
• The "Real Story": Bannon proposed a counter-narrative project, texting Epstein in 2018: "I'd like to do a documentary on the real story." Epstein affirmed this with: "yes, great idea".
• Filmed Interviews: The files indicate Bannon filmed hours of interviews with Epstein. This suggests Bannon viewed Epstein’s story not as a criminal tragedy, but as a narrative asset to be deployed in the culture wars.

5.2 Operational Security and Secrets
Bannon displayed a high degree of operational security (OPSEC) awareness.
• Avoiding Surveillance: When arranging a meeting at Epstein’s Manhattan townhouse, Bannon rejected the Regency Hotel, texting: "I don't like he regency as it is totally wired." Epstein accommodated this paranoia, offering a "rear entrance on 67".
• Topics of Discussion: Their texts cover "We Build the Wall," the Mueller probe, and geopolitics involving Russia and China.

5.3 The Transactional Friendship: The Apple Watch
The relationship was cemented with gifts. Emails confirm that in late 2018, Epstein gifted Bannon and his son, Sean, identical Hermes Apple Watches.
• The Receipt: Epstein’s assistant, Lesley Groff, recorded the purchase of "44 mm, space gray, stainless steel case, space black" watches, valued at $1,499 each.
• Implication: This gift serves as a physical receipt of their intimacy. It demonstrates that Bannon was receiving material benefits from Epstein while simultaneously advising him on media strategy.

6. The Raw Intelligence: NTOC Tips and Unverified Allegations
The inclusion of the National Threat Operations Center (NTOC) tips introduces a volatile element to the files. These documents represent "raw intelligence"—unverified reports from the public.

6.1 The "Alexander Brothers" Complaint
One of the most detailed complaints concerns the Alexander brothers—Tal, Oren, and Alon—prominent figures in real estate and finance.
• The Allegations: A tipster reported attending "big orgy parties" at Epstein’s New York residence. The complainant alleges that Oren Alexander raped her best friend and that Tal Alexander raped a 14-year-old girl named "Katie".
• The Linkage: This same complaint is the source of the allegation that Donald Trump and Bill Clinton were present at these parties.

6.2 The Robin Leach Murder Allegation
The late TV host Robin Leach is named in a particularly gruesome tip.
• The Claim: A witness alleges Leach participated in a sex party at a Trump golf course in California (1995-1996) and was seen to "strangle a young girl to death at a party".
• Status: Leach died in 2018. This allegation, appearing in the raw files, represents the extreme end of the "over-collection" policy.

7. Financial and International Ties: The Mandelson Connection
The files illustrate Epstein’s continued financial integration with global political figures. Peter Mandelson, the former British Cabinet Minister and European Commissioner, is implicated through his husband, Reinaldo Avila da Silva.
7.1 The Financial Drip-Feed
• The Payments: Records show Epstein transferred £10,000 to da Silva in September 2009 for "osteopathy school fees and anatomical models." This was followed by monthly transfers of $2,000.
• The "Loan" Structure: An email from Mandelson to Epstein explicitly instructs him to structure the payments as a "loan" to avoid a gift-tax filing.

8. Systemic Failures: Redactions and Surveillance
8.1 The Doxing of Survivors
Despite the DOJ’s claim of a rigorous review to protect victims, the release accidentally unmasked multiple survivors. Attorneys for Epstein victims confirmed that the names and identifying information of numerous women—some of whom had never gone public—were left unredacted, causing "unspeakable pain".
8.2 The "Missing Minute" Resolved
The release includes the full, uncut surveillance footage from the Metropolitan Correctional Center (MCC) on the night of Epstein’s death, debunking "missing minute" conspiracy theories.

9. Synthesis and Conclusion: The Legacy of the Files
The January 30, 2026, release of the Epstein files is a watershed moment in the documentation of elite impunity. While the DOJ’s "sensationalist" preamble attempts to inoculate the political class against raw allegations, the verified documents tell a damning story of continued association. The most overarching conclusion from the files is the destruction of the "social pariah" myth. After his 2008 conviction, Jeffrey Epstein was not shunned. He was paying politicians' partners, hosting Royals, emailing tech titans, and advising White House strategists.

This report concludes that the Epstein network was not a secret cabal operating in the shadows, but an open secret tolerated, funded, and utilized by the highest echelons of Western power. The January 2026 files are the receipts of that tolerance.`;

export const AI_SYSTEM_INSTRUCTION = `You are the Forensic AI Assistant for the "Epstein Files Release 2026" report. Your role is to answer questions about the report accurately, professionally, and objectively based ONLY on the provided context.

CONTEXT - REPORT SUMMARY:
${FULL_REPORT_TEXT}

TONE: Clinical, forensic, journalistic. Do not speculate beyond the text. If asked about something not in the report, state that it is not covered in the current release.`;