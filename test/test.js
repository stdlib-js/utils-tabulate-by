/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var noop = require( '@stdlib/utils-noop' );
var Float64Array = require( '@stdlib/array-float64' );
var tabulateBy = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof tabulateBy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a collection', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		function noop() {},
		/.*/,
		new Date()
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			tabulateBy( value );
		};
	}
});

tape( 'the function throws an error if not provided an indicator function (no options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		/.*/,
		new Date()
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			tabulateBy( [ 1, 2, 3 ], value );
		};
	}
});

tape( 'the function throws an error if not provided an indicator function (options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		/.*/,
		new Date()
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			tabulateBy( [ 1, 2, 3 ], {}, value );
		};
	}
});

tape( 'the function throws an error if provided an invalid options argument', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		function noop() {},
		/.*/,
		new Date()
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			tabulateBy( [ 1, 2, 3 ], value, noop );
		};
	}
});

tape( 'the function generates a frequency table according to an indicator function (array)', function test( t ) {
	var expected;
	var out;
	var arr;

	function indicator( v ) {
		return v[ 0 ];
	}

	arr = [ 'beep', 'boop', 'foo', 'beep' ];

	expected = [
		[ 'b', 3, 0.75 ],
		[ 'f', 1, 0.25 ]
	];
	out = tabulateBy( arr, indicator );

	t.deepEqual( out, expected, 'returns expected results' );
	t.end();
});

tape( 'the function generates a frequency table according to an indicator function (typed array)', function test( t ) {
	var expected;
	var out;
	var arr;

	function indicator( v ) {
		return v;
	}

	arr = new Float64Array( [ 0, 1, 1, 0 ] );

	expected = [
		[ 0, 2, 0.5 ],
		[ 1, 2, 0.5 ]
	];
	out = tabulateBy( arr, indicator );

	t.deepEqual( out, expected, 'returns expected results' );
	t.end();
});

tape( 'the function generates a frequency table according to an indicator function (array-like object)', function test( t ) {
	var expected;
	var out;
	var arr;

	function indicator( v ) {
		return v[ 0 ];
	}

	arr = {
		'length': 4,
		'0': 'beep',
		'1': 'boop',
		'2': 'foo',
		'3': 'beep'
	};
	expected = [
		[ 'b', 3, 0.75 ],
		[ 'f', 1, 0.25 ]
	];
	out = tabulateBy( arr, indicator );

	t.deepEqual( out, expected, 'returns expected results' );
	t.end();
});

tape( 'if provided an empty collection, the function returns an empty array', function test( t ) {
	var expected;
	var out;
	var arr;

	function indicator( v ) {
		return v[ 0 ];
	}

	arr = [];
	expected = [];

	out = tabulateBy( arr, indicator );

	t.deepEqual( out, expected, 'returns expected results' );
	t.end();
});

tape( 'the function supports providing an execution context', function test( t ) {
	var expected;
	var opts;
	var ctx;
	var out;
	var arr;

	function indicator( v ) {
		return v * this.scalar; // eslint-disable-line no-invalid-this
	}

	ctx = {
		'scalar': 2
	};

	arr = [ 0, 1, 1, 0 ];

	opts = {
		'thisArg': ctx
	};
	expected = [
		[ 0, 2, 0.5 ],
		[ 2, 2, 0.5 ]
	];
	out = tabulateBy( arr, opts, indicator );

	t.deepEqual( out, expected, 'returns expected results' );
	t.end();
});

tape( 'the function invokes the indicator function with both the collection element and the element index', function test( t ) {
	var expected;
	var out;
	var arr;

	function indicator( v, i ) {
		return v * i;
	}

	arr = [ 2, 2, 2, 2 ];

	expected = [
		[ 0, 1, 0.25 ],
		[ 2, 1, 0.25 ],
		[ 4, 1, 0.25 ],
		[ 6, 1, 0.25 ]
	];
	out = tabulateBy( arr, indicator );

	t.deepEqual( out, expected, 'returns expected results' );
	t.end();
});
