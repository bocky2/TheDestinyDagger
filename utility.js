//UTILITY

function DrawImage(ctx, img, posX, posY, ang)
{
	ctx.save();
		ctx.translate(posX, posY);
		ctx.rotate(ang);
		ctx.drawImage(img, -img.width/2, -img.height/2);
	ctx.restore();
}

function SetupImageEvents(object, img)
{
	img.onload = function() {
		object.width = img.width;
		object.height = img.height;
	};
	img.onerror = function() {
		console.log("Failed to load image at path " + this.src);
	};
}

function intersects(x1, y1, w1, h1, x2, y2, w2, h2)
{
	if(y2 + h2 < y1 - h1/2 ||
		x2 + w2 < x1 - w1/2 ||
		x2 - w2/2 > x1 + w1 ||
		y2 - h2/2 > y1 + h1)
	{
		return false;
	}
	return true;
}

function rand(floor, ceil)
{
	return  (Math.random()* (ceil-floor)) + floor ;
}

var tileset = document.createElement("img");
tileset.src = "tileset.png"


function cellAtPixelCoord(layer, x,y)
{
	if(x<0 || x>SCREEN_WIDTH) // remove ‘|| y<0’
	return 1;
	// let the player drop of the bottom of the screen
	// (this means death)
	if(y>SCREEN_HEIGHT)
	return 0;
	return cellAtTileCoord(layer, p2t(x), p2t(y));
};
function cellAtTileCoord(layer, tx, ty) // remove ‘|| y<0’
{
	if(tx<0 || tx>=MAP.tw)
	return 1;
	// let the player drop of the bottom of the screen
	// (this means death)
	if(ty <0 || ty>=MAP.th)
	return 0;
	return cells[layer][ty][tx];
};

function tileToPixel(tile)
{
	return tile * TILE;
};
function pixelToTile(pixel)
{
	return Math.floor(pixel/TILE);
};
function bound(value, min, max)
{
	if(value < min)
	return min;
	if(value > max)
	return max;
	return value;
}

function drawMap()
{
	for(var layerIdx=0; layerIdx<LAYER_COUNT; layerIdx++)
	{
		if(layerIdx==LAYER_ENEMY) continue
		var idx = 0;
		for( var y = 0; y < level1.layers[layerIdx].height; y++ )
		{
			for( var x = 0; x < level1.layers[layerIdx].width; x++ )
			{
				if( level1.layers[layerIdx].data[idx] != 0 )
				{
					// the tiles in the Tiled map are base 1 (meaning a value of 0 means no tile), so subtract one from the tileset id to get the
					// correct tile
					var tileIndex = level1.layers[layerIdx].data[idx] - 1;
					var sx = TILESET_PADDING + (tileIndex % TILESET_COUNT_X) * (TILESET_TILE + TILESET_SPACING);
					var sy = TILESET_PADDING + (Math.floor(tileIndex / TILESET_COUNT_X)) * (TILESET_TILE + TILESET_SPACING);
					context.drawImage(tileset, sx, sy, TILESET_TILE, TILESET_TILE, x*TILE, (y-1)*TILE, TILESET_TILE, TILESET_TILE);
				}
			idx++;
			}
		}
	}
}