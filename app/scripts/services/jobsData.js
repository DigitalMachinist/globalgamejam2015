'use strict';

angular
  .module( 'globalgamejam2015App' )
  .factory( 'jobsData', function jobsData( Job, JobLevel, Ability, Animation ) {

    var self = {};

    // Helpers

    self.getRandomJobLevel = function ( isFirst ) {

      // Select a random job and return the appropriate job level data.
      var randomInt = Math.floor( Math.random() * self.jobs.length );
      var randomJob = self.jobs[ randomInt ];
      return ( isFirst ) ? randomJob.firstJobLevel : randomJob.higherJobLevel;

    };

    // Init

    ( function init () {

      self.jobs = [

        new Job( {
          name: 'ART',
          icon: 'fa-paint-brush',
          firstJobLevel: new JobLevel( {
            jobName: 'ART', 
            atbSpeed: 10,
            bug: 0,
            csl: 6,
            cln: 8,
            crt: 2, 
            exe: 2,
            hrd: 6, 
            hireCost: 20,
            maxHP: 20
          } ),
          higherJobLevel: new JobLevel( {
            jobName: 'ART', 
            atbSpeed: 5,
            bug: 0,
            csl: 3,
            cln: 4,
            crt: 1, 
            exe: 1,
            hrd: 3, 
            hireCost: 10,
            maxHP: 10
          } ),
          abilities: [
            new Ability( 
              'ABILITY 1',
              'ART', 
              '', 
              100, 
              'Description',
              function () {

              }
            ),
            new Ability( 
              'ABILITY 2',
              'ART', 
              'ABILITY 1', 
              100, 
              'Description',
              function () {

              }
            ),
            new Ability( 
              'ABILITY 3',
              'ART', 
              'ABILITY 1', 
              100, 
              'Description',
              function () {

              }
            )
          ],
          animationMap: {
            'attack': new Animation(
              'attack',
              [ '', '' ]
            ),
            'cast': new Animation(
              'cast',
              [ '', '' ]
            ),
            'cower': new Animation(
              'cower',
              [ '', '' ]
            ),
            'dead': new Animation(
              'dead',
              [ '', '' ]
            ),
            'flee': new Animation(
              'flee',
              [ '', '' ]
            ),
            'hurt': new Animation(
              'hurt',
              [ '', '' ]
            ),
            'idle': new Animation(
              'idle',
              [ '', '' ]
            ),
            'win': new Animation(
              'win',
              [ '', '' ]
            )
          }
        } ),

        new Job( {
          name: 'COD',
          icon: 'fa-keyboard-o',
          firstJobLevel: new JobLevel( {
            jobName: 'COD', 
            atbSpeed: 10,
            bug: 6,
            csl: 0,
            cln: 4,
            crt: 6, 
            exe: 0,
            hrd: 8, 
            hireCost: 20,
            maxHP: 20
          } ),
          higherJobLevel: new JobLevel( {
            jobName: 'COD', 
            atbSpeed: 5,
            bug: 3,
            csl: 0,
            cln: 2,
            crt: 3, 
            exe: 0,
            hrd: 4, 
            hireCost: 10,
            maxHP: 10
          } ),
          abilities: [
            new Ability( 
              'ABILITY 1',
              'COD', 
              '', 
              100, 
              'Description',
              function () {

              }
            ),
            new Ability( 
              'ABILITY 2',
              'COD', 
              'ABILITY 1', 
              100, 
              'Description',
              function () {

              }
            ),
            new Ability( 
              'ABILITY 3',
              'COD', 
              'ABILITY 1', 
              100, 
              'Description',
              function () {

              }
            )
          ],
          animationMap: {
            'attack': new Animation(
              'attack',
              [ '', '' ]
            ),
            'cast': new Animation(
              'cast',
              [ '', '' ]
            ),
            'cower': new Animation(
              'cower',
              [ '', '' ]
            ),
            'dead': new Animation(
              'dead',
              [ '', '' ]
            ),
            'flee': new Animation(
              'flee',
              [ '', '' ]
            ),
            'hurt': new Animation(
              'hurt',
              [ '', '' ]
            ),
            'idle': new Animation(
              'idle',
              [ '', '' ]
            ),
            'win': new Animation(
              'win',
              [ '', '' ]
            )
          }
        } ),

        new Job( {
          name: 'DSN',
          icon: 'fa-magic',
          firstJobLevel: new JobLevel( {
            jobName: 'DSN', 
            atbSpeed: 10,
            bug: 0,
            csl: 6,
            cln: 2,
            crt: 4, 
            exe: 8,
            hrd: 4, 
            hireCost: 20,
            maxHP: 20
          } ),
          higherJobLevel: new JobLevel( {
            jobName: 'DSN', 
            atbSpeed: 5,
            bug: 0,
            csl: 3,
            cln: 1,
            crt: 2, 
            exe: 4,
            hrd: 2, 
            hireCost: 10,
            maxHP: 10
          } ),
          abilities: [
            new Ability( 
              'ABILITY 1',
              'DSN', 
              '', 
              100, 
              'Description',
              function () {

              }
            ),
            new Ability( 
              'ABILITY 2',
              'DSN', 
              'ABILITY 1',
              100, 
              'Description',
              function () {

              }
            ),
            new Ability( 
              'ABILITY 3',
              'DSN', 
              'ABILITY 1', 
              100, 
              'Description',
              function () {

              }
            )
          ],
          animationMap: {
            'attack': new Animation(
              'attack',
              [ '', '' ]
            ),
            'cast': new Animation(
              'cast',
              [ '', '' ]
            ),
            'cower': new Animation(
              'cower',
              [ '', '' ]
            ),
            'dead': new Animation(
              'dead',
              [ '', '' ]
            ),
            'flee': new Animation(
              'flee',
              [ '', '' ]
            ),
            'hurt': new Animation(
              'hurt',
              [ '', '' ]
            ),
            'idle': new Animation(
              'idle',
              [ '', '' ]
            ),
            'win': new Animation(
              'win',
              [ '', '' ]
            )
          }
        } ),

        new Job( {
          name: 'PRD',
          icon: 'fa-line-chart',
          firstJobLevel: new JobLevel( {
            jobName: 'PRD', 
            atbSpeed: 10,
            bug: 6,
            csl: 10,
            cln: 0,
            crt: 2, 
            exe: 6,
            hrd: 0, 
            hireCost: 20,
            maxHP: 20
          } ),
          higherJobLevel: new JobLevel( {
            jobName: 'PRD', 
            atbSpeed: 5,
            bug: 3,
            csl: 5,
            cln: 0,
            crt: 1, 
            exe: 3,
            hrd: 0, 
            hireCost: 10,
            maxHP: 10
          } ),
          abilities: [
            new Ability( 
              'ABILITY 1',
              'PRD', 
              '', 
              100, 
              'Description',
              function () {

              }
            ),
            new Ability( 
              'ABILITY 2',
              'PRD', 
              'ABILITY 1',
              100, 
              'Description',
              function () {

              }
            ),
            new Ability( 
              'ABILITY 3',
              'PRD', 
              'ABILITY 1', 
              100, 
              'Description',
              function () {

              }
            )
          ],
          animationMap: {
            'attack': new Animation(
              'attack',
              [ '', '' ]
            ),
            'cast': new Animation(
              'cast',
              [ '', '' ]
            ),
            'cower': new Animation(
              'cower',
              [ '', '' ]
            ),
            'dead': new Animation(
              'dead',
              [ '', '' ]
            ),
            'flee': new Animation(
              'flee',
              [ '', '' ]
            ),
            'hurt': new Animation(
              'hurt',
              [ '', '' ]
            ),
            'idle': new Animation(
              'idle',
              [ '', '' ]
            ),
            'win': new Animation(
              'win',
              [ '', '' ]
            )
          }
        } ),

        new Job( {
          name: 'PR',
          icon: 'fa-comments',
          firstJobLevel: new JobLevel( {
            jobName: 'PR', 
            atbSpeed: 10,
            bug: 0,
            csl: 0,
            cln: 8,
            crt: 8, 
            exe: 4,
            hrd: 4, 
            hireCost: 20,
            maxHP: 20
          } ),
          higherJobLevel: new JobLevel( {
            jobName: 'PR', 
            atbSpeed: 5,
            bug: 0,
            csl: 0,
            cln: 4,
            crt: 4, 
            exe: 2,
            hrd: 2, 
            hireCost: 10,
            maxHP: 10
          } ),
          abilities: [
            new Ability( 
              'ABILITY 1',
              'PR', 
              '', 
              100, 
              'Description',
              function () {

              }
            ),
            new Ability( 
              'ABILITY 2',
              'PR', 
              'ABILITY 1', 
              100, 
              'Description',
              function () {

              }
            ),
            new Ability( 
              'ABILITY 3',
              'PR', 
              'ABILITY 1', 
              100, 
              'Description',
              function () {

              }
            )
          ],
          animationMap: {
            'attack': new Animation(
              'attack',
              [ '', '' ]
            ),
            'cast': new Animation(
              'cast',
              [ '', '' ]
            ),
            'cower': new Animation(
              'cower',
              [ '', '' ]
            ),
            'dead': new Animation(
              'dead',
              [ '', '' ]
            ),
            'flee': new Animation(
              'flee',
              [ '', '' ]
            ),
            'hurt': new Animation(
              'hurt',
              [ '', '' ]
            ),
            'idle': new Animation(
              'idle',
              [ '', '' ]
            ),
            'win': new Animation(
              'win',
              [ '', '' ]
            )
          }
        } ),

        new Job( {
          name: 'QA',
          icon: 'fa-gamepad',
          firstJobLevel: new JobLevel( {
            jobName: 'QA', 
            atbSpeed: 10,
            bug: 10,
            csl: 0,
            cln: 4,
            crt: 4, 
            exe: 6,
            hrd: 0, 
            hireCost: 20,
            maxHP: 20
          } ),
          higherJobLevel: new JobLevel( {
            jobName: 'QA', 
            atbSpeed: 5,
            bug: 5,
            csl: 0,
            cln: 2,
            crt: 2, 
            exe: 3,
            hrd: 0, 
            hireCost: 10,
            maxHP: 10
          } ),
          abilities: [
            new Ability( 
              'ABILITY 1',
              'QA', 
              '', 
              100, 
              'Description',
              function () {

              }
            ),
            new Ability( 
              'ABILITY 2',
              'QA', 
              'ABILITY 1', 
              100, 
              'Description',
              function () {

              }
            ),
            new Ability( 
              'ABILITY 3',
              'QA', 
              'ABILITY 1', 
              100, 
              'Description',
              function () {

              }
            )
          ],
          animationMap: {
            'attack': new Animation(
              'attack',
              [ '', '' ]
            ),
            'cast': new Animation(
              'cast',
              [ '', '' ]
            ),
            'cower': new Animation(
              'cower',
              [ '', '' ]
            ),
            'dead': new Animation(
              'dead',
              [ '', '' ]
            ),
            'flee': new Animation(
              'flee',
              [ '', '' ]
            ),
            'hurt': new Animation(
              'hurt',
              [ '', '' ]
            ),
            'idle': new Animation(
              'idle',
              [ '', '' ]
            ),
            'win': new Animation(
              'win',
              [ '', '' ]
            )
          }
        } )

      ];

      // Build a map of jobs for fast lookups.
      self.jobsMap = {};
      for ( var i = 0; i < self.jobs.length; i++ ) {
        self.jobsMap[ self.jobs[ i ].name ] = self.jobs[ i ];
      }

    } )();

    return self;
  
  } );