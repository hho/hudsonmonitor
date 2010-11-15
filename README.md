# Hudson Monitor

This is an extension for [Google Chrome](http://chrome.google.com/) and [Chromium](http://www.chromium.org/Home), which let's you monitor a [Hudson CI](http://www.hudson-ci.org/) server from within your browser.

## Installation

You can [install](https://chrome.google.com/extensions/detail/lnalnbkkohdcnaapeeceifjabgmdfgah) the latest release from the Chrome extensions library.

## Changelog

### Version 0.3.1

* _Feature:_ When sorting jobs by status, jobs with the same status are now ordered alphabetically
* _Feature:_ Clicking on the heading in the popup opens a tab with the configured Hudson URL
* Opensourced everything under the Apache v2 license; added proper copyright notices

### Version 0.3.0

* _Bugfix:_ When the request to the Hudson server did not complete (i.e.
when the Hudson server was unavailable), some Timers were never
cancelled, resulting in memory leaking.
* _Feature:_ Added an option to use green orbs instead of blue ones for
successful builds.
* _Feature:_ Added a refresh button to the popup.

### Version 0.2.6

* _Bugfix:_ During the build of a project whose previous build was
aborted or which was disabled before, the status was not displayed.

## Contributing

If you've found a bug or want to request a feature, please file an [issue](https://github.com/hho/hudsonmonitor/issues).

If you want to contribute code, please

* do so in a new branch
* license your code under the [Apache license 2.0](http://www.apache.org/licenses/LICENSE-2.0.html)
* and please don't be disappointed if I don't reply immediately

