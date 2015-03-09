package alloy;


// This is a workaround to be able to use this a la
// http://docs.appcelerator.com/titanium/3.0/#!/guide/Alloy_Controllers
// May not be the best way to achieve this functionality
@:native("$")
// extern class Controller extends Events
// Extends backbone Events or similar
extern class Controller
{
	public static function addClass(proxy:Dynamic, classes:Dynamic, ?opts:Dynamic):Void;

	public static function createStyle(opts:Dynamic):Dynamic;

	public static function destroy():Void;

	public static function getTopLevelViews():Dynamic;

	public static function getView(?id:String):Dynamic;

	public static function getViews():Dynamic;

	public static function removeClass(proxy:Dynamic, classes:Dynamic, ?opts:Dynamic):Void;

	public static function resetClass(proxy:Dynamic, ?classes:Dynamic, ?opts:Dynamic):Void;

	public static function updateViews(args:Dynamic):Void;
}
