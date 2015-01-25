'use strict';

angular
  .module( 'globalgamejam2015App' )
  .factory( 'gameData', function gameData( Game, devsData ) {

    // Create the base object to augment.
    var self = {};

    // Game
    self.initGame = function ( title ) {
      self.game = new Game(
        title, // Title
        12,    // Number of months
        200,   // Start budget $$$
        200,   // Concept completion bonus $$$ 
        400,   // Prototype completion bonus $$$
        2500,  // Fun required to advance to prototype
        5000,  // Fun required to advance to beta
        7500   // Fun required to advance to release
      );
      devsData.getRandomHireableDevs( self.game.getCurrentMonth() + 1 );

      devsData.numDevs = 4;
      devsData.devs = [ 
        devsData.getRandomDev( self.game.getCurrentMonth() + 1 ), 
        devsData.getRandomDev( self.game.getCurrentMonth() + 1 ), 
        devsData.getRandomDev( self.game.getCurrentMonth() + 1 ), 
        devsData.getRandomDev( self.game.getCurrentMonth() + 1 )
      ];
      //console.log( self.game );
    };

    // Init
    ( function init () {

      self.game = null;

    } )();

    // Export
    return self;
  
  } );