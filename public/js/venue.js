jQuery(document).ready(function() {
  function VenueViewModel() {
    s = this;

    s.url = ko.observable('https://d2wpg9j0oo19pf.cloudfront.net/events_banners/3270_normal_1363521591_photo2.jpeg');
//    s.url = ko.observable('xxxxxx');
    s.access = ko.computed(function() {
        var nowdate = new Date();
        var year = nowdate.getFullYear(); // 年 
        var mon  = nowdate.getMonth() + 1; // 月 
        var date = nowdate.getDate(); // 日 
        var week = nowdate.getDay(); // 曜日 
        var hour = nowdate.getHours(); // 時 
        var min  = nowdate.getMinutes(); // 分 
        var sec  = nowdate.getSeconds(); // 秒 
        var msec = nowdate.getMilliseconds(); // ミリ秒 

        return hour + ':' + min + ':' + sec;
      }
      );
    s.time = ko.observable(new Date());
    s.input_area = ko.observable('init');
    s.output_area = ko.computed(function() {
        return s.time() + s.input_area() + 'さん';
      }, s);
    s.clearButton = function() {
        s.input_area("");
        s.output_area("");
      };
    setInterval(function() {s.time(new Date())},1000);
  };

  function VenueViewModelEx() {
    self = this;

    self.venues = ko.observableArray();
    self.venues.push(new VenueViewModel());
    self.venues.push(new VenueViewModel());
    self.venues.push(new VenueViewModel());
    self.venues.push(new VenueViewModel());
//    setInterval(function() {self.venues.push(new VenueViewModel())}, 1000);
  };
  ko.applyBindings(new VenueViewModelEx());
});
