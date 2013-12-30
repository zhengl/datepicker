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
		if(this.isValid()) this.trigger('change');
	},

	setEndDate: function(endDate) {
		this.set('endDate', endDate, { validate: true });
		if(this.isValid()) this.trigger('change');
	},

	validate: function(attributes) {
		if(attributes.startDate.get('value') > attributes.endDate.get('value')) {
			return 'Start date should be previous to end date';
		}
	},
});

return DateTimeRange;

});