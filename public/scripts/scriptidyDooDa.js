console.log( 'ls' );

var myApp = angular.module( 'myApp', [] );

myApp.controller( 'poeDameron', [ '$scope', function( $scope ){
  console.log( 'NG' );

  $scope.addSong = function(){
    console.log( 'in addSong:', $scope.badSong );
  }; // end add song
}]); // end controller
