/**
 * Created by Fernando on 1/30/17.
 */

//Question 1
console.log("Question 1");

function reverseWord(s) {
    let reversedString = "";
    for( let i=0; i < s.length; i++){
       reversedString= s.charAt(i).toString()+reversedString;
    }
    return reversedString;
}

console.log(reverseWord("hello"));
//olleh
console.log(reverseWord("world"));
//dlrow


//Question 2
console.log("\nQuestion 2");

function replaceVowels(s) {
    let replacedVowels = "";
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let replace = false;
    for( let i=0; i < s.length; i++){

        vowels.forEach(function (h) {
            if (s.charAt(i) == h){
                replace = true;
            }
        });

        if(replace){
            replacedVowels = replacedVowels + "*";
        }
        else{
            replacedVowels = replacedVowels + s.charAt(i).toString();
        }
        replace = false;
    }
    return replacedVowels;
}

console.log(replaceVowels('javascript'));
// j*v*scr*pt
console.log(replaceVowels('angular'));
// *ng*l*r

//Question 3
console.log("\nQuestion 3");

function countLetters(q) {
    let counters = {};
    q.forEach(function (e) {
        if(counters[e] == undefined){
            counters[e]=1;
        }
        else{
            counters[e] = counters[e]+ 1;
        }
    });
    return counters;
}

console.log(countLetters(['z', 'y', 'x', 'x', 'w', 'z', 'y', 'u', 'y', 'y']));
// { z: 2, y: 4, x: 2, w: 1, u: 1 }

//Question 4
console.log("\nQuestion 4");

function oddsAndEvens(w){
    let odds =[];
    let evens = [];
    let even=0;
    let odd=0;

    w.forEach(function (e) {
        if(e%2==0){
            evens[even]=e;
            even++;
        }
        else{
            odds[odd]=e;
            odd++;
        }
    });

    console.log("odds = [ "+ odds+" ]");
    console.log("evens = [ "+ evens+" ]");
}

oddsAndEvens([ 21, 99, 43, 1, 8, 2, 48, 82 ]);
// odds = [ 21, 99, 43, 1 ]
// evens = [ 8, 2, 48, 82 ]

//Question 5
console.log("\nQuestion 5");

function averageArray(a) {
    let avg = 0;
    let total = 0;
    let counter = 0;


    a.forEach(function (r) {
        if(r/r == 1){
            total+= parseInt(r);
            counter++;
        }

    });

    return total/counter;
}

console.log(averageArray([3, 9, 'hello', 4, '95', 'abc', '1', 8, { key: 'value ' }]));
// 20

//Question 6
console.log("\nQuestion 6");

function markupValue(car, percent) {
    let markup = [];
    let temp = {};
    let tempA = 0;
    let final = {};
    let total = 0;
    let markupAmount = 0;
    car.forEach(function (t) {
        temp={};
        markupAmount =(t.wholesale*(percent/100));
        tempA = (t.wholesale*(percent/100))+t.wholesale;

        temp[t.type]= tempA;
        markup.push(temp);

        total+=markupAmount;
    });

    final["cars"]= markup;
    final["total"]= total;

    return final;
}

const cars = [
    { type: 'hybrid', wholesale: 25000 },
    { type: 'minivan', wholesale: 28000 },
    { type: 'sedan', wholesale: 31500 },
    { type: 'convertible', wholesale: 45750 }
];
console.log(markupValue(cars, 10.5));

/*
{ cars:
    [ { hybrid: 27625 },
        { minivan: 30940 },
        { sedan: 34807.5 },
        { convertible: 50553.75 } ],
  total: 13676.25 }
*/