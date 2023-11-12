
const {usersServer} = require("../model/usersServer");
const {join} = require("path");


class UsersController {
    getAllUsers(req, res) {
        res.json(usersServer.getAllUsers());
    }

    getUsersPage(req, res) {
        res.sendFile(join(__dirname, '..', '..', 'dist/html', 'users.html'));
    }

    getUserFriends(req, res) {
        const id = req.query.id;
        console.log(id);
        res.json(usersServer.getUserFriends(id));
    }

    getFriendsPage(req, res) {
        res.sendFile(join(__dirname, '..', '..', 'dist/html', 'friends.html'));
    }

    getNewsPage(req, res) {
        res.sendFile(join(__dirname, '..', '..', 'dist/html', 'news.html'));
    }

    editUser(req, res) {
        const userData = req.body;
        console.log(userData);
        usersServer.editUser(userData);
        res.sendStatus(200);
    }

    getUserFriendsNews(req, res) {
        const id = req.query.id;
        res.json(usersServer.getUserFriendsNews(id));
    }

    getUser(req, res) {
        const id = req.query.id;
        res.json(usersServer.getUser(id));
    }
}


module.exports.usersController = new UsersController();