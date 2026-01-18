/**
 * ============================================
 * REDACTED - NON-FUNCTIONAL REFERENCE ONLY
 * ============================================
 * 
 * This edge function has been intentionally disabled.
 * All proprietary data, calculations, and API endpoints have been removed.
 * 
 * Original purpose: Metal concentration prediction API
 * Current status: Returns mock/placeholder data only
 */

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// ============================================
// REDACTED: All proprietary constants removed
// ============================================
const REDACTED_VALUE = 0;
const PLACEHOLDER_ONLY = true;

/**
 * REDACTED: Original implementation removed
 * This function previously connected to an external prediction API
 */
function generateMockResponse(lat: number, lon: number) {
  // Return static placeholder data - no real calculations
  return {
    location: { lat, lon },
    metals: [
      { name: "REDACTED_METAL_1", ppm: REDACTED_VALUE, error: REDACTED_VALUE },
      { name: "REDACTED_METAL_2", ppm: REDACTED_VALUE, error: REDACTED_VALUE },
      { name: "REDACTED_METAL_3", ppm: REDACTED_VALUE, error: REDACTED_VALUE },
      { name: "REDACTED_METAL_4", ppm: REDACTED_VALUE, error: REDACTED_VALUE },
      { name: "REDACTED_METAL_5", ppm: REDACTED_VALUE, error: REDACTED_VALUE },
    ],
    risk_scores: {
      REDACTED_METAL_1: REDACTED_VALUE,
      REDACTED_METAL_2: REDACTED_VALUE,
      REDACTED_METAL_3: REDACTED_VALUE,
      REDACTED_METAL_4: REDACTED_VALUE,
      REDACTED_METAL_5: REDACTED_VALUE,
      Average: REDACTED_VALUE,
    },
    _notice: "REDACTED: This is placeholder data only. No real calculations are performed."
  };
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    if (req.method !== 'POST') {
      return new Response('Method not allowed', { 
        status: 405, 
        headers: corsHeaders 
      });
    }

    const { lat, lon } = await req.json();

    if (typeof lat !== 'number' || typeof lon !== 'number') {
      return new Response('Invalid lat/lon parameters', { 
        status: 400, 
        headers: corsHeaders 
      });
    }

    console.log('[REDACTED] Mock prediction request received');
    
    // Return mock data - no real API calls or calculations
    const mockResult = generateMockResponse(lat, lon);
    
    return new Response(JSON.stringify(mockResult), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in predict-metals function:', error);
    return new Response(JSON.stringify({ 
      error: 'Internal server error',
      _notice: "REDACTED: This is a non-functional reference implementation"
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
