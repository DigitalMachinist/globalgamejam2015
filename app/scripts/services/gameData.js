'use strict';

angular
  .module( 'globalgamejam2015App' )
  .service( 'gameData', function gameData( Game ) {

    // Create the base object to augment.
    var self = {};

    // Game
    self.setGame = function ( title ) {
      self.game = new Game(
        title, // Title
        12,    // Number of months
        50,    // Start budget $$$
        100,   // Concept completion bonus $$$ 
        250,   // Prototype completion bonus $$$
        1,     // Fun required to advance to concept
        1000,  // Fun required to advance to prototype
        3000,  // Fun required to advance to alpha
        10000, // Fun required to advance to beta
        20000  // Fun required to advance to release
      );
      console.log( self.game );
    };

    // Init
    ( function init () {

      self.game = null;

    } )();

    // Export
    return self;
  
  } );