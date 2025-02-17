import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import contactRouter from "../api/auth.js"; 
import connectDB from "../config/db.js";
import newslettersRouter from "../routes/newsletter.js";
import eventsRouter from "../routes/events.js";
import adminRouter from "../routes/admin.js";
import path from "path";
import helmet from "helmet";
import cookieParser from "cookie-parser";

dotenv.config();
connectDB();

const app = express();
app.use(helmet());
app.use(
  cors({
    origin: "http://localhost:3000", 
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/newsletters", newslettersRouter);
app.use("/", contactRouter);
app.use("/events", eventsRouter);
app.use("/admin", adminRouter);


const __dirname = path.resolve();
const frontendPath = path.join(__dirname, "../Frontend/build");
app.use(express.static(frontendPath));


app.get("*", (req, res) => {
  res.sendFile(path.resolve(frontendPath, "index.html"));
});


app.get("/", (req, res) => {
  res.send("Server is ready");
});


app.use((req, res, next) => {
  console.error(`Unmatched API route: ${req.method} ${req.url}`);
  next();
});


const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
