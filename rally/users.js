const UserApiService = require("./services/users.service");

/**
 * Calling get user data api
 */
UserApiService.getUser()
    .then(response => {
        let user = response.data.User

        // This is the user data
        let userData = {
            UserName: user.UserName,
            EmailAddress: user.EmailAddress,
            FirstName: user.FirstName,
            LastName: user.LastName,
            Role: user.Role,
            NetworkID: user.NetworkID,
            EmailNotificationEnabled: user.EmailNotificationEnabled,
            c_InmyAccess: user.c_InmyAccess
        }

        console.log(userData)

        /**
        * Calling create user api
        */

        /*

        UserApiService.postUser(userData)
            .then(data => {
                // Here we output the response from post user api
                console.log(JSON.stringify(data))

            })
            .catch(err => console.log(err))
        */
    })
    .catch(err => console.log(err));





