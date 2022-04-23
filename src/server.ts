import express from "express";

const app = express();

app.use(express.json());

app.get("/", (resquest, response) => {
    return response.json("HEllo World!");
});

app.post("/", (request, response) => {
    const { name } = request.body;

    return response.json({ name });
});

app.listen(3000, () => console.log("Server is running!"));
