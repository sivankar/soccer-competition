'use strict';

module.exports = function(Match) {
	Match.disableRemoteMethodByName('patchOrCreate', true);
	Match.disableRemoteMethodByName('replaceOrCreate', true);
	Match.disableRemoteMethodByName('findOne', true);
	Match.disableRemoteMethodByName('count', true);
	Match.disableRemoteMethodByName('createChangeStream', true);
	Match.disableRemoteMethodByName('updateAll', true);
	Match.disableRemoteMethodByName('replaceById', true);
	Match.disableRemoteMethodByName('upsertWithWhere', true);
	Match.disableRemoteMethodByName("exists", true);
};

