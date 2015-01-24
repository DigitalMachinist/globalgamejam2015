'use strict';

angular
  .module( 'globalgamejam2015App' )
  .factory( 'Sprint', function Sprint( enemyData ) {

    return function Sprint( difficulty, length, investment, payout, phaseName ) {

      // Validate arguments.
      if ( !difficulty || !parseInt( difficulty ) || difficulty < 0 || difficulty > 3 ) {
        throw new Error( 'Invalid difficulty!' );
      }
      if ( !investment || !parseInt( investment ) || investment < 0 ) {
        throw new Error( 'Invalid investment!' );
      }
      if ( !length || !parseInt( length ) || length < 0 || length > 3 ) {
        throw new Error( 'Invalid length!' );
      }
      if ( !payout || !parseInt( payout ) || payout < 0 ) {
        throw new Error( 'Invalid payout!' );
      }

      // Create the base object to augment.
      var self = {};

      // Difficulty
      self.getDifficulty = function () {
        return self.difficulty;
      };

      // Enemies
      self.getBudget = function () {
        return self.difficulty * self.payout;
      };
      self.getRandomEnemy = function ( phase ) {

        // THIS WILL BE SLOW AS PISS AND NEEDS WORK!
        // ALSO THIS SHOULD YIELD DIFFERENT RESULTS FOR DIFFERENT PHASES!
        // Consider making enemyData a map of arrays, where there is 1 array for each phase.

        var enemy;

        // Count the number of enemy types that exist.
        var numEnemyTypes = 0;
        for ( enemy in enemyData ) {
          if ( enemyData.hasOwnProperty( enemy ) ) {
            numEnemyTypes++;
          }
        }
        do
        {
          // Select a random enemy among the available enemies.
          var randomInt = Math.floor( Math.random() * numEnemyTypes );

          // Find that enemy in the available set and return it.
          var count = 0;
          for ( enemy in enemyData ) {
            if ( enemyData.hasOwnProperty( enemy ) ) {
              if ( count === randomInt ) {
                return enemy;
              }
              count++;
            }
          }
        }
        while ( enemy.getHireCost() < ( self.getBudget() / 6 ) );

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