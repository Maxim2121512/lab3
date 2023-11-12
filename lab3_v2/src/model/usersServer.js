const JsonManipulator = require('./jsonManipulator');
const usersJsonFilePath = "./src/jsons/users.json";


const usersJson = new JsonManipulator(usersJsonFilePath);

class UsersServer {

    getAllUsers() {
        return usersJson.data;
    }

    editUser(data) {
        usersJson.editElement(data);
    }

    getUserFriends(id) {
        const friendsId = usersJson.getElementById(id, "friends");
        return usersJson.getObjectsById(friendsId);
    }

    getUserFriendsNews(id) {
        const friendsId = usersJson.getElementById(id, "friends");
        return usersJson.getObjectsById(friendsId);
    }

    getUser(id) {
        console.log(usersJson.getObjectsById(id));
        return usersJson.getObjectById(id);
    }
}


module.exports.usersServer = new UsersServer();