'use strict';

module.exports = function(Team) {
	Team.disableRemoteMethodByName('patchOrCreate', true);
	Team.disableRemoteMethodByName('replaceOrCreate', true);
	Team.disableRemoteMethodByName('findOne', true);
	Team.disableRemoteMethodByName('count', true);
	Team.disableRemoteMethodByName('createChangeStream', true);
	Team.disableRemoteMethodByName('updateAll', true);
	Team.disableRemoteMethodByName('replaceById', true);
	Team.disableRemoteMethodByName('upsertWithWhere', true);
	Team.disableRemoteMethodByName("exists", true);
};

