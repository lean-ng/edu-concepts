// Google's now withdrawn zone proposal:
// https://github.com/domenic/zones

// But Angular (still) relies on Zones, so we need the polyfill:
import 'zone.js';

// There is already a "zoneless" Angular. See:
// https://angular.io/guide/zone#noopzone
//
// Or just Google for it:
// https://www.google.com/search?q=zoneless+angular
