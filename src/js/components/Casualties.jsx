var React = require('react');
var ReactDOM = require('react-dom');

// var droneStore = require('../stores/droneStore.js');
var Totals = require('./Totals.jsx');
var CivilianTotals = require('./CivilianTotals.jsx');
var Details = require('./Details.jsx');
var DroneLocation = require('./DroneLocation.jsx');

var Casualties = React.createClass({

	render: function(){
		var details = (
				<p className="nodetails">Click a drone strike to load it's information</p>
			)
		if (this.props.strike) {
			details = (
				<div>
					<h1>{this.props.strike.location}</h1>
					<h4 className="mapdate">{this.props.strike.date.split('T').shift()}</h4>
                    <p className="dets">
                    	{this.props.strike.bij_summary_short || this.props.strike.narrative}
                    </p>
            	</div>
			);
		}

		return (
			<section className="description cf" id="non-totals">
				<div className="details">
				{details}
				</div>
				<div className="box">
					<h2>Casualties</h2>
				<div>
					<CivilianTotals />
					<Totals />
					
				</div>	
				</div>
			</section>
		)
	}
});

module.exports = Casualties;

// var Casualties = React.createClass({

// 	render: function(){
// 		var details = 'No data loaded. Click a marker.';

// 		if (this.props.strike) {
// 			details = (
// 				<div >
// 					<h1>{this.props.strike.location}</h1>
// 					<h4 className="mapdate">{this.props.strike.date}</h4>
//                     <p className="dets">
//                     	{this.props.strike.bij_summary_short || this.props.strike.narrative}
//                     </p>
//                 </div>
// 			);
// 		}

// 		return (
// 			<section className="description cf" id="non-totals">
// 			 <div className="details">
// 				{details}
// 			</div>
// 				<div className="box">
// 					<h2>Casualties</h2>
// 				<div>
// 					<Totals />
// 					<CivilianTotals />
// 				</div>	
// 				</div>
// 			</section>
// 		)
// 	}
// });

// module.exports = Casualties;