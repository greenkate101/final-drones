var EventEmitter = require('eventemitter3');
var $ = require('jquery');
// var overlay = require('../components.Overlay.jsx')

var droneStore = Object.create(EventEmitter.prototype);
EventEmitter.call(droneStore);

// Collection
var data = [];

droneStore.getDroneStrikes = function () {
	return data;
};

droneStore.fetchDroneStrikes = function () {
	
	var options = {
		dataType : 'jsonp',
		url : 'http://api.dronestre.am/data',

		success: function ( response ) {

			// console.log( "response: ", response.strike );

			data = response.strike;

			droneStore.emit( 'update' );
		}
	};

	// console.log( "Promise: ", $.ajax( options ) );

	return $.ajax( options );
};

// overlay.componentDidMount = function() {
// 		$('#overlay-preload').delay(1700).fadeOut('slow')
// };

window.droneStore = droneStore;

module.exports = droneStore;