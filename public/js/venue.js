jQuery(document).ready(function() {
  var VenueViewModel = function(data) {
    var self = this;

    this.viewModels = ko.mapping.fromJS([]);
    this.readJSON = function() {
      $.get('/data.json').done(function(data) {
        ko.mapping.fromJS(data, self.viewModels);
      });
    };
  };

  var venue = new VenueViewModel();
  ko.applyBindings(venue);

  venue.readJSON();
});

