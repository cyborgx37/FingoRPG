define(['./gamecore'],function(game){

	var sprites = {};

	sprites["forest.gif"] = {
		tile: game.grid.tileWidth,
		tileh: game.grid.tileHeight,
		map: {
			"Sprite_Grass":		[0,0],
			"Sprite_Flowers1": 	[0,1],
			"Sprite_Flowers2": 	[1,1],
			"Sprite_Flowers3": 	[1,0],
			"Sprite_Tree": 		[0,8,2,2],
			"Sprite_Log": 		[7,3,2,1]
		}
	};

	sprites["man.gif"] = {
		tile: game.grid.tileWidth,
		tileh: game.grid.tileHeight,
		map: {
			"Sprite_Man": 		[0,10]
		}
	};

	return {
		"sprites": sprites
	};
});
