'use strict';

angular.module('catWarsTestKit', ['tada'])
  .service('weaponStub', function (tadaUtils) {
    this.fire = tadaUtils.createAsyncFunc('fire');
    this.reload = tadaUtils.createFunc('reload');
  });
