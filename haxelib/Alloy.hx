package ;

import alloy.Controller;
import backbone.Collection;
import backbone.Model;


@:native("Alloy")
extern class Alloy
{	
	public static var CFG:Dynamic;
	
	public static var Collections:Dynamic;
	
	public static var Globals:Dynamic;
	
	public static var isHandheld:Bool;
	
	public static var isTablet:Bool;
	
	public static var Models:Dynamic;
	
	public static function createCollection(name:String, ?args:Dynamic):Collection;
	
	public static function createController(name:String, ?args:Dynamic):Controller;
	
	public static function createModel(name:String, ?args:Dynamic):Model;
	
	public static function createWidget(id:String, ?name:String, ?args:Dynamic):Controller;
}
