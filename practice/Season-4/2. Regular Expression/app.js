//Regular Expression
// let re ;
// re = /hello/;
// re = /hello/i; // i- stands for case insensitive
// re = /hello/g; // g- stands for Global Search.

//exec() 
// const result1 = re.exec('pranab hello world hello');
// console.log(result1);

//test() -Returns true or false 
// const result = re.test('hello');
// console.log(result)

//match() - Return result array or null 
// const str = 'Hello There hello, hello' ;
// const result = str.match(re) ;
// console.log(result);

//search() - Returns index of the first match if not found returns -1 
// const str = 'pranab Hello there' ;
// const result = str.search(re) ;
// console.log(result);

//replace() - Returns new string with some or all matches of a pattern
// const str = 'Hello There';
// const newStr = str.replace('Hello','HI');
// console.log(newStr);

let re ;
re = /hello/i;



var str = 'Hello' ;
var result = re.exec(str);
console.log(result);

function reTest(re, str) {
    if(re.test(str)) {
        console.log(`${str} matches ${re.source}`);
    }else {
        console.log(`${str} does NOT match ${re.source}`);
    }
}
reTest(re, str);