'use strict';

angular
  .module( 'globalgamejam2015App' )
  .factory( 'EnemyJob', function EnemyJob() {

    return function EnemyJob( nameString, abilitiesArray, animationMap ) {

      if ( !abilitiesArray || !abilitiesArray instanceof Array || abilitiesArray.length < 1 ) {
        throw new Error( 'Invalid abilitiesArray!' );
      }
      if ( !animationMap || typeof( animationMap ) !== 'object' ) {
        throw new Error( 'Invalid animationMap!' );
      }
      if ( !nameString || typeof( nameString ) !== 'string' ) {
        throw new Error( 'Invalid name!' );
      }

      // Create the base object to augment.
      var self = {};

      // Init
      ( function init () {

        self.abilitiesArray = abilitiesArray;
        self.animationMap = animationMap;
        self.name = nameString;

      } )();

      // Export
      return self;

    };
  
  } );