const User = require('../models/User');

const userCtrl = {
    renderSignupForm: (req, res) => {
        res.render('users/signup')
    },
    signup: async (req, res) => {
        const { name, email, password, confirm_password } = req.body;
        const errors = [];
        const success = [];
        if (password != confirm_password) errors.push({ text: 'Password do not match.' });
        if (password.length < 4) errors.push({ text: 'Password must be at least 4 characters.' });
        if (errors.length > 0) {
            res.render('users/signup', { errors, name, email });
        } else {
            const emailUser = await User.findOne({ email: email });
            if (emailUser) {
                errors.push({ text: 'The email is already in use.' });
                res.render('users/signup', { errors, name, email });
            } else {
                const newUser = new User({ name, email, password });
                newUser.password = await newUser.encryptPassword(password);
                await newUser.save();
                success.push({ text: 'You are registered.' });
                res.render('users/signin', { success });
            }
        };
    },
    renderSigninForm: (req, res) => {
        res.render('users/signin');
    },
    signin: (req, res) => {
        res.send('signin');
    },
    logout: (req, res) => {
        res.send('logout');
    },
}

module.exports = userCtrl;
