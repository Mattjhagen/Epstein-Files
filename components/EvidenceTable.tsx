import React from 'react';
import { EvidenceRow } from '../types';

interface Props {
  data: EvidenceRow[];
}

const EvidenceTable: React.FC<Props> = ({ data }) => {
  return (
    <div className="my-8 overflow-hidden border border-slate-200 rounded-lg shadow-sm">
      <div className="bg-slate-50 px-4 py-3 border-b border-slate-200">
        <h4 className="font-serif font-bold text-slate-800">Table 1: Executive Branch & Political Figures — Nature of Evidence</h4>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-100">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Individual</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Role</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Verified Evidence</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Raw/Unverified Intelligence</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">DOJ Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-slate-200">
            {data.map((row, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                <td className="px-6 py-4 text-sm font-bold text-slate-900 whitespace-nowrap">{row.individual}</td>
                <td className="px-6 py-4 text-sm text-slate-600">{row.role}</td>
                <td className="px-6 py-4 text-sm text-slate-700 bg-yellow-50/50 border-l-2 border-yellow-200">{row.verifiedEvidence}</td>
                <td className="px-6 py-4 text-sm text-slate-700 italic">{row.rawIntelligence}</td>
                <td className="px-6 py-4 text-sm text-slate-700 font-medium">{row.dojStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-slate-50 px-4 py-2 text-xs text-slate-500 border-t border-slate-200 italic">
        Source: Section 2.3 of Forensic Analysis Report.
      </div>
    </div>
  );
};

export default EvidenceTable;