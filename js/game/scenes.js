define(['libs/crafty', './gamecore'],function(Crafty,game){


	Crafty.scene( 'Level_01', function(){
		var i, x, y, trees, flowers;

		for ( x = 0; x < game.grid.tilesWide; x++ ){
			for ( y = 0; y < game.grid.tilesTall; y++ ){
				Crafty.e('Grass').posGrid(x, y);
			}
		}

		trees = [
			{x:1,y:1},
			{x:2,y:8},
			{x:6,y:3}
		];
		for ( i = 0; i < trees.length; i++ ){
			Crafty.e('Tree').posGrid(trees[i].x, trees[i].y);
		}
		
		flowers = [
			{x:0,y:2,type:1},
			{x:9,y:3,type:3},
			{x:6,y:6,type:1},
			{x:10,y:2,type:2},
			{x:5,y:9,type:2},
			{x:4,y:10,type:1},
			{x:7,y:5,type:3}
		];
		for ( i = 0; i < flowers.length; i++ ){
			Crafty.e('Flowers' + flowers[i].type).posGrid(flowers[i].x, flowers[i].y);
		}
		
		Crafty.e('Log').posGrid(4, 6);

		Crafty.e('Man').posGrid(3, 4);

	});


	Crafty.scene( 'Loading', function(){

		Crafty.e('2D, DOM, Text')
			.text('Loading...')
			.attr({ x: 0, y: game.height()/2 - 24, w: game.width() })
			.css({'text-align': 'center'});

		// Load our sprite map image
		var assets = {
			"sprites": {
				"forest.gif": {
					"tile": game.grid.tileWidth,
					"tileh": game.grid.tileHeight,
					"map": {
						"Sprite_Grass": 	[0,0],
						"Sprite_Flowers1": 	[0,1],
						"Sprite_Flowers2": 	[1,1],
						"Sprite_Flowers3": 	[1,0],
						"Sprite_Tree": 		[0,8,2,2],
						"Sprite_Log": 		[7,3,2,1]
					}
				},
				"man.gif": {
					"tile": game.grid.tileWidth,
					"tileh": game.grid.tileHeight,
					"map": {
						"Sprite_Man": [0,0]
					}
				}
			}
		};
		Crafty.load(assets, function(){
			Crafty.scene('Level_01');
		});

	});


});
