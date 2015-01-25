'use strict';

angular
  .module( 'globalgamejam2015App' )
  .factory( 'enemyJobData', function ( EnemyJob ) {
    
    // Create the base object to augment.
    var self = {};

    // Init
    
    ( function init () {

      self.enemyJobs = {

        'BUG': new EnemyJob( {

        } ),



      };

      ];

    } )();

    // Export
    return self;

  } );