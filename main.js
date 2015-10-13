/*
A simple node.js application intended to blink the onboard LED whenever a tweet regarding a specific topic is sent.
*/

// Variable
var HashtagToTrack = 'WeArePerfectDay2';

// Require
var mraa = require('mraa');
var env = require('./env');// Load Environment Variables, check env_example.js for more instructions
var Twitter = require('twitter');

// Setup
console.log('MRAA Version: ' + mraa.getVersion()); //write the mraa version to the Intel XDK console
var myOnboardLed = new mraa.Gpio(13); //LED hooked up to digital pin 13 (standard on edison)
myOnboardLed.dir(mraa.DIR_OUT); //set the gpio direction to output
var ledState = true; //Boolean to hold the state of Led

// Create new Twitter Client
var client = new Twitter({
  consumer_key: env.TWITTER_CONSUMER_KEY,
  consumer_secret: env.TWITTER_CONSUMER_SECRET,
  access_token_key: env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: env.TWITTER_ACCESS_TOKEN_SECRET
});

// Setup Twitter Stream
client.stream('statuses/filter', {track: HashtagToTrack}, function(stream) {
  console.log("Twitter Stream loaded. Looking for #"+HashtagToTrack);
  stream.on('data', function(tweet) {
myOnboardLed.write(ledState?1:0); //if ledState is true then write a '1' (high) otherwise write a '0' (low)
ledState = !ledState; //invert the ledState
setTimeout(function(){},100);//wait 100ms, then do nothing
});
  stream.on('error', function(error) {
    throw error;
  });
});
