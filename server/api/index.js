const router = require('express').Router()

// routes for each model

router.use('/auth', require('./auth'))
// router.use()

//error 404
router.use((req,res,next) => {
    const err = new Arror('Not found')
    err.status = 404;
    next(err)
})

module.exports = router