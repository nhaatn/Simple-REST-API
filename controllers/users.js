import { v4 as uuidv4 } from 'uuid';

// A mock database
let users = [];

// ALL ROUTES in here are starting with /users
//
// GET = find all users
// POST = creates a user
// GET = find user details
// DELETE = delete data
// PATCH = updates a user **PARTIAL EDITS ONLY**

// PUT = **when you want to COMPLETELY overwrite something**


export const getUsers = (req, res) => { // GET
    res.send(users);
};


export const createUser = (req, res) => { // POST
    const user = req.body;

    users.push({ ...user, id: uuidv4() }); // add user to users array, also added the userID

    res.send(`User with the name ${user.firstName} ADDED to the database!`);
}


export const getSingleUser = (req, res) => { // GET
    const { id } = req.params;
    
    const foundUser = users.find((user) => user.id === id);
    
    res.send(foundUser);
}


export const deleteUser = (req, res) => { // DELETE
    const { id } = req.params;

    users = users.filter((user) => user.id !== id);

    res.send(`User with the id ${id} DELETED from the database.`);
};


export const updateUser = (req, res) => { // PATCH
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;
    
    const user = users.find((user) => user.id === id); // Specify which user I want you update
    
    if(firstName) user.firstName= firstName;
    if(lastName) user.lastName= lastName;
    if(age) user.age= age;

    res.send(`User with the ${id} has been UPDATED`);
}