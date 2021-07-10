import {QuestController} from "./server/controller/quest.controller";

require('dotenv').config();
const express = require("express");
const app = express();
const port = process.env.PORT;

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get("/quest/:command", (req, res) => {
    const command: string = req.params.command;
    if (command === "get-all") {
        QuestController.getAll().then((allTasks: string[]) => {
            res.send(allTasks);
        }).catch(error => {
            res.send(error);
        });
    }
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
});
