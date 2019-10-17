const userSchema = new Schema ({
    user: String,
    password: String,
    name: String, 
    lastName: String, 
    phone: Number,
    birthday: Date,
    picture: String,
    permissionLevel: Number
});

const userModel = mongoose.model('Users', userSchema);

exports.createUser = (userData) => {
    const user = new User(userData);
    return user.save();
};

exports.findById = (id) => {
    return User.findById(id)
        .then((result) => {
            result = result.toJSON();
            delete result._id;
            delete result.__v;
            return result;
        });
};

exports.patchUser = (id, userData) => {
    return new Promise((resolve, reject) => {
        User.findById(id, function(err, user){
            if(err) {
                reject(err);
            } 
            for(let i in userData) {
                user[i] = userData[i];
            }
            user.save(function (err, updatedUser) {
                if(err) {
                    return reject(err);
                }
                resolve(updatedUser);
            });
        });
    })
};