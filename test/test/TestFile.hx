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
