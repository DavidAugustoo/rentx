import express from "express";

const app = express();

app.get("/", (resquest, response) => {
    return response.json("HEllo World!");
});

app.listen(3333, () => console.log("Server is running!"));
