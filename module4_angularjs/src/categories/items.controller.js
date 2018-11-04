(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);


ItemsController.$inject = ['$stateParams', 'item'];
function ItemsController($stateParams, item) {
  var itemDetail = this;

    console.log(item.data.category.name);
    itemDetail.category = item.data.category.name;
    itemDetail.menuItems = item.data.menu_items;
    console.log(item);
}

})();
