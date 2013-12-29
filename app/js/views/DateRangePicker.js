define([
	'backbone', 
	'models/DateTimeRange'], 
	function(Backbone, DateTimeRange) {

var DateRangePicker = Backbone.View.extend({

	initialize: function(attributes) {
		this.startDatePicker = attributes.startDatePicker;
		this.endDatePicker = attributes.endDatePicker;

		this.model = new DateTimeRange({
			startDate: this.startDatePicker.model, 
			endDate: this.endDatePicker.model
		});
		this.listenTo(this.model, 'change', this.render);
		this.listenTo(this.model, 'invalid', this.invalid);
	},

	render: function() {
		this.$el.empty();
		this.$el.append(this.startDatePicker.render().el);
		this.$el.append(this.endDatePicker.render().el);
		return this;
	},

	invalid: function() {
		this.startDatePicker.invalid();
		this.endDatePicker.invalid();
	},
});

return DateRangePicker;

});