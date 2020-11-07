angular
    .module("demoApp")
    .controller('DominoController', DominoController);

function DominoController($scope) {
    $scope.message = "Test message";
    $scope.numberPattern = 7;
    $scope.getNumberPattern = function(numberPattern) {
        return new Array(numberPattern);   
    }

    $scope.reverseDomino = function() {
        console.log('backward');
    }

    $scope.newDomino = function() {
        var newEle = angular.element("<div class='new-domino'>Test</div>");
        var target = document.getElementById('newDominoPiece');
        angular.element(target).append(newEle);
    }

    $scope.forwardDomino = function() {
        console.log('forward');
    }
}