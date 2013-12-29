define(['backbone', 
	'models/DateTime',
	'text!views/templates/DatePicker.html',
	'datepicker'], 
	function(Backbone, DateTime, html) {


var DatePicker = Backbone.View.extend({
	events: {
		'changeDate': 'update',
	},

	className: 'form-group',

	template: _.template(html),

	initialize: function(attributs) {
		this.$el.html(this.template(attributs));
		this.$input = this.$('input');

		this.listenTo(this.model, 'change', this.render);
		this.listenTo(this.model, 'invalid', this.invalid);
	},

	update: function() {
		this.model.set('value', new Date(this.$input.val()), { validate: true });
	},

	invalid: function() {
		this.$el.addClass('has-error');
	},

	render: function() {
		this.reset();
		this.$input.datepicker({
			format: 'yyyy-mm-dd',
		});
		this.$input.datepicker('update', this.model.get('value'));
		return this;
	},

	reset: function() {
		this.$el.removeClass('has-error');
	},
});

return DatePicker; 

});