'use strict';

angular
  .module( 'globalgamejam2015App')
  .factory( 'featuresData', function ( Feature, jobsData ) {
    
    // Create the base object to augment.
    var self = {};

    // Init
    ( function init () {

      self.features = [

        new Feature(
          'FEATURE 1', 
          'Description', 
          'ART', 
          jobsData.jobsMap.ART.icon, 
          50, 
          200,
          1
        ),

        new Feature(
          'FEATURE 2', 
          'Description', 
          'COD', 
          jobsData.jobsMap.COD.icon, 
          75, 
          400,
          1
        ),

        new Feature(
          'FEATURE 3', 
          'Description', 
          'DSN', 
          jobsData.jobsMap.DSN.icon, 
          25, 
          200,
          1
        ),

        new Feature(
          'FEATURE 4', 
          'Description', 
          'PRD', 
          jobsData.jobsMap.PRD.icon, 
          100, 
          500,
          2
        ),

        new Feature(
          'FEATURE 5', 
          'Description', 
          'QA', 
          jobsData.jobsMap.QA.icon, 
          400, 
          1000,
          3
        ),

        new Feature(
          'FEATURE 6', 
          'Description', 
          'PR', 
          jobsData.jobsMap.PR.icon, 
          600, 
          2000,
          3
        ),

      ];

    } )();

    // Export
    return self;

  });
