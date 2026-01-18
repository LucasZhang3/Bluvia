/**
 * ============================================
 * REDACTED - NON-FUNCTIONAL REFERENCE ONLY
 * ============================================
 * 
 * This edge function has been intentionally disabled.
 * All API testing logic and endpoints have been removed.
 * 
 * Original purpose: API endpoint testing utility
 * Current status: Returns informational response only
 */

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  console.log('[REDACTED] Test API function called - functionality disabled');

  return new Response(JSON.stringify({ 
    message: 'REDACTED: Test API functionality has been disabled',
    _notice: 'This is a non-functional reference implementation.',
    results: []
  }), {
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  });
});
