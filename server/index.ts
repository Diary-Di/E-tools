import express, { Request, Response } from "express";
import cors from "cors";

// Initialize CORS
const corsOptions: object = {
  origin: process.env.CORS_ORIGIN || "*",
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};
const corsMiddleware = cors(corsOptions);

const app: express.Application = express();
const port: number = Number(process.env.PORT) ?? 3030;

// Middleware to enable CORS
app.use(corsMiddleware);

// Middleware to parse JSON
app.use(express.json());

// Basic route
app.get("/", (req: Request, res: Response): void => {
  res.send("Welcome to the server!");
});

// Start the server
app.listen(port, (): void => {
  console.log(`Server is running on http://localhost:${port}`);
});
