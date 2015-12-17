(function (){
  "use-strict";

  angular
    .module('GBStore', [
    'ngRoute',
  ])
  .config (function($routeProvider){
    $routeProvider
    .when('/', {
    templateUrl:"views/store.html",
    controller: 'StoreController as storeCtrl'
    })
    .when ('/item-view.html', {
      templateUrl: "views/item-view.html",
      controller: 'ItemController as itemCtrl'
    })
    .when ('/admin', {
      templateUrl: "views/admin.html",
      controller: 'AdminController as adminCtrl'
    })
    .when ('/cart.html', {
      templateUrl: "views/cart.html",
      controller: 'CartController as cartCtrl'
    })
    .when('/404',{
      templateUrl: 'views/404.html'
    })
    .otherwise({redirectTo:'/404'});
  });
})();
