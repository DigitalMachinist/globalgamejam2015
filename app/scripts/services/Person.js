'use strict';

angular
	.module( 'globalgamejam2015App' )
  .service( 'Person', function Person() {

    return function Person( baseObj ) {

    	// Create the base object to augment.
    	var self = baseObj;

      // Init
      ( function init () {

        // ATB
        if ( !self.atbSpeed || !parseInt( self.atbSpeed ) ) {
          self.atbSpeed = 10;
        }

        // Avatar
        if ( !self.avatarUrl || typeof( self.avatarUrl ) !== 'string' ) {
          self.avatarUrl = '';
        }

        // Enemy Stats
        if ( !self.bug || !parseInt( self.bug ) ) {
          self.bug = 10;
        }
        if ( !self.csl || !parseInt( self.csl ) ) {
          self.csl = 10;
        }
        if ( !self.cln || !parseInt( self.cln ) ) {
          self.cln = 10;
        }
        if ( !self.crt || !parseInt( self.crt ) ) {
          self.crt = 10;
        }
        if ( !self.exe || !parseInt( self.exe ) ) {
          self.exe = 10;
        }
        if ( !self.hrd || !parseInt( self.hrd ) ) {
          self.hrd = 10;
        }

        // HP
        if ( !self.maxHP || !parseInt( self.maxHP ) ) {
          self.maxHP = 30;
        }

        // Name
        if ( !self.name || typeof( self.name ) !== 'string' ) {
          self.name = 'DEV';
        }
        else {
          if ( self.name.length > 8 ) {
            self.name = self.name.substring( 0, 7 );
          }
          self.name = self.name.toUpperCase();
        }

      } )();

	  	// Export
    	return self;

    };
    
  } );