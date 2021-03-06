/**
 * NotifyController
 *
 * @description :: Server-side logic for managing notifies
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	add:function(req, res, next){
		console.log(req.param('deviceid'));
		var lat = req.param('lat');
		var lng = req.param('lng');
		var deivce_id = req.param('deviceid');

		Notify.find({"device" : deivce_id }).exec(function(err, found){
				console.log(found);
				if(!found){
					console.log('1');
					Notify.create({'device':deivce_id, 'lat':lat ,'lng':lng }).exec(function (err, createfound){
						console.log(createfound);
						return res.ok();
					});
				}
				else{
					console.log('2');
					res.ok();
				}
			// return res.ok();
			});
	},
	iosnotify:function(req, res, next){
		console.log('test');
		Notify.find({'device' :'123'}).exec(function(err, data){
			console.log(data);
		});
	}
};

