const express = require("express");
const router = express.Router();

const GeminiController=require('../controller/gemini.controller');

router.post("/prompt", GeminiController.createPrompt);

module.exports = router;