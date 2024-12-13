const express = require("express");
const mockingService = require("../services/mockingService");

const router = express.Router();

// Mover el endpoint de /mockingpets
router.get("/mockingpets", (req, res) => {
  res.json({ message: "Mocking pets endpoint" });
});

// Endpoint para generar 50 usuarios con el mismo formato
router.get("/mockinguser", (req, res) => {
  const users = mockingService.generateUsers(50);
  res.json(users);
});

// Endpoint POST /generateData
router.post("/generateData", (req, res) => {
  const { users, pets } = req.body;
  const generatedData = mockingService.generateData(users, pets);
  res.json(generatedData);
});

//Metodo GET para obtener usuarios
router.get("/users", (req, res) => {
  res.json(generatedUsers);
});

//Metodo GET para obtener pets
router.get("/pets", (req, res) => {
  res.json(generatedPets);
});

module.exports = router;
