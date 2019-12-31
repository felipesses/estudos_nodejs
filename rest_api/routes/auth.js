const router = require('express').Router()
const User = require('../model/User')
const { registerValidation, loginValidation } = require('../validation')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// REGISTER

router.post('/register', async (req, res) => {

    //validation
    const { error } = registerValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    //check if user is in DB
    const emailExists = await User.findOne({ email: req.body.email })
    emailExists ? res.status(400).send('Email already exists') : null

    // hash password

    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(req.body.password, salt)

    // create user
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword
    })
    try {
        const savedUser = await user.save()
        res.send({ user: user._id })
    } catch (error) {
        res.status(400).send(error)
    }
})


// LOGIN


router.post('/login', async (req, res) => {
    const { error } = loginValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    const user = await User.findOne({ email: req.body.email })
    !user ? res.status(400).send('Invalid email or password') : null

    const validPass = await bcrypt.compare(req.body.password, user.password)
    if (!validPass) return res.status(400).send('Invalid email or password')

    //create and assign a token

    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET)
    res.header('auth-token', token).send(token)

    // res.send('Logged in!')
})


module.exports = router
