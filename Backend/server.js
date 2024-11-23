import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import contactRouter from "./api/auth.js"; 
import connectDB from "./config/db.js";
import newslettersRouter from "./routes/newsletter.js";
import eventsRouter from "./routes/Events.js";
import adminRouter from "./routes/admin.js";
import path from "path";
import helmet from "helmet";
import cookieParser from "cookie-parser";

dotenv.config();
connectDB();

const app = express();
app.use(helmet());
app.use(cors());
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
app.use(express.static(path.join(__dirname, "../Frontend/build")));

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../Frontend/build/index.html"));
  });

app.get("/", (req, res) => {
    res.send("Server is ready");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
