'use strict';

describe('Controller: CancelledCtrl', function () {

  // load the controller's module
  beforeEach(module('globalgamejam2015App'));

  var CancelledCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CancelledCtrl = $controller('CancelledCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
