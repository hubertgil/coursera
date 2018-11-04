(function () {
'use strict';

angular.module('MenuApp')
.controller('MainCategoriesController', MainCategoriesController);


MainCategoriesController.$inject = ['MenuDataService', 'items'];
function MainCategoriesController(MenuDataService, items) {
  console.log(items)
  var mainlist = this;
  mainlist.items = items.data;
}

})();
