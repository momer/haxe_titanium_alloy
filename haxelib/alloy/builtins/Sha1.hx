package alloy.builtins;


@:native("Alloy.builtins.sha1")
extern class Sha1
{
	public function b64_hmac_sha1(key:String, data:String):String;

	public function b64_sha1(s:String):String;

	public function hex_hmac_sha1(key:String, data:String):String;

	public function hex_sha1(s:String):String;

	public function str_hmac_sha1(key:String, data:String):String;

	public function str_sha1(s:String):String;
}
