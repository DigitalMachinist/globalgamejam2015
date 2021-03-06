'use strict';

angular
  .module( 'globalgamejam2015App' )
  .factory( 'Feature', function Feature( jobsData, devsData ) {

    return function Feature( nameString, descriptionString, affinityJobName, affinityIcon, 
      cost, fun, phase ) {

      if ( !affinityJobName || typeof( affinityJobName ) !== 'string' ) {
        throw new Error( 'Invalid affinityJobName!' );
      }
      if ( !cost || !parseInt( cost ) || cost < 0 ) {
        throw new Error( 'Invalid cost!' );
      }
      if ( !affinityJobName || typeof( affinityJobName ) !== 'string' ) {
        throw new Error( 'Invalid affinityJobName!' );
      }
      if ( !fun || !parseInt( fun ) || fun < 0 ) {
        throw new Error( 'Invalid fun!' );
      }
      if ( !nameString || typeof( nameString ) !== 'string' ) {
        throw new Error( 'Invalid name!' );
      }
      if ( !phase || !parseInt( phase ) || phase < 0 ) {
        throw new Error( 'Invalid phase!' );
      }

      // Create the base object to augment.
      var self = {};

      // Fun
      self.getModifiedFun = function () {
        if ( self.modifiedFun ) {
          return self.modifiedFun;
        }
        var numAffinities = 0;
        for ( var i = 0; i < devsData.devs.length; i++ ) {
          for ( var j = 0; j < devsData.devs[ i ].getJobLevels().length; j++ ) {
            var elem = devsData.devs[ i ].getJobLevels()[ j ];
            if ( jobsData.jobsMap[ elem.jobName ].name === self.jobAffinityName ) {
              numAffinities++;
            }
          }
        }
        // var numAffinities = devsArray.reduce( function ( total, dev ) {
        //   var affinityLevels = dev.getJobLevels().filter( function ( elem ) {
        //     return jobsData[ elem.jobName ].name === self.jobAffinityName;
        //   } );
        //   return total + affinityLevels.length;
        // } );
        self.modifiedFun = fun + numAffinities * fun;
        return self.modifiedFun;
      };

      // Init
      ( function init () {

        self.affinityJobName = affinityJobName;
        self.affinityIcon = affinityIcon;
        self.cost = cost;
        self.description = descriptionString;
        self.fun = fun;
        self.modifiedFun = 0;
        self.name = nameString;
        self.phase = phase;

      } )();

      // Export
      return self;

    };
  
  } );