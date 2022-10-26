const fs = require('fs');

const dirname = process.argv[2];

const ext = process.argv[3];

fs.readdir(dirname, function(err, list) {
    if (err) {
        return console.log(err);
    }

    list.forEach(function(file) {
        if (file.endsWith(ext)) {
            console.log(file);
        }
    })
})