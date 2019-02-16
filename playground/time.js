const moment = require('moment');

var date = moment();
console.log(date.locale('tr').format('DD.MMM.YYYY HH:mm'));
console.log(date.locale('tr').format('hh:mm a'));


//var date = new Date();
//var months  = ['jan', 'Feb'];
//
//console.log(date.getMonth());