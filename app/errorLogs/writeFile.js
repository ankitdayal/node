const fs = require('fs');
const path = require('path');

const docsDir = path.join(__dirname, 'error5.json');


export const writeError = data => {
    fs.appendFile(docsDir, `${JSON.stringify(data)}\n`, err => {
        if (err) throw err;
        console.log('Saved!', JSON.stringify(data));
    });
};
