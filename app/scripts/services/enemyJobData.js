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
              'ABILITY 1',
              'BUG', 
              '', 
              100, 
              'Description',
              function () {

              }
            ),
            new Ability(
              'ABILITY 2',
              'BUG', 
              '', 
              100, 
              'Description',
              function () {

              }
            ),
            new Ability(
              'ABILITY 3',
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
              [ 'enemy-sprite-bug' ]
            )
          }
        ),

        'CLN': new EnemyJob(
          'CLN',
          [
            new Ability(
              'ABILITY 1',
              'CLN', 
              '', 
              100, 
              'Description',
              function () {

              }
            ),
            new Ability(
              'ABILITY 2',
              'CLN', 
              '', 
              100, 
              'Description',
              function () {

              }
            ),
            new Ability(
              'ABILITY 3',
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
              [ 'enemy-sprite-cln' ]
            )
          }
        ),

        'CRT': new EnemyJob(
          'CRT',
          [
            new Ability(
              'ABILITY 1',
              'CRT', 
              '', 
              100, 
              'Description',
              function () {

              }
            ),
            new Ability(
              'ABILITY 2',
              'CRT', 
              '', 
              100, 
              'Description',
              function () {

              }
            ),
            new Ability(
              'ABILITY 3',
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
              [ 'enemy-sprite-crt' ]
            )
          }
        ),

        'CSL': new EnemyJob(
          'CSL',
          [
            new Ability(
              'ABILITY 1',
              'CSL', 
              '', 
              100, 
              'Description',
              function () {

              }
            ),
            new Ability(
              'ABILITY 2',
              'CSL', 
              '', 
              100, 
              'Description',
              function () {

              }
            ),
            new Ability(
              'ABILITY 3',
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
              [ 'enemy-sprite-csl' ]
            )
          }
        ),

        'EXE': new EnemyJob(
          'EXE',
          [
            new Ability(
              'ABILITY 1',
              'EXE', 
              '', 
              100, 
              'Description',
              function () {

              }
            ),
            new Ability(
              'ABILITY 2',
              'EXE', 
              '', 
              100, 
              'Description',
              function () {

              }
            ),
            new Ability(
              'ABILITY 3',
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
              [ 'enemy-sprite-exe' ]
            )
          }
        ),

        'HRD': new EnemyJob(
          'HRD',
          [
            new Ability(
              'ABILITY 1',
              'HRD', 
              '', 
              100, 
              'Description',
              function () {

              }
            ),
            new Ability(
              'ABILITY 2',
              'HRD', 
              '', 
              100, 
              'Description',
              function () {

              }
            ),
            new Ability(
              'ABILITY 3',
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
              [ 'enemy-sprite-hrd' ]
            )
          }
        )

      };

    } )();

    // Export
    return self;

  } );