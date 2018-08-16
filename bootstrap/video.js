videojs('my_video_1').ready(function(){
  var myPlayer = this, id = myPlayer.id();
  var aspectRatio = 264/640; 
  function resizeVideoJS(){
    var width = document.getElementById(id).parentElement.offsetWidth;
    myPlayer.width(width);
    //myPlayer.height( width * aspectRatio );
  }
  resizeVideoJS();
  window.onresize = resizeVideoJS; 
});

videojs('my_video_2').ready(function(){
  var myPlayer = this, id = myPlayer.id();
  var aspectRatio = 264/640; 
  function resizeVideoJS(){
    var width = document.getElementById(id).parentElement.offsetWidth;
    myPlayer.width(width);
    //myPlayer.height( width * aspectRatio );
  }
  resizeVideoJS();
  window.onresize = resizeVideoJS; 
});