define(['backbone', 'views/DatePicker'], function(Backbone, DatePicker) {

var AppView = Backbone.View.extend({
	initialize: function() {
		this.render();
	},

	render: function() {
		this.$el.append(new DatePicker().el);
		return this;
	},
});

return AppView;

});