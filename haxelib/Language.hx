package ;


@:native("Language")
extern class Language
{
	public var :Dynamic;

	public function extend(a:Dynamic, b:Dynamic):Void;

	public function getParseRegexForToken(token:Dynamic, config:Dynamic):Void;

	public function makeGlobal(shouldDeprecate:Dynamic):Void;

	public function makeMoment(config:Dynamic):Void;

	public function removeFormattingTokens(input:Dynamic):Void;

	public function substituteTimeAgo(string:Dynamic, number:Dynamic, withoutSuffix:Dynamic, isFuture:Dynamic, lang:Dynamic):Void;

	public function weekOfYear(mom:Dynamic, firstDayOfWeek:Dynamic, firstDayOfWeekOfYear:Dynamic):Void;
}
