'use strict';

angular.module('catWarsTestKit', ['tada'])
  .service('weaponMock', function (tadaUtils) {
    this.fire = tadaUtils.createAsyncFunc('fire');
    this.reload = tadaUtils.createFunc('reload');
  });
