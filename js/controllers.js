'use strict';
/**
 * RETAILER LOYALTY ANDROID - Ctrl
 ********************************/
angular.module('controllers', [])

// master controller
.controller('masterCtrl', ['$scope','$location','$cookieStore', 
    function($scope, $location,$cookieStore) {
        // active path
        $scope.pathLink = function(route) {
            return route == $location.path();
        };
        // end active path

        $scope.pushMenu = function(){
            $scope.showNav = true;
        }
        $scope.closeMenu = function(){
            $scope.showNav = false;
        }

        $scope.goLink = function(link){
            $scope.showNav = false;
            if (link === 1) {
                $location.path('/Login');
            } else if (link === 2) {
                $location.path('/DashBoard');
            } else if (link === 3) {
                $location.path('/Notifications');
            } else if (link === 4) {
                $location.path('/MyInventory');
            } else if (link === 7) {
                $location.path('/EditProfile'); 
            } else if (link === 8) {
                $location.path('/Scanning');
            } else if (link === 9) {
                $location.path('/Filter');
            } else if (link === 10) {
                $location.path('/ScanningHistory');
            } else if (link === 11) {
                $location.path('/ProductDetail');
                location.reload();
            } else if (link === 12) {
                $location.path('/WriteInquiry');
            } else if (link === 13) {
                $location.path('/MyRetailers');
            } else if (link === 14) {
                $location.path('/RetailerDetail');
                location.reload();
            } else if (link === 15) {
                $location.path('/InquiryDetail');
                location.reload();
            } else if (link === 16) {
                $location.path('/Leaderboard');
            } else $location.path('/Splash');
        }

        
            $scope.inputType = 'password';
            // Hide & show password function
            $scope.hideShowPassword = function(){
                if ($scope.inputType == 'password'){
                    $scope.inputType = 'text';
                } else $scope.inputType = 'password';
            };

        // set and get Role
            getCookieValue();
            var user = "";
            var bindItem = "";
            var bindMember = "";
            function getCookieValue() {
                $scope.user = $cookieStore.get('role');
                $scope.bindItem = $cookieStore.get('bindSet');
                $scope.bindMember = $cookieStore.get('memberSet');
            }
            $scope.roles = function (id) {
                $cookieStore.put('role',id);
            }

            $scope.viewDetail = function(item) {
                $cookieStore.put('bindSet', item);
            }

            $scope.viewDetailUser = function(item) {
                $cookieStore.put('memberSet', item);
            }

        // mock up login
            $scope.errorLog = false;
            $scope.login = function () {
                if($scope.username == 'user' && $scope.password == '123') {                
                    $location.path('/DashBoard');
                    $cookieStore.put('role',1);
                    location.reload();
                } else if($scope.username == 'user2' && $scope.password == '123') {                
                    $location.path('/DashBoard');
                    $cookieStore.put('role',2);
                    location.reload();
                } else $scope.errorLog = true;
            }
        // end mock up login

    }
])

// splash controller
.controller('splashCtrl', ['$scope', '$location', '$timeout',
    function($scope, $location, $timeout) {

        $scope.counter = 0;
        var start;
        $scope.countUp = function() {
            start = $timeout(function() {
            $scope.counter++;   
            $scope.countUp(); 
                if ($scope.counter === 100) {
                    $scope.countUp = function() {
                        $scope.loadEnd = true;
                        $scope.counter = 100;
                    };
                }; 
            },  40);
        }
        $scope.countUp();
    }
])

// sign Up controller
.controller('signUpCtrl', ['$scope',
    function($scope) {

        $scope.signUp = function(id){
            $scope.startSignUp = true;
            if (id===1) {
                $scope.typeSign = "Retailer"
            } else if (id===2) {
                $scope.typeSign = "Agent"
            }
        }

        $scope.signUpCheck = function(){
            if ($scope.Username == null || $scope.Password == null ||  $scope.Repassword == null || 
                $scope.Nameofperson == null ||$scope.Retailername == null ||$scope.Address == null || $scope.RetailerID == null ) {
                $scope.empty = "*not empty";
                $scope.errorSignUp = true;
            } else  $scope.sucessSignUp = true;
        }

        $scope.reloadSignUp = function(){
            $scope.errorSignUp = false;
        }
        
    }
])

// dashboard controller
.controller('dasboardCtrl', ['$scope', 'DataService', '$timeout',
    function($scope, DataService, $timeout) {
        $scope.note = 3;
        $scope.moveClick =  function(){
            $scope.showMove = true;
        }
        $scope.doneClick = function(){
            $scope.showMove = false;
            $scope.addViewPP = false;
        }
        // data
        var dataPromise = DataService.query('DashBoard');
        dataPromise.then(function(data) {
            $scope.DashBoard = data;
            $scope.listDashBoard = data.listData;
            $scope.listDashBoard2 = data.listData2;            
        }, function(data) {});

        // count item model check
        $scope.$watch('listDashBoard', function(listDashBoard){
            $scope.count = 0;
            angular.forEach(listDashBoard, function(items){
                if(items.show){
                    $scope.count += 1;
                }
            })
             
        }, true);

        $scope.$watch('listDashBoard2', function(listDashBoard2){
            $scope.count2 = 0;
            angular.forEach(listDashBoard2, function(items){
                if(items.show){
                    $scope.count2 += 1;
                }
            })
             
        }, true);


          
    }
])

// my Inventory controller
.controller('myInventoryCtrl', ['$scope', 'DataService', '$timeout',
    function($scope, DataService, $timeout) {
        
        // data
        var dataPromise = DataService.query('MyInventory');
        dataPromise.then(function(data) {
            $scope.MyInventory = data;            
        }, function(data) {});

        $scope.softClick = function(){
            $scope.showSoft  = true;
        };

        $scope.swipe = function(){
            $scope.showSearch = true;
        };

        $scope.searchProduct = "";
        $scope.searchFC = function(){
            if ($scope.searchProduct.length>0) {
                $scope.searchOn = true;
            } else $scope.searchOn = false;
        };

    }
])

// my Retailers controller
.controller('myRetailersCtrl', ['$scope', 'DataService',
    function($scope, DataService) {
        
        // data
        var dataPromise = DataService.query('MyRetailers');
        dataPromise.then(function(data) {
            $scope.MyRetailers = data;
        }, function(data) {});

        $scope.labelChartWeek = ["Sun 1","Mon 2","Tue 3","Wed 4","Thu 5","Fri 6","Sat 7","Sun 8"],
        $scope.dataChartWeek = [
            [3, 5, 9, 13, 14, 16, 19, 14]
        ],
        $scope.labelChart = ["Jan","Fer","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
        $scope.dataChart = [
            [1, 3, 6, 8, 9, 12, 14, 15, 18, 22, 23, 25]
        ]

        $scope.swipeFC = function(){
            $scope.showTime  = true;
        }
        $scope.swipeEndFC = function(){
            $scope.showTime  = false;
        }

    }
])

// edit profile controller
.controller('editprofileCtrl', ['$scope',
    function($scope) {

        $scope.avatar = "i/img-avatar.jpg";
        $scope.Username ="jan_edoe";
        $scope.Password = "12345678";
        $scope.Repassword = "12345678";
        $scope.Nameofperson = "Jane Doe";
        $scope.Retailername = "Retailer Name";
        $scope.Address = "Lorem ipsum 9, New York";
        $scope.RetailerID = "#123456789";

        if ($scope.user === 2) {
            $scope.avatar = "i/img-avatar-member.jpg";
            $scope.Username ="John_Doe";
            $scope.Nameofperson = "John Doe";
            $scope.Address = "Lorem ipsum 2, New York";
        }          
    }
])

// scanning controller
.controller('scanningCtrl', ['$scope', 'DataService',
    function($scope, DataService) {
        // data
        var dataPromise = DataService.query('MyInventory');
        dataPromise.then(function(data) {
            $scope.MyInventory = data;            
        }, function(data) {});

    }
])

// notification controller
.controller('notificationCtrl', ['$scope', 'DataService',
    function($scope, DataService) {
        // data
        var dataPromise = DataService.query('Notifications');
        dataPromise.then(function(data) {
            $scope.Notifications = data;            
        }, function(data) {});

    }
])

// filter controller
.controller('filterCtrl', ['$scope',
    function($scope) {

        $scope.resetClick = function(){
            $scope.rangeMin = null;
            $scope.rangeMax = null;
            $scope.dateFrom = null;
            $scope.dateTo = null;
            $scope.key = null;
        }
        
    }
])

// Product Detail controller
.controller('productDetailCtrl', ['$scope',
    function($scope) {

        $scope.submitFB = function(){
            if ($scope.titleMail == null || $scope.textMail == null) {
                $scope.errorSubmit = true;
            } else $scope.succesSubmit = true;
        }
        
    }
])