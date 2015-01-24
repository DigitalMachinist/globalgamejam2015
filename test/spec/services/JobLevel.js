'use strict';

describe('Service: Joblevel', function () {

  // load the service's module
  beforeEach(module('Globalgamejam2015App'));

  // instantiate service
  var Joblevel;
  beforeEach(inject(function (_Joblevel_) {
    Joblevel = _Joblevel_;
  }));

  it('should do something', function () {
    expect(!!Joblevel).toBe(true);
  });

});
