define(['backbone'], function(Backbone) {

var AppView = Backbone.View.extend({

	initialize: function(attributes) {
		this.dateRangePicker = attributes.dateRangePicker;
	},

	render: function() {
		this.$el.empty();
		this.$el.append(this.dateRangePicker.delegateEvents().render().el);
		return this;
	},
});

return AppView;

});