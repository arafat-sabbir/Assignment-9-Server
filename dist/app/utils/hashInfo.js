"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const hashInfo = (payload, salt) => {
    return bcrypt_1.default.hash(payload, salt);
};
exports.default = hashInfo;
