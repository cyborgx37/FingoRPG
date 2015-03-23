require.config({
    paths: {
        'jquery': 'libs/jquery'
    },
    packages: [ 'game' ],
    shim: {
        'libs/crafty': {
          exports: 'Crafty'
        }
    },
    config: {
        'game/gamecore': {
            tileSize: 32,
            width: 14,
            height: 20,
            assetRoot: '/fingorpg'
        }
    }
});

require(["jquery", "game"], function( $, Game ) {

    Game.start({
        gameWindow: $('#gameWindow'),
        initialScene: 'Loading'
    });

});
