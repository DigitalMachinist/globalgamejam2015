'use strict';

angular
  .module( 'globalgamejam2015App' )
  .factory( 'sprintData', function ( Sprint, Enemy ) {
    
    // Create the base object to augment.
    var self = {};

    // Helpers
    
    self.getRandomSprint = function ( phaseNum ) {
      var randomDifficulty = Math.floor( Math.random() * phaseNum );
      var randomLength = Math.floor( Math.random() * 3 );
      var randomInvestment = Math.floor( Math.random() * 4 * 50 );
      var randomPayout = Math.floor( Math.random() * 5 ) * 50;
      self.sprint = new Sprint(
        randomDifficulty,
        randomLength,
        randomInvestment,
        randomPayout,
        phaseNum
      );
    };

    // Init
    
    ( function init () {

      self.sprint = null;

    } )();

    // Export
    return self;

  } );