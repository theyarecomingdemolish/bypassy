const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'node_modules', '@mercuryworkshop', 'scramjet', 'dist');
const destDir = path.join(__dirname, 'public');

if (!fs.existsSync(destDir)) fs.mkdirSync(destDir);

const files = fs.readdirSync(srcDir);
files.forEach(file => {
    const src = path.join(srcDir, file);
    const dest = path.join(destDir, file);
    fs.copyFileSync(src, dest);
    console.log(`Copied ${file}`);
});
