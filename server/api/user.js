const router = require('express').Router()
const { User } = require('../db/models')
const { isAdmin } = require('./routeProtectors')

//GET ALL USERS
router.get('/', isAdmin, async (req, res, next) => {
  try {
    const users = await User.findAll()
    res.json(users)
  } catch (err) {
    next(err)
  }
})

// GET USER BY ID
router.get('/:id', isAdmin, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id, {
      // include: [{ model: Order, as: 'orders' }],
    })
    res.json(user)
  } catch (error) {
    next(error)
  }
})

//MODIFY USER
router.put('/:id', isAdmin, async (req, res, next) => {
  try {
    const updateUser = await User.update(req.body, {
      returning: true,
      where: {
        id: req.params.id,
      },
    })
    res.send(updateUser)
  } catch (error) {
    next(error)
  }
})

// DELETE USER ONLY BY ADMIN
router.delete('/:id', isAdmin, async (req, res, next) => {
  try {
    await User.destroy({
      where: {
        id: req.params.id,
      },
    })
    res.sendStatus(204)
  } catch (error) {
    next(error)
  }
})

module.exports = router
