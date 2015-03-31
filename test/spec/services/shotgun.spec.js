'use strict';

describe('Service: bazooka', function () {

  beforeEach(function () {
    module('catWarsApp');
  });

  var shotgun;
  beforeEach(inject(function (Shotgun) {
    shotgun = new Shotgun();
  }));

  it('should successfully fire', inject(function ($timeout) {
    shotgun.fire().then(assertShotWasSuccessful);
    $timeout.flush();
  }));

  it('should fail after two successful shots', inject(function ($timeout) {
    shotgun.fire().then(assertShotWasSuccessful);
    shotgun.fire().then(assertShotWasSuccessful);
    shotgun.fire().catch(assertShotFailed);

    $timeout.flush();
  }));

  it('should reload', inject(function ($timeout) {
    shotgun.fire().then(assertShotWasSuccessful);
    shotgun.fire().then(assertShotWasSuccessful);
    shotgun.reload();
    shotgun.fire().then(assertShotWasSuccessful);

    $timeout.flush();
  }));

  function assertShotWasSuccessful(status) {
    expect(status).toEqual('successfully shot shotgun');
  }
  function assertShotFailed(status) {
    expect(status).toEqual('failed to shoot shotgun, no ammo.');
  }

});
