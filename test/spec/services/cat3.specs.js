'use strict';

describe('Service: cat', function () {
  var Cat, weaponMock, spy;

  beforeEach(function () {
    module('catWarsApp');
    module('catWarsTestKit');
  });

  beforeEach(inject(function (_Cat_, _weaponMock_) {
    weaponMock = _weaponMock_;
    Cat = _Cat_;
    spy = jasmine.createSpy();
  }));

  it('should fire the weapon and' +
  'return a success status', function () {
    // given
    var cat = new Cat(weaponMock);

    // when
    cat.fireWeapon().then(spy);
    weaponMock.fire.returns('successfully shot a weapon');

    // then
    expect(spy).toHaveBeenCalledWith('Cat successfully shot a weapon');
  });

  it('should beg for food if cannot fire', function () {
    new Cat(weaponMock).fireWeapon().then(spy);
    weaponMock.fire.rejects('failed to shoot weapon, no ammo.');
    expect(spy).toHaveBeenCalledWith('Cat failed to shoot weapon, no ammo.');
  });

});
