"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadImages = exports.uploadImage = exports.upload = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const cloudinary_1 = require("cloudinary");
const config_1 = __importDefault(require("../config"));
const multer_1 = __importDefault(require("multer"));
// Configuration
cloudinary_1.v2.config({
    cloud_name: config_1.default.cloud_name,
    api_key: config_1.default.api_key,
    api_secret: config_1.default.api_secret
});
// Multer memory storage
const storage = multer_1.default.memoryStorage();
exports.upload = (0, multer_1.default)({ storage: storage });
const uploadImage = async (req, res, next) => {
    console.log(req.body, req.file);
    if (!req.file) {
        return next();
    }
    try {
        // Convert buffer to Base64
        const base64Image = req.file.buffer.toString('base64');
        const dataURI = `data:${req.file.mimetype};base64,${base64Image}`;
        // Upload image to Cloudinary
        const uploadedImage = await cloudinary_1.v2.uploader.upload(dataURI, {
            resource_type: 'auto',
            public_id: `${Date.now()}-${req.file.originalname}`
        });
        // Attach the Cloudinary response to the request object
        req.photo = uploadedImage?.secure_url;
        next();
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to upload image' });
    }
};
exports.uploadImage = uploadImage;
const uploadImages = async (req, res, next) => {
    if (!req.files || !Array.isArray(req.files.images) || req.files.images.length === 0) {
        return next();
    }
    try {
        // Prepare an array to hold uploaded image URLs
        const uploadPromises = req.files.images.map(async (file) => {
            // Convert buffer to Base64
            const base64Image = file.buffer.toString('base64');
            const dataURI = `data:${file.mimetype};base64,${base64Image}`;
            // Upload image to Cloudinary
            const uploadedImage = await cloudinary_1.v2.uploader.upload(dataURI, {
                resource_type: 'auto',
                public_id: `${Date.now()}-${file.originalname}`
            });
            return uploadedImage?.secure_url; // Return the secure URL
        });
        // Wait for all uploads to complete
        const uploadedImages = await Promise.all(uploadPromises);
        // Attach the uploaded image URLs to the request object
        req.photos = uploadedImages; // Store the array of URLs in req.photos
        next();
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to upload images', errors: error });
    }
};
exports.uploadImages = uploadImages;
