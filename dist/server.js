"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// Craeting an instance of express
const app = (0, express_1.default)();
// Set EJS as the templating engine
app.set("view engine", "ejs");
// Define the directory for EJS templates
app.set("views", path_1.default.join(path_1.default.resolve("src", "views")));
// Starter Page
app.get("/", (req, res) => {
    res.render("welcome");
});
app.get("/get-started", (req, res) => {
    res.send("Getting Started ....🤖!");
});
// Only start the server if the module is run directly
if (require.main === module) {
    app.listen(process.env.PORT || 7000, () => {
        console.log(`Server started at PORT ${process.env.PORT} 🚀.`);
    });
}
// exporting the application
exports.default = app;
