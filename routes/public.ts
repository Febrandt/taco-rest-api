import { Router } from 'express';
import { createPublicItem, searchPublicItemsByName } from '../controllers/publicControlller';

const public_router : Router = Router()

public_router.post("/create",createPublicItem)
public_router.get("/search/:name",searchPublicItemsByName)

export default public_router;