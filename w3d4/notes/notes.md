# jQuery Cheat Sheet!

- this: `$(this)`

- create element: `$('<div>')`, `$('<p>')`, etc.

- select all elements of type: `$('div')`, `$('p')`, etc.

- ^^ The two commands above are very similar but they do completely different things! 

- you can get the body of the document with: `$('body')`

- get element by id: `$('#idName')`

- get elements by class: `$('.className')`

- set id on element: `jQueryElement.attr('id', 'idName')`

- set class on element `jQueryElement.addClass('className')`

- click listener: `jQueryElement.click( function )`

- get value from input box after click: `$('#idName').val()`

- append elements: `jQueryElement.append( //stuff )`

- prepend elements: `jQueryElement.prepend( // stuff )`

- remove elements: `jQueryElement.remove()`

- set text inside element: `jQueryElement.text("some text")`

- set html inside element: `jQueryElement.html("<some html>")`

- check if element has a class: `jQueryElement.hasClass('.someClass')`

- set a css property on an element: `jQueryElement.css('property', 'value')`