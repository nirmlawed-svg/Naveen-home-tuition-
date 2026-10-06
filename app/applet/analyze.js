const fs = require('fs');

const js = fs.readFileSync('/tmp/ref_bundle.js', 'utf8');
console.log('Bundle length:', js.length);

// Let's see if there is sourceMappingURL
const sourceMapMatch = js.match(/\/\/# sourceMappingURL=(.*)/);
console.log('Source map:', sourceMapMatch ? sourceMapMatch[1] : 'none');

// Find all strings or interesting tokens
const phoneMatch = js.match(/\+?91[\d\s-]{10,}/g);
console.log('Phones:', phoneMatch);

const emailMatch = js.match(/[\w.-]+@[\w.-]+\.\w+/g);
console.log('Emails:', emailMatch);
