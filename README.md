SBUCodersGuild.github.io
========================

This is the repository for the site hosted at SBUCodersGuild.github.io

Join the discussion on ~~Gitter~~ [Slack!](https://stonybrookcs.slack.com/).  Make sure you sign up with your stonybrook.edu email address or else you'll have to ask [Rob](http://github.com/robxu9) for an invite.


### Build & run the site locally:
- Install [npm](http://www.npmjs.org)
```
npm install -g gulp
```
- Install [gulp](https://www.github.com/gulpjs/gulp/blob/master/docs/getting-started.md)
```
npm install --save-dev gulp
```
- Install gulp dependencies (see full list below)
- Follow instructions [here](https://www.github.com/gulpjs/gulp/blob/master/docs/getting-started.md) for running gulp
- To deploy a local HTTP server for development run this from the root directory of the project:
~~
```python
python -m SimpleHTTPServer
```
~~~
^ this will launch the site at 127.0.0.1:8000 by default

--------------------


Style Guide:
------------------------

#### Colors:
- Red: AA0000
- Red (accent): FF3C40
- Blue: 2C82BA
- Gray: AAAAAA
- White: FFFFFF

More info & preview on [kuler](https://kuler.adobe.com/SBU-Coders-Guild-color-theme-4137385/)

#### Fonts:
- 8bit headings: http://fonts.googleapis.com/css?family=Press+Start+2P
- Content: (needed -- roboto maybe?)


Gulp dependencies:
--------------------
#### Install:
```
npm install (module name)
```

#### Current modules:
- gulp-changed
- gulp-uglify
- gulp-sass
