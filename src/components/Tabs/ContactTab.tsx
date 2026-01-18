/**
 * Contact Tab - Functionality disabled for open source release
 */

import React, { useState } from 'react';
import { MessageSquare, AlertTriangle } from 'lucide-react';

const ContactTab: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // REDACTED: Contact form functionality disabled
    console.log('[REDACTED] Form submission disabled in reference implementation');
    alert('Contact functionality is disabled in this reference implementation.');
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
        <div className="flex items-center mb-6">
          <MessageSquare className="h-8 w-8 text-primary-500 mr-3" />
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Contact Form</h2>
        </div>

        {/* Non-functional notice */}
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-6">
          <div className="flex items-start">
            <AlertTriangle className="h-5 w-5 text-yellow-600 dark:text-yellow-400 mt-0.5 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-medium text-yellow-800 dark:text-yellow-200">Functionality Disabled</h3>
              <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-1">
                This contact form is non-functional. It is provided as a UI/UX reference only.
              </p>
            </div>
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-6">
          This is a reference implementation of a contact form component.
          Connect your own backend to enable functionality.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent dark:text-gray-100"
              disabled
              placeholder="[Disabled]"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent dark:text-gray-100"
              disabled
              placeholder="[Disabled]"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
              className="w-full px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent dark:text-gray-100"
              disabled
              placeholder="[Disabled]"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled
            className="w-full flex items-center justify-center px-6 py-3 bg-gray-400 text-white font-medium rounded-lg cursor-not-allowed"
          >
            Functionality Disabled
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactTab;
