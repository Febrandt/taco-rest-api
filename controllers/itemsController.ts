import { Request, Response } from "express";
import { ItemsModel } from "../models/items";
import { Op } from "sequelize";


export const searchItemsByName = async (req : Request , res : Response) => {
    res.set({ 'content-type': 'application/json; charset=utf-8' });


    const name = req.params.name;

    try {
        let items = await ItemsModel.findAll({
            "where": {
                "name": {[Op.like]: "%"+name+"%"}
            }
        })
        const content = JSON.stringify(items);
        res.status(200).end(content);
    } catch (e) {
        console.log("Error in searchItemsByName(): " + e);
        throw e;
    }


}
