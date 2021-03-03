'use strict';

module.exports = function (Competition) {
	Competition.disableRemoteMethodByName('patchOrCreate', true);
	Competition.disableRemoteMethodByName('replaceOrCreate', true);
	Competition.disableRemoteMethodByName('findOne', true);
	Competition.disableRemoteMethodByName('count', true);
	Competition.disableRemoteMethodByName('createChangeStream', true);
	Competition.disableRemoteMethodByName('updateAll', true);
	Competition.disableRemoteMethodByName('replaceById', true);
	Competition.disableRemoteMethodByName('upsertWithWhere', true);
	Competition.disableRemoteMethodByName("exists", true);

	Competition.prototype.scheduleMatches = function (id, cb) {
		Competition.findById(id, { include: { "relation": "team", "scope": { "fields": ["id"] } } }, (err, res) => {
			res = res.toJSON()
			let teams = res.team
			if (!teams || (teams && !teams.length)) {
				return cb("No Teams are participating in competition")
			}
			else if (teams && teams.length == 1) {
				return cb("Can not Schedule matches only one team is participating in competition")
			}
			for (const homeTeam of teams) {
				for (const guestTeam of teams) {
					if (homeTeam.name != guestTeam.name) {
						console.log(`====== home team: ${homeTeam.name} ========== guest tea: ${guestTeam.name}`)
						Competition.app.models.Match.create({
							"homeTeam": homeTeam.name,
							"guestTeam": guestTeam.name,
							"competitionId": id
						}, (err2, res2) => {
							if (err2) {
								return cb(err2)
							}
						})
					}
				}
			}
			return cb(null, `Matches Scheduled`)
		})
	}
};

