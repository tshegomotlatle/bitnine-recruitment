import {testDB} from './api-authentication-service'
module.exports = function (app : any) {

  app.get('/login', async function (req : any, res : any) {
    const out = await testDB();
    res.send({ message: out });
  });

  //other routes..
}