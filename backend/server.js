const express = require("express");
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const db = new sqlite3.Database("../database/game.db", (err) => {
    if (err) console.error("Database connection error:", err);
    else console.log("Connected to SQLite database.");
});

app.get("/", (req, res) => {
    res.send("StockCryptoGame API is running!");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});