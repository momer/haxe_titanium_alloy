package alloy;


@:native("Alloy.Widget")
extern class Widget
{
	public static function createCollection():Void;

	public static function createController():Void;

	public static function createModel():Void;

	public static function createWidget():Void;
}
