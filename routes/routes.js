const express = require('express');
const router = express.Router();

// Post
router.post('/post', (req, res) => {
    res.send(`POST API`);
});

// GetAll
router.get('/getAll', (req, res) => {
    res.send(`GetAll API`);
});

// Get by id
router.get('/getOne/:id', (req, res) => {
    res.send(`Get by ID API ${req.params.id}`);
});

// Update
router.patch('/update/:id', (req, res) => {
    res.send(`Updade by ID API`);
});

// Delete
router.delete('/delete/:id', (req, res) => {
    res.send(`Delete by ID API`);
});


module.exports = router
