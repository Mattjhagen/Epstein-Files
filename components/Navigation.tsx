import React from 'react';
import { ReportSection } from '../types';
import { ChevronRight } from 'lucide-react';

interface Props {
  sections: ReportSection[];
}

const Navigation: React.FC<Props> = ({ sections }) => {
  return (
    <nav className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto">
      <p className="uppercase tracking-widest text-xs font-bold text-slate-400 mb-4">Contents</p>
      <ul className="space-y-1">
        {sections.map((section) => (
          <li key={section.id}>
            <a 
              href={`#${section.id}`}
              className="group flex items-center py-2 px-3 text-sm text-slate-600 hover:bg-slate-100 hover:text-slate-900 rounded-md transition-colors border-l-2 border-transparent hover:border-slate-300"
            >
              <ChevronRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity text-red-700" />
              <span className="line-clamp-1">{section.title}</span>
            </a>
          </li>
        ))}
        <li>
            <a 
              href="#attachments"
              className="group flex items-center py-2 px-3 text-sm font-bold text-blue-700 hover:bg-blue-50 rounded-md transition-colors mt-4"
            >
               <span className="line-clamp-1">View Attachments</span>
            </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;