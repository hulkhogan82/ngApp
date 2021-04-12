'use strict'

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function () {
    document.body.classList.toggle('dark-theme')
    var className = document.body.className;
    if (className == "light-theme") {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }
    console.log('current class name: ' + className);
});

var myApp = angular.module("myApp", []);
myApp.controller("myCtrl", function ($scope) {
    var c = this;
    c.testName = 'Mogambo';
    $scope.firstName = "Atul";
    $scope.lastName = "Mahajan";
    c.priceMatrix = [{
        priceType: 'Manual',
        softwareGroup: 'Third Party',
        verbiage: 'Manual, Third Party'
    },{
        priceType: 'Manual2',
        softwareGroup: 'Third Party2',
        verbiage: 'Manual, Third Party2'
    },{
        priceType: 'Manual3',
        softwareGroup: 'Third Party3',
        verbiage: 'Manual, Third Party3'
    }];

    function checkVerbiage(v){
        return (v.priceType === 'Manual2' && v.softwareGroup === 'Third Party2');
    }

    var ver = c.priceMatrix.find(checkVerbiage);
    if (ver)
    c.verbiage = 'ABC ' + ver.verbiage;
});

myApp.directive("myHtmlDirective", function() {
    return {
      template : "I am coming from Directive."
    };
  });