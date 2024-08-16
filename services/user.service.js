//init Database connection.
const db = require('../db')

//getting all useres
module.exports.getAllUsers = async() =>{
    const [records] = await db.query("SELECT * FROM users")
    return records
}

//getting user buy ID
module.exports.getAllUserById = async(id) =>{
    const [record] = await db.query("SELECT * FROM users WHERE id = ?",[id])
    return record
}

//deleteing an user
module.exports.deleteUser = async(id) => {
    const [{affectedRows}] = await db.query("DELETE FROM users WHERE id = ?", [id])
    return affectedRows
}

//Add user or edit 
module.exports.addOrEditUser = async(obj, id = 0) => {
    const [[[{affectedRows}]]] = await db.query("CALL usp_user_add_or_edit(?,?,?,?,?,?,?)",
    [id, obj.name, obj.email, obj.password, obj.contacts, obj.age, obj.isActive])
    return affectedRows
}

//edit email
module.exports.editEmail = async(obj, id = 0) => {
    const [[[{affectedRows}]]] = await db.query("CALL usp_edit_email(?,?)",
    [id, obj.email])
    return affectedRows
}

//edit name
module.exports.editName = async(obj, id = 0) => {
    const [[[{affectedRows}]]] = await db.query("CALL usp_edit_name(?,?)",
    [id, obj.name])
    return affectedRows
}

//edit password
module.exports.editPassword = async(obj, id = 0) => {
    const [[[{affectedRows}]]] = await db.query("CALL usp_edit_password(?,?)",
    [id, obj.password])
    return affectedRows
}

//edit contacts
module.exports.editContacts = async(obj, id = 0) => {
    const [[[{affectedRows}]]] = await db.query("CALL usp_edit_contacts(?,?)",
    [id, obj.contacts])
    return affectedRows
}

//edit age
module.exports.editAge = async(obj, id = 0) => {
    const [[[{affectedRows}]]] = await db.query("CALL usp_edit_age(?,?)",
    [id, obj.age])
    return affectedRows
}

// edit isActive
module.exports.editIsActive = async(obj, id = 0) => {
    const [[[{affectedRows}]]] = await db.query("CALL usp_edit_isActive(?,?)",
    [id, obj.isActive])
    return affectedRows
}