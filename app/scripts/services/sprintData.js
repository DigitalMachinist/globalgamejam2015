'use strict';

angular
  .module( 'globalgamejam2015App' )
  .factory( 'sprintData', function ( Sprint, Enemy, gameData ) {
    
    // Create the base object to augment.
    var self = {};

    // Helpers
    
    self.getRandomSprint = function ( phaseNum ) {
      var randomDifficulty = Math.floor( Math.random() * ( phaseNum - 1 ) ) + 1;
      var randomLength = Math.floor( Math.random() * 2 ) + 1;
      var randomInvestment = Math.floor( Math.random() * 4 * phaseNum ) * 25 + 50;
      var randomPayout = Math.floor( Math.random() * 6 * phaseNum ) * 25 + 100;
      return new Sprint(
        randomDifficulty,
        randomLength,
        randomInvestment,
        randomPayout,
        phaseNum
      );
    };

    self.getRandomSprintGroup = function ( phaseNum ) {
      self.sprints = [
        self.getRandomSprint( phaseNum ),
        self.getRandomSprint( phaseNum ),
        self.getRandomSprint( phaseNum )
      ];
    };

    // Init
    
    ( function init () {

      self.selectedSprint = null;
      self.sprints = [ null, null, null ];

    } )();

    // Export
    return self;

  } );