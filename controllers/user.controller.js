//importing the express dependency
const express = require('express'),
    //creating a router
    router = express.Router()
//calling/locating the servicefile/module
const service = require('../services/user.service')

//http://localhost:2000/api/users/
router.get('/', async (req, res) => {
    const users = await service.getAllUsers()//call the getAllUsers in the service file
    res.send(users)//responding with the data fetched
})

router.get('/:id', async (req, res) => {
    const user = await service.getAllUserById(req.params.id)//calling the getAllUserByID in a service file
    if(user.length == 0)//Checking is the user was found
        res.status(404).json('no record found with id: '+ req.params.id)
    else
        res.send(user)
})

router.delete('/:id', async (req,res) => {
    const affectedRows = await service.deleteUser(req.params.id)//calling the deleteUser()
    if(affectedRows == 0)
        res.status(404).json('no record found with id: '+ req.params.id)
    else
        res.send('user deleted')
})

router.post('/',async (req,res) => {
    await service.addOrEditUser(req.body)
    res.status(201).send('user created successfully')
})

router.put('/:id', async (req,res)=> {
    const affectedRows = await service.addOrEditUser(req.body, req.params.id)
    if(affectedRows == 0)
        res.status(404).json('no record found with id: '+ req.params.id)
    else
        res.send('user updated successfully')
})

router.patch('/email/:id', async (req,res)=> {
    const affectedRows = await service.editEmail(req.body, req.params.id)
    if(affectedRows == 0)
        res.status(404).json('no record found with id: '+ req.params.id)
    else
        res.send('email updated of user '+ req.params.id +' successfully.')
})

router.patch('/name/:id', async (req,res)=> {
    const affectedRows = await service.editName(req.body, req.params.id)
    if(affectedRows == 0)
        res.status(404).json('no record found with id: '+ req.params.id)
    else
        res.send('name updated of user '+ req.params.id +' successfully.')
})

router.patch('/password/:id', async (req,res) =>{
    const affectedRows = await service.editPassword(req.body, req.params.id)
    if(affectedRows == 0)
        res.status(404).json('no record found with id: '+ req.params.id)
    else
        res.send('password updated of user '+ req.params.id +' successfully.')
})

router.patch('/contacts/:id', async (req,res) =>{
    const affectedRows = await service.editContacts(req.body, req.params.id)
    if(affectedRows == 0)
        res.status(404).json('no record found with id: '+ req.params.id)
    else
        res.send('contacts updated of user '+ req.params.id +' successfully.')
})

router.patch('/age/:id', async (req,res) =>{
    const affectedRows = await service.editAge(req.body, req.params.id)
    if(affectedRows == 0)
        res.status(404).json('no record found with id: '+ req.params.id)
    else
        res.send('age updated of user '+ req.params.id +' successfully.')
})

router.patch('/isActive/:id', async (req,res) =>{
    const affectedRows = await service.editIsActive(req.body, req.params.id)
    if(affectedRows == 0)
        res.status(404).json('no record found with id: '+ req.params.id)
    else
        res.send('isActive updated of user '+ req.params.id +' successfully.')
})

module.exports = router