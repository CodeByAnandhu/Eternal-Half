import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    id: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phone:{ type: String, required: true },
    gender: { type: String, required: true ,enum: ['male', 'female', 'other']},
    dateOfBirth: { type: Date, required: true },
    age: { type: Number, required: true },
    about: { type: String, required: true },
    country: { type: String, required: true },
    state: { type: String, required: true },
    city: { type: String, required: true },
    intrests: { type: [String] , required: true },
    profilePic: { type: String, required: true },
    lookingFor: { type: [String] , required: true },
    preferredGender: { type: [String] , required: true },
    preferredAgeRange: { type: [String] , required: true },
    createdAt: { type: Date, default: Date.now },
    isBlocked: { type: Boolean, default: false },
    accountHidden: { type: Boolean, default: false },
    theme: { type: String, default: 'light' },
    mood: { type: String, enum: ['Happy', 'Sad' , 'Angry' , 'Crazy'] },
    isAdmin: { type: Boolean, default: false }

});

const User = mongoose.model.User || mongoose.model('User', userSchema);

export default User;