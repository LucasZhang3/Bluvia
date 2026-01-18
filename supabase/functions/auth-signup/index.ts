/**
 * ============================================
 * REDACTED - NON-FUNCTIONAL REFERENCE ONLY
 * ============================================
 * 
 * This edge function has been intentionally disabled.
 * All authentication logic and service connections have been removed.
 * 
 * Original purpose: User registration (signup)
 * Current status: Returns error responses only
 */

import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  console.log('[REDACTED] Auth signup function called - functionality disabled')

  // Return informational error - no real authentication
  return new Response(
    JSON.stringify({ 
      error: 'REDACTED: Registration functionality has been disabled',
      _notice: 'This is a non-functional reference implementation. You must provide your own authentication backend.'
    }),
    { 
      status: 503, 
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    }
  )
})
