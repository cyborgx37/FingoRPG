define(['libs/crafty', './gamecore', './assets'],function(Crafty,game){


	var tileWidth = game.grid.tileWidth,
		tileHeight = game.grid.tileHeight;


	Crafty.c( 'Grid1x1', {
		init: function() {
			this.w = tileWidth;
			this.h = tileHeight;
		},

		posGrid: function(x, y) {
			if (x === undefined && y === undefined) {
				return { x: this.x / tileWidth, y: this.y / tileHeight };
			} else {
				this.attr({ x: x * tileWidth, y: y * tileHeight });
				return this;
			}
		}
	});


	Crafty.c( 'Grid2x1', {
		init: function() {
			this.requires('Grid1x1');
			this.w = tileWidth * 2;
		}
	});


	Crafty.c( 'Grid1x2', {
		init: function() {
			this.requires('Grid1x1');
			this.h = tileHeight * 2;
		}
	});


	Crafty.c( 'Grid2x2', {
		init: function() {
			this.requires('Grid1x1');
			this.w = tileWidth * 2;
			this.h = tileHeight * 2;
		}
	});


	Crafty.c( 'Entity', {
		init: function() {
			this.requires('2D, Canvas');
		},
	});


	Crafty.c( 'Grass', {
		init: function() {
			this.requires('Entity, Grid1x1, Sprite_Grass');
		},
	});


	Crafty.c( 'Flowers1', {
		init: function() {
			this.requires('Entity, Grid1x1, Sprite_Flowers1');
		},
	});


	Crafty.c( 'Flowers2', {
		init: function() {
			this.requires('Entity, Grid1x1, Sprite_Flowers2');
		},
	});


	Crafty.c( 'Flowers3', {
		init: function() {
			this.requires('Entity, Grid1x1, Sprite_Flowers3');
		},
	});


	Crafty.c( 'Tree', {
		init: function() {
			this.requires('Entity, Grid2x2, Sprite_Tree');
		},
	});


	Crafty.c( 'Log', {
		init: function() {
			this.requires('Entity, Grid2x1, Sprite_Log');
		},
	});


	Crafty.c( 'Man', {
		init: function() {
			this.requires('Entity, Grid1x1, Sprite_Man, SpriteAnimation, Fourway')
      			.fourway(1)
				.reel('PlayerStanding',		   0, 0,  8, 0)
				.reel('PlayerMovingUp',		1000, 0,  8, 8)
				.reel('PlayerMovingLeft',	1000, 0,  9, 8)
				.reel('PlayerMovingDown',  	1000, 0, 10, 8)
				.reel('PlayerMovingRight',  1000, 0, 11, 8);

			window.console.log( this );
 
			// Watch for a change of direction and switch animations accordingly
			var animation_speed = 8;
			this.bind('NewDirection', function(data) {
				if (data.x > 0) {
					this.animate('PlayerMovingRight', -1);
				} else if (data.x < 0) {
					this.animate('PlayerMovingLeft', -1);
				} else if (data.y > 0) {
					this.animate('PlayerMovingDown', -1);
				} else if (data.y < 0) {
					this.animate('PlayerMovingUp', -1);
				} else {
					window.console.log( this );
					//this.pauseAnimation();
					//this.resetAnimation();
					this.animate('PlayerMovingDown', 0);
				}
			});
		},
	});


});
