window.onload = function(){
	
	let myEditor = $(".es5");

	myEditor.codeblock({
		editable: true,
		//initial console text
		consoleClass: "codeblock-console-text",
		runButtonText: "run",
		runButtonClass: "codeblock-console-run",
		console: true,
		resetable: false,
		runnable: true,
		lineNumbers: true
	});   	
	
	example_variables();	
	example_arrows(); 
	example_classes();
	example_objectLiterals();
	example_templateStrings();
	example_destructuring();
	example_default();
	example_for();
	example_generators();
	example_unicode();
	example_modules();
	example_maps();
	example_proxies();
	example_symbols();
	example_subclasses();
	example_promises();
	example_additions();
   
};

function example_variables(){
	let editor = $('.es5-variables');
	let editor2 = $('.es6-variables');

	let challenge = `var x = 3;

function foo() {
	var x = 5;  //Declare local var
    console.log(x);          
}
 
foo();`;


	let challenge2 = `function foo() {
	if (true) {
	    let x = 3;
	    const c = 4;
	    //c = 5; //error
	}
	//console.log(x); //error
  	typeof bar;
  	//let bar = 'baz'; //error
}
foo();`;

	bindExamples(editor, editor2, challenge, challenge2);

}

function example_arrows(){
	let editor = $('.es5-arrows');
	let editor2 = $('.es6-arrows');

	let challenge = `var arr = [4, 9, 16];

var roots = arr.map(function (x) { 
    return Math.sqrt(x)
});

console.log(roots);`;


	let challenge2 = `var arr = [4, 9, 16];

const roots = arr.map(x => Math.sqrt(x));

console.log(roots);`;

	bindExamples(editor, editor2, challenge, challenge2);

}

function example_classes(){
	let editor = $('.es5-classes');
	let editor2 = $('.es6-classes');

	let challenge = `function someClass(age) {
    this.age = age;
}

someClass.prototype.sayAge = function() {
    console.log(this.age);
}

var myInstance = new someClass(27);
myInstance.sayAge();`;


	let challenge2 = `class someClass {
    constructor(age) {
        this.age = age;
 }
    sayAge() {
        console.log(this.age);
    }
}

var myInstance = new someClass(27);
myInstance.sayAge();`;

	bindExamples(editor, editor2, challenge, challenge2);

}

function example_objectLiterals(){
	let editor = $('.es5-objectLiterals');
	let editor2 = $('.es6-objectLiterals');

	let challenge = `//Method Definition Shorthand

var o = {
  method: function() {
    return "Hello!";
  }
};

//Property Value Shorthand

function f( x, y ) {
  return { x: x, y: y };
}`;


	let challenge2 = `//Method Definition Shorthand

var o = {
  method() {
    return "Hello!";
  }
};

//Property Value Shorthand

function f( x, y ) {
  return { x, y };
}`;

	bindExamples(editor, editor2, challenge, challenge2);

}

function example_templateStrings(){

	let editor = $('.es5-templateStrings');
	let editor2 = $('.es6-templateStrings');

	let challenge = `var multiline =
    'hello\\n' +
    'world\\n';
    
//console.log(multiline);

var a = 5;
var b = 10;
console.log("hey " + (a + b) + " there");`;


	let challenge2 = `const multiline = \`hello
    wolrd\`;
    
//console.log(multiline);

const a = 5;
const b = 10;
 
console.log(\`hey \${a + b} there\`);
`;

	bindExamples(editor, editor2, challenge, challenge2);

}

function example_destructuring(){

	let editor2 = $('.es6-destructing');

	let challenge2 = `// object pattern matching
let {lName, fName} = {fName: 'John', age: 15, lName: 'Doe'};
 
// array pattern matching
let [first, second, third] = [8, 4, 100, -5, 20];
 
console.log(lName + ', '+ fName);
// output: Doe, John
 
console.log(third, second, first);
// output: 100, 4, 8`;

	editor2.codeblock("runnable", false);

	bindExamples(null, editor2, null, challenge2);

}

function example_default(){
	let editor = $('.es5-default');
	let editor2 = $('.es6-default');

	let challenge = `//default
function foo(x, y) {
    x = x || 0;
    y = y || 0;
}

//rest
function containsAll(haystack) {
  for (var i = 1; i < arguments.length; i++) {
    var needle = arguments[i];
    if (haystack.indexOf(needle) === -1) {
      return false;
    }
  }
  return true;
}

//spread
var arr1 = ['a', 'b'];
var arr2 = ['c'];
var arr3 = ['d', 'e'];

console.log(arr1.concat(arr2, arr3));`;


	let challenge2 = `//default
function foo(x=0, y=0) {
   
}

//rest
function containsAll(haystack, ...needles) {
  for (let needle of needles) {
    if (haystack.indexOf(needle) === -1) {
      return false;
    }
  }
  return true;
}

//spread
const arr1 = ['a', 'b'];
const arr2 = ['c'];
const arr3 = ['d', 'e'];

console.log([...arr1, ...arr2, ...arr3]);`;

	editor2.codeblock("runnable", false);
	bindExamples(editor, editor2, challenge, challenge2);

}

function example_for(){
	let editor = $('.es5-for');
	let editor2 = $('.es6-for');

	let challenge = `//forEeach
var list = [8, 3, 11, 9, 6], i;
 
list.forEach(function(value, i) {
  //console.log(value);
});

//for in
// Don't do this, order is not guaranteed
for (i in list) {
  console.log(list[i]);
}`;


	let challenge2 = `//for of
let list = [8, 3, 11, 9, 6];
 
for (let value of list) {
  console.log(value);
}`;

	bindExamples(editor, editor2, challenge, challenge2);

}

function example_generators(){

	let editor2 = $('.es6-generators');

	let challenge2 = `function *sayHelloWorld() {
    var first = yield 'first param';
    var second = yield 'second param';
    console.log(first + second);
}

var myGenerator = sayHelloWorld();

myGenerator.next();         //{value: 'first param', done: 'false'}
myGenerator.next('hello '); //{value: 'second param', done: 'false'}
myGenerator.next('world')   //{value: 'undefined', done: 'true'}`;


	bindExamples(null, editor2, null, challenge2);

}

function example_unicode(){
	let editor = $('.es5-unicode');
	let editor2 = $('.es6-unicode');

	let challenge = `console.log('\\uD83D\\uDE80');`;


	let challenge2 = `console.log('\\u{1F680}');

console.log('\\u{13021}') //breaks`;

	bindExamples(editor, editor2, challenge, challenge2);

}

function example_modules(){
	
	let editor2 = $('.es6-modules');



	let challenge2 = `//exporting in ES6
export function someMethod() {

}
export const another = {};

//All supported syntax
import 'jquery';                        // import a module without any import bindings
import $ from 'jquery';                 // import the default export of a module
import { $ } from 'jquery';             // import a named export of a module
import { $ as jQuery } from 'jquery';   // import a named export to a different name
import * as crypto from 'crypto';       // import an entire module instance object

export const x = 42;                    // export a named variable
export function foo() {};               // export a named function
export default 42;                      // export the default export
export default function foo() {};       // export the default export as a function
export { encrypt };                     // export an existing variable
export { decrypt as dec };              // export a variable as a new name
export { encrypt as en } from 'crypto'; // export an export from another module
export * from 'crypto';                 // export all exports from another module`;

 
  editor2.codeblock("runnable", false);

  	bindExamples(null, editor2, null, challenge2);

}

function example_maps(){
	
	let editor2 = $('.es6-maps');

	let challenge2 = `//Maps
let map = new Map();
map.set("foo", "bar");
map.set("hello", "world");
map.delete("hello");
console.log(map.get("foo"));
console.log(map.size);
console.log(map.length); //wrong - length is for sequences, data structures that are indexable – like arrays
console.log(map.has("foo"));

//WeakMaps
var data, wmap = new WeakMap();
wmap.set({foo: "bar"}, "foobar");

//Sets
let value, set = new Set(["a", "a","e", "b", "c", "b", "b", "b", "d"]);

for (value of set) {
    console.log(value);
}`;

	bindExamples(null, editor2, null, challenge2);

}

function example_proxies(){
	
	let editor2 = $('.es6-proxies');

	let challenge2 = `var engineer = { name: 'Joe Sixpack', salary: 50 };
 
var interceptor = {
  set: function (receiver, property, value) {
    console.log(property, 'is changed to', value);
    receiver[property] = value;
  }
};
 
engineer = Proxy(engineer, interceptor);

engineer.salary = 60;

//console output:
//salary is changed to 60`;
	
	editor2.codeblock("runnable", false);

	bindExamples(null, editor2, null, challenge2);

}

function example_symbols(){
	
	let editor2 = $('.es6-symbols');

	let challenge2 = `let sym = Symbol("foo");
console.log(sym.toString());
let obj = {};

//const foobar = sym + 'bar';  //error

obj['hi'] = "bye";
obj[sym] = "bar";
//property accessed by sym doesn't show up in the object if iterated on or if stringify'd
for (const i in obj) {
    console.log(i);             
}

console.log(JSON.stringify(obj));`;
	

	bindExamples(null, editor2, null, challenge2);

}

function example_subclasses(){
	
	let editor2 = $('.es6-subclasses');

	let challenge2 = `//extend Error
class MyError extends Error {
  constructor(message) {
    super(message);
    this.message = message;
    this.name = 'MyError';
  }
}

//extend Array
class Stack extends Array {
    get top() {
        return this[this.length - 1];
    }
}

let stack = new Stack();
stack.push('world');
stack.push('hello');
console.log(stack.top);
console.log(stack.length);`;
	

	bindExamples(null, editor2, null, challenge2);

}

function example_promises(){
	
	let editor2 = $('.es6-promises');

	let challenge2 = `// an immediately resolved promise
var p2 = Promise.resolve("foo"); 

// can get it after the fact, unlike events
p2.then((res) => console.log(res)); 

var p = new Promise(function(resolve, reject) {  
   setTimeout(() => resolve(4), 2000);
});

// handler can't change promise, just value
p.then((res) => {  
  res += 2;  
  console.log(res);
});

// still gets 4
p.then((res) => console.log(res));`;
	

	bindExamples(null, editor2, null, challenge2);

}

function example_additions(){
	
	let editor2 = $('.es6-additions');

	let challenge2 = `Number.isInteger(Infinity) // false
Number.isNaN("NaN") // false

Math.acosh(3) // 1.762747174039086
Math.hypot(3, 4) // 5

"abcde".includes("cd") // true
"abc".repeat(3) // "abcabcabc"

Array.from(document.querySelectorAll('*')) // Returns a real Array
Array.of(1, 2, 3)    // Similar to new Array(...), but without special one-arg behavior
[0, 0, 0].fill(7, 1) // [0,7,7]
[1, 2, 3].find(x => x == 3)      // 3
[1, 2, 3].findIndex(x => x == 2) // 1
[1, 2, 3, 4, 5].copyWithin(3, 0) // [1, 2, 3, 1, 2]
["a", "b", "c"].entries() // iterator [0, "a"], [1,"b"], [2,"c"]
["a", "b", "c"].keys()    // iterator 0, 1, 2
["a", "b", "c"].values()  // iterator "a", "b", "c"

Object.assign(Point, { origin: new Point(0,0) })`;
	
	editor2.codeblock("runnable", false);
	bindExamples(null, editor2, null, challenge2);

}


function bindExamples(editor, editor2, challenge, challenge2){

	if (editor !== null){
		editor.codeblock("text", challenge);
		editor.codeblock("editor").moveCursorTo(0);
	}	
	editor2.codeblock("text", challenge2);
	editor2.codeblock("editor").moveCursorTo(0);
}
