/**
 * Upload Tab - Functionality disabled for open source release
 */

import React from 'react';
import { Upload, AlertTriangle } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

const UploadTab: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
        <div className="flex items-center mb-6">
          <Upload className="h-8 w-8 text-primary-500 mr-3" />
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Upload Data</h2>
        </div>

        {/* Non-functional notice */}
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-6">
          <div className="flex items-start">
            <AlertTriangle className="h-5 w-5 text-yellow-600 dark:text-yellow-400 mt-0.5 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-medium text-yellow-800 dark:text-yellow-200">Functionality Disabled</h3>
              <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-1">
                File upload functionality has been disabled in this reference implementation.
                All database and storage connections have been removed.
              </p>
            </div>
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-6">
          This component demonstrates the UI pattern for file upload functionality.
          To enable uploads, you must connect your own backend storage and database.
          {!user && (
            <span className="block mt-2 text-sm text-amber-600 dark:text-amber-400 font-medium">
              Note: Authentication is also disabled in this reference implementation.
            </span>
          )}
        </p>

        {/* Expected CSV Format Guide - Reference Only */}
        <div className="mb-6 p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
          <h3 className="text-sm font-medium text-gray-800 dark:text-gray-100 mb-2">Expected CSV Format (Reference):</h3>
          <p className="text-xs text-gray-600 dark:text-gray-300 mb-2">
            Your implementation should define columns based on your data requirements:
          </p>
          <code className="text-xs text-gray-800 dark:text-gray-100 px-2 py-1 rounded block bg-gray-100 dark:bg-gray-700">
            column_1, column_2, column_3, ... (define your own schema)
          </code>
        </div>

        {/* Disabled upload area */}
        <div className="flex justify-center items-center w-full">
          <div className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 cursor-not-allowed opacity-50">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <Upload className="w-10 h-10 mb-3 text-gray-400" />
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Upload Disabled</span>
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Connect your own backend to enable file uploads
              </p>
            </div>
          </div>
        </div>

        {/* Reference implementation note */}
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">Implementation Notes</h3>
          <div className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
            <p>To implement file upload functionality:</p>
            <ol className="list-decimal list-inside space-y-1 ml-2">
              <li>Set up a storage bucket in your backend</li>
              <li>Create database tables for upload metadata</li>
              <li>Implement file validation and processing logic</li>
              <li>Add proper authentication and authorization</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadTab;
