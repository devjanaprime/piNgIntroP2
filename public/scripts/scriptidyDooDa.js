console.log( 'ls' );

var myApp = angular.module( 'myApp', [] );

var allSongs=[];

myApp.controller( 'poeDameron', [ '$scope', function( $scope ){
  console.log( 'NG' );

  $scope.addSong = function(){
    console.log( 'in addSong:', $scope.badSong );
    // can we put the bad song in an object?
    var newSong = {
      title: $scope.badSong,
      artist: $scope.badArtist
    }; // end new song
    // can we push the bad song object into our array?
    allSongs.push( newSong );
    console.log( 'allSongs:', allSongs );
  }; // end add song
}]); // end controller
