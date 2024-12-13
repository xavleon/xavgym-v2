//const express = require('express');
import express from "express";
import { connectDB } from "./db/connectDB.js";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import cors from "cors";
dotenv.config();

const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json()); // to parse the incoming request with JSON payloads
app.use(cors());
app.use("/api/auth", authRoutes);

app.listen(4000, () => {
  connectDB();
  console.log("Server is running on port:", PORT);
});

//mrmleon93
//qQCJhEsLbcJ57kIZ
//mongodb+srv://mrmleon93:qQCJhEsLbcJ57kIZ@cluster0.d2mr9.mongodb.net/
//mongodb+srv://mrmleon93:<db_password>@cluster0.d2mr9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
