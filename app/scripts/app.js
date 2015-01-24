'use strict';

angular.module( 'globalgamejam2015App', [
  'ngSanitize',
  'ui.router'
] )
.config( function ( $stateProvider, $urlRouterProvider ) {
  
  //delete $httpProvider.defaults.headers.common['X-Requested-With'];
  $urlRouterProvider.otherwise( '/' );
  $stateProvider.state( 'index', {
    url: '/',
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  } )
  .state( '/fight', {
    templateUrl: 'views/fight.html',
    controller: 'FightCtrl'
  } );

} );