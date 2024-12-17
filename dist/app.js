"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const routes_1 = __importDefault(require("./app/routes"));
const cors_1 = __importDefault(require("cors"));
const globalErrorHandler_1 = __importDefault(require("./app/middlewares/globalErrorHandler"));
const app = (0, express_1.default)();
exports.prisma = new client_1.PrismaClient();
// Middleware setup
const formatDate = (date) => {
    const options = {
        month: "numeric",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric", // Include seconds
        hour12: true,
    };
    return new Intl.DateTimeFormat("en-US", options).format(date);
};
// Middleware to log requests and responses
const requestLogger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const query = JSON.stringify(req.query, null, 2); // Log query parameters
    const params = JSON.stringify(req.params, null, 2); // Log route parameters
    const body = JSON.stringify(req.body, null, 2); // Log request body
    const formattedDate = formatDate(new Date());
    console.log("------------------------");
    console.log(`Api :- \x1b[0m\x1b[34m${method}\x1b[0m \x1b[32m${url}\x1b[0m \x1b[36m[${formattedDate}]\x1b[0m`);
    console.log("Query:", query); // Log the query
    console.log("Params:", params); // Log the params
    console.log("Body:", body); // Log the body
    console.log("------------------------");
    next();
};
// Middleware setup
app.use(express_1.default.json());
app.use(requestLogger);
app.use((0, cors_1.default)({
    origin: [
        "http://localhost:5173",
        "https://ecommerce-assignment-9.netlify.app",
    ],
    credentials: true,
}));
// Use routes
app.use("/api/v1", routes_1.default);
// Test route
const test = (req, res) => {
    res.send("Hello From Our E-Commerce Website!");
};
app.get("/", test);
// Use routes
app.use("/api/v1", routes_1.default);
app.use(globalErrorHandler_1.default);
// Handle 404 - Not Found
app.all("*", (req, res) => {
    res
        .status(404)
        .json({ success: false, message: `Route Is Not Found ${req.url}` });
});
exports.default = app;
