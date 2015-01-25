'use strict';

describe('Service: Enemydata', function () {

  // load the service's module
  beforeEach(module('Globalgamejam2015App'));

  // instantiate service
  var Enemydata;
  beforeEach(inject(function (_Enemydata_) {
    Enemydata = _Enemydata_;
  }));

  it('should do something', function () {
    expect(!!Enemydata).toBe(true);
  });

});
