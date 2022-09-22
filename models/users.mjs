import mongoose from 'mongoose'
const users = new mongoose.Schema({
    useID: {
        type: String,
    },
    username: {
        type: String,
    },
    password: {
        type: String,
    },
    email: {
        type: String,
    },
    created: {
        type: String
    }
})
export default mongoose.models.users || mongoose.model('users', users)