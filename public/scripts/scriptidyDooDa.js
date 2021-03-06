console.log( 'ls' );

var myApp = angular.module( 'myApp', [] );

myApp.controller( 'poeDameron', [ '$scope', '$http', function( $scope, $http ){
  $scope.allSongs=[];
  $scope.addSong = function(){
    console.log( 'in addSong:', $scope.badSong );
    // can we put the bad song in an object?
    var newSong = {
      title: $scope.badSong,
      artist: $scope.badArtist
    }; // end new song
    // test send via http to post route
    $http({
      method: 'POST',
      url: '/testPost',
      data: newSong
    }).then(function( response ){
    })
    // can we push the bad song object into our array?
    $scope.allSongs.push( newSong );
    console.log( 'allSongs:', $scope.allSongs );
  }; // end add song
}]); // end controller
