/**
 * Info Tab - Content redacted for open source release
 */

import React from 'react';
import { Info, AlertTriangle } from 'lucide-react';

const InfoTab: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
        <div className="flex items-center mb-6">
          <Info className="h-8 w-8 text-primary-500 mr-3" />
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">About This Project</h2>
        </div>

        {/* Non-functional notice */}
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-6">
          <div className="flex items-start">
            <AlertTriangle className="h-5 w-5 text-yellow-600 dark:text-yellow-400 mt-0.5 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-medium text-yellow-800 dark:text-yellow-200">Reference Implementation Only</h3>
              <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-1">
                This is a non-functional reference implementation. All proprietary content, 
                data sources, and branding have been intentionally removed.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6 text-gray-600 dark:text-gray-300">
          <section>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">Customization Required</h3>
            <p>
              To use this as a foundation for your own project, you must provide:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-2 dark:text-gray-400">
              <li>Your own backend services and API keys</li>
              <li>Your own datasets and prediction models</li>
              <li>Your own branding and content</li>
              <li>Your own deployment infrastructure</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default InfoTab;
