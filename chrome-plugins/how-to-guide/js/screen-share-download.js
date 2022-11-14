// https://www.educative.io/answers/how-to-create-a-screen-recorder-in-javascript
// https://developer.mozilla.org/en-US/docs/Web/API/MediaStream_Recording_API
// https://www.geeksforgeeks.org/screen-recording-with-mic-audio-using-javascript/

var outputFile;
function screenShareDownload() {
  let stream;
  const recordedChunks = [];
  let promise = window.navigator.mediaDevices.getDisplayMedia({
    audio: true,
    video: true
  }).then(async (e) => {
    let audio = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: false
    })
    let combine = new MediaStream([...e.getTracks(), ...audio.getTracks()])
    recordStream(combine);
  })
  function recordStream(stream) {
    console.log(stream);
    const options = {
      mimeType: "video/webm; codecs=vp9"
    };
    const mediaRecorder = new MediaRecorder(stream, options);

    mediaRecorder.ondataavailable = handleDataAvailable;
    mediaRecorder.start();

    // demo: to download after 9sec
    setTimeout((event) => {
      console.log("stopping");
      mediaRecorder.stop();
    }, 9000);
  }

  function handleDataAvailable(event) {
    console.log("data-available");
    if (event.data.size > 0) {
      recordedChunks.push(event.data);
      console.log(recordedChunks);
      // upload();
      download();
    } else {
      //
    }
  }

  function upload() {
    const blob = new Blob(recordedChunks, {
      type: "video/webm"
    });
    var file = new File([blob], "sample");

    const metadata = {
      "name": "sample",
      "mimeType": "application/vnd.google-apps.video",
      "parents": ['root']
    };

    const formData = new FormData();
    formData.append('metadata', new Blob([JSON.stringify(metadata)], {
      type: 'application/json'
    }));
    formData.append('file', file);
    fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart', {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ya29.a0Aa4xrXNc6fB4De6RoCTE8seLMgKzwgTIuz-4euoOqNBKhpbxPfs7pOKuwEgcMYBF0T-MBCEvTrkOmjmmL_qiUJk7jILUszFI7FCdM5OtFlTvzrwnPWNPduz2ct1pmBnV4rQhum6hv6hD6EMQjGeRHRIiTWs6aCgYKATASARESFQEjDvL9W92R-XgMBfRNk5cA2d_FKw0163'
        }
      }).then((response) => response.json())
      .then((result) => {
        console.log('Success:', result);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  function download() {
    const blob = new Blob(recordedChunks, {
      type: "video/webm"
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    a.href = url;
    a.download = "test.webm";
    a.click();
    window.URL.revokeObjectURL(url);

    outputFile = new File([blob], "name");
  }

}