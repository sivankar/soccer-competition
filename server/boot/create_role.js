module.exports = function (app) {
	var User = app.models.User;
	var Role = app.models.Role;
	var RoleMapping = app.models.RoleMapping;

	User.create([
		{ username: 'admin', email: 'admin@nomail.com', password: 'admin' },
	], function (err, users) {
		if (err) {
			console.log("err occured while creating user")
			return
			// throw err
		};

		console.log('Created users:', users);

		//create the admin role
		Role.create({
			name: 'admin'
		}, function (err, role) {
			if (err) {
				console.log("err occured while creating role")
				return
			}

			console.log('Created role:', role);

			//make bob an admin
			role.principals.create({
				principalType: RoleMapping.USER,
				principalId: users[0].id
			}, function (err, principal) {
				if (err) {
					console.log("err occured while creating principal")
					return
				};
				console.log('Created principal:', principal);
			});
		});
	});
};