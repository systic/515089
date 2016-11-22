'use strict';
var app = angular.module('app', ['ngRoute', 'services', 'controllers', 'directives','ngCookies','readMore', 'ngTouch','swipe', 'angular-carousel','angular-sortable-view']);

/**
 * app config route
 ***************************/

app.config(['$routeProvider',
    function($routeProvider) {
        var path = 'views/';
        $routeProvider.
            when('/Splash', {
                templateUrl: path + 'Splash.html',
                controller: 'splashCtrl'
            }).
            when('/Login', {
                templateUrl: path + 'Login.html',
                controller: 'masterCtrl'
            }).
            when('/SignUp', {
                templateUrl: path + 'SignUp.html',
                controller: 'signUpCtrl'
            }).
            when('/DashBoard', {
                templateUrl: path + 'DashBoard.html',
                controller: 'dasboardCtrl'
            }).
            when('/MyInventory', {
                templateUrl: path + 'MyInventory.html',
                controller: 'myInventoryCtrl'
            }).
            when('/EditProfile', {
                templateUrl: path + 'EditProfile.html',
                controller: 'editprofileCtrl'
            }).
            when('/Scanning', {
                templateUrl: path + 'Scanning.html',
                controller: 'scanningCtrl'
            }).
            when('/ScanningHistory', {
                templateUrl: path + 'ScanningHistory.html',
                controller: 'scanningCtrl'
            }).
            when('/Filter', {
                templateUrl: path + 'Filter.html',
                controller: 'filterCtrl'
            }).
            when('/ProductDetail', {
                templateUrl: path + 'ProductDetail.html',
                controller: 'productDetailCtrl'
            }).
            when('/WriteInquiry', {
                templateUrl: path + 'WriteInquiry.html',
                controller: 'productDetailCtrl'
            }).
            when('/MyRetailers', {
                templateUrl: path + 'MyRetailers.html',
                controller: 'myRetailersCtrl'
            }).
            when('/RetailerDetail', {
                templateUrl: path + 'RetailerDetail.html',
                controller: 'myRetailersCtrl'
            }).
            when('/InquiryDetail', {
                templateUrl: path + 'InquiryDetail.html',
                controller: 'productDetailCtrl'
            }).
            when('/Notifications', {
                templateUrl: path + 'Notifications.html',
                controller: 'notificationCtrl'
            }).
            when('/Leaderboard', {
                templateUrl: path + 'Leaderboard.html',
                controller: 'myRetailersCtrl'
            }).
            otherwise({
                redirectTo: '/Splash',
            });
    }
]);
