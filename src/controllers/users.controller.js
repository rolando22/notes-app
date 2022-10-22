const userCtrl = {
    renderSignupForm: (req, res) => {
        res.render('users/signup')
    },
    signup: (req, res) => {
        res.send('sigup');
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