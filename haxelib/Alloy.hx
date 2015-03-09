package ;

import alloy.Controller;
// import backbone.Collection;
// import backbone.Model;


@:native("Alloy")
extern class Alloy
{
	public static var CFG:Dynamic;

	public static var Collections:Dynamic;

	public static var Globals:Dynamic;

	public static var isHandheld:Bool;

	public static var isTablet:Bool;

	public static var Models:Dynamic;

	// Returns a backbone collection
	public static function createCollection(name:String, ?args:Dynamic):Dynamic;

	public static function createController(name:String, ?args:Dynamic):Controller;

	// Returns a backbone model
	public static function createModel(name:String, ?args:Dynamic):Dynamic;

	public static function createWidget(id:String, ?name:String, ?args:Dynamic):Controller;
}
