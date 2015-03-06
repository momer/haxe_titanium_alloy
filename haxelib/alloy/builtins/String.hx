package alloy.builtins;


@:native("Alloy.builtins.string")
extern class String
{	
	public function formatCurrency(amount:String):String;
	
	public function lcfirst(text:String):String;
	
	public function trim(line:String):String;
	
	public function trimZeros(num:Dynamic):Float;
	
	public function ucfirst(text:String):String;
	
	public function urlDecode(url:String):String;
	
	public function urlToJson(url:String):Dynamic;
}
