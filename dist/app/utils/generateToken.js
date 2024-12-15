"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config"));
const generateToken = (email, id, role, name) => {
    console.log("Secret during generation:", config_1.default.jwt_access_secret);
    return jsonwebtoken_1.default.sign({ email, id, role, name }, config_1.default.jwt_access_secret, {
        expiresIn: "7d",
    });
};
exports.default = generateToken;
