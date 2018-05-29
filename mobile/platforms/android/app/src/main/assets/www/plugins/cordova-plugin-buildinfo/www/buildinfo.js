cordova.define("cordova-plugin-buildinfo.BuildInfo", function(require, exports, module) {
/*
The MIT License (MIT)

Copyright (c) 2016 Mikihiro Hayashi

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

var exec = require('cordova/exec');
var channel = require('cordova/channel');

module.exports = {
	packageName: '',
	basePackageName: '',
	displayName: '',
	name: '',
	version: '',
	versionCode: 0,
	debug: false,
	buildDate: '',
	installDate: '',
	buildType: '',
	flavor: ''
};

channel.onCordovaReady.subscribe(function () {
	// module.exports.init();
	var args = [];

	// Android Only
	// defined buildInfoBuildConfigClassName variable
	// BuildConfig class name.
	// ex: <script>var buildInfoBuildConfigClassName = 'org.apache.cordova.sample.BuildConfig';</script>
	if ('undefined' !== typeof buildInfoBuildConfigClassName) {
		args.push(buildInfoBuildConfigClassName);
	}

	exec(
		function (res) {
			if (!res) {
				return;
			}

			if ('undefined' !== typeof res.packageName) {
				module.exports.packageName = res.packageName;
			}

			if ('undefined' !== typeof res.basePackageName) {
				module.exports.basePackageName = res.basePackageName;
			}

			if ('undefined' !== typeof res.displayName) {
				module.exports.displayName = res.displayName;
			}

			if ('undefined' !== typeof res.name) {
				module.exports.name = res.name;
			}

			if ('undefined' !== typeof res.version) {
				module.exports.version = res.version;
			}

			if ('undefined' !== typeof res.versionCode) {
				module.exports.versionCode = res.versionCode;
			}

			if ('undefined' !== typeof res.debug) {
				module.exports.debug = res.debug;
			}

			if ('undefined' !== typeof res.buildType) {
				module.exports.buildType = res.buildType;
			}

			if ('undefined' !== typeof res.flavor) {
				module.exports.flavor = res.flavor;
			}

			if ('undefined' !== typeof res.buildDate) {
				if (res.buildDate instanceof Date) {
					module.exports.buildDate = res.buildDate;
				} else {
					module.exports.buildDate = new Date(res.buildDate);
				}
			}

			if ('undefined' !== typeof res.installDate) {
				if (res.installDate instanceof Date) {
					module.exports.installDate = res.installDate;
				} else {
					module.exports.installDate = new Date(res.installDate);
				}
			}

			if ('undefined' !== typeof res.windows) {
				module.exports.windows = res.windows;
			}
		},
		function (msg) {
			console.error('BuildInfo init fail');
			console.error(msg);
		},
		'BuildInfo',
		'init',
		args
	);
});

});
