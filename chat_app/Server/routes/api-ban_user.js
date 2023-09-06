module.exports = function (app,path,fs) {
    //Route to manage user logins


    app.post('/api/ban_user', function (req, res) {
        if (!req.body) {
            return res.sendStatus(400)
        }
        const data = fs.readFileSync('/json/users.json');

        const jsonData = JSON.parse(data);

        jsonData.user.role = "ban";

        fs.writeFileSync('data.json', JSON.stringify(jsonData));

    });
}
