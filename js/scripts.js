(function(){
wrapping all of our code in a self-executing JS function,
A.K.A. an IIFE, which is good -> bit.ly/ND48Dp
*/

//using a single-var pattern, which is good -> bit.ly/UipSTT
var findDiv, copyDiv, insideBox,
    //we'll use these 3 variables later: let's just create them for now

    wrapper = document.createDocumentFragment(),
    //store a documentFragment in a variable...it's off-DOM

    outerDiv = document.createElement('div'),
    /*
    create a div tag off-DOM: This is the 'containing div'
    which will contain ALL of our web page elements!!!!
    */

    boxHeader = document.createElement('h1'),
    //create an h1 tag off-DOM

    innerDiv = document.createElement('div'),
    //create another div tag off-DOM...think of it as the 'second div'

    copy = document.createTextNode('Hello, World!'),
    //create a text string off-DOM

    mainNode = document.getElementById('container');
    //a reference to a div with an id of container, which is already on our web page

boxHeader.innerHTML = 'The Original Box'; //create some text & load it into the h1 tag
outerDiv.appendChild(boxHeader); //load the h1 tag into the containing div
outerDiv.appendChild(innerDiv); //load the second div into the containing div
innerDiv.appendChild(copy); //load the text string into the second div

/*
Let's add some ids to our 2 divs. The ids that we add are already in 'styles.css'.
*/

$(outerDiv).attr('id', 'outerBoxOne'); //jQuery adds id '#outerBoxOne' to containing div
$(innerDiv).attr('id', 'innerBoxOne'); //jQuery adds id '#innerBoxOne' to second div

wrapper.appendChild(outerDiv);
//outerDiv contains ALL of our page elements: let's load it into our document fragment

mainNode.appendChild(wrapper);
//load the document fragment onto our web page, inside the div with an id of 'container'

//Ok...let's do the 'cloneNode()' stuff

findDiv = document.getElementById('outerBoxOne');
//find the div on our page that we want to clone (id 'outerBoxOne')

copyDiv = findDiv.cloneNode(true);
//clone it, as well as all the stuff inside of it, which is the h1 tag and the second div

/*
The duplicate of 'copyDiv' is now off-DOM and also contains a
duplicate of both the h1 tag and the second div. copyDiv is
the parent node while both the h1 tag and second div are
child nodes. These child nodes automatically exist in a
JavaScript array called 'copyDiv.childNodes[]'. The h1 tag
has a value of '0' in the array while the second div has a
value of '1' in the array. We'll use these values to find
these child nodes so we can change them.

To see what this array looks like, type 'console.log(copyDiv.childNodes)',
without the quotes, directly below this comment block. Then
view 'index.html' in a web browser with a good browser based
web development tool (Firebug, Chrome Developer Tools, Opera
Dragonfly, etc.) and see what the Console tab displays. The
display will differ from browser-to-browser, but you should
understand what's going on regardless.
*/

copyDiv.childNodes[0].innerHTML = 'The Cloned Box';
//change the copy inside of the duplicate h1 tag to 'The Cloned Box'

insideBox = copyDiv.childNodes[1];
//store a reference to the duplicate second div inside a variable

insideBox.innerHTML = 'Goodnight, Moon!';
//the copy inside second div currently says 'Hello, World!: change it to 'Goodnight, Moon!'

/*
We're about load this duplicate content on to our page but need
to change some ids first. Otherwise, there will be page elements
sharing id names...not good.

copyDiv's id is currently '#outerBoxOne': we'll change it to '#outerBoxTwo.'
insideBox's id is currently '#innerBoxOne': we'll change it to '#innerBoxTwo.'
We'll also add a class called '.blueBg' to insideBox.

'#outerBoxTwo', '#innerBoxTwo' and '.blueBg' already exist in the 'styles.css' file.
*/

$(insideBox).attr({
    id: 'innerBoxTwo',
    'class': 'blueBg'
 });
//change the id name of insideBox to '#innerBoxTwo' and add a class of '.blueBg'

$(copyDiv).attr('id', 'outerBoxTwo');
//change the id of copyDiv to 'outerBoxTwo'

mainNode.appendChild(copyDiv);
/*
load 'copyDiv' (which contains all of our content) onto our web page,
inside the div with an id of 'container'
*/

}());