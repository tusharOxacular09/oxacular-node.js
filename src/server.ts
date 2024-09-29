import express, { Express, Request, Response } from "express";
import path from "path";
import dotenv from "dotenv";
dotenv.config();

// Craeting an instance of express
const app: Express = express();

// Set EJS as the templating engine
app.set("view engine", "ejs");

// Define the directory for EJS templates
app.set("views", path.join(path.resolve("src", "views")));

// Starter Page
app.get("/", (req: Request, res: Response) => {
  res.render("welcome");
});

// Listening application on port 7000.
app.listen(process.env.PORT || 7000, () => {
  console.log(`Server started at PORT ${process.env.PORT} 🚀.`);
});
