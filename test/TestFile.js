(function () { "use strict";
var test = {};
test.TestFile = function() { };
test.TestFile.main = function() {
	var myController = Alloy.createController("MyController");
	console.log("Hello World; test passed.");
};
test.TestFile.main();
})();
