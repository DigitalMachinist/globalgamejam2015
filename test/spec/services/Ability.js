'use strict';

describe('Service: Ability', function () {

  // load the service's module
  beforeEach(module('Globalgamejam2015App'));

  // instantiate service
  var Ability;
  beforeEach(inject(function (_Ability_) {
    Ability = _Ability_;
  }));

  it('should do something', function () {
    expect(!!Ability).toBe(true);
  });

});
