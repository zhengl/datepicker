define(['backbone'], function(Backbone) {

var DateTimeRange = Backbone.Model.extend({
	initialize: function(attributes) {
		this.set('startDate', attributes.startDate);
		this.set('endDate', attributes.endDate);

		this.listenTo(this.get('startDate'), 'change', this.setStartDate);
		this.listenTo(this.get('endDate'), 'change', this.setEndDate);
	},

	setStartDate: function(startDate) {
		this.set('startDate', startDate, { validate: true });
	},

	setEndDate: function(endDate) {
		this.set('endDate', endDate, { validate: true });
	},

	validate: function(attributes) {
		if(attributes.startDate.get('value') > attributes.endDate.get('value')) {
			return 'start date should be not later than end date';
		}
	},
});

return DateTimeRange;

});