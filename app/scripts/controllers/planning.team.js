'use strict';

angular
  .module( 'globalgamejam2015App' )
  .controller( 'PlanningTeamCtrl', function ( $scope, gameData, devsData, jobsData, $timeout ) {

    // Sidebar Event Handlers

    $scope.onDevFireClicked = function ( dev ) {
      if ( dev === $scope.selectedDev ) {
        $scope.selectedDev = null;
      }
      dev = null;
    };

    $scope.onDevClicked = function ( dev ) {
      $scope.selectedDev = dev;
    };

    $scope.onHireCardClicked = function ( index ) {
      hireIndex = index;
      $scope.cardState = 'hire';
    };

    $scope.onHireableDevHireClicked = function ( dev, index ) {
      var hireDev = devsData.hireableDevs[ index ];
      if ( gameData.game.spend$$$( hireDev.getHireCost() ) ) {
        devsData.devs[ hireIndex ] = hireDev;
        devsData.hireableDevs[ index ] = null;
      }
      $scope.cardState = 'team';
    };

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
    
    var hireIndex = 0;

    ( function init () {

      hireIndex = 0;
      $scope.devsData = devsData;
      $scope.gameData = gameData;
      $scope.jobsData = jobsData;
      $scope.selectedDev = null;
      $scope.state = 'team';

      $scope.devsData.devs[ 0 ] = devsData.getRandomDev( 1 );
      $scope.selectedDev = $scope.devsData.devs[ 0 ];
      $scope.selectedDev.gainXp( 2000 );

      console.log( $scope.selectedDev );

      $timeout( function () {
        $( '[data-toggle="popover"]' ).popover( { 
          trigger: 'hover', 
          placement: 'top' 
        } );
      }, 500 );

    } )();

  } );