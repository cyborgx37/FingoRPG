define(['jquery', 'libs/crafty', 'module'], function($,Crafty,module){
	var config = module.config(),

		grid = {
			tileWidth: config.tileSize,
			tileHeight: config.tileSize,
			tilesWide: config.width,
			tilesTall: config.height
		},

		width = function(){
			return grid.tileWidth * grid.tilesWide;
		},

		height = function(){
			return grid.tileHeight * grid.tilesTall;
		},

		start = function( args ){
			var gameWindow = args.gameWindow,
				gameWindowElem = gameWindow[0],
				initialScene = args.initialScene;

			Crafty.init( game.width(), game.height(), gameWindowElem );

			Crafty.paths({
				images: getAssetPath( '/img/' ),
				sprites: getAssetPath( '/img/' )
			});
			
			loadComponents();
			loadScenes();

			Crafty.scene( args.initialScene );
		},

		componentLoaders = [],
		registerComponentLoader = function( loader ){
			componentLoaders.push( loader );
		},
		loadComponents = function(){
			var i = 0;

			for( i = 0; i < componentLoaders.length; i++ ){
				componentLoaders[i]();
			}
		},

		sceneLoaders = [],
		registerSceneLoader = function( loader ){
			sceneLoaders.push( loader );
		},
		loadScenes = function(){
			var i = 0;

			for( i = 0; i < sceneLoaders.length; i++ ){
				sceneLoaders[i]();
			}
		},

		spriteLoaders = [],
		registerSpriteLoader = function( scene, loader ){
			spriteLoaders.push({ scene:scene, loader:loader, loaded: false });
		},
		loadSprites = function(scene){
			var i = 0,
				curr;

			for( i = 0; i < sceneLoaders.length; i++ ){
				curr = sceneLoaders[i];
				if ( curr.scene === scene && curr.loaded === false ){
					curr.load();
					curr.loaded = true;
				}
			}
		},

		getAssetPath = function( path ){
			return config.assetRoot + path;
		};

	var game = {
		grid: grid,
		width: width,
		height: height,
		start: start,
		registerComponentLoader: registerComponentLoader,
		registerSceneLoader: registerSceneLoader,
		registerSpriteLoader: registerSpriteLoader,
		loadSprites: loadSprites,
		getAssetPath: getAssetPath
	};

	return game;
});
