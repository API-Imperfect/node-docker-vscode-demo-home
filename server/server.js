require("dotenv").config();
const express = require("express");

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", async (req, res) => {
    res.json({
        Hi: "Welcome to the Docker VS Code Video",
    });
});

app.listen(
    PORT,
    console.log(
        `Server listening in ${process.env.NODE_ENV} mode on port ${PORT}`
    )
);
