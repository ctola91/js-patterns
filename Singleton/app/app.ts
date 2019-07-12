// Typescript way, ES6 are the same without Data types
import Singleton from "./Singleton";

let s1 = Singleton.getInstance();
let s2 = Singleton.getInstance();

console.log('Instances are the same in typescript/ES6?: ', s1.getRandomNumber() === s2.getRandomNumber());


// js way
const SingletonJSWay = require("./SingletonJSWay");

let s3 = SingletonJSWay.getInstance();
let s4 = SingletonJSWay.getInstance();

console.log('Instances are the same in js way?: ',s3.getRandomNumber() == s4.getRandomNumber());