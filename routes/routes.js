const express = require('express');
const router = express.Router();
const Model = require('../model/model');            // Adicionado em 17/10

// Post
router.post('/post', async (req, res) => {          // Adicionado async: não espera resposta do post 17/10
    //res.send(`POST API`);                         // Apagado em 17/10
    const data = new Model({                        // conforme o Model criado 17/10 
        name: req.body.name,                        // Adicionado em 17/10
        age: req.body.age                           // Adicionado em 17/10
    })

    try{                                                // Adicionado em 17/10
        const dataToSave = await data.save()            // Adicionado em 17/10  
        res.status(200).json(dataToSave);               // Adicionado em 17/10

    }
    catch (error) {                                     // Adicionado em 17/10
        res.status(400).json({message: error.message})  // Adicionado em 17/10

    }                                                   // Adicionado em 17/10

});

// GetAll
router.get('/getAll', async (req, res) => {                   // adicionado async em 17/10
    //res.send(`GetAll API`);

    try{                                                        // Adicionado em 17/10
        const data = await Model.find()                          // Adicionado em 17/10
        res.json(data)                                           // Adicionado em 17/10
    }
    catch( error ){                                              // Adicionado em 17/10
        res.status(500).json({message:error.message})            // Adicionado em 17/10
    }

});

// Get by id
router.get('/getOne/:id', async (req, res) => {                    // adicionado async em 17/10
    // res.send(`Get by ID API ${req.params.id}`);                // Removido em 17/10

    try{
        const data = await Model.findById(req.params.id)         // Mandando via parâmetros
        res.json(data)                                           // Adicionado em 17/10
    }
    catch(error){                                                // Adicionado em 17/10
        res.status(500).json({message:error.message})            // Adicionado em 17/10
    }



});

// Update
router.patch('/update/:id', async (req, res) => {                     // adicionado async em 17/10
    //res.send(`Updade by ID API`);

    try{                                                             // Adicionado em 17/10
        const id = req.params.id                                     // Adicionado em 17/10
        const updateData = req.body                                  // Adicionado em 17/10
        const options = {new: true}                                   // mostra o registro atualizado se a promisee der certo

        const result = await Model.findByIdAndUpdate(id, updateData, options)  // Adicionado em 17/10
        res.send(result)
    }
    catch(error){                                                       // Adicionado em 17/10
        res.status(400).json({message:error.message})                   // Adicionado em 17/10
    }
});

// Delete
router.delete('/delete/:id', async (req, res) => {
    //res.send(`Delete by ID API`);

    try{                                                            // Adicionado em 17/10
        const id = req.params.id                                    // Adicionado em 17/10
        const data = await Model.findByIdAndDelete(id)               // Adicionado em 17/10
        res.send(`Documento com ${data.name} foi apagado...`)        // mostra o registro atualizado se a promisee der certo
        
    }
    catch(error){                                                    // Adicionado em 17/10
        res.status(400).json({message: error.message})              // Adicionado em 17/10
    }

});


module.exports = router
