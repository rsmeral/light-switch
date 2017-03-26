Pebble.addEventListener('ready', function (e) {
  var hueIP = '';// bridge IP
  var hueUser = '';// as per https://www.developers.meethue.com/documentation/getting-started
  var lightID = '1';// id from response of https://www.developers.meethue.com/documentation/lights-api#11_get_all_lights
  
  var getUrl = 'http://'+hueIP+'/api/'+hueUser+'/lights/'+lightID;
  var putUrl = 'http://'+hueIP+'/api/'+hueUser+'/lights/'+lightID+'/state';
  var getRequest = new XMLHttpRequest();
  getRequest.onload = function() {
    var state = JSON.parse(this.responseText).state.on;
    var putRequest = new XMLHttpRequest();
    putRequest.onload = function() {
      Pebble.sendAppMessage('{}');
    };
    putRequest.open('PUT', putUrl);
    putRequest.send('{"on":'+ !state+'}');
  };
  getRequest.open('GET', getUrl);
  getRequest.send();
});
