(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://hgil-angularjs-course.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
