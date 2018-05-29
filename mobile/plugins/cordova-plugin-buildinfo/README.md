[![Build Status](https://travis-ci.org/lynrin/cordova-plugin-buildinfo.svg?branch=master)](https://travis-ci.org/lynrin/cordova-plugin-buildinfo)
[![Code Climate](https://codeclimate.com/github/lynrin/cordova-plugin-buildinfo/badges/gpa.svg)](https://codeclimate.com/github/lynrin/cordova-plugin-buildinfo)
[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)

# cordova-plugin-buildinfo

This plugin defines a global BuildInfo object.

BuildInfo object is available at the time the deviceready event fires.

```js
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
	console.log('BuildInfo.packageName    =' + BuildInfo.packageName);
	console.log('BuildInfo.basePackageName=' + BuildInfo.basePackageName);
	console.log('BuildInfo.displayName    =' + BuildInfo.displayName);
	console.log('BuildInfo.name           =' + BuildInfo.name);
	console.log('BuildInfo.version        =' + BuildInfo.version);
	console.log('BuildInfo.versionCode    =' + BuildInfo.versionCode);
	console.log('BuildInfo.debug          =' + BuildInfo.debug);
	console.log('BuildInfo.buildType      =' + BuildInfo.buildType);
	console.log('BuildInfo.flavor         =' + BuildInfo.flavor);
	console.log('BuildInfo.buildDate      =' + BuildInfo.buildDate);
	console.log('BuildInfo.installDate    =' + BuildInfo.installDate);
}
```

## Installation

```sh
cordova plugin add cordova-plugin-buildinfo
```

## Supported Platforms

* Android
* iOS
* Windows

## Properties

- `BuildInfo.packageName`
- `BuildInfo.basePackageName`
- `BuildInfo.displayName`
- `BuildInfo.name`
- `BuildInfo.version`
- `BuildInfo.versionCode`
- `BuildInfo.debug`
- `BuildInfo.buildType`
- `BuildInfo.flavor`
- `BuildInfo.buildDate`
- `BuildInfo.installDate`
- `BuildInfo.windows`
  - `logo`
  - `version`


### BuildInfo.packageName

Get the packageName of Application ID.

|Platform|Value|Type|
|--------|-----|----|
|Android|Package Name|String|
|iOS|Bundle Identifier|String|
|Windows|Identity name|String|


### BuildInfo.basePackageName

Android only.

Get the packageName of BuildConfig class.

If you use the configure of "build types" or "product flavors", because you can specify a different package name is the id attribute of the widget element of config.xml, is the property to get the package name that BuildConfig class belongs.
(ought be the same as the id attribute of the widget element of config.xml)


|Platform|Value|Type|
|--------|-----|----|
|Android|Package name of BuildConfig class|String|
|iOS|Bundle Identifier(equals BuildInfo.packageName)|String|
|Windows|Identity name(equals BuildInfo.packageName)|String|


### BuildInfo.displayName

Get the displayName.

|Platform|Value|Type|
|--------|-----|----|
|Android|Application Label|String|
|iOS|CFBundleDisplayName|String|
|Windows|Get DisplayName attribute of VisualElements element in AppxManifest.xml file.|String|

### BuildInfo.name

Get the name.

|Platform|Value|Type|
|--------|-----|----|
|Android|Application Label(equal BuildInfo.displayName)|String|
|iOS|CFBundleName|String|
|Windows|Windows Store display name|String|


### BuildInfo.version

Get the version.

|Platform|Value|Type|
|--------|-----|----|
|Android|BuildConfig.VERSION_NAME|String|
|iOS|CFBundleShortVersionString|String|
|Windows|Major.Minor.Build ex) "1.2.3"|String|


### BuildInfo.versionCode

Get the version code.

|Platform|Value|Type|
|--------|-----|----|
|Android|BuildConfig.VERSION_CODE|int|
|iOS|CFBundleVersion|string|
|Windows|Major.Minor.Build.Revision ex) "1.2.3.4"|String|


### BuildInfo.debug

Get the debug flag.

|Platform|Value|Type|
|--------|-----|----|
|Android|BuildConfig.DEBUG|Boolean
|iOS|defined "DEBUG" is true|Boolean|
|Windows|isDevelopmentMode is true|Boolean|


### BuildInfo.buildType

Android , Windows Only.

Get the build type.

|Platform|Value|Type|
|--------|-----|----|
|Android|BuildConfig.BUILD_TYPE|String|
|iOS|empty string|String|
|Windows|"release" or "debug"|String|


### BuildInfo.flavor

Android Only.

Get the flavor.

|Platform|Value|Type|
|--------|-----|----|
|Android|BuildConfig.FLAVOR|String|
|iOS|empty string|String|
|Windows|empty string|String|

### BuildInfo.buildDate

Get the build date and time in the Date object returns.

Attention:
- Android: Add the BuildInfo.gradle file to your Android project.  
  The BuildInfo.gradle file contains the setting to add the _BUILDINFO_TIMESTAMP field to the BuildConfig class.
- Windows: Add the buildinfo.resjson file to your Windows project.  
  The buildinfo.resjson file into the "strings" folder.  
  And also add a task to rewrite buildinfo.resjson in the CordovaApp.projitems file.

|Platform|Value|Type|
|--------|-----|----|
|Android|BuildConfig.\_BUILDINFO\_TIMESTAMP value|Date|
|iOS|Get the modification date and time of the Info.plist file acquired from the executionPath property of the main bundle.|Date|
|Windows|Resource value of "/buildinfo/Timestamp" string.|Date|


### BuildInfo.installDate

Get the install date and time in the Date object returns.

|Platform|Value|Type|
|--------|-----|----|
|Android|The firstInstallTime property of PackageInfo|Date|
|iOS|Get the creation date and time of the document directory.|Date|
|Windows|The installedDate property of Windows.ApplicatinoModel.Package.current|Date|


### BuildInfo.windows

Windows Only.

Get the windows extra information.

|Platform|Value|Type|
|--------|-----|----|
|Android|undefined|undefined|
|iOS|undefined|undefined|
|Windows|Object|Object|

|Property name|Value|Type|
|-------------|-----|----|
|architecture|Windows.ApplicationModel.Package.current.id.architecture|integer|
|description|Windows.ApplicationModel.Package.current.description|String|
|displayName|Windows.ApplicationModel.Package.current.displayName|String|
|familyName|Windows.ApplicationModel.Package.current.id.familyName|String|
|fullName|Windows.ApplicationModel.Package.current.id.fullName|String|
|logo|Object|Object|
|publisher|Windows.ApplicationModel.Package.current.id.publisher|String|
|publisherId|Windows.ApplicationModel.Package.current.id.publisherId|String|
|publisherDisplayName|Windows.ApplicationModel.Package.current.publisherDisplayName|String|
|resourceId|Windows.ApplicationModel.Package.current.id.resourceId|String|
|version|Windows.ApplicationModel.Package.current.id.version|Object|

#### BuildInfo.windows.logo

|Property name|Value|Type|
|-------------|-----|----|
|absoluteCannonicalUri|Windows.ApplicationModel.Package.logo.absoluteCanonicalUri|String|
|absoluteUri|Windows.ApplicationModel.Package.logo.absoluteUri|String|
|displayIri|Windows.ApplicationModel.Package.logo.displayIri|String|
|displayUri|Windows.ApplicationModel.Package.logo.displayUri|String|
|path|Windows.ApplicationModel.Package.logo.path|String|
|rawUri|Windows.ApplicationModel.Package.logo.rawUri|String|

#### BuildInfo.windows.version

|Property name|Value|Type|
|-------------|-----|----|
|major|Windows.ApplicationModel.Package.current.id.version.major|integer|
|minor|Windows.ApplicationModel.Package.current.id.version.minor|integer|
|build|Windows.ApplicationModel.Package.current.id.version.build|integer|
|revision|Windows.ApplicationModel.Package.current.id.version.revision|integer|