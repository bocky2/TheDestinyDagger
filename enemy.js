//ENEMY
var Enemy = function(x,y)
{
	this.position = new Vector2();
	this.position.set(x, y);
	
	this.width = 72;
	this.height = 72;
	
	this.velocity = new Vector2();
	
	this.hit = false;
}
Enemy.prototype.update = function(deltaTime)
{	
	
}

Enemy.prototype.draw = function()
{
	
}