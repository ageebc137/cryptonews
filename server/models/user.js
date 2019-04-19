const mongoose = require('mongoose');
const _ = require('lodash');
const bcrypt = require('bcrypt');

var UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minLength: 1,
        trim: true
    },
    password: {
        type: String,
        minlength: 6
    },
    bookmarks: {
        type: Array
    }
});

UserSchema.methods.toJSON = function () {
    let user = this;
    let userObject = user.toObject();
    return _.pick(userObject, ['username', 'bookmarks']);
}

UserSchema.statics.findByCredentials = function(username, password) {
    let User = this;
    
    return User.findOne({username}).then((user) => {
        if (!user) {
            return Promise.reject();
        }
        return new Promise((resolve, reject) => {
            bcrypt.compare(password, user.password, (err, res) => {
                if (res) {
                    resolve(user);
                }else{
                    reject();
                }
            });
        });
    });
}

UserSchema.pre('save', function(next) {
    var user = this;
    if (user.isModified('password')) {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(user.password, salt, (err, hash) => {
                user.password = hash;
                next();
            }); 
        });
    }else{
        next();
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = {User}