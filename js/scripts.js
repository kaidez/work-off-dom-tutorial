(function(){ //load our JS inside of a self-executing JavaScript function

//Keep all of our variables in a single var pattern -> http://bit.ly/oNH8Q6
var findDiv, copyDiv, insideBox,
    wrapper = document.createDocumentFragment(), //document fragment that we'll load our elements into
    newBox = document.createElement('div'), //create a div tag, which is the element that will hold all the other elements
    boxHeader = document.createElement('h1'), //create an h1 tag
    newInnerBox = document.createElement('div'), //create another div tag
    copy = document.createTextNode('Hello, World!'), //create a text string
    mainNode = document.getElementById('container'); //reference a div tag that's already on 'index.html'

newBox.appendChild(boxHeader); //insert the 'boxHeader' h1 tag into the 'newBox' div
newBox.appendChild(newInnerBox); //insert the 'newInnerBox' div into the newBox' div
newInnerBox.appendChild(copy); //insert the 'copy' text string into the newInnerBox' div
boxHeader.innerHTML = 'The Original Box'; //our h1 tag is empty...let's load some copy into it
$(newBox).attr('id', 'outerBoxOne'); //use jQuery to add an id of 'outerBoxOne' to our 'newBox' div
$(newInnerBox).attr('id', 'innerBoxOne'); //use jQuery to add an id of 'innerBoxOne' to our 'newInnerBox' div
wrapper.appendChild(newBox); //insert 'newBox' into our document fragment: 'newBox' contains all the elements now
mainNode.appendChild(wrapper); //insert the document fragment into our div that's already on the page

findDiv = document.getElementById('outerBoxOne');  //find the div on the page that contains all the elements
copyDiv = findDiv.cloneNode(true); //copy the div using cloneNode()
copyDiv.childNodes[0].innerHTML = 'The Cloned Box';
insideBox = copyDiv.childNodes[1];
insideBox.innerHTML = 'Goodnight, Moon!';
$(copyDiv).attr('id', 'outerBoxTwo'); //use jQuery to add an id of 'outerBoxTwo' to our 'copyDiv' div
$(insideBox).attr({
    id: 'innerBoxTwo',
    'class': 'blueBg'
});

mainNode.appendChild(copyDiv); //insert 'the document fragment 'copyDiv' into our div that's already on the page

}());