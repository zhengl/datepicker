require.config({
	baseUrl: 'js',
	paths: {
		'jquery': 'lib/jquery/jquery.min',
		'backbone': 'lib/backbone/backbone-min',
		'localstorage': 'lib/backbone.localstorage/backbone.localstorage',
		'underscore': 'lib/underscore/underscore-min',
		'datepicker': 'lib/bootstrap-datepicker/js/bootstrap-datepicker',
	},
	shim: {
		'datepicker': {
			deps: ['jquery'],
		},
		'underscore': {
			exports: '_',
		},
		'backbone': {
			deps: ['underscore','jquery'],
			exports: 'Backbone',
		},
		'localstorage': {
			deps: ['backbone'],
		},
	}
});

require(['jquery','backbone', 'views/AppView'], function($, Backbone, AppView) {
	new AppView({ el: $('#container').get() });
});