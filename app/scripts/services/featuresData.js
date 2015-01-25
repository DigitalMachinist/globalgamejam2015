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
          'LOWRES UNICORNS', 
          'Description', 
          'ART', 
          jobsData.jobsMap.ART.icon, 
          50, 
          200,
          1
        ),

        new Feature(
          'VOXELS', 
          'Description', 
          'ART', 
          jobsData.jobsMap.ART.icon, 
          100, 
          400,
          2
        ),

        new Feature(
          'MOVING SCORE', 
          'Description', 
          'ART', 
          jobsData.jobsMap.ART.icon, 
          200, 
          800,
          3
        ),

        new Feature(
          'EASTER EGG', 
          'Description', 
          'PRD', 
          jobsData.jobsMap.PRD.icon, 
          50, 
          200,
          1
        ),

        new Feature(
          'KICKASSCUTSCENES', 
          'Description', 
          'PRD', 
          jobsData.jobsMap.PRD.icon, 
          100, 
          400,
          2
        ),

        new Feature(
          'PROD. VALUE', 
          'Description', 
          'PRD', 
          jobsData.jobsMap.PRD.icon, 
          200, 
          800,
          3
        ),

        new Feature(
          'USEFUL TUTORIALS', 
          'Description', 
          'QA', 
          jobsData.jobsMap.QA.icon, 
          50, 
          200,
          1
        ),

        new Feature(
          'ULTRA REAL GORE', 
          'Description', 
          'QA', 
          jobsData.jobsMap.QA.icon, 
          100, 
          400,
          2
        ),

        

        new Feature(
          'GOD MODE', 
          'Description', 
          'QA', 
          jobsData.jobsMap.QA.icon, 
          200, 
          800,
          3
        ),

        new Feature(
          'DIVERSITY', 
          'Description', 
          'PR', 
          jobsData.jobsMap.PR.icon, 
          50, 
          200,
          1
        ),

        new Feature(
          'STRETCH GOALS', 
          'Description', 
          'PR', 
          jobsData.jobsMap.PR.icon, 
          100, 
          400,
          2
        ),

        new Feature(
          'VIRAL WEB TIE-IN', 
          'Description', 
          'PR', 
          jobsData.jobsMap.PR.icon, 
          200, 
          800,
          3
        ),

        new Feature(
          'BULLET HELL', 
          'Description', 
          'COD', 
          jobsData.jobsMap.COD.icon, 
          50, 
          200,
          1
        ),

        new Feature(
          'WIGGLE PHYSICS', 
          'Description', 
          'COD', 
          jobsData.jobsMap.COD.icon, 
          100, 
          400,
          2
        ),

        new Feature(
          'LOCALMULTIPLAYER', 
          'Description', 
          'COD', 
          jobsData.jobsMap.COD.icon, 
          200, 
          800,
          3
        ),

        new Feature(
          'RADIAL MENU', 
          'Description', 
          'DSN', 
          jobsData.jobsMap.DSN.icon, 
          50, 
          200,
          1
        ),

        new Feature(
          'TIGHT CONTROLS', 
          'Description',
          'DSN', 
          jobsData.jobsMap.DSN.icon, 
          100, 
          400,
          2
        ),

        

        new Feature(
          'EASY2LRNHRD2MSTR', 
          'Description', 
          'DSN', 
          jobsData.jobsMap.DSN.icon, 
          200, 
          800,
          3
        ),

      ];

    } )();

    // Export
    return self;

  });
