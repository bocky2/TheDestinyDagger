//PLAYER
var UP = 0;
var UP_RIGHT = 1;
var RIGHT = 2;
var DOWN_RIGHT = 3;
var DOWN = 4;
var DOWN_LEFT = 5;
var LEFT = 6;
var UP_LEFT = 7;


var ANIM_IDLE_UP = 0;
var ANIM_IDLE_UP_RIGHT = 1;
var ANIM_IDLE_RIGHT = 2;
var ANIM_IDLE_DOWN_RIGHT = 3;
var ANIM_IDLE_DOWN = 4;
var ANIM_IDLE_DOWN_LEFT = 5;
var ANIM_IDLE_LEFT = 6;
var ANIM_IDLE_UP_LEFT = 7;

var ANIM_WALK_UP = 8;
var ANIM_WALK_UP_RIGHT = 9;
var ANIM_WALK_RIGHT = 10;
var ANIM_WALK_DOWN_RIGHT = 11;
var ANIM_WALK_DOWN = 12;
var ANIM_WALK_DOWN_LEFT = 13;
var ANIM_WALK_LEFT = 14;
var ANIM_WALK_UP_LEFT = 15;

var ANIM_ATTACK_UP = 16;
var ANIM_ATTACK_UP_RIGHT = 17;
var ANIM_ATTACK_RIGHT = 18;
var ANIM_ATTACK_DOWN_RIGHT = 19;
var ANIM_ATTACK_DOWN = 20;
var ANIM_ATTACK_DOWN_LEFT = 21;
var ANIM_ATTACK_LEFT = 22;
var ANIM_ATTACK_UP_LEFT = 23;

var Player = function()
{
	this.sprite = new Sprite("Player.png")
	this.sprite.buildAnimation(8, 12, 108, 108, 0.1,
		[0]);
	this.sprite.buildAnimation(8, 12, 108, 108, 0.1,
		[1]);
	this.sprite.buildAnimation(8, 12, 108, 108, 0.1,
		[2]);
	this.sprite.buildAnimation(8, 12, 108, 108, 0.1,
		[3]);
	this.sprite.buildAnimation(8, 12, 108, 108, 0.1,
		[4]);
	this.sprite.buildAnimation(8, 12, 108, 108, 0.1,
		[5]);
	this.sprite.buildAnimation(8, 12, 108, 108, 0.1,
		[6]);
	this.sprite.buildAnimation(8, 12, 108, 108, 0.1,
		[7]);
	this.sprite.buildAnimation(8, 12, 108, 108, 0.125,
		[8, 16, 24, 32]);
	this.sprite.buildAnimation(8, 12, 108, 108, 0.125,
		[9, 17, 25, 33]);
	this.sprite.buildAnimation(8, 12, 108, 108, 0.125,
		[10, 18, 26, 34]);
	this.sprite.buildAnimation(8, 12, 108, 108, 0.125,
		[11, 19, 27, 35]);
	this.sprite.buildAnimation(8, 12, 108, 108, 0.125,
		[12, 20, 28, 36]);
	this.sprite.buildAnimation(8, 12, 108, 108, 0.125,
		[13, 21, 29, 37]);
	this.sprite.buildAnimation(8, 12, 108, 108, 0.125,
		[14, 22, 30, 38]);
	this.sprite.buildAnimation(8, 12, 108, 108, 0.125,
		[15, 23, 31, 39]);
	this.sprite.buildAnimation(8, 12, 108, 108, 0.2,
		[40, 48, 56, 64]);
	
	this.position = new Vector2();
	
	this.width = 72;
	this.height = 72;
	
	this.going = false;
	
	this.coolDownTimer = 0;
};

Player.prototype.update = function(deltaTime)
{
	var up = false;
	var upRight = false;
	var right = false;
	var downRight = false;
	var down = false;
	var downLeft = false;
	var left = false;
	var upLeft = false;
	
	this.sprite.update(deltaTime);
	
	if(keyboard.isKeyDown(keyboard.KEY_UP) == true && keyboard.isKeyDown(keyboard.KEY_LEFT) == true) {
		upLeft = true;
		this.direction = UP_LEFT;
		this.going = true;
		if(this.sprite.currentAnimation != ANIM_WALK_UP_LEFT)
			this.sprite.setAnimation(ANIM_WALK_UP_LEFT);
	}

	else if(keyboard.isKeyDown(keyboard.KEY_UP) == true && keyboard.isKeyDown(keyboard.KEY_RIGHT) == true) {
		upRight = true;
		this.direction = UP_RIGHT;
		this.going = true;
		if(this.sprite.currentAnimation != ANIM_WALK_UP_RIGHT)
			this.sprite.setAnimation(ANIM_WALK_UP_RIGHT);
	}
	
	else if(keyboard.isKeyDown(keyboard.KEY_UP) == true) {
		up = true;
		this.direction = UP;
		this.going = true;
		if(this.sprite.currentAnimation != ANIM_WALK_UP)
			this.sprite.setAnimation(ANIM_WALK_UP);	
	}
	
	else if(keyboard.isKeyDown(keyboard.KEY_DOWN) == true && keyboard.isKeyDown(keyboard.KEY_RIGHT) == true) {
		downRight = true;
		this.direction = DOWN_RIGHT;
		this.going = true;
		if(this.sprite.currentAnimation != ANIM_WALK_DOWN_RIGHT)
			this.sprite.setAnimation(ANIM_WALK_DOWN_RIGHT);
	}
	
	else if(keyboard.isKeyDown(keyboard.KEY_RIGHT) == true) {
		right = true;
		this.direction = RIGHT;
		this.going = true;
		if(this.sprite.currentAnimation != ANIM_WALK_RIGHT)
			this.sprite.setAnimation(ANIM_WALK_RIGHT);
	}
	
	else if(keyboard.isKeyDown(keyboard.KEY_DOWN) == true && keyboard.isKeyDown(keyboard.KEY_LEFT) == true) {
		downLeft = true;
		this.direction = DOWN_LEFT;
		this.going = true;
		if(this.sprite.currentAnimation != ANIM_WALK_DOWN_LEFT)
			this.sprite.setAnimation(ANIM_WALK_DOWN_LEFT);
	}
	
	else if(keyboard.isKeyDown(keyboard.KEY_DOWN) == true) {
		down = true;
		this.direction = DOWN;
		this.going = true;
		if(this.sprite.currentAnimation != ANIM_WALK_DOWN)
			this.sprite.setAnimation(ANIM_WALK_DOWN);
	}
	
	else if(keyboard.isKeyDown(keyboard.KEY_LEFT) == true) {
		left = true;
		this.direction = LEFT;
		this.going = true;
		if(this.sprite.currentAnimation != ANIM_WALK_LEFT)
			this.sprite.setAnimation(ANIM_WALK_LEFT);
	}
	
	if(keyboard.isKeyDown(keyboard.KEY_UP) == false && this.direction == UP) {
		if(this.sprite.currentAnimation != ANIM_IDLE_UP)
			this.sprite.setAnimation(ANIM_IDLE_UP);
	}
	if(keyboard.isKeyDown(keyboard.KEY_RIGHT) == false && this.direction == RIGHT) {
		if(this.sprite.currentAnimation != ANIM_IDLE_RIGHT)
			this.sprite.setAnimation(ANIM_IDLE_RIGHT);
	}
	if(keyboard.isKeyDown(keyboard.KEY_DOWN) == false && this.direction == DOWN) {
		if(this.sprite.currentAnimation != ANIM_IDLE_DOWN)
			this.sprite.setAnimation(ANIM_IDLE_DOWN);
	}
	if(keyboard.isKeyDown(keyboard.KEY_LEFT) == false && this.direction == LEFT) {
		if(this.sprite.currentAnimation != ANIM_IDLE_LEFT)
			this.sprite.setAnimation(ANIM_IDLE_LEFT);
	}
	if(keyboard.isKeyDown(keyboard.KEY_UP) == false && keyboard.isKeyDown(keyboard.KEY_RIGHT) == false && this.direction == UP_RIGHT) {
		if(this.sprite.currentAnimation != ANIM_IDLE_UP_RIGHT)
			this.sprite.setAnimation(ANIM_IDLE_UP_RIGHT);
	}
	if(keyboard.isKeyDown(keyboard.KEY_DOWN) == false && keyboard.isKeyDown(keyboard.KEY_RIGHT) == false && this.direction == DOWN_RIGHT) {
		if(this.sprite.currentAnimation != ANIM_IDLE_DOWN_RIGHT)
			this.sprite.setAnimation(ANIM_IDLE_DOWN_RIGHT);
	}
	if(keyboard.isKeyDown(keyboard.KEY_DOWN) == false && keyboard.isKeyDown(keyboard.KEY_LEFT) == false && this.direction == DOWN_LEFT) {
		if(this.sprite.currentAnimation != ANIM_IDLE_DOWN_LEFT)
			this.sprite.setAnimation(ANIM_IDLE_DOWN_LEFT);
	}
	if(keyboard.isKeyDown(keyboard.KEY_UP) == false && keyboard.isKeyDown(keyboard.KEY_LEFT) == false && this.direction == UP_LEFT) {
		if(this.sprite.currentAnimation != ANIM_IDLE_UP_LEFT)
			this.sprite.setAnimation(ANIM_IDLE_UP_LEFT);
	}
	
	if(keyboard.isKeyDown(keyboard.KEY_C) == true && this.direction == UP)
	{
		if(this.sprite.currentAnimation != ANIM_ATTACK_UP)
			this.sprite.setAnimation(ANIM_ATTACK_UP);
	}

	if (up) {
	this.position.y -= 5;
	};
	if (right) {
	this.position.x += 5;
	};
	if (down) {
	this.position.y += 5;
	};
	if (left) {
	this.position.x -= 5;
	};
	if (upRight) {
	this.position.y -= 4;
	this.position.x += 4;
	};
	if (downRight) {
	this.position.y += 4;
	this.position.x += 4;
	};
	if (downLeft) {
	this.position.y += 4;
	this.position.x -= 4;
	};
	if (upLeft) {
	this.position.y -= 4;
	this.position.x -= 4;
	};
}

Player.prototype.draw = function()
{
	this.sprite.draw(context, this.position.x, this.position.y);
}