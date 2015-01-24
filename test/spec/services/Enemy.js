'use strict';

describe('Service: Enemy', function () {

  // load the service's module
  beforeEach(module('Globalgamejam2015App'));

  // instantiate service
  var Enemy;
  beforeEach(inject(function (_Enemy_) {
    Enemy = _Enemy_;
  }));

  it('should do something', function () {
    expect(!!Enemy).toBe(true);
  });

});
