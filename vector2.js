//VECTOR2

var Vector2 = function(x,y)
{
	this.x = 0;
	this.y = 0;
	
	if(x != undefined)
	{
		this.x = x;
	}
	if(y != undefined)
	{
		this.y = y;
	}
	
	this.reverse = function()
	{
		this.x = -this.x;
		this.y = -this.y;
	}
	this.copy = function()
	{
		return new Vector2(this.x, this.y);
	}
	this.set = function(newX, newY)
	{
		this.x = newX;
		this.y = newY;
	}
	this.magnitude = function()
	{
		return Math.sqrt(this.x * this.x + this.y * this.y)
	}
	this.normalize = function()
	{
		var mag = this.magnitude();
		if(mag == 0) return;
		
		this.x /= mag;
		this.y /= mag;
	}
	this.add = function(v2)
	{
		this.x += v2.x;
		this.y += v2.x;
	}
	this.subtract = function(v2)
	{
		this.x -= v2.x;
		this.y -= v2.y;
	}
	this.multiplyScalar = function(num)
	{
		this.x *= num;
		this.y *= num;
	}
	this.rotateDirection = function(angle)
	{
		var s = Math.sin(angle);
		var c = Math.cos(angle);
		
		var dirX = (this.x * c) - (this.y * s);
		var dirY = (this.x * s) + (this.y * c);
		
		this.set(dirX, dirY);
	}
}