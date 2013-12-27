require.config({
	baseUrl: 'js',
	paths: {
		'jquery': 'lib/jquery/jquery.min',
		'backbone': 'lib/backbone/backbone-min',
		'underscore': 'lib/underscore/underscore-min',
	},
	shim: {
		'underscore': {
			exports: '_',
		},
		'backbone': {
			deps: ['underscore','jquery'],
			exports: 'Backbone',
		},
	}
});

require(['backbone'], function(Backbone) {
	console.log(Backbone);
});