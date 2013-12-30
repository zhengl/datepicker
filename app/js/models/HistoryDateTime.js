define(['models/DateTime'], function(DateTime) {

var HistoryDateTime = DateTime.extend({
	validate: function(attributs) {
		if(new Date() < attributs.value) {
			return "Date should be previous to today";
		}
	},
});

return HistoryDateTime;

});