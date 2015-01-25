'use strict';

angular
  .module( 'globalgamejam2015App' )
  .factory( 'Ability', function Ability() {

    return function Ability( nameString, jobName, prerequisite, abilityFn ) {

      // Validate arguments
      if ( !abilityFn || typeof( abilityFn ) !== 'function' ) {
        throw new Error( 'Invalid abilityFn!' );
      }
      if ( !jobName || typeof( jobName ) !== 'string' ) {
        throw new Error( 'Invalid jobName!' );
      }
      if ( !nameString || typeof( nameString ) !== 'string' ) {
        throw new Error( 'Invalid name!' );
      }
      if ( typeof( prerequisite ) !== 'string' ) {
        throw new Error( 'Invalid prerequisite!' );
      }

      // Create the base object to augment.
      var self = {};

      // Init
      ( function init () {

        self.abilityFn = abilityFn;
        self.jobName = jobName;
        self.name = nameString;
        self.prerequisite = prerequisite;

      } )();
      
      // Export
      return self;

    };
    
  } );