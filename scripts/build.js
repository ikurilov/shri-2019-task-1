const fs = require('fs');
const path = require('path');

try {
    fs.unlinkSync(path.resolve(__dirname, '../build', 'styles.js'));
} catch (e) {
    console.error(e);
}
