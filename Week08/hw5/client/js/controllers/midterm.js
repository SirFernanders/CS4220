angular
    .module('MidtermCtrl', [])
    .controller('MidtermControl', function($scope, $location) {

        $scope.signUp = (path)=>{
            $location.path( path );
        }

    });