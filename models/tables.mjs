import mongoose from 'mongoose'
const tables = new mongoose.Schema({
    tableID: {
        type: String
    },
    isDone: {
        type: Boolean
    },
    players: {
        type: Object
    },
    ended: {
        type: String
    },
    created: {
        type: String
    }
})
export default mongoose.models.tables || mongoose.model('tables', tables)