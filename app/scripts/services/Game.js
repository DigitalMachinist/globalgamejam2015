'use strict';

angular
  .module( 'globalgamejam2015App' )
  .service( 'Game', function Game() {

    return function Game( nameString, numMonths, startBudget ) {

      // Validate arguments.
      if ( !nameString || typeof( nameString !== 'string' ) ) {
        throw new Error( 'Invalid name!' );
      }
      if ( !numMonths || !parseInt( numMonths ) || numMonths < 0 ) {
        throw new Error( 'Invalid numMonths!' );
      }
      if ( !startBudget || !parseInt( startBudget ) || startBudget < 0 ) {
        throw new Error( 'Invalid startBudget!' );
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
      self.spend$$$ = function ( $$$ToSpend ) {
        if ( self.current$$$ < $$$ToSpend ) {
          return false;
        }
        self.current$$$ -= $$$ToSpend;
        return true;
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

      // Schedule
      self.getNumMonths = function () {
        return self.numMonths;
      };

      // Init
      ( function init () {

        self.current$$$ = startBudget;
        self.max$$$ = 999;
        self.setName( nameString );
        self.numMonths = numMonths;

      } )();

      // Export
      return self;

    };
  
  } );