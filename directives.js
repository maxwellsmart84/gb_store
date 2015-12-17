(function() {
  'use strict';

  angular
  .module('GBStore')
  .directive ('addToCart', function(){
    return {
      restrict: 'EA',
      templateUrl: 'views/addToCart.html',
      link: function (scope, element, attributes) {
        element.on('click', function(evt){
          evt.preventDefault;
          
        });
      }
    }
  })
}());
