'use server';


import { connectToDB } from "../mongoose";
import User from "../models/user.model";
import Questions from "../models/questions.model";
export async function createUser({
  userId,
  email,
  firstName,
  lastName,
  dateOfBirth,
  lookingFor,
}) {
 
  await connectToDB();

  try {
  
    const parsedDateOfBirth = new Date(dateOfBirth);

    const newUser = await User.create({
      userId,
      email,
      firstName,
      lastName,
      dateOfBirth: parsedDateOfBirth,
      lookingFor,
    });
    return { success: true };
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
}


export async function updateUserLocation({
     userId,
     country,
     state,
     city,
   }) {
  
  await connectToDB();
  try {
    await User.updateOne(
      { userId },
      { $set: { country, state, city } }
    );
    return { success: true };
  } catch (error) {
    console.error("Error updating user location:", error);
    throw error;
  }

}



export async function updatePreference({
  userId,
  preferredGender,
  preferredAgeFrom,
  preferredAgeTo,

}) {

  await connectToDB();
  
  try {
   const result=  await User.updateOne(
      { userId: userId },
      {   $set: {
          preferredGender,
          preferredAgeFrom: preferredAgeFrom,
          preferredAgeTo: preferredAgeTo,
        }, }
    );
    
    return { success: true };
  } catch (error) {
    console.error("Error updating user preference:", error);
    throw error;
  }
     
}


export async function sendQuestionsData() {
  await connectToDB();
  try {
    const result = await Questions.find({});
    return result;

  } catch (error) {
    console.error("Error updating user preference:", error);
    throw error;
  }
}




export async function updateInterest({
  userId,
  intrests,
  questions,

}) {
  
  console.log({ questions });

  await connectToDB();

  try {
    await User.updateOne(
      { userId },
      { $set: { intrests, questions } }
    );
    return { success: true };
  } catch (error) {
    console.error("Error updating user preference:", error);
    throw error;
  }

}


export async function updateProfile({
  userId,
  about,
  imageFilePath,
}) {
  console.log('body',{ userId, about, imageFilePath  });
  await connectToDB();

  try {
  const result =  await User.updateOne(
      { userId },
      { $set: { about, profilePic: imageFilePath } }
    );
    console.log('database stored info',result);
    return { success: true };
  } catch (error) {
    console.error("Error updating user profile:", error);
    throw error;
  }
}



export async function updatePhone({ userId, phone }) {

  await connectToDB();
  try {
    await User.updateOne(
      { userId },
      { $set: { phone } }
    );
    return { success: true };
  } catch (error) {
    console.error("Error updating user phone:", error);
    throw error;
  }
}