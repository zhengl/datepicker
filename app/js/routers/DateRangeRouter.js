define([
	'backbone',
	'models/HistoryDateTime',
	'views/DateTimePicker',
	'views/DateTimeRangePicker',
	'views/AppView'], 
	function(Backbone, HistoryDateTime, DateTimePicker, DateTimeRangePicker, AppView) {


var DateRangeRouter = Backbone.Router.extend({
	routes: {
		'': 'render',
		':start/:end': 'render',
	},

	render: function(start, end) {
		var endDate;
		if(!end) endDate = new Date();
		else endDate = new Date(end);
		
		var startDate;
		if(!start) startDate = new Date(endDate.getFullYear() - 5, endDate.getMonth(), endDate.getDate());
		else startDate = new Date(start);

		var startDateModel = new HistoryDateTime({ value: startDate });
		var endDateModel = new HistoryDateTime({ value: endDate });

		var startDatePicker = new DateTimePicker({ 
			model: startDateModel,
			lable: 'From',
		});
		var endDatePicker = new DateTimePicker({ 
			model: endDateModel,
			lable: 'To',
		});

		var dateRangePicker = new DateTimeRangePicker({
			startDatePicker: startDatePicker, 
			endDatePicker: endDatePicker
		});

		var appView = new AppView({
			el: '#container',
			dateRangePicker: dateRangePicker,
		});
		appView.render();
	},
});

return DateRangeRouter;

});