import express from 'express'
import User from '../model/user.js'

const router = express.Router()

router.get('/users', async (req, resp) => {
    const listUsers = await User.findAll();
    return resp.send(listUsers)
})

router.post('/user', async(req, resp) => {
    const { body } = req;

    const user = await User.create(
        body
    )
    return resp.status(201).send(user)
})

router.put('/user/:id', async(req, resp) => {
    const { body } = req;

    const user = await User.update(body, {where: { id: req.params.id }})
    
    return resp.status(200).send(user)
})

router.delete('/user/:id', async(req, resp) => {
    
    const user = User.destroy({ where: { id: req.params.id }});

    return resp.status(200).send(user)
})

export default router