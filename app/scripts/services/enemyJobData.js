'use strict';

angular
  .module( 'globalgamejam2015App' )
  .factory( 'enemyJobData', function ( EnemyJob, Ability, Animation ) {
    
    // Create the base object to augment.
    var self = {};

    // Init
    
    ( function init () {

      self.enemyJobsMap = {

        'BUG': new EnemyJob(
          'BUG',
          [
            new Ability(
              'EXCEPTION',
              'BUG', 
              '', 
              100, 
              'Description',
              function () {

              }
            ),
            new Ability(
              'NULL REFERENCE',
              'BUG', 
              '', 
              100, 
              'Description',
              function () {

              }
            ),
            new Ability(
              'CLIPPING',
              'BUG', 
              '', 
              100, 
              'Description',
              function () {

              }
            )
          ],
          {
            'idle': new Animation(
              'idle',
              [ '' ]
            )
          }
        ),

        'CLN': new EnemyJob(
          'CLN',
          [
            new Ability(
              'LAWYER UP',
              'CLN', 
              '', 
              100, 
              'Description',
              function () {

              }
            ),
            new Ability(
              'ERODE USERBASE',
              'CLN', 
              '', 
              100, 
              'Description',
              function () {

              }
            ),
            new Ability(
              'PIRATE',
              'CLN', 
              '', 
              100, 
              'Description',
              function () {

              }
            )
          ],
          {
            'idle': new Animation(
              'idle',
              [ '' ]
            )
          }
        ),

        'CRT': new EnemyJob(
          'CRT',
          [
            new Ability(
              'EXPOSE',
              'CRT', 
              '', 
              100, 
              'Description',
              function () {

              }
            ),
            new Ability(
              'TWITTER MOB',
              'CRT', 
              '', 
              100, 
              'Description',
              function () {

              }
            ),
            new Ability(
              'LUCKY BREAK',
              'CRT', 
              '', 
              100, 
              'Description',
              function () {

              }
            )
          ],
          {
            'idle': new Animation(
              'idle',
              [ '' ]
            )
          }
        ),

        'CSL': new EnemyJob(
          'CSL',
          [
            new Ability(
              '1-STAR REVIEW',
              'CSL', 
              '', 
              100, 
              'Description',
              function () {

              }
            ),
            new Ability(
              'F2P',
              'CSL', 
              '', 
              100, 
              'Description',
              function () {

              }
            ),
            new Ability(
              'RACE TO THE BOTTOM',
              'CSL', 
              '', 
              100, 
              'Description',
              function () {

              }
            )
          ],
          {
            'idle': new Animation(
              'idle',
              [ '' ]
            )
          }
        ),

        'EXE': new EnemyJob(
          'EXE',
          [
            new Ability(
              'SCOPE CREEP',
              'EXE', 
              '', 
              100, 
              'Description',
              function () {

              }
            ),
            new Ability(
              'YOU\'RE FIRED',
              'EXE', 
              '', 
              100, 
              'Description',
              function () {

              }
            ),
            new Ability(
              'BRIGHT IDEA',
              'EXE', 
              '', 
              100, 
              'Description',
              function () {

              }
            )
          ],
          {
            'idle': new Animation(
              'idle',
              [ '' ]
            )
          }
        ),

        'HRD': new EnemyJob(
          'HRD',
          [
            new Ability(
              'HARASS',
              'HRD', 
              '', 
              100, 
              'Description',
              function () {

              }
            ),
            new Ability(
              'DOX MOB',
              'HRD', 
              '', 
              100, 
              'Description',
              function () {

              }
            ),
            new Ability(
              'STEAM SALE',
              'HRD', 
              '', 
              100, 
              'Description',
              function () {

              }
            )
          ],
          {
            'idle': new Animation(
              'idle',
              [ '' ]
            )
          }
        )

      };

    } )();

    // Export
    return self;

  } );