'use strict';

angular.module('globalgamejam2015App')
  .directive('planning.build', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the planning.build directive');
      }
    };
  });
