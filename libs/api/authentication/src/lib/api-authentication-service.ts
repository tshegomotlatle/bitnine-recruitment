import { PrismaClient } from '@prisma/client'
import { log } from 'console'

import mongoose from 'mongoose';

async function connectDB() {
    const mongooseDB = mongoose.connect("mongodb://127.0.0.1:27017/BitnineDB");
}

connectDB().catch(err => console.log(err));

const UserSchema = new mongoose.Schema({
    contactNo : String,
    name: String,
    surname: String,
    email: String,
    password: String
});
const Users = mongoose.model('User', UserSchema);


export async function createUser(name: string, surname: string, email: string, contactNo: string, password: string) {
    // const allUsers = await prisma.user.findMany()
    // console.log(allUsers)
    // return allUsers;
    const user = new Users({
        name: name,
        surname: surname,
        contactNo: contactNo,
        email: email,
        password: password
    })
    await user.save();
   return user;
}