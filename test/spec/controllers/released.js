'use strict';

describe('Controller: ReleasedCtrl', function () {

  // load the controller's module
  beforeEach(module('globalgamejam2015App'));

  var ReleasedCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReleasedCtrl = $controller('ReleasedCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
