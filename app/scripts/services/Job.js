'use strict';

angular
  .module( 'globalgamejam2015App' )
  .factory( 'Job', function Job( JobLevel ) {

    return function Job( baseObj ) {

      // Create the base object to augment.
      var self = baseObj;

      // Init
      ( function init () {

        // Abilities
        if ( !self.abilities || !self.abilities instanceof Array || self.abilities.length < 1 ) {
          throw new Error( 'Invalid abilities!' );
        }

        // Animations
        if ( !self.animationMap || typeof( self.animationMap ) !== 'object' ) {
          throw new Error( 'Invalid animationMap!' );
        }

        // Icon
        if ( !self.icon || typeof( self.icon ) !== 'string' ) {
          throw new Error( 'Invalid icon!' );
        }

        // Job Levels
        if ( !self.firstJobLevel || typeof( self.firstJobLevel ) !== 'object' ) {
          throw new Error( 'Invalid firstJobLevel!' );
        }
        if ( !self.higherJobLevel || typeof( self.higherJobLevel ) !== 'object' ) {
          throw new Error( 'Invalid higherJobLevel!' );
        }

        // Name
        if ( !self.name || typeof( self.name ) !== 'string' ) {
          throw new Error( 'Invalid name!' );
        }

      } )();
      
      // Export
      return self;

    };
  
  } );