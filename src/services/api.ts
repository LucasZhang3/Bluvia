/**
 * ============================================
 * REDACTED - NON-FUNCTIONAL REFERENCE ONLY
 * ============================================
 * 
 * This service layer has been intentionally disabled.
 * All API calls return mock/placeholder data.
 * 
 * Original purpose: Backend API service layer
 * Current status: Returns static mock data only
 */

import { LatLng, MetalData, SearchResult } from '../types';

const REDACTED_VALUE = 0;

/**
 * REDACTED: Original implementation connected to backend prediction API
 * Now returns static mock data
 */
export const fetchMetalData = async (location: LatLng): Promise<MetalData> => {
  console.log('[REDACTED] fetchMetalData called - returning mock data');
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Return placeholder data - no real API calls
  return {
    metals: [
      { name: "METAL_1", concentration: REDACTED_VALUE, unit: 'ppm', level: 'low', error: REDACTED_VALUE },
      { name: "METAL_2", concentration: REDACTED_VALUE, unit: 'ppm', level: 'low', error: REDACTED_VALUE },
      { name: "METAL_3", concentration: REDACTED_VALUE, unit: 'ppm', level: 'low', error: REDACTED_VALUE },
      { name: "METAL_4", concentration: REDACTED_VALUE, unit: 'ppm', level: 'low', error: REDACTED_VALUE },
      { name: "METAL_5", concentration: REDACTED_VALUE, unit: 'ppm', level: 'low', error: REDACTED_VALUE },
    ],
    location,
    timestamp: new Date().toISOString(),
    riskScores: {
      Fe: REDACTED_VALUE,
      Cr: REDACTED_VALUE,
      Mn: REDACTED_VALUE,
      Mo: REDACTED_VALUE,
      In: REDACTED_VALUE,
      Average: REDACTED_VALUE,
    },
    dataSource: 'ai-predicted'
  };
};

/**
 * REDACTED: Original implementation had real location data
 * Now returns empty results
 */
export const searchLocations = async (query: string): Promise<SearchResult[]> => {
  console.log('[REDACTED] searchLocations called - returning empty results');
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  // Return empty results - no real location data
  if (!query.trim()) return [];
  
  // Placeholder response
  return [
    { 
      name: 'REDACTED_LOCATION', 
      location: { lat: 0, lng: 0 }, 
      type: 'city' 
    }
  ];
};
