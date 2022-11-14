/*

https://www.youtube.com/watch?v=LvNMlHS1UVo&ab_channel=codedamn
video =document.createElement('video')
document.body.appendChild(video)
promise = window.navigator.mediaDevices.getDisplayMedia({audio: true, video: true})
promise.then(stream => video.srcObject = stream)
video.onloadedmetadata = ()=>{video.play();}
video.play()
*/


function captureVideo(tab) {
  chrome.desktopCapture.chooseDesktopMedia(['screen', 'window', 'audio'], tab,
  function(streamId) {
    debugger
    if (streamId) {
      var obj = {
        audio: {
          mandatory: {
            chromeMediaSource: 'desktop',
            chromeMediaSourceId: streamId
          }
        },
        video: {
          optional: [],
          mandatory: {
            chromeMediaSource: 'desktop',
            chromeMediaSourceId: streamId,
            maxWidth: 2560,
            maxHeight: 1440
          }
        }
      };

        window.navigator.mediaDevices.getUserMedia(obj).then(function(stream) {
          $streamVideo = stream;
          $timeStart = Date.now();
          var audio = stream.getAudioTracks()[0];
          var video = stream.getVideoTracks()[0];
          alert(JSON.stringify(audio))
          alert(JSON.stringify(video))
          if (micSound) {
            window.navigator.webkitGetUserMedia({
              audio: true
            }, function(s) {
              $streamAudio = s;
              audio = s.getAudioTracks()[0];
              captureUseNacl(audio, video);
            }, function(e) {
              chrome.tabs.create({
                url: 'mic.html'
              });
            })
          } else {
            captureUseNacl(audio, video);

            (function() {
              var v = document.createElement('video');
              document.body.appendChild(v);
              v.setAttribute('autoplay', '');
              v.addEventListener('canplay', function() {
                console.log('play video');
              }, false);
              v.src = window.URL.createObjectURL(stream);
              $streamElement = v;
            })()
          }
        }).catch(function(err) {
          alert(err)
          alert(JSON.stringify(err));
        });;
    }
  });
}

// https://stackoverflow.com/questions/34215937/getusermedia-not-supported-in-chrome
// chrome://flags/#unsafely-treat-insecure-origin-as-secure
async function getMedia(constraints) {
  let stream = null;

  try {
    stream = await navigator.mediaDevices.getUserMedia(constraints);
    /* use the stream */
  } catch (err) {
    /* handle the error */
  }
}


function handleVideoCapture(streamId, options){
  console.log(streamId, options);
  
}

function myCapture(tab){
    chrome.desktopCapture.chooseDesktopMedia(
      ['screen', 'window', 'audio'],
      tab,
      handleVideoCapture
    )
}
export {
  captureVideo,
  myCapture
}
