module.exports = function (app,path,fs) {
    //Route to manage user logins


    app.post('/api/auth', function (req, res) {
        if (!req.body) {
            return res.sendStatus(400)
        }
        fs.readFile('json/users.json','utf8',(err,data)=>{
            if (err) {
              console.error(err)
              return
            }
            try{
                //console.log(data);
              let users = JSON.parse(data);
              //console.log(users);
              users = users.user;
              
              
    
            var customer = {};
    
            
            customer.id=0;
    
            for (let i = 0; i < users.length; i++) {
                if (req.body.email == users[i].email && req.body.upwd == users[i].pwd) {
                    
                    customer.id = users[i].id;
                    customer.email = users[i].email;
                    customer.username = users[i].username;
                    customer.avatar = users[i].avatar;
                    customer.pwd = "";
    
                }
            }
            res.send(customer);
            
            }catch(err){
              console.log("Error parsing the userdata at login");
            }
              
           })

    });
}
