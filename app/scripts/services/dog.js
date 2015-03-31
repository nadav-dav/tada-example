'use strict';

(function () {

  /* @ngInject */
  function dogFactory() {
    function Dog(weapon) {
      this.fireWeapon = function () {
        return weapon.fire().then(function (weaponSuccessStatus) {
          return 'Dog ' + weaponSuccessStatus;
        }, function (weaponFailedStatus) {
          return 'Dog ' + weaponFailedStatus;
        });
      };
    }

    return Dog;
  }

  angular
    .module('catWarsApp')
    .factory('Dog', dogFactory);

})();
