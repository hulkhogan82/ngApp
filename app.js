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
    $scope.firstName = "Michael";
    $scope.lastName = "Jackson";

    $scope.people = [{
        name: "John",
        id: "J"
      }, {
        name: "Paul",
        id: "P"
      }, {
        name: "George",
        id: "G"
      }, {
        name: "Ringo",
        id: "R"
      }];
      $scope.myObj = {
        person: $scope.people[1]
      };

      c.selectedContact = '';
      c.phones = [{
        type: 'businessPhone',
        value: '+1-201-201-2011'
      },{
        type: 'mobilePhone',
        value: '+1-202-202-2022'
      }];

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

    c.priceMatrixObj = {
        manual: {
            priceType: 'Manual',
            softwareGroup: 'Third Party',
            verbiage: 'Manual, Third Party'
        },
        manual2: {
            priceType: 'Manual2',
            softwareGroup: 'Third Party2',
            verbiage: 'Manual, Third Party2'
        },
        manual3: {
            priceType: 'Manual3',
            softwareGroup: 'Third Party3',
            verbiage: 'Manual, Third Party3'
        }
    };

    c.priceMatrixObj2 = {
        manual: 'manual',
        manual2: 'manual2',
        manual3: 'manual3'
    };
    
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