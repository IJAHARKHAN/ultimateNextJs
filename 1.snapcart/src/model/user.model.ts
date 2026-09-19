import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     role: { type: String, enum: ["admin", "user", "deliveryBoy"], default: "user" },
//     isActive: { type: Boolean, default: true },
//     lastLogin: { type: Date, default: Date.now },
//     phone: { type: String },
//     city: { type: String },
//     image: { type: String, default: "" }

// }, { timestamps: true })

// const User = mongoose.model("User", userSchema)

// export default User


/// khan7oct_db_user  --- userID

// 1ZiX2DfpQrXadN3W  --- Password

// mongodb+srv://<db_username>:1ZiX2DfpQrXadN3W@cluster0.jrdf315.mongodb.net/   -- for VS Code
interface IUser {
    _id?: mongoose.Types.ObjectId;
    name: string;
    email: string;
    password: string;
    mobile?: string;
    role: "user" | "deliveryBoy" | "admin";
}

const userSchema = new mongoose.Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    mobile: { type: String, required: false },
    role: { type: String, enum: ["user", "deliveryBoy", "admin"], default: "user" }
}, { timestamps: true })


const User = mongoose.models.User || mongoose.model<IUser>("User", userSchema)

export default User  
