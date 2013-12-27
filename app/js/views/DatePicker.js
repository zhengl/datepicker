define(['backbone', 'models/DateTime', 'datepicker'], function(Backbone, DateTime) {


var DatePicker = Backbone.View.extend({
	tagName: 'input',

	events: {
		'changeDate': 'update',
	},

	initialize: function() {
		this.$el.datepicker({
			format: 'yyyy-mm-dd',
		});
		
		this.model = this.model || new DateTime();
		this.listenTo(this.model, 'sync change', this.render);
		this.model.fetch();
	},

	update: function() {
		this.model.set('value', new Date(this.$el.val()));
	},

	render: function() {
		this.$el.datepicker('setDate', this.model.get('value'));
		return this;
	},
});

return DatePicker; 

});