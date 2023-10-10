const { body, param, query } = require('express-validator');

const requirements = {
    createActivity: [
        body('title').isString().isLength({ min: 3 }),
    ],
    getActivities: [
        query('page').isInt({ min: 1 }).optional({ nullable: true }),
        query('limit').isInt({ min: 10, max: 50 }).optional({ nullable: true })
    ],
    getActivity: [
        param('id').isInt({ min: 1 }),
    ]
}

module.exports = requirements
