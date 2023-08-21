import { createUser, getUser } from "./api-authentication-service";
import {User} from 'libs/services/src/lib/user/user'

module.exports = function (app : any) {

  app.get('/api/user/login', async function (req : any, res : any) {
    // const out = await testDB();
    res.send({ message: "working" });
  });

  app.post('/api/user/getUser', async function (req : any, res : any) {
    if (req.body)
    {
      const user = getUser(req.body.email)
      res.send({user: user})
    }
    else
    {
      res.send({ user: {}});
    }
    
  });

  app.post('/api/user/createUser', async function (req : any, res : any) {
    if (req.body)
    {
      const user = await getUser(req.body.user.email); 
      console.log(user);
      if (user == null)
      {
        createUser(req.body.user).then(
          ()=>{
            res.send(true);
          }
        )
        .catch(
          (err) =>
          {
            console.log(err);
            res.send(false)
          }
        );      
      }
      else
      {
        res.send(false);
      }
    }
    else
    {
      res.send({ user: {}});
    }
    
  });
  

  //other routes..
}