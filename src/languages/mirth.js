/*
Language: mirth
Category: common
Website: https://github.com/mirth-lang/mirth
*/

/** @type LanguageFn */
export default function(hljs) {
  const regex = hljs.regex;
	
	const MIRTH_LINE_COMMENT_MODE = hljs.COMMENT('#', '$');
	const MIRTH_DOC_COMMENT_MODE = hljs.COMMENT('\\|\\|\\|', '$');

	const NUMBER = {
		className: 'number',
		variants: [
			{ begin: /[+-]?([0-9]+)/ },
			{ begin: /[+-]?(0[xX][a-fA-F0-9]+)/ },
		],
		relevance: 0
	};

	const TYPE = {
		className: 'type',
		variants: [ { begin: /[A-Z][0-9a-zA-Z_\-?+*~!\@\$%\^&=/\|<>']*/ } ]
	};

	const TAG = {
		className: 'type',
		variants: [ { begin: /[\?!\+][A-Z][0-9a-zA-Z_\-?+*~!\@\$%\^&=/\|<>']*/ } ]
	};

	const KEYWORDS = {
		keyword: [
		"module", "import", "inline", "alias", "data", "struct", "def", "def-type", "def-missing", "def-external", "external", "table", "field", "embed-str", "buffer", "var", "--",
		"->", "\\\\",

		"dup", "drop", "id", "swap", "dip", "nip", "tuck", "over", "rotl", "rotr", "par", "both",
		"dup2", "drop2", "swap2", "dip2", "nip2", "tuck2", "over2",
		"dup3", "drop3",
		"if", "and", "or", "not", "xor", "while",
		"pack2", "unpack2", "pack0", "unpack0", "pack1", "unpack1", "pack3", "unpack3", "pack4", "unpack4"],

		literal: [
		"False", "True"
		]
	};
	
	return {
		name: "mirth",
		aliases: ['mth'],
		keywords: KEYWORDS,
		contains: [ 
			hljs.QUOTE_STRING_MODE,
			MIRTH_LINE_COMMENT_MODE,
			MIRTH_DOC_COMMENT_MODE,
			NUMBER,
			TYPE,
			TAG
		]
	};
}
