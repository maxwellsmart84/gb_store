(function() {
  'use strict';
  angular
  .module ('GBStore')
  .factory('GBStoreService', function ($http){
    var shoppingData = "./store-data.json";
    var url = "https://tiny-tiny.herokuapp.com/collections/gbstore";
    var cartUrl = "https://tiny-tiny.herokuapp.com/collections/gbstorecart";
    var getStoreData = function (){
      return $http.get(url);
    };
    var addToStore = function (product){
      return $http.post(url, product);
    };
    var addToCart = function (product){
      return $http.post(cartUrl, product);
    };
    var getCartData =function (product){
      return $http.get(cartUrl);
    };
    return {
      storeData: getStoreData,
      addToStore : addToStore,
      addToCart: addToCart,
      getCartData: getCartData
    };
  });




}());
