'use strict';

angular
  .module( 'globalgamejam2015App' )
  .factory( 'Sprint', function Sprint( enemyData ) {

    return function Sprint( difficulty, length, investment, payout, phaseName ) {

      // Validate arguments.
      if ( difficulty < 0 || difficulty > 3 ) {
        throw new Error( 'Invalid difficulty!' );
      }
      if ( investment < 0 ) {
        throw new Error( 'Invalid investment!' );
      }
      if ( length < 0 || length > 3 ) {
        throw new Error( 'Invalid length!' );
      }
      if ( payout < 0 ) {
        throw new Error( 'Invalid payout!' );
      }

      // Create the base object to augment.
      var self = {};

      // Difficulty
      self.getDifficulty = function () {
        return self.difficulty;
      };

      // Enemies
      self.getBudget = function ( phaseNum ) {
        return self.difficulty * self.payout * phaseNum ;
      };
      self.getRandomEnemy = function ( phaseNum ) {
        var randomEnemy = null;
        do
        {
          // Select a random enemy among the available enemies.
          var randomInt = Math.floor( Math.random() * enemyData.enemies.length );
          randomEnemy = enemyData[ randomInt ];
        }
        while ( randomEnemy.getHireCost() < self.getBudget( phaseNum ) / 6 );
      };
      self.createEnemies = function () {

        var currentBudget = self.getBudget();
        var enemies = [];

        // Buy enemies for the fight until we run out of slots or money.
        while ( enemies.length < 4 ) {
          var randomEnemy = self.getRandomEnemy( phaseName );
          if ( randomEnemy.getHireCost() > currentBudget ) {
            break;
          }
          currentBudget -= randomEnemy.getHireCost();
          enemies.push( randomEnemy );
        }
      };

      // Investment
      self.getInvestment = function () {
        return self.investment;
      };

      // Length
      self.getLength = function () {
        return self.length;
      };

      // Payout
      self.getPayout = function () {
        return self.payout;
      };


      // Init
      ( function init () {

        self.difficulty = difficulty;
        self.investment = investment;
        self.length = length;
        self.payout = payout;

      } )();

      // Export
      return self;

    };
  
  } );