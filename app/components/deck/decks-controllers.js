'use strict';

var url = 'https://sizzling-heat-3015.firebaseio.com/deckbuilder.json';

angular.module('myApp.decks.getDecks', [])

.controller('allDecks', ['$scope', '$http', function ($scope, $http) {

    // request to get data from the api
    $http.get(url).success(function(data) {

        // set decks to be the data that comes back
        $scope.decks = data;

        // log the object
        console.log($scope.decks);

    });

}])

.controller('CreateDeck',  ['$scope', '$http', function ($scope, $http) {

        $scope.createDeck = function() {

            /* while compiling form , angular created this object */
            var data = $scope.deck;
            var deckInfo = {};

            // build deckInfo with data from the form
            deckInfo = {
                name: data.name,
                format: data.format,
                featuredCard: data.featuredCard,
                maindeck: [],
                sideboard: []
            }

            // split each new line into the array
            var cards = $scope.deck.cards.split("\n");
            // var cardsSideboard = $scope.deck.sbcards.split("\n");

            // go through each line and break apart card and number
            cards.map(function(line) {

                // remove any whitespace on the ends
                line = line.trim();

                // skip empty lines
                if (!line)
                    return false;

                // split card name and qty into seperate arrays
                var splat = line.split('x ');

                // set qty and name from the split array
                var card = {
                  qty: +splat[0],
                  name: splat[1]
                };

                // build the mainDeck array
                deckInfo.maindeck.push(card);

            });

/*            cardsSideboard.map(function(line) {
                // remove any whitespace on the ends
                line = line.trim();
                // skip empty lines
                if (!line)
                    return false;
                // split card name and qty into seperate arrays
                var splat = line.split('x ');
                // set qty and name from the split array
                var card = {
                  qty: +splat[0],
                  name: splat[1]
                };
                // build the mainDeck array
                deckInfo.sideboard.push(card);
            });*/

            // post deck to the api server
            console.log(deckInfo);
            $http.post(url, deckInfo);

        };

    }]);

