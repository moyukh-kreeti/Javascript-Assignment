# Assignment (Day 2)
```
1. If we execute this Javascript, what will the browser's console show?
```
``` javascript
var text = 'outside';
function logIt(){
 console.log(text);
 var text = 'inside';

};
logIt()

```

Ans:

<!-- ![Alt text](./pic.png) -->

It will print "Undifined"

```
2. Write a regular expression  to reverse the first and last name

```

Ans: 

```javascript

const fullName = "Moyukh Sarkar";
const reversedName = fullName.replace(/^(\w+)\s(\w+)$/, "$2 $1");
console.log(reversedName);

//Output will be Sarkar Moyukh

```

```
3. Write a Regular expression to validate email address
```

Ans:

```javascript
const email = "moyukh.sarkar@kreeti.com";
const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const isValidEmail = regex.test(email);
console.log(isValidEmail);
```

```
4. Find the Output
```
```javascript
 var x = 100;
    console.log(x);
     
    function test(){
        var x = 250;
        console.log(x);
     
        if (x > 100) {
            let x = 350;
            console.log(x);
        }
     
        console.log(x);
    }
     
    test();
    console.log(x);
```

Ans:

It will print the numbers in a series as 100 250 350 250 100

```
5. What is the difference of output between these two expressions? Give your reasons for it:
  a. 12 == “12”
  b. 12 === “12”
  c. Number(12) === 12

```

Ans: 

a. It will output true . Because with "==" javascript check the value of the expression so both expressions value are same so it will return true.

b. It will output false. Because with "===" javascript check the value of the expression as well as the datatype of the expression. As the datatype of the expressions are different it will return false.

c. It will output true because the value and the datatype of the expressions are same so it will return true.

```
6. What is NaN?
```

Ans:

NaN stands for "Not a Number" and is a special value in JavaScript that represents the result of an operation that cannot be represented as a valid number.

NaN is often returned as the result of an invalid mathematical operation, such as dividing zero by zero or trying to parse a string that doesn't contain a valid number. For example:

```javascript
const result = 0 / 0; // Returns NaN
const value = parseInt("hello"); // Returns NaN
```

