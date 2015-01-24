'use strict';

angular
  .module( 'globalgamejam2015App' )
  .factory( 'Animation', function Animation() {

    return function Animation( nameString, framesArray ) {

      // Validate arguments
      if ( !framesArray || !framesArray instanceof Array || framesArray.length < 1 ) {
        throw new Error( 'Invalid framesArray!' );
      }
      if ( !nameString || typeof( nameString ) !== 'string' ) {
        throw new Error( 'Invalid name!' );
      }

      // Create the base object to augment.
      var self = {};

      // Init
      ( function init () {

        self.framesArray = framesArray;
        self.name = nameString;

      } )();
      
      // Export
      return self;

    };
    
  } );