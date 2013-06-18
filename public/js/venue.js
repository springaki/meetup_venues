jQuery(document).ready(function() {
  function VenueViewModel() {
    self = this;

//     self.url = ko.observable('https://d2wpg9j0oo19pf.cloudfront.net/venues_photos/20_normal_1367894316_caosaka.jpg');
    self.url = ko.observable('xxxxxx');
    self.access = ko.computed(function() {
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
    self.time = ko.observable(new Date());
    self.input_area = ko.observable('init');
    self.output_area = ko.computed(function() {
        return self.time() + self.input_area() + 'さん';
      }, self);
    self.clearButton = function() {
        self.input_area("");
        self.output_area("");
      };
    setInterval(function() {self.time(new Date())},1000);
  };
  //var id = location.hash.replace(/^#/, '');
  //venueViewModel.id(id);
  ko.applyBindings(new VenueViewModel());

  }
);
