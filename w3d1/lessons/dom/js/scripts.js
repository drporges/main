console.log("I'm working!");
// ========
// SEARCH
// ========
// - Get the header-container element using getElementById

// const header = document.getElementById('header-container');

// - Get all 3 paragraphs using getElementsByClassName

// const paragraphs = document.getElementsByClassName('paragraph-container');


// - Get the header-container using querySelector

// const header = document.querySelector('#header-container');


// - Get all 3 paragraphs using querySelectorAll

// const paragraphs = document.querySelectorAll('.paragraph-container');

// ========
// Create
// ========
// - Create a h1 element using createElement

// const element = document.createElement('h1');

// - Create a textnode using createTextNode("text");

// const text = document.createTextNode('hello');

// ========
// Traverse
// ========
// - Use .childNodes to access paragraphs

// const paragraphs = document.getElementById('content-container').childNodes;
// console.log(paragraphs);

// - Use .children to access paragraphs

// const contentContainer = document.getElementById('content-container');
// const paragraph = contentContainer.children;	

// ========
// DOM Editing
// ========
// - Create a new element (or use the one from above if you set it to variable) and insert it into the DOM using .appendChild to content-container

// const brandNewH1 = document.createElement('h1');
// const contentContainer = document.getElementById('content-container');
// console.log("about to add new h1");

// contentContainer.appendChild(brandNewH1);

// console.log("about to delete h1");

// console.log(contentContainer);

// - Use .remove to remove the newly appended element

// contentContainer.removeChild(brandNewH1);

// ========
// Node Editing
// ========
// - Use innerHTML on header-container to edit the text into a new message

// const header = document.getElementById('header-container');
// const paragraph = document.getElementsByClassName('paragraph-container');
// const newGreeting = "sup";
// header.innerHTML = newGreeting;
// console.log(header);


// - Use .id to change the id of header-container to "new-header-container"

// header.id = "header-container";
// console.log(header.id);

// - Use .classList on the first paragraph in content-container

// const contentContainer = document.getElementById('content-container');
// const firstParagraph = contentContainer.children[0];
// console.log(firstParagraph.classList);
// firstParagraph[0];

// - Use .setAttribute to set the background color of header-container to green 

// header.setAttribute("style", "background-color: gold;");
// header.setAttribute("style", "border: 35px solid limegreen;");
// paragraph.setAttribute("style", "border: 15px solid white;");




























// =================
// IN CLASS EXAMPLES
// =================
// SEARCH - There are many ways
//	• document.getElementByID
// const header = document.getElementById('header-container');
// console.log("Here is the data you requested sir...");
// console.log(header);

////	• document.querySelector
// const header = document.querySelector('#header-container');
// console.log("Here is the data you requested sir...");
// console.log(header);

////	• document.getElementsByClassName
// const paragraphs = document.getElementsByClassName('paragraph-container');
// console.log("Here is the data you requested sir...");
// console.log(paragraphs);

//// 	• document.querySelectorAll
// const paragraphs = document.querySelectorAll('.paragraph-container');
// console.log("Here is the data you requested sir...");
// console.log(paragraphs);

//// CREATE - let's add a h1 tag or just straight up text
//// 	• document.createElement
// const element = document.createElement('h1');
// console.log(element);

////	• document.createTextNode
// const sup = document.createTextNode('sup');
// console.log(sup);

//// TRAVERSE - child and parent nodes
//// • node.childNodes
// const paragraphs = document.getElementById('content-container').childNodes 
// console.log(paragraphs);

//// Potential Oppty to refactor. Am I going to call an element more than once? If so, set it to a variable. DRY!
// const contentContainer = document.getElementById('content-container');
// console.log(contentContainer);
// const paragraph = contentContainer.childNodes;
// console.log(paragraph);

//// • node.children
// const contentContainer = document.getElementById('content-container');
// const paragraph = contentContainer.children;
// console.log(paragraph);

//// DOM EDITING
//// • node.appendChild
// const brandNewH1 = document.createElement('h1');
// const contentContainer = document.getElementById('content-container');
// contentContainer.appendChild(brandNewH1);
// console.log('I just added an h1');

//// • node.removeChild
// contentContainer.removeChild(brandNewH1);
// console.log('I just removed the h1');

//// DOM ADDITIONS
// const contentContainer = document.getElementById('content-container');
// const brandNewH1 = document.createElement('h1');
// const statement = "Hello, I am a thing";
// brandNewH1.append(statement);
// contentContainer.append(brandNewH1);



//// NODE EDITING
//// • node.innerHTML: sets or returns the elements descendants
	// const header = document.getElementById('header-container');
	// const newGreeting = "Hello, this greeting is so much better";
	// header.innerHTML = newGreeting;
	// console.log(header);

//// • node.id: returns back or sets the element ID
// const header = document.getElementById('header-container');
// console.log(header.id);
// header.id = "new-header-container";
// console.log(header.id);

//// • node.classList: returns a read only list of class attributes on the element
// I want to access the first paragraph
// const contentContainer = document.getElementById('content-container');
// const firstParagraph = contentContainer.children[0];
// console.log(firstParagraph);

// Now I want to access a list of all classes
// console.log(firstParagraph.classList);


//// • node.setAttribute: sets attributes to a node
// const header = document.querySelector('#header-container');
// header.nodeType;

// header.setAttribute("style", "background-color: green;");