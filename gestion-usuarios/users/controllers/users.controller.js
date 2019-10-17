/**
 * //TODO:
 * replace salt/ hash as a function
 */
function saltHash64 () {
    let salt = crypto.randomBytes(16).toString('base64');
    let hash = crypto.createHmac('sha512', salt)
}

exports.insert = (req, res) => {
    //TODO:
    let salt = crypto.randomBytes(16).toString('base64');
    let hash = crypto.createHmac('sha512', salt)
        .update(req.body.password)
        .digest('base64');
    req.body.password = salt + '$' + hash;
    req.body.permissionLevel = 1;
    UserModel.createUser(req.body)
        .then((result) => {
            res.status(201).send({id: result._id});
        });
};

exports.getById = (req, res) => {
    UserModel.findById(req.params.userId)
        .then((result) => {
            res.status(200).send(result);
        });
};

exports.patchById = (req, res) => {
    if (req.body.password) {
        //TODO:
        let salt = crypto.randomBytes(16).toString('base64');
        let hash = crypto.createHmac('sha512', salt)
            .update(req.body.password).digest('base64');
            req.body.password = salt + '$'
    }
    UserModel.patchUser(req.params.userId, req.body).then((result) =>{
        res.status(204).send({});
    });
};