[![Build Status](https://travis-ci.org/dakom/html5-boilerplate.svg?branch=master)](https://travis-ci.org/dakom/html5-boilerplate)

# DEPRECATED - WEB TECH MOVES FAST AND MODERN WEBPACK ETC. IS MUCH BETTER (or at least I got used to it)!

_note: - there is a simplified barebones version available on the [barebones branch](https://github.com/dakom/html5-boilerplate/tree/barebones). For most projects that's really the better starting point_

_For use with React, start with [this branch](https://github.com/dakom/html5-boilerplate/tree/react)_

# Project Sample
![Demo Screenshot](/screenshots/Demo.png?raw=true "Demo Screenshot")

Check the [Live Demo Link](https://dakom.github.io/html5-boilerplate) or scroll down to get more info.

# Boilerplate Checklist

Html5 Boilerplate with the following features:

* [x] Easy, consolidated configuration

* [x] Typescript: _transpiles to es5, byebye babel!_

* [x] Npm: _the only taskrunner we need, goodbye gulp!_

* [x] Webpack: _concise per-target bundling_

* [x] Local servers for all occasions: _dev, tests, static, dist_

* [x] Correct error reporting of line numbers and file references: _console, web, tests_ (see [caveat](#running-tests))

* [x] Sane external data pipeline: _cdn vs. same-server vs. imported vs. remote, within dev vs. prod vs. test environments_

* [x] Best practices for working with external libraries: _typescript helpers in all kinds of scenarios_

* [x] Run tests with live reporting, fast auto reloading, and simultaneous in-browser view

* [x] Run tests against proper distribution build: _no missing step from ci to live, can be extended to other scenarios_

* [x] Media transcoding utility: _solves all the browser inconsistencies and licensing issues, e.g. Chromium's lack of mp4/h264 support, firefox relying on os support, etc._

* [x] Protobuf compilation utility: _uses protobuf.js cli tools to generate native modules with typescript definitions_

* [x] Html templates

* [x] Simplified mobile packaging w/ cordova: _one command_

* [x] Web Workers: _via separate entry points and with data transfer_

* [x] Distribution works w/ static host: _Netlify, Github pages, etc._

* [x] Sample helpers for using cloud storage: _cors setup, sync script, etc._

# Screenshots of Development Scenarios

![Line numbers in dev](/screenshots/LineNumbers.png?raw=true "Line numbers for dev")

![Line numbers in ci/dist test](/screenshots/LineNumbersDist.png?raw=true "Line numbers for dist/ci")

![Tests in dev mode](/screenshots/Tests.png?raw=true "Tests in dev mode")

# Demo Checklist

This [demo](https://dakom.github.io/html5-boilerplate) aims to highlight several issues which would be common to html5 games or really any multimedia webgl project. It's not really part of the boilerplate and the demo code itself would typically be copy/pasted/refactored rather than imported into a different project - but it serves as a very useful reference (as well as a real-world test case).

It's build around different layers which can be toggled independently via an interactive menu and includes the following solutions:

1. ### Generic
    * [x] Scale to fit screen
    * [x] Uses Protocol Buffers with generated classes and typescript definitions
        * [x] Autocomplete works in IDE
        * [x] Utility to validate user data against protocol buffer
    * [x] Various tests
        * [x] Unit tests
        * [x] Runtime tests against game state
    * [x] Various methods to work with external libraries

2. ### Loaders
    * [x] Leverages PIXI loader to handle all kinds of media
    * [x] Mixed sources (remote + local)

3. ### Menu / UI
    * [x] Loads graphics via spritesheet
    * [x] Tinting of white graphics to arbitrary color
    * [x] Styled text

4. ### Character
    * [x] Loads media via spritesheet
    * [x] Bounces sprite around according to delta time smoothing
    * [x] Custom shader and filter for effect
        * [x] Changes values at runtime
    * [x] Plays audio oneoff (with bounce effect)
    * [x] High framerate

5. ### Worker  
    * [x] Uses settings from app.config.json
    * [x] Automatically ramps up/down to target fps (increases/decreases iterations to stay within target)
    * [x] While the worker is super slow (on purpose) it does not affect the core fps at all (other than the repaint which happens on core)
    * [x] Demonstrates passing data back and forth via Transferable ArrayBuffer
    * [x] Plays background music on a loop
    
6. ### Video
    * [x] Uses PIXI.JS VideoTexture
        * [x] Rendered via native HTML5 Video element
        * [x] Assumed HW acceleration where possible and inherent multithreading

There are a few intentional quirks with the demo that typically wouldn't exist in a real project. A couple gotcha's to pay particular attention to are:

1. Video loading is not from CDN but rather from the `static/dist-include/video` folder. This is due to a number of issues that resulted from loading via rawgit (security, mimetype, etc.). Loading it via a local folder rather than hosting on a proper streaming server simply made more sense for the purposes of this demo. Also it is set to mute in order to simplify bypassing more security restrictions.

2. (mobile only, esp. cordova) Fractal generation takes forever before something is visible. Not sure why it's so much slower on cordova, but in either case actual number crunching like this would be handled differently to give ui updates till it's ready, offload to native plugin, etc. 

# Project Motivation

You're hungry and the only thing that can satisfy your craving is a grilled cheese sandwhich. 

No biggie - you've done it before, just takes a few minutes and grabbing some local goods. Figure you'll hop down to the supermarket and get what you need. Shouldn't take long, it's just some bread, butter, cheese, and spices. Maybe a new pan if you're feeling fancy. 

Only, once you're at the super it turns out that everything's changed and nothing is what it was. "What's cheese?", they say. Bread is foreign, closest thing is raw grain with water already mixed in. They know all about the supply chain and mean well, so kindly enough, you're directed elsewhere to nearby establishments which superficially compare with the target cuisine... crackers with cheese substitute, a tofu sandwhich... but it ain't what you need.

So you scavenge foreign lands, finding masters with broad shoulders. They know the problem well and no longer fear such a journey. They will show you the way. After many gruelling years, you've learned to harvest and prepare wheat. A herd of goats has joined your ranks and is producing quality milk. The local blacksmith has taught you to forge a robust pan weighted precisely to your wrist capabilities and sandwhich fliping aptitude. You're ready.

The first attempts leave a soggy mess. Sure it tides you over, but you're not there yet. After copius amounts of blood, sweat and tears, you have mastered the craft and produced - a Grilled Cheese Sandwhich! Yet after much fanfare and celebration, you must admit it's just ok. Alright, some of it is exceptionally tasty - there's nothing better than fresh goat cheese raised by your own hands, but let's not kid ourselves, it's just not as good as the commercially produced solution you had before the supermarket went insane.

That's what it's like building simple casual games for the browser when you're coming from Flash, Unity, SDL, Qt etc[*]... Some stuff works fine (modern js/ts), some stuff is a true pleasure (npm), but the most basic preliminary boilerplate to get a project started is an absolute nightmare.

I'm not sure what the browser-ecosystem people are smoking, but the situation is utterly ridiculous and backwards. 

_The emperor has no clothes._

# Practically speaking

I needed to build a new cross-platform html5-game type project. Yet, to my shock and horror, almost none of the core boilerplate (which comes automatically with Unity for example) is handled out of the box in the js ecosystem- no matter the IDE. Some projects like Neutrino JS make an attempt - but it's still a matter of putting together all the disparate parts to form a coherent system and once you're already down that rabbit hole, you need manual control to tie it all together.

The details of all those boilerplate needs are really standard, but it took a maddening amount of tinkering to get it working across all the project requirements.

This would be the place to give examples of all that... but by the time I explain it, odds are they'll be solved and a whole new set of bugs will pop up. Bottom line is that many things look good on paper but break in reality.

Don't want to deal with that infuriating and utterly needless pain again - so here's a starter boilerplate ;)

The specific example is built around the needs for a html5 game, though many parts of that could apply for other similar setups, with slight tweaks. It also includes a basic cordova setup to package for native apps (which could easily be extended to electron for desktop.) See the [checklist](#description) above for the most prominent features and [commands](#commands) below to dive in deeper.

# Getting Started

`npm install`

You may need to install some global binaries too:

`sudo npm install -g typescript`

(protobuf compilation only) `sudo npm install -g protobufjs`

(media transcoding only) lame, ffmpeg

(cordova only) `sudo npm install -g cordova`

(google cloud storage only) install gsutil

etc.

# Configuration

1. Set core configuration settings in `common.config.js`. See the comments there for detailed info (e.g. external libs, worker entry points, excludes, etc.)

2. Edit package.json `_localstatic` and `_localcdn` directives to match `localFolders` in common.config.js

3. Design `html-templates/index.template.ejs` as needed (change title, add stuff, etc.) - this corresponds to the final index.html and what you'll see in `dev` mode

4. Similarly for `html-templates/mocha.template.ejs`. This is only used for `dev:test` mode, the idea being that you see test results alongside the live webpage (for example - you could add in popup windows with more info, access the mocha stats from the generated code, etc.)

5. (cordova only) see [Cordova specific notes](#codorva-specific-notes) below

6. (cloud storage only) see [Cloud storage notes](#cloud-storage-notes) below

7. (optional) - for github pages deployment, which this branch currently does but the barebones branch does not, simply set the GITHUB_TOKEN environment variable. See https://docs.travis-ci.com/user/deployment/pages/ for more info

# Basic Workflow

After the basic [configuration](#configuration) is setup, you can run the various [commands](#commands). A typical workflow looks like:

* General development: `npm run dev`
* Development with live tests: `npm run test:dev`
* Quick check against distribution build: `npm run test:dist`
    * alternatively, more realistic test against distribution build (assumes cdn files exist on remote): `npm run test:dist:production`
* Commit and push repo (will run tests on Travis CI if enabled)
* Build distribution for uploading: `npm run build:dist`
* Upload the `dist` folder (or check it against a local static server w/ `npm run dist:server`)

Once the site is working you'd package to mobile via `npm run build:mobile:[platform]:[release / debug / xcode]`.

All of that while simultaneously while editing static files, transcoding media, and changing runtime configuration in the local static asset folders

Keep reading for more info...

# Running Tests

There are two different testing modes: distribution and development

Distribution mode is meant for testing against the actual distribution build. It is currently used for CI and loads the distribution/webpack bundle output within karma- but could also be used against other frameworks (i.e. based on Selenium) since the packaging itself is a previous step. If you plan to change the internal setup - note that there are gotchas as of this writing, and it's probably best not to fix what ain't broken (for example- changing the karma-launcher to something other than Chrome breaks the line reporting for some reason).

There is a bit of a sub-case of testing the distribution package but with the local static server for cdn files. This helps with cache issues and preflighting tests more quickly before a real commit/push. As noted [below](#static-files), _remote_ and _cdn_ here are two different things - if you want the _remote_ external libs to load locally, change the "DEV_REMOTE_IS_LOCAL" setting in the common configuration.

Development mode is meant for quick iterations and seeing live reporting as changes are saved. It uses mocha test reporting _within_ webpack-dev-server, and that setup required source maps be set to "eval" which leads to _slightly_ off line numbers (but still within the same block). Retranspilation times are very fast in this mode and it works in your browser of choice - as well as seeing test results alongside the live view webpage (without needing to hit additional buttons, and with the ability to easily customize the html template). 

For both cases- all the tests base around the entry point of src/tests/TestInit.ts and can use all the goodies of runtime code to test everything, including configuration settings or game state situations. Take a look at src/tests/game/GameTester.ts for example (it will fail if configuration hasn't been loaded as well as if it doesn't pass a sanity check)

# External Libraries

Generally speaking, the right place to put external libraries is *always* going to be in the `cdn` or `remote` folders.

Although it's tempting to concat all external libs into one file, it may not always be the best approach since each update would invalidate the whole and then the external libs which were not touched would unnecessarily lose their cache. For this reason, they are not processed here at all other than copying as-is for distribution.

For the sake of this demo and to test different scenarios, lots of different approaches to included are taken, with the aim to demonstrate best-practices:

**1. External vanilla js with no types and loaded only through html**

Since these libraries have no types, and are only loaded externally, they must be treated as generic _any_ objects and cast as such at runtime. One example here is using pix-sound _only_ through html inclusion:

https://github.com/dakom/html5-boilerplate/blob/master/src/app/game/layers/Worker/WorkerManager.ts#L10

https://github.com/dakom/html5-boilerplate/blob/master/src/app/game/layers/Worker/WorkerManager.ts#L20

A similar example is the Modernizr build:

https://github.com/dakom/html5-boilerplate/blob/master/src/app/core/utils/Path.ts#L12

 
**2. External js loaded only through html, but with types available if it _were_ loaded via the npm package.**

Since the included js is not detected by webpack/tsc/etc during development, the package is imported in order for tsc to pick it up and give us all the goodies. However, since we only want to actually use the js included via html and not the imported js (since it would be redundant), we need to tell webpack to exclude it from the bundle. 

Protobuf.js is an example of this:

https://github.com/dakom/html5-boilerplate/blob/master/src/app/game/assets/AssetManager.ts#L4

The html inclusion is set like others in common.config.js, and the exclusion is set there too: https://github.com/dakom/html5-boilerplate/blob/master/common.config.js#L97


**3. External js loaded only through html, and a separate @types package installed.**

tsc will pickup the @types package and give all the runtime goodies even though the library package itself is never imported

PIXI.js is an example of this.
 
**4. Code with type definitions and imported into the actual bundle.**

The generated proto.js and proto.d.ts files are an example of this.

e.g. imported here: https://github.com/dakom/html5-boilerplate/blob/master/src/app/game/GameController.ts#L9

and used here: https://github.com/dakom/html5-boilerplate/blob/master/src/app/game/GameController.ts#L21 / https://github.com/dakom/html5-boilerplate/blob/master/src/app/game/GameController.ts#L31 etc.

# Static files

There are four basic types of external/static files in a typical project, and so they are handled differently:

REMOTE/THIRD PARTY: loaded from outside providers over the internet only (e.g. via html includes, runtime fetch, etc.). The local version of it will only be used if in development mode and `DEV_REMOTE_IS_LOCAL` is set to true. In that case, the path must match the remote path starting with the url

CDN: Hosted via a project-specific cdn provider and requiring ability to develop locally. These files do _not_ get built into `dist/`. In a real-world scenario they'd be sitting locally somewhere on Dropbox (for example) and pushed to a cdn somewhere for production, via some sort of rsync tool, and whether or not they get checked into the repo would depend on project scope.  Use case could include media like video, graphics, sounds, etc.

MEDIA SOURCE - Similar to CDN, but at a stage before and not actually loaded by the project at all - only used by the transcoding tool. Typically these would be very large master files that get compressed down for distribution. It would usually not be checked into the repo, even on a small project, but it's here purely for the sake of completeness.

DIST-INCLUDE: these _are_ copied over into `dist/` upon building. The idea being that even though they are not bundled with the app, these files require immediate cache invalidation and can't risk becoming out of date via cdn. They don't go through any processing of any kind, however (not even bundling in webpack). Use case could include reusable ui components, json config, imported html, etc. Typically this would _not_ include code since it's an unnecessary extra call - code that you'd be tempted to put in here should usually just be bundled with the source via `import` statements.

For demo purposes here, the setup uses all these scenarios (mathjs and protobuf from third party/net, pixi from cdn folder, transcoding media, and pixi-sound from includes folder).

# Protocol Buffers

While there's no hard rule on how to use protocol buffers in js, the protobuf.js project seems to do a great job of following standards and so there's some tooling here to use it (and it's active in the demo)

### Compilation to JS classes

1. Edit the files in `proto-source/**/*.proto`
2. Use the `npm run proto:compile` command (this is not run automatically via a watcher). 

This will generate the js classes _with typescript definitions_ in the `src/protobufs-compiled` folder, which you can then import as usual. Generally you do not want to edit those generated classes since they'll be overriden on next compile. Since the `protobufs-compiled` folder does sit under the `src` folder, triggering a .proto compilation will automatically trigger webpack to detect the change and reload.

### Verification and Required Fields

Basic verification is done inherently with the protobuf.js `verify()` method, but it is probably too forgiving in real-world use due to proto3 dropping the _required_ attribute.

To verify that the actual loaded data is what it should be, e.g. that there are no empty values or that numbers are nonzero, a helper utility in `src/app/utils/ObjectUtils` could be used against the generated object. 

Take a look at `setConfig()` in `GameController.ts` for an example.

# Transcoding Media

This utility requires ffmpeg and lame be installed

The [transcode command](#transcode-media) will process media from a source folder (here `media-source` for demo purposes), _transcode_ it, and write the output into a destination folder (here `static/cdn` for demo purposes).

Note that for the demo, output video has been moved to the `static/dist-include/video` folder to avoid various video playback issues (see demo notes for more info)

Transcoding, in this sense, means the following:

1. *Audio:* create web-friendly audio in all the various formats (mp3, m4a, ogg) using lame and ffmpeg
2. *Video:* create web-friendly progressive video in all the various formats (mp4/webm/ogv) using ffmpeg
3. *Graphics:* copy over directly
4. *Config sidecar files* (e.g. spritesheet info): copy over directly, but only when basename matches existing media name)

The type of file is determined by extension and invalid files will simply be ignored. 

If the destination file already exists, it will be skipped. A large project would likely utilize this to supplement the destination with other media built from other packagers - for example DASH video content

It should be noted that while some formats are getting universal support (e.g. mp3), others are still problematic as of this writing (e.g. Chromium does not support mp4 with h264/aac)

# Media Playback

Along with transcoding and producing media- the web player needs to only load and attempt to play the correct content. The source code example here includes automatic path helpers in src/app/utils/Path.ts as well as a customized Modernizr build (included as an [External Library](#external-libraries)) to deal with that at runtime and should be considered part of the boilerplate, no matter how the media was transcoded and cdn is populated.

This demo is using PIXI-Sound which relies on the WebAudio Api and is not available on IE11. The author is working on a html5audio fallback (might already be working actually, haven't tested).

# Folder structure

These are explained in more depth elsewhere as well as in the `common.config.js` comments, but at a glance:

*src/*  - Source code
* *app/AppInit.ts* - main entry point (uses everything under app/)
* *tests/TestInit.ts* - entry point for tests (will use app/ as well as tests/)
* *workers/fractal/FractalWorkerInit.ts* - entry point for the fractal worker (only uses stuff in its folder)
* *protobufs-compiled* - auto-generated from the `proto-source` folder, generally do not touch

*html-templates/* - html templates for live project and test:dev

*media-source/* - See [Static Files](#static-files)

*_config/* - Used internally, no need to edit anything in there

*_npm-utils/* - Used internally, no need to edit anything in there

*cordova/* - The cordova project, other than configuring and adding icons you generally won't touch it

*screenshots/* - Just for the README

*cdn/* - See [Static Files](#static-files) 
*static/* - See [Static Files](#static-files)

*proto-source/* - .proto source files

There are some other folders which are generated and ignored by .gitignore (dist, build, etc.)

# Commands

## Dev

`npm run dev`

_Opens a dev server on http://localhost:3000_

_Also opens a local static file server on http://localhost:4000_

_Most work is done in this mode as it will auto reload/compile on save and you can see the work in the browser, get debug messages in the console, etc._

## Test - in development mode

`npm run test:dev`

_Similar to `npm run dev` but runs all the test specs and gives reports via the browser_

_Line numbers may not be perfectly accurate, but very close (see [above](#running-tests))_

## Test - in distribution mode (with local cdn server)

`npm run test:dist`

_Runs tests against a distribution build, but with local cdn server_

_Also opens a local static file server on http://localhost:4000_

## Test - in distribution mode (just like actual production build)

`npm run test:dist:production`

_Runs tests against a distribution build, works with constant integration services (see .travis.yml)_

_Requires that the remote cdn files be there just like a proper distribution build_

## Build (for distribution)

`npm run build:dist`

_Runs `clean` first_

_Creates final, minified and bundled output in `dist/` - including index.html and anything else in `static-includes`_

## Build (for mobile/cordova)

`npm run build:mobile:ios` or `npm run build:mobile:android:debug` `npm run build:mobile:android:release`

_Only tested on osx, though it should work on git shell, mingw, etc. on windows too (uses "cp" to copy files)_

_Runs `build:dist` first_

_Creates ipa/apk in the respective platform folder_

## Build (create ios xcode project only)

`build:mobile:ios:xcode`

_This is useful for simply creating the xcode project so you could open that and test locally, without pre-compiling the project_

## Transcode Media

`npm run transcode -- [all/audio/video/graphics] (dryrun)`

_Only tested on osx, though it should work on git shell, mingw, etc. on windows too (uses "cp" to copy files)_

_Transcodes media (see [above](#transcoding-media))._

_The space between -- and subsequent args is required_

_if dryrun is set, the destinations will only be listed_

## Compile Protocol Buffers

`npm run proto:compile`

_Uses protobuf.js to compile the source .proto files into modules with typescript definitions_

## Clean

`npm run clean`

_Deletes the dist, build, and coverage folders_

## Build (for webpack-only inspection)

`npm run build:webpack`

_Similar `build:dist` (and will overwrite those contents) but without production quality settings (i.e. no uglify) and won't copy static files_

_Generally not used, but useful for checking that external libs were properly excluded_

## Build (for typescript-only inspection)

`npm run build:tsc`

_Runs `clean` first_

_Not really used, but just in case deeper investigation is needed- will output the transpiled pre-webpack js as separate files in `build/`_

## Dist server (just for quick checks that the dist/ folder is okay)

`npm run dist:server`

_Runs a static server on http://localhost:5000_

_Does not clean or build anything since it's just for a check_

## Sync to cdn (if using google cloud as the origin)

`npm run cdn:sync:soft` or `npm run cdn:sync:hard`

_Relies on things being configured correctly and gsutil already existing on the system_

_Soft runs in rsync mode without deletion, Hard runs in rsync mode with deletion (be careful!)_

----
More helpers are available in package.json, and there are generally subcommands prefixed with `_` which can be run separately for more granular control

# Codorva specific notes

Only requires one-time setup:

1. Add ios and android platforms to the cordova project folder (it's not checked into the repo due to redundency)

2. Edit `cordova/config.xml` - change name, author contact, etc.

3. Edit `cordova/build.json` - change the Team ID (see cordova docs, though it's currently at https://developer.apple.com/account/#/membership/)

4. (iOS only) Get XCode to recognize your credentials. There are various ways to do this - easiest (imho) is as follows:
    * run any of the `build:mobile:ios:*` commands - which may fail this first time, but it will create the xcode project in cordova/platforms/ios with the appropriate credentials
    * Open this generated xcode project and set the credentials as usual (i.e. those for the team ID you set in cordova/config.xml).
    * Set the target device to generic ios, build the project, then archive it
    * Export as App Store build (no need to actually upload to the app store, just export)
    * This will ask you to save your credentials to the keychain... accept it
    * After this is done, running `npm run build:mobile:ios:*` will use the credentials from the keychain and there's no need to touch XCode at all :)

5. (Android release-mode only) Setup signing credentials so that cordova can pick them up. There are various tutorials out there, for example http://ilee.co.uk/Sign-Releases-with-Cordova-Android

The native builds end up in cordova/platforms/ios/build/device/[Project].ipa and cordova/platforms/android/build/outputs/[Project].apk

Testflight requires that you build in release mode (apple requirement)

_Note: this project does not deal with obb expansion packs for the Google Play Store, nor does it deal with native plugins. If your project requires it, you'll need to manually run the cordova packaging yourself - though the prep commands can be leveraged to boil that down to your own one-liner_

# VSCode specific notes

1. Build (Distribution) is the default build Task Runner in VSCode and the other tasks could be added easily since they are all just simple npm args

2. Once the Dev command is run - the VSCode debugger can be attached via the Chrome VSCode extension (see launch.json). This hasn't been tested in depth but seems to work at a glance.

# Cloud Storage notes

If you use Google Cloud storage as the cdn origin, there's some helpers to setup correct cors information so that things will load from the production server as well as the test scenarios

1. Edit _config/storage-cors.json

The example.com entries should be replaced with your production site urls

The localhost entries should be left as-is (they are the dist:server and karma test servers)

2. Run `gsutil cors set ./_config/storage-cors.json gs://your-bucket` to apply CORS settings to the bucket


# Footnotes

\* One could argue those platforms are simply hiding the complexity and so it's an unfair comparison. Flash uses eclipse/ant, Unity are wizards (and relies on xcode etc), Qt relies on a coherent make system, and so on. Isn't that the point though? Javascript and the web are specifically intended to hide complexity. We don't get to use the full glory of native resources but we (theoretically) get to write once and deploy everywhere. Tooling should follow the same approach and be standardized and available everywhere for javascript development (and I don't mean standardization of collecting boilerplates, e.g. Neutrino). Currently it takes climbing Configuration Mountain to do that via third-parties. Plus there are some frameworks (Qt especially) that strike the middle ground of giving simple gui widgets yet gradually exposing the full power to the user.
