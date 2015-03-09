package alloy.builtins;

import titanium.ui.Animation;
import titanium.ui.View;


@:native("Alloy.builtins.animation")
extern class Animation
{
	public var HORIZONTAL:String;

	public var VERTICAL:String;

	public function chainAnimate(view:View, animations:Array<Animation>, ?finishCallback:Callback<Dynamic>):Void;

	public function crossFade(from:View, to:View, duration:Float, ?finishCallback:Callback<Dynamic>):Void;

	public function fadeAndRemove(from:View, duration:Float, container:View, ?finishCallback:Callback<Dynamic>):Void;

	public function fadeIn(to:View, duration:Float, ?finishCallback:Callback<Dynamic>):Void;

	public function fadeOut(to:View, duration:Float, ?finishCallback:Callback<Dynamic>):Void;

	public function flash(view:View, ?delay:Float, ?finishCallback:Callback<Dynamic>):Void;

	public function flip(from:View, to:View, ?direction:String, duration:Float, ?finishCallback:Callback<Dynamic>):Void;

	public function flipHorizontal(from:View, to:View, duration:Float, ?finishCallback:Callback<Dynamic>):Void;

	public function flipVertical(from:View, to:View, duration:Float, ?finishCallback:Callback<Dynamic>):Void;

	public function popIn(view:View, ?finishCallback:Callback<Dynamic>):Void;

	public function shake(view:View, ?delay:Float, ?finishCallback:Callback<Dynamic>):Void;
}
