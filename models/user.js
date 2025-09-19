const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    }
})

// const options = {
//     errorMessages: {
//         UserExistsError: 'Username sudah terdaftar, gunakan username lain.',
//         IncorrectPasswordError: 'Password salah.',
//         IncorrectUsernameError: 'Username tidak ditemukan.'
//     }
// };

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema)