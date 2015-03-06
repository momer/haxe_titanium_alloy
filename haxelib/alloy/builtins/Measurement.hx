package alloy.builtins;


@:native("Alloy.builtins.measurement")
extern class Measurement
{	
	public function dpToPX(val:Float):Float;
	
	public function pointPXToDP(val:Float):Float;
	
	public function pxToDP(val:Float):Float;
}
