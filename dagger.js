//DAGGER
var Dagger = function()
{
	this.sprite = new Sprite("DestinyDagger.png")
	this.sprite.buildAnimation(2, 1, 155, 155, 0.3,
							[0, 1]);
	
	this.position = new Vector2();
}

Dagger.prototype.update = function(deltaTime)
{
	this.sprite.update(deltaTime);
}

Dagger.prototype.draw = function(x, y)
{
	this.sprite.draw(context, x, y);
}