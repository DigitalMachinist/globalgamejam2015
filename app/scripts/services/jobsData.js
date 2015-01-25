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
              'INSPIRE',
              'ART', 
              '', 
              100, 
              'Heals one party member',
              function () {

              }
            ),
            new Ability( 
              'GRAFIX UPGRADE',
              'ART', 
              'GRAFIX UPGRADE', 
              100, 
              '2x attack vs Casuals and Hardcores',
              function () {

              }
            ),
            new Ability( 
              'CATCHY TUNE',
              'ART', 
              'GRAFIX UPGRADE', 
              100, 
              '50% chance to eliminate a Clone from the sprint',
              function () {

              }
            )
          ],
          animationMap: {
            'attack': new Animation(
              'attack',
              [ 'dev-sprite-art-attack-1', 'dev-sprite-art-attack-2', 'dev-sprite-art-attack-3', 'dev-sprite-art-attack-4', 'dev-sprite-art-attack-5', 'dev-sprite-art-attack-6', 'dev-sprite-art-attack-7' ]
            ),
            'cast': new Animation(
              'cast',
              [ 'dev-sprite-art-cast-1', 'dev-sprite-art-cast-2' ]
            ),
            'cower': new Animation(
              'cower',
              [ 'dev-sprite-art-cower-1' ]
            ),
            'dead': new Animation(
              'dead',
              [ 'dev-sprite-art-dead-1' ]
            ),
            'flee': new Animation(
              'flee',
              [ '' ]
            ),
            'hurt': new Animation(
              'hurt',
              [ 'dev-sprite-art-hurt-1' ]
            ),
            'idle': new Animation(
              'idle',
              [ 'dev-sprite-art-idle-1' ]
            ),
            'win': new Animation(
              'win',
              [ 'dev-sprite-art-win-1' ]
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
              'OBFUSCATE',
              'COD', 
              '', 
              100, 
              'Clones do half damage to the party',
              function () {

              }
            ),
            new Ability( 
              'CATCH EXCEPTION',
              'COD', 
              'OBFUSCATE', 
              100, 
              'Reflect next exception a bug throws',
              function () {

              }
            ),
            new Ability( 
              'DIVIDE AND CONQUER',
              'COD', 
              'OBFUSCATE', 
              100, 
              'Set all enemy HP to average % HP in battle',
              function () {

              }
            )
          ],
          animationMap: {
            'attack': new Animation(
              'attack',
              [ 'dev-sprite-cod-attack-1', 'dev-sprite-cod-attack-2', 'dev-sprite-cod-attack-3', 'dev-sprite-cod-attack-4', 'dev-sprite-cod-attack-5', 'dev-sprite-cod-attack-6', 'dev-sprite-cod-attack-7', 'dev-sprite-cod-attack-8' ]
            ),
            'cast': new Animation(
              'cast',
              [ 'dev-sprite-cod-cast-1', 'dev-sprite-cod-cast-2' ]
            ),
            'cower': new Animation(
              'cower',
              [ 'dev-sprite-cod-cower-1' ]
            ),
            'dead': new Animation(
              'dead',
              [ 'dev-sprite-cod-dead-1 ' ]
            ),
            'flee': new Animation(
              'flee',
              [ '', '' ]
            ),
            'hurt': new Animation(
              'hurt',
              [ 'dev-sprite-cod-hurt-1' ]
            ),
            'idle': new Animation(
              'idle',
              [ 'dev-sprite-cod-idle-1' ]
            ),
            'win': new Animation(
              'win',
              [ 'dev-sprite-cod-win-1' ]
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
              'ROGUELIKE',
              'DSN', 
              '', 
              100, 
              'Powerful attack to a single enemy; ineffective against Casuals',
              function () {

              }
            ),
            new Ability( 
              'ADDICTION PSYCHOLOGY',
              'DSN', 
              'ROGUELIKE',
              100, 
              'Slows Hardcores, Casuals and Critics ',
              function () {

              }
            ),
            new Ability( 
              'PLAYTEST',
              'DSN', 
              'ROGUELIKE', 
              100, 
              'Increases Payout when Executives are in the sprint',
              function () {

              }
            )
          ],
          animationMap: {
            'attack': new Animation(
              'attack',
              [ 'dev-sprite-dsn-attack-1', 'dev-sprite-dsn-attack-2', 'dev-sprite-dsn-attack-3', 'dev-sprite-dsn-attack-4', 'dev-sprite-dsn-attack-5', 'dev-sprite-dsn-attack-6', 'dev-sprite-dsn-attack-7', 'dev-sprite-dsn-attack-8' ]
            ),
            'cast': new Animation(
              'cast',
              [ 'dev-sprite-dsn-cast-1', 'dev-sprite-dsn-cast-2' ]
            ),
            'cower': new Animation(
              'cower',
              [ 'dev-sprite-dsn-cower-1 ' ]
            ),
            'dead': new Animation(
              'dead',
              [ 'dev-sprite-dsn-dead-1' ]
            ),
            'flee': new Animation(
              'flee',
              [ '', '' ]
            ),
            'hurt': new Animation(
              'hurt',
              [ 'dev-sprite-dsn-hurt-1' ]
            ),
            'idle': new Animation(
              'idle',
              [ 'dev-sprite-dsn-idle-1' ]
            ),
            'win': new Animation(
              'win',
              [ 'dev-sprite-dsn-win-1' ]
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
              'CRUNCH',
              'PRD', 
              '', 
              100, 
              'Increase speed of all party members',
              function () {

              }
            ),
            new Ability( 
              'SHIT UMBRELLA',
              'PRD', 
              'CRUNCH',
              100, 
              'Producer takes damage for adjacent party members for a short time',
              function () {

              }
            ),
            new Ability( 
              'SCRUM',
              'PRD', 
              'CRUNCH', 
              100, 
              'Heal all party members',
              function () {

              }
            )
          ],
          animationMap: {
            'attack': new Animation(
              'attack',
              [ 'dev-sprite-prd-attack-1', 'dev-sprite-prd-attack-2', 'dev-sprite-prd-attack-3', 'dev-sprite-prd-attack-4', 'dev-sprite-prd-attack-5', 'dev-sprite-prd-attack-6', 'dev-sprite-prd-attack-7' ]
            ),
            'cast': new Animation(
              'cast',
              [ 'dev-sprite-prd-cast-1', 'dev-sprite-prd-cast-2' ]
            ),
            'cower': new Animation(
              'cower',
              [ 'dev-sprite-prd-cower-1' ]
            ),
            'dead': new Animation(
              'dead',
              [ 'dev-sprite-prd-dead-1' ]
            ),
            'flee': new Animation(
              'flee',
              [ '', '' ]
            ),
            'hurt': new Animation(
              'hurt',
              [ 'dev-sprite-prd-hurt-1' ]
            ),
            'idle': new Animation(
              'idle',
              [ 'dev-sprite-prd-idle-1 ' ]
            ),
            'win': new Animation(
              'win',
              [ 'dev-sprite-prd-win-1' ]
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
              'TEASER',
              'PR', 
              '', 
              100, 
              'Attack all enemies for a small amount of damage',
              function () {

              }
            ),
            new Ability( 
              '"REVIEWS"',
              'PR', 
              'TEASER', 
              100, 
              'Defend party against Critics',
              function () {

              }
            ),
            new Ability( 
              'CROWDFUNDING',
              'PR', 
              'TEASER', 
              100, 
              'Increases payout when Hardcores are in the sprint',
              function () {

              }
            )
          ],
          animationMap: {
            'attack': new Animation(
              'attack',
              [ 'dev-sprite-pr-attack-1', 'dev-sprite-pr-attack-2', 'dev-sprite-pr-attack-3', 'dev-sprite-pr-attack-4', 'dev-sprite-pr-attack-5', 'dev-sprite-pr-attack-6', 'dev-sprite-pr-attack-7' ]
            ),
            'cast': new Animation(
              'cast',
              [ 'dev-sprite-pr-cast-1', 'dev-sprite-pr-cast-2' ]
            ),
            'cower': new Animation(
              'cower',
              [ 'dev-sprite-pr-cower-1' ]
            ),
            'dead': new Animation(
              'dead',
              [ 'dev-sprite-pr-dead-1' ]
            ),
            'flee': new Animation(
              'flee',
              [ '', '' ]
            ),
            'hurt': new Animation(
              'hurt',
              [ 'dev-sprite-pr-hurt-1' ]
            ),
            'idle': new Animation(
              'idle',
              [ 'dev-sprite-pr-idle-1' ]
            ),
            'win': new Animation(
              'win',
              [ 'dev-sprite-pr-win-1' ]
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
              'TEST PLAN',
              'QA', 
              '', 
              100, 
              'Defense to party against bugs',
              function () {

              }
            ),
            new Ability( 
              'DRM',
              'QA', 
              'TEST PLAN', 
              100, 
              'Damage to all enemies; Hardcore immune',
              function () {

              }
            ),
            new Ability( 
              'BREAKTHROUGH',
              'QA', 
              'TEST PLAN', 
              100, 
              'Decrease length of sprint by 1 month',
              function () {

              }
            )
          ],
          animationMap: {
            'attack': new Animation(
              'attack',
              [ 'dev-sprite-qa-attack-1', 'dev-sprite-qa-attack-2', 'dev-sprite-qa-attack-3', 'dev-sprite-qa-attack-4', 'dev-sprite-qa-attack-5', 'dev-sprite-qa-attack-6', 'dev-sprite-qa-attack-7' ]
            ),
            'cast': new Animation(
              'cast',
              [ 'dev-sprite-qa-cast-1' ]
            ),
            'cower': new Animation(
              'cower',
              [ 'dev-sprite-qa-cower-1' ]
            ),
            'dead': new Animation(
              'dead',
              [ 'dev-sprite-qa-dead-1' ]
            ),
            'flee': new Animation(
              'flee',
              [ '', '' ]
            ),
            'hurt': new Animation(
              'hurt',
              [ 'dev-sprite-qa-hurt-1' ]
            ),
            'idle': new Animation(
              'idle',
              [ 'dev-sprite-qa-idle-1' ]
            ),
            'win': new Animation(
              'win',
              [ 'dev-sprite-qa-win-1' ]
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