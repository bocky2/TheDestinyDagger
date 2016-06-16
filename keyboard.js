//KEYBOARD

var Keyboard = function() {
	var self = this;
	
	window.addEventListener("keydown", function(evt) { self.onKeyDown(evt); }, false);
	window.addEventListener("keyup", function(evt) { self.onKeyUp(evt); }, false);
	
	this.keyListeners = new Array();
	this.keys = new Array();
	
	// Key constants
	this.KEY_LEFT = 37;
	this.KEY_UP = 38;
	this.KEY_RIGHT = 39;
	this.KEY_DOWN = 40;
	this.KEY_ENTER = 13;
	this.KEY_Z = 90;
	this.KEY_X = 88;
	this.KEY_C = 67;
};

Keyboard.prototype.onKeyDown = function(evt)
{
	this.keys[evt.keyCode] = true;
};

Keyboard.prototype.onKeyUp = function(evt)
{
	this.keys[evt.keyCode] = false;
};

Keyboard.prototype.isKeyDown = function(keyCode)
{
	return this.keys[keyCode];
};