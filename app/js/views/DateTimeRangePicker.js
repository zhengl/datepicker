define([
	'backbone', 
	'models/DateTimeRange'], 
	function(Backbone, DateTimeRange) {

var DateRangePicker = Backbone.View.extend({

	className: 'date-range-picker',

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
		this.$el.append(this.startDatePicker.render().delegateEvents().el);
		this.$el.append(this.endDatePicker.render().delegateEvents().el);
		return this;
	},

	invalid: function() {
		this.startDatePicker.invalid(null, this.model.validationError);
		this.endDatePicker.invalid(null, this.model.validationError);
		return this;
	},
});

return DateRangePicker;

});