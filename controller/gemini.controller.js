const express = require("express");
const run = require("../geminiApi");
module.exports.createPrompt = async (req, res) => {
    try {
        const { prompt } = req.body;
        const result = await run(prompt)
        res.json(result)
    } catch (error) {
        res.status(500);
        res.json({ error: error });
    }
}