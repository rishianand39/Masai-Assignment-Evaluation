const express = require('express');
const User = require('../models/user.model');
const { body, validationResult } = require('express-validator');
// console.log(body());
const router = express.Router();

router.get('/', async(req, res) => {
    try {
        const user = await User.find().lean().exec();
        return res.status(201).send(user);
    } catch (err) {
        return res.status(500).send({ error: err.message });
    }
});

router.post(
    '/',
    body('first_name')
    .trim()
    .not()
    .isEmpty()
    .withMessage("first_name is required. It can't be empty."),

    body('last_name').trim().not().isEmpty().withMessage("last_name is required. It can't be empty."),

    body('email')
    .trim()
    .not()
    .isEmpty()
    .withMessage("email can't be left empty.")
    .isEmail()
    .custom(async(value) => {
        const user = await User.findOne({ email: value });
        if (user) {
            throw new Error('Email is already taken. Try another one.');
        }
        return true;
    }),

    body('pincode')
    .trim()
    .not()
    .isEmpty()
    .withMessage('pincode should not be empty. It must be number of 6 digits')
    .custom((value) => {
        if (value.length != 6) {
            throw new Error('Pincode must be of 6 digits');
        }
        return true;
    }),
    body('age')
    .trim()
    .not()
    .isEmpty()
    .isNumeric()
    .withMessage('age should not be empty.')
    .custom((value) => {
        if (value < 1 || value > 100) {
            throw new Error('age must be between 1 to 100');
        }
        return true;
    }),

    body('gender').trim().not().isEmpty().withMessage('gender must be filled'),

    async(req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).send({
                    errors: errors.array(),
                });
            }
            const user = await User.create(req.body);
            return res.status(201).send(user);
        } catch (err) {
            return res.status(500).send(err);
        }
    }
);

module.exports = router;