(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuyCtrl = this;

  toBuyCtrl.items = ShoppingListCheckOffService.getToByItems();

  toBuyCtrl.buy = function (idx) {
    ShoppingListCheckOffService.buy(idx);
  }


}



AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtCtrl = this;

  boughtCtrl.items = ShoppingListCheckOffService.getBoughtItems();


}


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var toBuyItems = [
       { name: "cookies", quantity: 10 },
       { name: "chips", quantity: 10 },
       { name: "sugar drinks", quantity: 5 },
       { name: "coffee", quantity: 2 },
       { name: "newspaper", quantity: 1 }

  ];

  var boughtItems = [];

  service.buy = function (idx) {
    var item = toBuyItems[idx];
    boughtItems.push(item);
    toBuyItems.splice(idx, 1);
  };


  service.getToByItems = function () {
    return toBuyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };
}

})();
