# Practical DOM

## Lesson Objectives

- Introduction to practical DOM application
- Learn how to place text garnered from prompts/text fields/imputs into the DOM

## Text fields

“Text fields are a space that users can type in. You might have seen them when you fill out login information like usernames and search bars. Can anyone give me of an example of a text field they have used?” 


“It isn’t too hard to add a text field, it is only one line of code. The challenging part is that we will need to write a function to get the text in the field. A function is a bit of code that does a specific action, like getting text. Think of it like when you go to brush your teeth. The action of brushing your teeth needs a bunch of different parts, like getting the toothbrush and toothpaste, then putting the toothpaste on the brush. Instead of describing the whole process, we can just say ‘brush your teeth’ and know what needs to be done. That is exactly what happens with code. We could write a function called ‘brushTeeth’ that would have all those steps in it. Can anyone think of other examples of real life actions we could make a function for?”

Imagine something like...
```
function brushTeeth(){
  1. pick up tooth brush
  2. pick up tooth paste
  if (toothpaste is on tooth brush){
    brush your teeth;
  } else {
    squeeze tooth paste onto tooth brush
    brushTeeth();
  }
}
```
* * *

Open an index.html and scripts.js, and add this code.  
```
<body>
  <input type="text" id="text" value="Some text...">
  <button id="butt">Try it</button>
  <p id="para"></p>
  <script type="text/javascript" src="scripts.js"></script>
</body>
```
Okay, so observe now.  Let's go through this, step by step.

In our HTML, look at the ```<input>```

We have to declare multiple things here.  We have to declare... TYPE, ID, AND VALUE.

```<input type="text" id="text" value="Some text...">```

<hr> 

Now, look at the BUTTON.  You guys like buttons, right?

```<button>Try it</button>```

The thing is, this button won't do anything.  Try it!  Does it actually do anything on your page?  

The purpose of this button is so, if you CLICK the button, something will happen!  Ideally, we want to EXECUTE the function that we created in JS.  In order to execute this function, we first have to CALL the function.

“To use our functions, we are going to call them. When code is called it means that it will run. For example, when you call a friend, you are running the code that makes your friend’s phone ring.”


If we want to call, or INVOKE, this function... we must assign it manually to the button.  We do that by doing something like this...

```<button onclick="sampleFunction()">Try it</button>```

<hr>

Okay, so now we have a button with an onclick="sampleFunction()".  What do we do with this.

In ```scripts.js```

```
console.log('hey');

const sampleFunction = function(){
  const input = document.getElementById("text").value;
  console.log(input);
  const para = document.getElementById("para");
  para.innerHTML = input;
}
```

#### What's going on here?

Explain to me what this function is doing!


You know, if we want to add the .onclick() via javascript, we can do...

```
document.getElementById('butt').addEventListener('click', function(){
  sampleFunction();
})
```

<hr>

## Pre-built JS functions

“There are a few different ways we can edit user input. Since we already know how to create a text field, and get the text that has been written, it is easy to change the words. All we need to do, is take the variable that holds the text, and call functions that already exist. What does that mean?” 

“Well, when we write the variable name, we just type a period after it, and a list of functions that we can use will pop up. These functions come with JavaScript.”

I'm going to show you FOUR DIFFERENT PRE-BUILT JAVASCRIPT FUNCTIONS.


const sample_string = "Hello, world";

1. LOWERCASE

```
const lowercase = sample_string.toLowerCase();
console.log(lowercase);
```
2. UPPERCASE
```
const uppercase = sample_string.toUpperCase();
console.log(uppercase);
```
3. REPEAT
```
const repeat = sample_string.repeat(2);
console.log(repeat);
```
4. REPLACE
```
const replace = sample_string.replace('Hello','Goodbye');
console.log(replace);
```