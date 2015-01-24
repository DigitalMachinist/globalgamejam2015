'use strict';

angular
	.module( 'globalgamejam2015App' )
  .service( 'Joblevel', function Joblevel() {

  	return function JobLevel( baseObj ) {

      // Create the base object to augment.
      var self = baseObj;

      // Helpers
      function isNumber( n ) {
        return !isNaN( parseFloat( n ) ) && isFinite( n );
      }

      // Init
      ( function init () {

        // ATB
        if ( !self.atbSpeed || !isNumber( self.atbSpeed ) ) {
          self.atbSpeed = 0;
        }

        // Enemy Stats
        if ( !self.bug || !parseInt( self.bug ) ) {
          self.bug = 0;
        }
        if ( !self.csl || !parseInt( self.csl ) ) {
          self.csl = 0;
        }
        if ( !self.cln || !parseInt( self.cln ) ) {
          self.cln = 0;
        }
        if ( !self.crt || !parseInt( self.crt ) ) {
          self.crt = 0;
        }
        if ( !self.exe || !parseInt( self.exe ) ) {
          self.exe = 0;
        }
        if ( !self.hrd || !parseInt( self.hrd ) ) {
          self.hrd = 0;
        }

        // Hire Cost
        if ( !self.hireCost || !parseInt( self.hireCost ) ) {
          self.hireCost = 0;
        }

        // HP
        if ( !self.maxHP || !parseInt( self.maxHP ) ) {
          self.maxHP = 0;
        }

        // Job
        if ( !self.jobName || typeof( self.jobName ) !== 'string' ) {
          throw new Error( 'Invalid jobName!' );
        }

      } )();

      // Export
      return self;

    };
    
  } );