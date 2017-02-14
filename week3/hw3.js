/**
 * Created by Fernando on 2/12/17.
 */
//Question 1
function countDown(n, cb) {
    let counter = 0;
    const num = n;

    const count = setInterval(function () {


        console.log(num-counter);
        counter++;

        if(counter===num){
            clearInterval(count);
            cb();
        }
    }, 500);
}

//Question 2

const upperReject = (c)=>{
    return new Promise((resolve, reject)=>{
        if(c == c.toUpperCase()){
            reject(`this letter was rejected: ${c}`);
        }
        else{
            resolve(`this letter was resolved: ${c}`);
        }
    });
};


function sortLetters(l, cb) {
    const promises = l.map((c) =>{
        return upperReject(c).catch((err) => {
            return err;
        });
    });

    Promise.all(promises).then((res)=>{
        res.forEach(function (p) {
            console.log(p);

        });
        cb();
    }).catch((err) =>{

        console.log(err);
    });
}

//Question 3
const reverseWord = (s, cb) => {
     s.split("").reverse().join("");

     return cb(s, s.split("").reverse().join(""));

};
const print = (s) => {
 console.log(reverseWord(s,compare));
};
const compare = (s,r) => {
    let bool = false;
    if (s==r){
        bool = true;
    }
    return bool;
};

//Extra Credit

const letters = ['A', 'b', 'c', 'D', 'e'];

const myObject = {
    q1: function () {
        console.log("Question 1");
        countDown(5, myObject.q2);
    },
    q2: function () {
        console.log("\nQuestion 2");
        sortLetters(letters, myObject.q3);


    },
    //q3 THIS IS NOT USED
    //When I try to use it like I did q2. q3 is undefined. So I had to make a q3 function outside the object.
    q3: function () {
        console.log("\nQuestion 3");
        print("kayak");
        print("canoe");
    }
};


myObject.q1();