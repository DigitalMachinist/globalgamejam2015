'use strict';

describe('Service: Enemyjob', function () {

  // load the service's module
  beforeEach(module('Globalgamejam2015App'));

  // instantiate service
  var Enemyjob;
  beforeEach(inject(function (_Enemyjob_) {
    Enemyjob = _Enemyjob_;
  }));

  it('should do something', function () {
    expect(!!Enemyjob).toBe(true);
  });

});
