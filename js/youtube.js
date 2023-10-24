 // 2. This code loads the IFrame Player API code asynchronously.
 var tag = document.createElement('script');

 tag.src = "https://www.youtube.com/iframe_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

 // 3. This function creates an <iframe> (and YouTube player)
 //    after the API code downloads.
  var player;
 function onYouTubeIframeAPIReady() {
   player = new YT.Player('player', {
    //  height: '390',
    //  width: '640',
    // 최초 재생할 유튜브 영상 ID
     videoId: 'I2DN2lNXELw',
    //  변수의 약어 여러가지 변수를 재생하겠다.
     playerVars: {
      // 자동재생 유무
      autoplay: true,
      // 반복 재생 유무
      loop: true,
      playlist: 'I2DN2lNXELw',
      //  'playsinline': 1
     },
     events: {
      // target은 재생되고 있는 영상 그자체
      //영상이 준비되는 이벤트가 있을때 
      'onReady': function(event){
        event.target.mute() //음소거
       },
      //  'onStateChange': onPlayerStateChange
     }
   });
 }
