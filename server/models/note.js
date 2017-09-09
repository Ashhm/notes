import mongoose, {Schema} from 'mongoose';

const NoteSchema = new Schema({
    title: {type: String},
    text: {type: String, required: true},
    color: {type: String},
    createdAt: {type: Date, default: Date.now()},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}

});

export default mongoose.model('Note', NoteSchema);