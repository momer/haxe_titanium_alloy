package alloy.builtins;


@:native("Alloy.builtins.social")
extern class Social
{
	public function authorize(?_callback:Callback<Dynamic>):Void;

	public function create(settings:Void):Dynamic;

	public function deauthorize():Void;

	public function isAuthorized():Bool;

	public function share(options:Void):Void;
}
