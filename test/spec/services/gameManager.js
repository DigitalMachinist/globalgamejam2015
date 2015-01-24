'use strict';

describe('Service: Gamemanager', function () {

  // load the service's module
  beforeEach(module('Globalgamejam2015App'));

  // instantiate service
  var Gamemanager;
  beforeEach(inject(function (_Gamemanager_) {
    Gamemanager = _Gamemanager_;
  }));

  it('should do something', function () {
    expect(!!Gamemanager).toBe(true);
  });

});
