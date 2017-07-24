# DOM 

### Learning Objectives
- Describe the DOM
- Access elements in the DOM
- Add/remove elements to the DOM
- Edit existing elements in the DOM

### Why This Is Important

The DOM is an interface for our HTML and provides us with a structured representation of our document. With it, we can manipulate our HTML so our pages are no longer static data.

In other words, DOM and DOM manipulation is what allows websites to basically do anything dynamic. 

Learning about the DOM and how it fits into the front end also provides us a window into a bit more of how the itnernet works. This is obviously super important to our understanding of what we are learning and how it will fit into the entire web dev process as a whole.

### How We Will Learn This
- Discuss briefly how the front end works
- Discuss what the DOM is and what nodes are
- Traverse the DOM tree
- Play with the DOM

### What is the Document Object Model?
• Long Answer: It's actually an application programming interface for both HTML and XML documents which identifies the interfaces and objects used to represent and manipulate data, the semantics of these interfaces and objects - incuding both behavior and attributes, and the relatioships and collaborations among these interfaces and objects, all with adherence to structural isomorphism (if any two Document Object Model implementations are used to create a representation of the same document, they will create the same structure model, with precisely the same objects and relationships). 

• Short Answer: It's a tree.

It's a tree structure interface that represents our HTML and it's elements that we can use to manipulate HTML nodes (elements).

[Some Reading](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
[A lot more Reading](http://www.w3.org/TR/REC-DOM-Level-1/introduction.html)

-----
- Open up the starter code for today's lecture
- Take a look at the console.log at the top of the scripts.js
	- Why is this here?

### Accessing & Manipulating Elements
Using "Inspect Elements", we can manually access, traverse, and edit elements in the DOM tree.

Remember how I hacked the local version of NYTimes? Well, wouldn't it be cool if I could just do it programmatically?

Let's take a look at the starter code...

#### Searching the document
- document.getElementById
```
const header = document.getElementById('header-container');
```
- document.getElementsByClassName
```
const paragraphs = document.getElementsByClassName("paragraph-container");
```
- document.querySelector
```
const header = document.querySelector('#header-container');
```
- document.querySelectorAll
```
const paragraphs = document.querySelectorAll('.paragraph-container');
```

• querySelector returns the first element with the matching selector (more general, includes CSS selectors)

• getElementById returns a reference to the element by its ID (fastest, very old and stable across all browsers)


#### Creating within the document
- document.createElement (benchmarking shows this is the fastest...)
```
const element = document.createElement('h1');
```
- document.createTextNode
```
const greetings = document.createTextNode('greetings');
```

• create element doesn't attach it anyway. It just creates that HTML element in the browsers runtime memory. You will have to attach this manually.

• createTextNode creates a text node that houses a string. It creates the node to be put into an element but it isn't attached yet. You will have to attach this manually.


#### Traversing nodes
- node.childNodes
```
const paragraphs = document.getElementById('content-container').childNodes 

```
Or if we might be calling content-container more than once, let's keep it DRY and set it as a variable.
```
const contentContainer = document.getElementById('content-container');
const paragraphs = contentContainer.childNodes;
```
- node.children
```
const paragraph = contentContainer.children;
```

##### NOTE:
- Be very cognizant of the objects you are getting back. Everything is still JS objects. In Chrome, `typeof [1,2,3]` returns back "Object" because an array is a type of object!
- Are you getting back and array or the actual object aka HTML element in JS object format?
- This will lead the most of your initial struggles so PAY ATTENTION TO DETAIL
- Sometimes Chrome returns back an arrow other times it displays the actual value, hit refresh a few times to get the desired result.


#### DOM editing
- node.appendChild (adds to the very bottom)
```
const brandNewH1 = document.createElement('h1');
const contentContainer = document.getElementById('content-container');
contentContainer.appendChild(brandNewH1);
```

- node.remove (we can remove that same node by using removeChild on the contentContainer)
```
contentContainer.removeChild(brandNewH1);
```

#### DOM node additions (append)

```
const contentContainer = document.getElementById('content-container');
const brandNewH1 = document.createElement('h1');
const statement = "Hello, I am a thing";
brandNewH1.append(statement);
contentContainer.append(element);
```

#### Node Editing
- node.innerHTML: sets or returns the elements descendants
```
contentContainer.innerHTML;

const header = document.getElementById('header-container');
const newGreeting = "Hello, this greeting is so much better";
header.innerHTML = newGreeting;
console.log(header);
```

- node.id: sets or returns an id to an HTML node
```
const header = document.getElementById('header-container');
header.id = "new-header-container";
console.log(header.id);
```

- node.classList: returns a list of class(es) for that element
```
const contentContainer = document.getElementById('content-container');
const firstParagraph = contentContainer.children[0];
console.log(firstParagraph.classList);
firstParagraph[0];
```

- node.setAttribute: sets attributes to a node
```
const header = document.querySelector('#header-container');
header.nodeType;

header.setAttribute("style", "background-color: green;");
```

### Recap
The DOM is in essence the JS object that acts as an interface for the actual mechanics that produce content off the user's browser.

DOM manipulation refers to our ability to manipulate the DOM programmatically using JS.

The first step towards manipulating DOM almost always starts by selecting the element we want to manipulate. With these basics, we can eventually create all sorts of cool functionality.

[Moar selectors!](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
[Moar creators!](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
[Moar traversing!](https://developer.mozilla.org/en-US/docs/Web/API/Node/childNodes)