# [Appcelerator Titanium Alloy](http://www.appcelerator.com/titanium/) Haxe Extern Classes

This was generated by using [BuildHX](https://github.com/jgranick/buildhx).

Generating correct JSDuck output from the [Alloy project documentation](https://github.com/appcelerator/alloy/tree/master/docs) required adding in `@static` meta data to the files.

Remember to use JSDuck version `3.10.1` with buildhx if you plan on building this yourself!

## Supported Titanium Alloy Versions
- [1.5.1](https://github.com/appcelerator/alloy/releases/tag/1.5.1)

## Usage
To install into haxelib, run `haxelib git titanium_mobile_externs https://github.com/momer/haxe_titanium_mobile.git <version> haxelib`

As of this update, the latest [version](https://github.com/momer/haxe_titanium_alloy/releases) is 1.5.1-rc1.

Using the externs is straight forward, here's an example from `test/TestFile.hx`:

	package test;

	import alloy.builtins.Animation;
	import alloy.builtins.Dialogs;
	import alloy.builtins.Measurement;
	import alloy.builtins.Sha1;
	import alloy.builtins.Social;
	import alloy.builtins.String;
	import alloy.Controller;
	import alloy.controller.UI;
	import alloy.Models;
	import alloy.Widget;
	import alloy.Widgets;

	class TestFile {
		static public function main():Void {
			var myController = Alloy.createController('MyController');
			trace('Hello World; test passed.');
		}
	}

which generates

	(function () { "use strict";
		var test = {};
		test.TestFile = function() { };
		test.TestFile.main = function() {
			var myController = Alloy.createController("MyController");
			console.log("Hello World; test passed.");
		};
		test.TestFile.main();
	})();

## Building
If you want to build this yourself, you'll have to install my hacked version of BuildHX @ https://github.com/momer/buildhx/tree/bh-jsduck3-updates

Once installed, just run, `haxelib run buildhx build.xml`.

Note: The changes to that BuildHX fork repo were quick and ugly; at the time of this writing, I was in the midst of implementing a dependency graph which I discovered wouldn't be needed if I fixed a weird bug.

tl;dr: Don't hate me for the ugly commits to that buildhx fork.

## Important Note:
In order to make use of functions with arguments of type `Callback<Void>`, simply cast the Callback argument during the function call a la http://try.haxe.org/#D5CcC

The only test available at this time is basically importing all of the classes, and running them (as seen in [test/TestFile.hx](https://github.com/momer/haxe_titanium_alloy/blob/master/test/test/TestFile.hx)). It passes, and creates the JS output without screaming at us for type issues, etc. There may be hidden bugs or parameter issues that may crop up as usage grows. Report these if you run into them!

## Less Important Note:
Yes, it would have been nice to just use the [apidoc yaml files](https://github.com/appcelerator/titanium_mobile/tree/master/apidoc/Titanium), but that would have been more work.
