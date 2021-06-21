import express from 'express';

//@types/express
const app = express();

app.get("/test", (request, response) => {
  //Request: entrada
  //Response: saída
  return response.send("Olá NLW.");
})

//http://localhost:3000
app.listen(3000, () => console.log("Server is running..."));