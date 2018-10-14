(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunch = "";
  $scope.message = "";


  $scope.check = function () {
    //do NOT consider and empty item, i.e., , , as an item towards to the count
    if($scope.lunch ) {
        var length = $scope.lunch.split(",").filter(function(item) { return item.trim().length != 0; } ).length;
        if(length <=3 ) {
            $scope.message = "Enjoy!";
        } else {
            $scope.message = "Too much!";
        }
    } else {
        $scope.message = "Please enter data first";
    }

  };
}

})();
