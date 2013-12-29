define([
	'backbone', 
	'views/DateRangePicker', 
	'views/DatePicker', 
	'models/HistoryDateTime'], 
	function(Backbone, DateRangePicker, DatePicker, HistoryDateTime) {

var AppView = Backbone.View.extend({

	render: function() {
		var today = new Date();
		var fiveYearsAgo = new Date(today.getFullYear() - 5, today.getMonth(), today.getDate());
		var startDatePicker = new DatePicker({ 
			model: new HistoryDateTime({ value: fiveYearsAgo }),
			lable: 'From',
		});
		var endDatePicker = new DatePicker({ 
			model: new HistoryDateTime({ value: today }),
			lable: 'To',
		});
		this.$el.append(new DateRangePicker({
			startDatePicker: startDatePicker, 
			endDatePicker: endDatePicker
		}).render().el);
		return this;
	},
});

return AppView;

});