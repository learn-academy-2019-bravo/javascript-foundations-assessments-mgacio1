# Javascript Foundations Assessments
random
### Without using Google answer the following:

1. List the data types in Javascript. Indicate which are primitives.
String, number, boolean, null, undefined, and symbols are all primitive data types.

2. What's the difference between =, ==, and === in JavaScript?
== and === are comparison operators and determine if value is the same.  the difference is the === also compares the data type.

3. What is the difference between an array's index and length?
Array's index starts at 0, where's an array's length starts at 1.

4. What are the three parts of a for loop?
for (let i=0, i < 10; i++). start, for how long, move up or down

5. What is a function's declaration, argument, and call?
A function declaration is simply declaring the function(naming the function).  Argument is the info that we want to pass through the function. Calling the function is simply returning the final value by going through the steps in the function.

6. What are the three main steps in saving work to github?
git add .
git commit -m "notate/comment on file being saved"
git push

7. What is the terminal command to move directories?
cd "name of new directory
"
8. Do you have a suggestion for a Check In question?
What do you do for fun? Who is your favorite Disney character and why? What's your favorite libation?

9. What was your favorite topic this week?
Pig Latin project

10. What was your "A-ha!" moment this week?
Seeing how JS, CSS and HTML interact with one another to create website.

### Stretch: The following questions are potential interview questions. First, try to answer each question on your own then Google the answer to further your knowledge.

1. Look at this Javascript and try to predict, what will the browser's console show?

``` javascript
var text = 'outside'
function logIt(){
    console.log(text)
    var text = 'inside'
}

logIt()
console.log(logIt(text)); // output - "inside"

2. What is JSON? How does it relate to javascript objects?
Javascript Object Notation:

3. Describe a closure, what is it good for and how do you recognize one?
