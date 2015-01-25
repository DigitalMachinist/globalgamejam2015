'use strict';

describe('Service: Enemyjobdata', function () {

  // load the service's module
  beforeEach(module('Globalgamejam2015App'));

  // instantiate service
  var Enemyjobdata;
  beforeEach(inject(function (_Enemyjobdata_) {
    Enemyjobdata = _Enemyjobdata_;
  }));

  it('should do something', function () {
    expect(!!Enemyjobdata).toBe(true);
  });

});
