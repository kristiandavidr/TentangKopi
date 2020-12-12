const express = require('express');
const router = express.Router();

const userSchema = require('../../models/user');

router.get('/user', async function (req, res) {
    userSchema.find().then((userSchema) => {
        res.json(userSchema)
    })
});
router.post('/user', async function (req, res) {
    var newUser = new userSchema({
        email: req.body.email,
        password: req.body.password
    });
    await newUser.save();
    console.log('data saved');
});
router.post('/signin', async function (req, res) {
    const {
        email,
        password
    } = req.body;
    try {
        const user = await userSchema.findOne({
            email
        });
        if (!user)
            return res.status(400).json({
                message: "no pass"
            });

        const usrPassword = await userSchema.findOne({
            password
        });
        if (!usrPassword)
            return console.log('wrong password');
        console.log('Logged In')
        res.redirect('/');
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
});

function getAll() {
    return userSchema.find();
}
module.exports = router;