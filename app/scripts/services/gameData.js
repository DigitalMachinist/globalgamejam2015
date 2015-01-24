'use strict';

angular
  .module( 'globalgamejam2015App' )
  .factory( 'gameData', function gameData( Game ) {

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
        2500,  // Fun required to advance to prototype
        5000,  // Fun required to advance to alpha
        7500, // Fun required to advance to beta
        10000  // Fun required to advance to release
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