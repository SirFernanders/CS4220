angular
    .module('MusicSearchCtrl', [])
    .controller('MusicSearchController', function($scope, MusicSearchService) {

        $scope.searchArtist = () => {
            MusicSearchService.search.query({
                id:"",
                show: "&q="+$scope.artistname,
                type: "search?type=artist"
            }, (response) => {
                $scope.results = response;
                $scope.albums = null;
                console.log(response);

            })
        }

        $scope.searchAlbums = (id,name,image) => {
            MusicSearchService.search.query({
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