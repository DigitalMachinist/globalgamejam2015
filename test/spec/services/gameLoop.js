'use strict';

describe('Service: Gameloop', function () {

  // load the service's module
  beforeEach(module('Globalgamejam2015App'));

  // instantiate service
  var Gameloop;
  beforeEach(inject(function (_Gameloop_) {
    Gameloop = _Gameloop_;
  }));

  it('should do something', function () {
    expect(!!Gameloop).toBe(true);
  });

});
