const express = require('express')
const router = express.Router()
const Project = require('../models/project')
const mongoose = require('mongoose')

// get all projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error', details: err.message });
  }
});

// get by id
router.get('/:id', async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }
    res.json(project);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error', details: err.message });
  }
});

// add a new project
router.post('/', async (req, res) => {
  const {  projectName,projectImage,projectDescription,projectCategory,projectDate,available } = req.body;

  const project = new Project({
    
      projectName,
      projectImage,
      projectDescription,
      projectDate,
      projectCategory,
      available

    
  });

  try {
    const savedProject = await project.save();
    res.json(savedProject);
    console.log("Project added successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send('Error saving project data');
  }
});


//  update project details
router.patch('/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }

    // Update only the 'sub' field if it exists in the request body
    if (req.body.sub !== undefined) {
      project.sub = req.body.sub;
    }

    const updatedProject = await project.save();
    res.json(updatedProject);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error', details: err.message });
  }
});

module.exports = router