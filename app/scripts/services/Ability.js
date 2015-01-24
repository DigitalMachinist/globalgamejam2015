'use strict';

angular
  .module( 'globalgamejam2015App' )
  .service( 'Ability', function Ability() {

    return function Ability( nameString, abilityFn ) {

      // Validate arguments
      if ( !abilityFn || typeof( abilityFn ) !== 'function' ) {
        throw new Error( 'Invalid abilityFn!' );
      }
      if ( !nameString || typeof( nameString ) !== 'string' ) {
        throw new Error( 'Invalid name!' );
      }

      // Create the base object to augment.
      var self = {};

      // Init
      ( function init () {

        self.abilityFn = abilityFn;
        self.name = nameString;

      } )();
      
      // Export
      return self;

    };
    
  } );