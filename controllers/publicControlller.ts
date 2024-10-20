import { Request, Response } from "express";
import {PublicModel} from "../models/public";
import { Op } from "sequelize";


export const searchPublicItemsByName = async (req : Request , res : Response) => {
    res.set({ 'content-type': 'application/json; charset=utf-8' });

    const name = req.params.name;

    try {
        let items = await PublicModel.findAll({
            "where": {
                "name": {[Op.like]: "%"+name+"%"}
            }
        })
        const content = JSON.stringify(items);
        res.status(200).end(content);
    } catch (e) {
        console.log("Error in searchPublicItemsByName(): " + e);
        throw e;
    }

}

export const createPublicItem = async (req : Request , res : Response) => {
    res.set({ 'content-type': 'application/json; charset=utf-8' });

    const item = req.body;

    if (!item.name || !item.calories || !item.proteins || !item.fats || !item.carbs) {
        res.json({
            ErrorCode: 204,
            Message: 'Fields cannot be empty'
        });
        return
    }

    try {
        
        let new_item = await PublicModel.create({
            name: item.name,
            calories: parseInt(item.calories),
            proteins: parseFloat(item.proteins),
            fats: parseFloat(item.fats),
            carbs: parseFloat(item.carbs),
            fibers: parseFloat(item.fibers)
        })

        res.status(200).end("Item created with index: " + String(new_item.index));

    } catch (e) {
        console.log("Error in searchPublicItemsByName(): " + e);
        throw e;
    }



}
