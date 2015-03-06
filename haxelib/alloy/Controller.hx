package alloy;


@:native("Alloy.Controller")
extern class Controller extends Events
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
