import { PrismaClient } from '@prisma/client'
import { log } from 'console'
import { User } from 'libs/services/src/lib/user/user';
import mongoose from 'mongoose';
import {createHmac} from 'node:crypto';

async function connectDB() {
    const mongooseDB = mongoose.connect("mongodb://127.0.0.1:27017/BitnineDB");
}

connectDB().catch(err => console.log(err));

const UserSchema = new mongoose.Schema({
    contactNo : String,
    name: String,
    surname: String,
    email: String,
    salt: String,
    password: String
});
const Users = mongoose.model('User', UserSchema);


function makeSalt(length : number) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

export async function createUser(user : User) {
    // const allUsers = await prisma.user.findMany()
    // console.log(allUsers)
    // return allUsers;
    const salt = makeSalt(16);
    const saltedPassword = createHmac("sha256",salt + user.password).digest('hex');
    console.log(saltedPassword);
    const newUser = new Users({
        name: user.name,
        surname: user.surname,
        contactNo: user.number,
        email: user.email,
        salt: salt,
        password: saltedPassword
    })
   newUser.save().then(
    () =>{
       return true; 
    }
   ).catch(
    () => {
        return false
    }
   )
}

export async function getUser(email :string){  
    const query = await Users.find({
    email: email
  });

  if (query.length > 0)
    return query;
  else
    return null;
  
  }