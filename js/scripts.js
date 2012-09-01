(function(){

var findDiv, copyDiv, insideBox,
    wrapper = document.createDocumentFragment(),
    outerDiv = document.createElement('div'),
    boxHeader = document.createElement('h1'),
    innerDiv = document.createElement('div'),
    copy = document.createTextNode('Hello, World!'),
    mainNode = document.getElementById('container');

boxHeader.innerHTML = 'The Original Box';
outerDiv.appendChild(boxHeader);
outerDiv.appendChild(innerDiv);
innerDiv.appendChild(copy);
$(outerDiv).attr('id', 'outerBoxOne');
$(innerDiv).attr('id', 'innerBoxOne');
wrapper.appendChild(outerDiv);
mainNode.appendChild(wrapper);

findDiv = document.getElementById('outerBoxOne');
copyDiv = findDiv.cloneNode(true);
copyDiv.childNodes[0].innerHTML = 'The Cloned Box';
insideBox = copyDiv.childNodes[1];
insideBox.innerHTML = 'Goodnight, Moon!';
$(copyDiv).attr('id', 'outerBoxTwo');
$(insideBox).attr({
    id: 'innerBoxTwo',
    'class': 'blueBg'
 });

mainNode.appendChild(copyDiv);

}());