import { createUser, getUserContact, getUserEmail, login } from "./api-authentication-service";
import {User} from 'libs/services/src/lib/user/user'

module.exports = function (app : any) {

  app.get('/api/user/login', async function (req : any, res : any) {
    // const out = await testDB();
    res.send({ message: "working" });
  });

  app.post('/api/user/getUser', async function (req : any, res : any) {
    if (req.body)
    {
      const user = getUserEmail(req.body.email)
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
      const userEmail = await getUserEmail(req.body.user.email); 
      const userContact = await getUserContact(req.body.user.number); 
      // console.log(user);
      if (userEmail == null && userContact == null)
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

  app.post('/api/user/login', async function (req : any, res : any) {
    if (req.body)
    {
      console.log(req.body.email);
      console.log(req.body.password);
      const result = await login(req.body.email, req.body.password)
      res.send(result);
    }
    else
    {
      res.send(false);
    }
    
  });
  

  //other routes..
}