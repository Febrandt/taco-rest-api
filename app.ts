import express from 'express';
import items_router from "./routes/items";
import public_router from './routes/public';
import { rateLimit } from 'express-rate-limit'

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000,
	limit: 100, 
	standardHeaders: 'draft-7', 
	legacyHeaders: false, 
})
const app = express();
const port = 3000;

app.use(express.json({limit: "1mb"}));
app.use(express.urlencoded({ extended: true }));
app.use("/items",items_router);
app.use("/public",public_router);
app.use(limiter)

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});