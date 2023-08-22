import { createUser, getUserContact, getUserEmail, login, updateUser } from "./api-authentication-service";
import {User} from 'libs/services/src/lib/user/user'
import * as jwt from 'jsonwebtoken'

module.exports = function (app : any) {

  app.get('/api/user/login', async function (req : any, res : any) {
    // const out = await testDB();
    res.send({ message: "working" });
  });

  app.post('/api/user/getUser', async function (req : any, res : any) {
    if (req.body)
    {
      const user = await getUserEmail(req.body.email)
      res.send({user: user})
    }
    else
    {
      res.send({ user: {}});
    }
    
  });

  app.post('/api/user/getJWTToken', async function (req: any, res: any) {
    console.log("HERE JO");
    const SECRET = 'Bitnine_Recruitment';
    
    if (req.body) {
      // const user = await getUserEmail(req.body.email);
      const token = jwt.sign(
        {
          user: req.body.email,
        },
        SECRET
      );
      // console.log(token);
      // console.log(jwt.verify(token, SECRET));
      

      res.send({ token: token });
    } else {
      res.send({ token: null });
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
      // console.log(req.body.email);
      // console.log(req.body.password);
      const result = await login(req.body.email, req.body.password)
      res.send(result);
    }
    else
    {
      res.send(false);
    }
    
  });

  app.post('/api/user/updateUser', async function (req : any, res : any) {
    if (req.body)
    {
      // console.log(req.body.email);
      // console.log(req.body.password);
      const result = await updateUser(req.body.user)
      res.send(result);
    }
    else
    {
      res.send(false);
    }
    
  });
  

  //other routes..
}