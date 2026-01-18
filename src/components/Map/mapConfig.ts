/**
 * Map Configuration - Coordinates redacted for open source release
 */

// REDACTED: All specific geographic coordinates removed
// Replace with your own region bounds

export const REGION_BOUNDS = {
  north: 0,
  south: 0,
  east: 0,
  west: 0
};

export const STRICT_REGION_BOUNDS = {
  north: 0,
  south: 0,
  east: 0,
  west: 0
};

export const REGION_CENTER = {
  lat: 0,
  lng: 0
};

export const DEFAULT_ZOOM = 7;

/**
 * Check if coordinates are within the configured region
 * REDACTED: Always returns false in reference implementation
 */
export const isWithinRegion = (_lat: number, _lng: number): boolean => {
  console.log('[REDACTED] Region validation disabled in reference implementation');
  return false;
};

// Legacy export names for compatibility
export const ARIZONA_BOUNDS = REGION_BOUNDS;
export const STRICT_ARIZONA_BOUNDS = STRICT_REGION_BOUNDS;
export const ARIZONA_CENTER = REGION_CENTER;
export const isWithinArizona = isWithinRegion;
