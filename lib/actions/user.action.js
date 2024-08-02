'use server';

import User from "../models/user.model";
import { connectToDB } from "../mongoose";

export async function updateUser(
    userId,
    firstName,
    lastName,
    password,
    gender,

){
 connectToDB();

 await User.findOneAndUpdate(
    { id:userId },
    { firstName:firstName },
    { lastName:lastName },
    { email:email },
    { password:password },
    { gender:gender },

);
}