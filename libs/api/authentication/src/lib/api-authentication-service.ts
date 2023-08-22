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
        contactNo: user.contactNo,
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

export async function getUserEmail(email :string){  
    const query = await Users.findOne({
    email: email
  });

  if (query?.email !== "")
    return query;
  else
    return null;
  
  }

export async function getUserContact(contact :string){  
    const query = await Users.findOne({
    contactNo: contact
  });

  if (query?.contactNo !== "")
    return query;
  else
    return null;
  
  }

export async function login(email :string, password: string){  
    const user = await getUserEmail(email);
      // console.log(user);
    
    if (user)
    {
      const hashedPassword = createHmac("sha256", user.salt + password).digest('hex');
      // console.log(hashedPassword);
      if (hashedPassword == user.password)
        return true;
      else
        return false;
    }
    else
      return false;
  
  }

  export async function updateUser(user : User)
  {
     const result = await Users.findOneAndUpdate(
      {email: user.email},
      {name: user.name,
      surname: user.surname
    },
     )
     console.log(result);
     

     if (result)
     {
       if (result.acknowledged && result.modifiedCount > 1) 
       return true;
      else
       return false;
     }
  }