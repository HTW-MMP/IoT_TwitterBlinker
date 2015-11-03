# TwitterBlinker

Very simple getting started node.js project for the intel edison. Internal LED blinks everytime a tweet about a specific topic is posted.

## Prerequisites

Make sure that the mraa package is installed globaly (should be a default setting on every Intel Edison).

## Installation

1. Copy files into your Intel XDK Project
2. Adjust env_example.js with your own credentials (see next chapter on how to get them)
3. Rename env_example.js to env.js
4. Change HashtagToTrack to whatever is trending right now
5. Deploy to Intel Edison
6. Disco!

## Twitter credentials
1. Create Twitter Account
2. Go to https://apps.twitter.com
3. Create new app
  - use http://localhost.home as your domain
4. Go to tab "Key and Access Tokens"
5. Create my access Tokens
6. You now have all the tokens you need
