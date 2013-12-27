define(['backbone', 'localstorage'], function(Backbone){

var DateTime = Backbone.Model.extend({

	localStorage: new Backbone.LocalStorage("datepicker-date"),

	defaults: {
		"value": new Date(),
	},
});

return DateTime;

});