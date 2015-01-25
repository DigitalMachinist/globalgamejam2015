'use strict';

angular
  .module( 'globalgamejam2015App' )
  .factory( 'Game', function Game() {

    return function Game( nameString, numMonths, startBudget, conceptBonus, prototypeBonus,
      prototypeMinFun, betaMinFun, releaseMinFun ) {

      // Validate arguments.
      if ( !nameString || typeof( nameString ) !== 'string' ) {
        throw new Error( 'Invalid name!' );
      }
      if ( !numMonths || !parseInt( numMonths ) || numMonths < 0 ) {
        throw new Error( 'Invalid numMonths!' );
      }
      if ( !startBudget || !parseInt( startBudget ) || startBudget < 0 ) {
        throw new Error( 'Invalid startBudget!' );
      }
      if ( !conceptBonus || !parseInt( conceptBonus ) || conceptBonus < 0 ) {
        throw new Error( 'Invalid conceptBonus!' );
      }
      if ( !prototypeBonus || !parseInt( prototypeBonus ) || prototypeBonus < 0 ) {
        throw new Error( 'Invalid prototypeBonus!' );
      }
      if ( !prototypeMinFun || !parseInt( prototypeMinFun ) || prototypeMinFun < 0 ) {
        throw new Error( 'Invalid prototypeMinFun!' );
      }
      if ( !betaMinFun || !parseInt( betaMinFun ) || betaMinFun < 0 ) {
        throw new Error( 'Invalid betaMinFun!' );
      }
      if ( !releaseMinFun || !parseInt( releaseMinFun ) || releaseMinFun < 0 ) {
        throw new Error( 'Invalid releaseMinFun!' );
      }

      // Create the base object to augment.
      var self = {};

      // $$$ (Budget)
      self.add$$$ = function ( $$$ToAdd ) {
        self.current$$$ += $$$ToAdd;
        if ( self.current$$$ > self.max$$$ ) {
          self.current$$$ = self.max$$$;
        }
      };
      self.getCurrent$$$ = function () {
        return self.current$$$;
      };
      self.getConceptBonus = function () {
        return self.conceptBonus;
      };
      self.getPrototypeBonus = function () {
        return self.prototypeBonus;
      };
      self.spend$$$ = function ( $$$ToSpend ) {
        if ( self.current$$$ < $$$ToSpend ) {
          return false;
        }
        self.current$$$ -= $$$ToSpend;
        return true;
      };

      // Fun
      self.addFun = function ( funToAdd ) {
        self.fun += funToAdd;
      };
      self.getFun = function () {
        return self.fun;
      };

      // Name
      if ( !self.name || typeof( self.name ) !== 'string' ) {
        self.name = '1337 H4X GAEM';
      }
      else {
        if ( self.name.length > 18 ) {
          self.name = self.name.substring( 0, 17 );
        }
        self.name = self.name.toUpperCase();
      }

      // Phase
      self.getPhaseNum = function () {
        if ( self.fun >= self.releaseMinFun ) {
          return 4;
        }
        else if ( self.fun >= self.betaMinFun ) {
          return 3;
        }
        else if ( self.fun >= self.prototypeMinFun ) {
          return 2;
        }
        else {
          return 1;
        }
      };
      self.getPhaseName = function ( phaseNum ) {
        var phaseArr = [ 'concept', 'prototype', 'beta', 'release' ];
        return phaseArr[ phaseNum - 1 ];
      };

      // Schedule
      self.advanceCurrentMonth = function ( numMonths ) {
        self.currentMonth += numMonths;
      };
      self.canAdvanceCurrentMonth = function ( numMonths ) {
        return ( self.currentMonth + numMonths >= self.numMonths );
      };
      self.getCurrentMonth = function () {
        return self.currentMonth;
      };
      self.getNumMonths = function () {
        return self.numMonths;
      };

      // Init
      ( function init () {

        self.betaMinFun = betaMinFun;
        self.conceptBonus = conceptBonus;
        self.current$$$ = startBudget;
        self.currentMonth = 0;
        self.fun = 0;
        self.max$$$ = 999;
        self.name = nameString;
        self.numMonths = numMonths;
        self.prototypeBonus = prototypeBonus;
        self.prototypeMinFun = prototypeMinFun;
        self.releaseMinFun = releaseMinFun;

      } )();

      // Export
      return self;

    };
  
  } );