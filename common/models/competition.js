'use strict';

module.exports = function(Competition) {
	Competition.disableRemoteMethodByName('patchOrCreate', true);
	Competition.disableRemoteMethodByName('replaceOrCreate', true);
	Competition.disableRemoteMethodByName('findOne', true);
	Competition.disableRemoteMethodByName('count', true);
	Competition.disableRemoteMethodByName('createChangeStream', true);
	Competition.disableRemoteMethodByName('updateAll', true);
	Competition.disableRemoteMethodByName('replaceById', true);
	Competition.disableRemoteMethodByName('upsertWithWhere', true);
	Competition.disableRemoteMethodByName("exists", true);

	Competition.prototype.scheduleMatches = function(id, cb) {
		cb(null, `WIP`)
	}
};

