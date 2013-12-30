define(['backbone', 
	'models/DateTime',
	'text!views/templates/dateTimePicker.html',
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
		this.$message = this.$('.error-message');

		this.listenTo(this.model, 'change', this.render);
		this.listenTo(this.model, 'invalid', this.invalid);
	},

	update: function() {
		this.model.set('value', new Date(this.$input.val()), { validate: true });
	},

	invalid: function(model, message) {
		this.$el.addClass('has-error');
		this.$message.text(message || this.model.validationError);
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