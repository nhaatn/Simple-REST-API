import express from 'express';
import { createUser, getUsers, getSingleUser, deleteUser, updateUser } from '../controllers/users.js';
const router = express.Router(); // Initialize router


// ALL ROUTES in here are starting with /users
//
// GET = find all users
// POST = creates a user
// GET = find user details
// DELETE = delete data
// PATCH = updates a user **PARTIAL EDITS ONLY**

// PUT = **when you want to COMPLETELY overwrite something**


router.get('/', getUsers);

router.post('/', createUser);

router.get('/:id', getSingleUser);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);

export default router;