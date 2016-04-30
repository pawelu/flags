var Dashboard = require('./dashboard.js');

$(document).ready(function() {
  $.ajax({
    type: "POST",
    url: '/gyms',
    success: function() {
      console.log('mrseh!');
    },
  });


  let dashboard = new Dashboard();
  dashboard.showMainMap();
});


//var request = new Request('/gyms', {
//	method: 'POST',
//	mode: 'cors',
//	redirect: 'follow',
//	headers: new Headers({
//		'Content-Type': 'text/plain'
//	})
//});


// Now use it!
//fetch(request).then(function() { console.log('meh!'); });

//import Dashboard from './dashboard.js';
//
//$(document).ready(function() {
//  let dashboard = new Dashboard();
//  dashboard.showMainMap();
//});
