package alloy;

// import backbone.Model;


@:native("Alloy.Models")
extern class Models
{
	// Returns a single backbone Model
	public static function instance(name:String):Dynamic;
}
