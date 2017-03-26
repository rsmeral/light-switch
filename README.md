# Light Switch
Simplest possible Pebble app for switching a Hue light on and off.

## Configure
In `src/pkjs/index.js`, set the Hue bridge IP, user ID, and the light ID.

```javascript
var hueIP = '';// bridge IP
var hueUser = '';// as per https://www.developers.meethue.com/documentation/getting-started
var lightID = '1';// id from response of https://www.developers.meethue.com/documentation/lights-api#11_get_all_lights
```

## Install
Load into CloudPebble, build, and install.
Set as a quick launch shortcut, for example for the back button.

## Use
Open the app to toggle light state.

The app exits immediately after switching the light.
