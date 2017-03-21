/**
 * Created by Fernando on 3/5/17.
 */

const dir =  require("node-dir");
const crypto = require("crypto");




let hashStorage = {};
let same = {};



    dir.readFiles(__dirname,
        function (err, content, file, next) {
            const hash = crypto.createHash("sha256");
            if (err) throw err;
            // console.log('content:', content);


            hash.update(content);
            const tempHash = hash.digest('hex');
            if (tempHash in hashStorage) {
                same[tempHash] = [hashStorage[tempHash], file];

            }

            hashStorage[tempHash] = file;


            next();
        }, function () {

            const keys = Object.keys(same);
            keys.forEach((key)=> {
                console.log("\nThese files are duplicates:");
                same[key].forEach((file)=>{
                    console.log(file);
                });
            })
        });

