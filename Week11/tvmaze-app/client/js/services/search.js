angular.module('MusicSearchSrvc', [])
    .factory('MusicSearchService', function($resource) {
        return {
            search: $resource('/api/search')
            // detail: ???
        }
    })