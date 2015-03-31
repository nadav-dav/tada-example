'use strict';

describe('Service: cat', function () {
  var Cat, weaponStub, spy;

  beforeEach(function () {
    module('catWarsApp');
    module('catWarsTestKit');
  });

  beforeEach(inject(function (_Cat_, _weaponStub_) {
    weaponStub = _weaponStub_;
    Cat = _Cat_;
    spy = jasmine.createSpy();
  }));

  it('should fire the weapon and' +
  'return a success status', function () {
    // given
    var cat = new Cat(weaponStub);

    // when
    cat.fireWeapon().then(spy);
    weaponStub.fire.returns('successfully shot a weapon');

    // then
    expect(spy).toHaveBeenCalledWith('Cat successfully shot a weapon');
  });

  it('should beg for food if cannot fire', function () {
    new Cat(weaponStub).fireWeapon().then(spy);
    weaponStub.fire.rejects('failed to shoot weapon, no ammo.');
    expect(spy).toHaveBeenCalledWith('Cat failed to shoot weapon, no ammo.');
  });

});
