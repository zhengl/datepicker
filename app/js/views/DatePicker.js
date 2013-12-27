var DatePicker = Backbone.View.extend({
	events: {
		'click': 'show',
	},

	initialize: function() {
		this.$el.datepicker();
	},

	show: function() {

	},
});