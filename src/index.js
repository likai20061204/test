var FamousEngine = require('famous/core/FamousEngine');
var DOMElement = require('famous/dom-renderables/DOMElement');

FamousEngine.init();

var scene = FamousEngine.createScene("body");

var aa = scene.addChild();

new DOMElement(aa,{
	content:'Hello World'
});

