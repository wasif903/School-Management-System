import mongoose from 'mongoose';
const { Schema } = mongoose;

const AdminSchema = new Schema({
    username: String,
    email: String,
    password: String,
}, { timestamps: true });

export default mongoose.model('admin', AdminSchema)