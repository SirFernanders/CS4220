angular
    .module('TVMazeCtrl', [])
    .controller('TVMazeController', function($scope, TVMazeService) {

        $scope.searchShow = () => {
            TVMazeService.search.query({
                id:"",
                show: "&q="+$scope.showname,
                type: "search?type=artist"
            }, (response) => {
                $scope.results = response;
                $scope.albums = null;
                console.log(response);

            })
        }

        $scope.searchAlbums = (id,name,image) => {
            TVMazeService.search.query({
                id: "/artists/"+id,
                show: "",
                type: "albums?album_type=album&market=US"
            }, (response) => {
                $scope.artistinfo = {name:name,url:image};
                $scope.albums = response;
                $scope.results = null;
                console.log(response);


            })
        }

    })