#WHAT IS THIS?

This is the corresponding source code for the screencast tutorial, ["Using JavaScript Off-DOM"](http://kaidez.com/javascript-off-dom/) by [Kai 'kaidez' Gittens](http://twitter.com/kaidez). While it focuses on doing stuff off-DOM, going through this tutorial should help you gain a basic understanding of how to traverse and manipulate the DOM with JavaScript.

The primary inspiration for this tutorial was Paul Irish's excellent screencast, ["HTML5, CSS3, and DOM Performance"](http://www.youtube.com/watch?v=q_O9_C2ZjoA). He discussed client-side reflows and repaints at the beginning and I wanted to learn more about them. In the process of researching and learning about them, I learned a lot of interesting things about how the DOM works. I'm just sharing what I learned here.

Of course, you don't have to go through the screencast...you can just download the code in this Git repo. [scripts.js](https://github.com/kaidez/work-off-dom-tutorial/blob/master/js/scripts.js) is the main file that you'll need to understand all of this. It's fully documented with comments explaining exactly how the code works! If you want to use this code in a production enviroment, please consider minifying it first.

##Here are the links to the screencast videos on YouTube:

[Part 1 &raquo;](http://youtu.be/WhQbz1Zn72Y)

[Part 2 &raquo;](http://youtu.be/dGC-YAxD4pw)

[Part 3 &raquo;](http://youtu.be/MUvnKrXHwwk)

##Before starting this tutorial, you should understand:

* how variables work in JavaScript [(learn more about this at MDN) &raquo;](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Statements/var)
* how arrays work in JavaScript [(learn more about this at MDN) &raquo;](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array)

Arrays are THE most important thing to understand for this tutorial as an array plays a big part in locating data at some point in the code. Please review the MDN array link above if you need help with arrays.

##After finishing the tutorial, you should gain a basic understand the following JavaScript/jQuery things:

    createDocumentFragment()
    createElement()
    createTextNode()
    cloneNode()
    appendChild()
    getElementById()
    innerHTML
    childNodes[]
    .attr() //a jQuery method

##Grab the slides!!!
The slide deck used in this tutorial contains links to some great learning resources and can be viewed [here &raquo;](http://slides.kaidez.com/work-off-dom/)

thanx!!!  
-kaidez
