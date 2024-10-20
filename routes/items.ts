import { Router } from 'express';
import { searchItemsByName } from '../controllers/itemsController';

const items_router : Router = Router()

items_router.get("/search/:name",searchItemsByName)


export default items_router;