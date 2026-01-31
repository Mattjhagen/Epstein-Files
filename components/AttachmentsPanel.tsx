import React from 'react';
import { Attachment } from '../types';
import { FileText, Film, Database, Image as ImageIcon, Download } from 'lucide-react';
import { triggerDownload } from '../utils/actions';

interface Props {
  attachments: Attachment[];
}

const AttachmentsPanel: React.FC<Props> = ({ attachments }) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'VIDEO': return <Film className="w-5 h-5 text-blue-600" />;
      case 'DATA': return <Database className="w-5 h-5 text-green-600" />;
      case 'IMAGE': return <ImageIcon className="w-5 h-5 text-purple-600" />;
      default: return <FileText className="w-5 h-5 text-red-600" />;
    }
  };

  return (
    <div className="bg-slate-100 p-6 rounded-lg border border-slate-200">
      <h3 className="font-serif font-bold text-xl text-slate-900 mb-4 flex items-center">
        <Download className="w-5 h-5 mr-2" />
        Primary Source Attachments
      </h3>
      <div className="space-y-3">
        {attachments.map((file, idx) => (
          <div 
            key={idx} 
            className="flex items-center justify-between p-3 bg-white rounded shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-slate-200 group"
            onClick={() => triggerDownload(file.name)}
          >
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-slate-50 rounded-full group-hover:bg-slate-100 transition-colors">
                {getIcon(file.type)}
              </div>
              <div>
                <p className="font-medium text-slate-900">{file.name}</p>
                <p className="text-xs text-slate-500">{file.description}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
                <span className="text-xs font-mono text-slate-400">{file.size}</span>
                <button 
                  className="text-sm font-semibold text-blue-700 hover:underline flex items-center"
                  onClick={(e) => {
                    e.stopPropagation();
                    triggerDownload(file.name);
                  }}
                >
                    Download
                </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-xs text-slate-500 text-center">
        Warning: Some files are large. Access requires verified credentials for unredacted versions.
      </div>
    </div>
  );
};

export default AttachmentsPanel;