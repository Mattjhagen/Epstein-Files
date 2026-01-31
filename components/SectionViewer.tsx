import React from 'react';
import { ReportSection } from '../types';

interface Props {
  section: ReportSection;
}

const SectionViewer: React.FC<Props> = ({ section }) => {
  return (
    <section id={section.id} className="scroll-mt-24 mb-16 border-b border-slate-100 pb-12 last:border-0">
      <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-6 border-l-4 border-red-800 pl-4">
        {section.title}
      </h2>
      <div className="prose prose-slate max-w-none font-sans text-slate-700 leading-relaxed text-lg">
        {section.content}
      </div>
    </section>
  );
};

export default SectionViewer;