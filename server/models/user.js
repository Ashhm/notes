import mongoose, {Schema} from 'mongoose';
import bcrypt from 'bcrypt-as-promised';

const UserSchema = new Schema({
    login: {type: String, unique: true, lowercase: true, index: true, required: true},
    password: {type: String, required: true},
    email: {type: String, lowercase: true, required: false, default: '@'},
    createdAt: {type: Date, default: Date.now()}
});

UserSchema.pre('save', function (next) {
        if (!this.isModified('password')) {
            return next();
        }

        //pwd crypt generation
        bcrypt.genSalt(10)
            .then(result => {
                return bcrypt.hash(this.password, result);
            })
            .then(result => {
                this.password = result;
                next();
            })
            .catch(err => {
                console.error(err);
                next();
            });
    }
);

//do not use () => {} build. prevent this.
UserSchema.methods.comparePasswords = function(password) {
    return bcrypt.compare(password, this.password);
};


export default mongoose.model('User', UserSchema);