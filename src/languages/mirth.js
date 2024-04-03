/*
Language: C
Category: common
Website: https://github.com/mirth-lang/mirth
*/

/** @type LanguageFn */
export default function(hljs) {
  const regex = hljs.regex;
	
	const MIRTH_LINE_COMMENT_MODE = hljs.COMMENT('#', '$');
	const MIRTH_DOC_COMMENT_MODE = hljs.COMMENT('\|\|\|', '$');

	const NUMBERS = {
		className: 'number',
		variants: [
			{ begin: '([+-]?)\\b([0-9]+)' },
			{ begin: '([+-]?)(\\b0[xX][a-fA-F0-9]+)' }
		],
		relevance: 0
	};

	const WORD = {
		className: 'entity.name.word.mirth',
		variants: [
			{ begin: '[\-a-z0-9_]+' },
		],

	};

	const KEYWORDS = [
		"def",
		"def-type",
		"def-external",

		"module",
		"import",

		"data",
		"table",
		"field",
		
	];

	const TYPE = {
		className: 'entity.name.type.mirth',
		variants: [
			{ begin: '[a-z]+(\*?)' },
			{ begin: '[A-Z][a-zA-Z0-9_\-]*' },
		]
	};

	const DEFINITION = {
		className: 'entity.name.function.mirth',
		begin: "def\(",
		end: "\)",

		contains: [
			TYPE,
			WORD,	
			NUMBERS,
		]
	};
	
	return {
		name: "mirth",
		aliases: ['mth'],
		keywords: KEYWORDS,
		contains: [].concat(
			MIRTH_LINE_COMMENT_MODE,
			MIRTH_DOC_COMMENT_MODE,
			DEFINITION	
		),

		exports: {
			keywords: KEYWORDS
		}
	};
}
