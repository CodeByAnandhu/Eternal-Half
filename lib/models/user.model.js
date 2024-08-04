import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    userId: { type: String  },
    firstName: { type: String},
    lastName: { type: String },
    email: { type: String ,unique: true},
    password: { type: String },
    phone:{ type: String },
    gender: { type: String,},
    dateOfBirth: { type: Date, },
    age: { type: Number },
    about: { type: String },
    country: { type: String },
    state: { type: String },
    city: { type: String },
    intrests: { type: [String]  },
    profilePic: { type: String},
    lookingFor: { type: String },
    preferredGender: { type: [String] },
    preferredAgeFrom: { type: String },
    preferredAgeTo: { type: String },
    questions : { type: [String] },
    createdAt: { type: Date, default: Date.now },
    isBlocked: { type: Boolean, default: false },
    accountHidden: { type: Boolean, default: false },
    theme: { type: String, default: 'light' },
    mood: { type: String, },
    isAdmin: { type: Boolean, default: false }

});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;

