import React from 'react';
import { Monitor, Smartphone, Globe } from 'lucide-react';

const PreviewCanvas = ({
  component: Component,
  title,
  description,
  viewMode,
  onViewModeChange,
  designerName,
  designerLink,
  developerName,
  developerLink,
  fileLink,
  createdAt,
  status
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden flex flex-col ">
      {/* Left - Preview */}
      <div className="flex-1 border-b md:border-b-0 md:border-r border-gray-200">
        {/* Canvas Header */}
        <div className="bg-gray-50 border-b border-gray-200 px-4 py-3 flex items-center justify-between">
          <span className="text-sm font-medium text-gray-600">
            {title} - {viewMode === 'desktop' ? 'Desktop View' : 'Mobile View'}
          </span>
          <span className="text-xs text-gray-500">
            {viewMode === 'desktop' ? '1200 × 800' : '375 × 600'}
          </span>
        </div>

        {/* Canvas Content */}
        <div
          className="relative bg-gray-50 flex items-start justify-center overflow-hidden transition-all duration-500 ease-in-out"
          style={{
            height: viewMode === 'desktop' ? '700px' : '400px',
          }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <svg width="100%" height="100%">
              <pattern id={`grid-${title}`} width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
              <rect width="100%" height="100%" fill={`url(#grid-${title})`} />
            </svg>
          </div>

          {/* Component */}
          <div
            className={`relative bg-white shadow-2xl transition-all duration-500 ease-in-out overflow-hidden ${
              viewMode === 'mobile'
                ? 'w-80 h-full transform scale-75 mt-8'
                : 'w-[100%] max-w-[1200px] transform scale-90'
            }`}
            style={{
              border: viewMode === 'mobile' ? '8px solid #1f2937' : '2px solid #e5e7eb',
              borderRadius: viewMode === 'mobile' ? '24px' : '8px',
            }}
          >
            {viewMode === 'mobile' && (
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>
            )}
            <div className="h-full overflow-auto">
              <Component />
            </div>
          </div>
        </div>

        {/* Toggle Controls */}
        <div className="bg-white border-t border-gray-200 px-4 py-3 flex justify-center">
          <div className="bg-gray-50 rounded-lg p-1 flex items-center space-x-1">
            <button
              onClick={() => onViewModeChange('desktop')}
              className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-all duration-200 ${
                viewMode === 'desktop'
                  ? 'bg-blue-500 text-white shadow-sm'
                  : 'text-gray-600 hover:bg-white'
              }`}
            >
              <Monitor size={14} />
              <span className="text-sm font-medium">Desktop</span>
            </button>
            <button
              onClick={() => onViewModeChange('mobile')}
              className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-all duration-200 ${
                viewMode === 'mobile'
                  ? 'bg-blue-500 text-white shadow-sm'
                  : 'text-gray-600 hover:bg-white'
              }`}
            >
              <Smartphone size={14} />
              <span className="text-sm font-medium">Mobile</span>
            </button>
          </div>
        </div>
      </div>

      {/* Right - Details */}
      <div className="w-full md:w-72 p-4 flex flex-col space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>

        <div className="text-sm text-gray-700 space-y-1">
          <p>
            <span className="font-medium">Designer:</span>{' '}
            <a href={designerLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              {designerName}
            </a>
          </p>
          <p>
            <span className="font-medium">Developer:</span>{' '}
            <a href={developerLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              {developerName}
            </a>
          </p>
          <p>
            <span className="font-medium">File:</span>{' '}
            <a href={fileLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              View File
            </a>
          </p>
        </div>

        <div className="text-xs text-gray-500 border-t pt-3">
          <p>Created: {createdAt}</p>
          <p>Status: <span className="font-medium text-green-600">{status}</span></p>
        </div>
      </div>
    </div>
  );
};

export default PreviewCanvas;
