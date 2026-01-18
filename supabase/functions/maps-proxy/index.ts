/**
 * ============================================
 * REDACTED - NON-FUNCTIONAL REFERENCE ONLY
 * ============================================
 * 
 * This edge function has been intentionally disabled.
 * All API keys and external service connections have been removed.
 * 
 * Original purpose: Secure proxy for Google Maps API
 * Current status: Returns error/placeholder responses only
 */

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  console.log('[REDACTED] Maps proxy request received - functionality disabled');

  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  // Return informational error - no real API calls
  return new Response(
    JSON.stringify({ 
      error: 'REDACTED: Maps proxy functionality has been disabled',
      _notice: 'This is a non-functional reference implementation. You must provide your own Google Maps API key and proxy implementation.',
      timestamp: new Date().toISOString()
    }),
    {
      status: 503,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    }
  );
});
