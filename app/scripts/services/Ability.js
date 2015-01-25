'use strict';

angular
  .module( 'globalgamejam2015App' )
  .factory( 'Ability', function Ability() {

    return function Ability( nameString, jobName, prerequisite, xpCost, description, abilityFn ) {

      // Validate arguments
      if ( !abilityFn || typeof( abilityFn ) !== 'function' ) {
        throw new Error( 'Invalid abilityFn!' );
      }
      if ( typeof( description ) !== 'string' ) {
        throw new Error( 'Invalid description!' );
      }
      if ( typeof( jobName ) !== 'string' ) {
        throw new Error( 'Invalid jobName!' );
      }
      if ( !nameString || typeof( nameString ) !== 'string' ) {
        throw new Error( 'Invalid name!' );
      }
      if ( typeof( prerequisite ) !== 'string' ) {
        throw new Error( 'Invalid prerequisite!' );
      }
      if ( !xpCost || !parseInt( xpCost ) || xpCost < 0 ) {
        throw new Error( 'Invalid xpCost!' );
      }

      // Create the base object to augment.
      var self = {};

      // Init
      ( function init () {

        self.abilityFn = abilityFn;
        self.description = description;
        self.jobName = jobName;
        self.name = nameString;
        self.prerequisite = prerequisite;
        self.xpCost = xpCost;

      } )();
      
      // Export
      return self;

    };
    
  } );