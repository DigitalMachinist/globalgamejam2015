'use strict';

angular
  .module( 'globalgamejam2015App' )
  .factory( 'Sprint', function Sprint( enemyData ) {

    return function Sprint( difficulty, length, investment, payout, phaseNum ) {

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
      if ( phaseNum < 0 ) {
        throw new Error( 'Invalid phase!' );
      }

      // Create the base object to augment.
      var self = {};

      // Difficulty
      self.getDifficulty = function () {
        return self.difficulty;
      };

      // Enemies
      self.getBudget = function ( phaseNum ) {
        return Math.ceil( self.difficulty * self.payout * phaseNum / 6 );
      };
      self.getRandomEnemy = function ( phaseNum ) {
        var randomInt = Math.floor( Math.random() * enemyData.enemies.length );
        return angular.copy( enemyData.enemies[ randomInt ] );
      };
      self.createEnemies = function ( phaseNum ) {

        var currentBudget = self.getBudget( phaseNum );
        self.enemies = [];

        // Buy enemies for the fight until we run out of slots or money.
        var breakCount = 0;
        while ( self.enemies.length < 4 ) {
          var randomEnemy = self.getRandomEnemy( phaseNum );
          if ( randomEnemy.getHireCost() < currentBudget ) {
            currentBudget -= randomEnemy.getHireCost();
            self.enemies.push( randomEnemy );
          }
          if ( breakCount++ > 10 ) {
            break;
          }
          //console.log( currentBudget );
        }

        while ( self.enemies.length < 4 ) {
          self.enemies.push( enemyData.getEmptyEnemy() );
        }

        //console.log( self.enemies );
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
        self.phaseNum = phaseNum;
        self.enemies = [];

        self.createEnemies( phaseNum );

      } )();

      // Export
      return self;

    };
  
  } );