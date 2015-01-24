'use strict';

describe('Directive: sprite', function () {

  // load the directive's module
  beforeEach(module('globalgamejam2015App'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<sprite></sprite>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the sprite directive');
  }));
});
