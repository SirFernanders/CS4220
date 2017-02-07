/**
 * Created by Fernando on 2/5/17.
 */


//Question 1
console.log("Question 1");

function reverseWord(s) {
    return s.split("").reverse().join("");
}

console.log(reverseWord('hello'));
// olleh
console.log(reverseWord('world'));
// dlrow

//Question 2
console.log("\nQuestion 2");

function replaceVowels(s) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    s.split("").forEach(function (c) {
        vowels.forEach(function (v) {
            s = s.replace(v,"*");
        });
    });
    return s;
}
console.log(replaceVowels('javascript'));
// j*v*scr*pt
console.log(replaceVowels('angular'));
// *ng*l*r

//Question 3
console.log("\nQuestion 3");

class Calculator {
    constructor(v){
        //default value 0
        if(isNaN(v)) {
            this.value = 0;
        }
        else{
            this.value = v;
        }
    }
    print(){
        console.log(this.value);
    }
    multiply(m){
        //default value 1
        if(isNaN(m)) {
        }
        else {
            this.value = this.value * m;
        }
    }
    add(a){
        //default value 0
        if(isNaN(a)) {

        }
        else {
            this.value = this.value + a;
        }
    }
    divide(d){
        //default value 1
        if(isNaN(d)) {
        }
        else {
            this.value = this.value / d;
        }
    }
    substract(s){
        //default value 0
        if(isNaN(s)) {
        }
        else {
            this.value = this.value - s;
        }
    }
    clear(){
        this.value = 0;
    }
}
const calculator_v1 = new Calculator(2);
calculator_v1.multiply(3);
calculator_v1.add(10);
calculator_v1.divide(2);
calculator_v1.substract(4);
calculator_v1.print();
calculator_v1.clear();
calculator_v1.print();

const calculator_v2 = new Calculator();
calculator_v2.multiply(3);
calculator_v2.add(10);
calculator_v2.divide(2);
calculator_v2.substract(4);
calculator_v2.print();
calculator_v2.clear();
calculator_v2.print();

//Question 4
console.log("\nQuestion 4");

function convertToObject(array){
    let datObject = {};
    array.forEach(function (t) {
        datObject[t[0]]=t[1];
    });
    
    return datObject;
}

const media_arr = [['media', 'facebook'], ['company', 'github'], ['likes', 58445]];
console.log(convertToObject(media_arr));


//Question 5
console.log("\nQuestion 5");

function convertToArray(o) {
    let datArray = [];

    const keys = Object.keys(o);
    keys.forEach(function (k) {
        datArray.push([k, o[k]]);
    });
    return datArray;
}

const media_obj = { media: 'facebook', company: 'github', likes: 58445 };
console.log(convertToArray(media_obj));