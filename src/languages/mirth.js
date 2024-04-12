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

	const NUMBERS = {
		className: 'number',
		variants: [
			{ begin: /[+-]?([0-9]+)/ },
			{ begin: /[+-]?(0[xX][a-fA-F0-9]+)/ }
		],
		relevance: 0
	};

	const WORD = {
		className: 'identifier',
		variants: [
			{ begin: /[\-a-z0-9_\!\?\/]+/, end: /( |\()/ },
		],

		illegal: [ "keyword" ],
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
		className: 'type',
		variants: [
			{ begin: /\*?([a-z]+)/ },
			{ begin: /[A-Z]([a-zA-Z0-9_\-]*)/ },
			{ begin: /\+[A-Z]([a-zA-Z0-9_\-]*)/ },
		],

		contains: [
			{ begin: '\\(', end: '\\)', contains: [ "self" ] }
		],
	};

	const MODULE = {
		className: 'module',
		begin: ['module', '\\(' ],
		beginScope: {1: "keyword" },
		end: '\\)',

		contains: [{ begin: '[a-zA-Z\.\-]' }],

		illegal: [ "keyword" ]
	};

	const IMPORT = {
		className: 'module',
		begin: ['import', '\\(' ],
		beginScope: {1: "keyword" },
		end: '\\)',

		contains: [{ begin: '[a-zA-Z\.\-]' }],

		illegal: [ "keyword" ]
	};	

	const TYPE_DEFINITION = {
		className: 'type',
		begin: ['def-type', '\\(' ],
		beginScope: {1: "keyword" },
		end: '\\)',

		contains: [
			TYPE
		]
	};

	const DEFINITION = {
		className: 'function',
		begin: ['def', '\\('],
		beginScope: { 1: "keyword" },
		end: '\\)',

		contains: [
			hljs.QUOTE_STRING_MODE,
			{ begin: /\-\-/ },
			WORD,	
			TYPE,
			NUMBERS,
		]
	};

	const EXTERN_DEFINITION = {
		className: 'function',
		begin: ['def-extern', '\\('],
		beginScope: { 1: "keyword" },
		end: '\\)',

		contains: [
			{ begin: /\-\-/ },
			WORD,	
			TYPE,
		]
	}
	
	return {
		name: "mirth",
		aliases: ['mth'],
		keywords: { 
		        keyword: KEYWORDS,
			literal: ['F', 'T']
		},
		contains: [].concat(
			hljs.QUOTE_STRING_MODE,
			MIRTH_LINE_COMMENT_MODE,
			MIRTH_DOC_COMMENT_MODE,
			DEFINITION,
			TYPE_DEFINITION,
			EXTERN_DEFINITION,
			IMPORT,
			MODULE
		),

		exports: {
			keywords: KEYWORDS
		}
	};
}
