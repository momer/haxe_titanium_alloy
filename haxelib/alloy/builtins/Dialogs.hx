package alloy.builtins;


@:native("Alloy.builtins.dialogs")
extern class Dialogs
{	
	public var buttonNames:Array<Dynamic>;
	
	public var message:String;
	
	public var title:String;
	
	public function confirm(args:Void):Void;
}
