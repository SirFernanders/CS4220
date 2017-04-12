angular
    .module('app', ['ngRoute', 'ngResource', 'MidtermCtrl','SignUpCtrl' ])
    .config(['$locationProvider', function($locationProvider) {
        $locationProvider.hashPrefix('')
    }])
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MidtermControl'
            })
            .when("/signup",{
                templateUrl: 'views/sign_up.html',
                controller: 'SignUpControl'
            })

    }]);

