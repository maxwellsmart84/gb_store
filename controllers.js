(function() {
  'use strict';

  angular
  .module('GBStore')
  .controller('StoreController', function(GBStoreService){
      var vm = this;
      GBStoreService.storeData().success(function(data){
      vm.products = data;
    });
    vm.addToCart = function (product){
      GBStoreService.addToCart(product).success(function(data){
      });
    };
  })
  .controller('ItemController', function (){

  })

  .controller('CartController', function(GBStoreService){
    var vm= this;
    GBStoreService.getCartData().success(function(data){
      console.log(data);
      vm.products= data;
    });
  })

  .controller('AdminController', function(GBStoreService){
    var vm = this;
    GBStoreService.storeData().success(function(data){
    vm.products = data;
    console.log("thingy", data);
    });
    vm.addToStore = function (product){
      GBStoreService.addToStore(product).success(function(data){
        console.log(data);
      });
    };
  });
}());
