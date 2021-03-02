'use strict';

module.exports = function(Score) {
	Score.disableRemoteMethodByName('patchOrCreate', true);
	Score.disableRemoteMethodByName('replaceOrCreate', true);
	Score.disableRemoteMethodByName('findOne', true);
	Score.disableRemoteMethodByName('count', true);
	Score.disableRemoteMethodByName('createChangeStream', true);
	Score.disableRemoteMethodByName('updateAll', true);
	Score.disableRemoteMethodByName('replaceById', true);
	Score.disableRemoteMethodByName('upsertWithWhere', true);
	Score.disableRemoteMethodByName("exists", true);
};

