'use strict';

angular
  .module( 'globalgamejam2015App' )
  .controller( 'PlanningTeamCtrl', function ( $scope, gameData, devsData, jobsData, $timeout ) {

    // Sidebar Event Handlers
    $scope.onDevClicked = function ( dev ) {
      $scope.selectedDev = dev;
    };
    $scope.onDevBeginHireClicked = function ( dev ) {
      $scope.state = 'hire';
    };
    $scope.onDevConfirmFireClicked = function ( dev ) {
      var emptyDev = devsData.getEmptyDev();
      if ( dev === $scope.selectedDev ) {
        $scope.selectedDev = emptyDev;
      }
      dev = emptyDev;
    };
    $scope.onDevConfirmHireClicked = function ( dev ) {
      $scope.selectedDev = dev;
      if ( devsData.numDevs < 4 ) {
        devsData.devs[ devsData.numDevs++ ] = dev;
      }
      $scope.state = 'team';
    };

    // $scope.onHireableDevHireClicked = function ( dev, index ) {
    //   var hireDev = devsData.hireableDevs[ index ];
    //   if ( gameData.game.spend$$$( hireDev.getHireCost() ) ) {
    //     devsData.devs[ hireIndex ] = hireDev;
    //     devsData.hireableDevs[ index ] = null;
    //   }
    //   $scope.state = 'team';
    // };

    // Ability Web Event Handlers

    $scope.onAbilityClicked = function ( ability ) {
      if ( !$scope.selectedDev.hasAbility( ability.jobName, ability.name ) ) {
        if ( $scope.selectedDev.spendXp( ability.xpCost ) ) {
          levelUp( ability );
        }
      }
    };

    // Helpers

    $scope.isState = function ( cardState ) {
      return ( cardState === $scope.state2 );
    };

    function levelUp ( ability ) {
      var job = jobsData.jobsMap[ ability.jobName ];
      var found = false;
      for ( var i = 0; i < $scope.selectedDev.jobLevels.length; i++ ) {
        if ( ability.jobName === $scope.selectedDev.jobLevels.jobName ) {
          found = true;
          break;
        }
      }
      var jobLevel = ( found ) ? job.firstJobLevel : job.higherJobLevel;
      $scope.selectedDev.jobLevels.push( jobLevel );
      $scope.selectedDev.abilities.push( ability );
    }

    // Init

    var hireIndex;

    ( function init () {

      hireIndex = 0;
      $scope.devsData = devsData;
      $scope.gameData = gameData;
      $scope.jobsData = jobsData;
      $scope.selectedDev = $scope.devsData.devs[ 0 ];
      $scope.state = 'team';

      // Wait a moment to enable popovers or they don't work.
      $timeout( function () {
        $( '[data-toggle="popover"]' ).popover( { 
          trigger: 'hover', 
          placement: 'top' 
        } );
      }, 500 );

    } )();

  } );