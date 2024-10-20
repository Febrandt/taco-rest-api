import { Sequelize, DataTypes, Model } from "sequelize";
import sequelize from "../config/database"; // Adjust the path to your database configuration

export class ItemsModel extends Model {
    declare index: number;
    declare name: string;
    declare calories: number;
    declare proteins: number;
    declare fats: number;
    declare carbs: number;
    declare fibers: number;
    declare cholesterol: number;
    declare calcium: number;
    declare magnesium: number;
    declare manganese: number;
    declare phosphorus: number;
    declare iron: number;
    declare sodium: number;
    declare potassium: number;
    declare copper: number;
    declare zinc: number;
    declare retinol: number;
    declare thiamine: number;
    declare riboflavin: number;
    declare pyridoxine: number;
    declare niacin: number;
    declare vitaminC: number;
}

ItemsModel.init({
    index: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    calories: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    proteins: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    fats: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    carbs: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    fibers: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    cholesterol: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    calcium: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    magnesium: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    manganese: {
        type: DataTypes.FLOAT,
        defaultValue: 0,
    },
    phosphorus: {
        type: DataTypes.FLOAT,
        defaultValue: 0,
    },
    iron: {
        type: DataTypes.FLOAT,
        defaultValue: 0,
    },
    sodium: {
        type: DataTypes.FLOAT,
        defaultValue: 0,
    },
    potassium: {
        type: DataTypes.FLOAT,
        defaultValue: 0,
    },
    copper: {
        type: DataTypes.FLOAT,
        defaultValue: 0,
    },
    zinc: {
        type: DataTypes.FLOAT,
        defaultValue: 0,
    },
    retinol: {
        type: DataTypes.FLOAT,
        defaultValue: 0,
    },
    thiamine: {
        type: DataTypes.FLOAT,
        defaultValue: 0,
    },
    riboflavin: {
        type: DataTypes.FLOAT,
        defaultValue: 0,
    },
    pyridoxine: {
        type: DataTypes.FLOAT,
        defaultValue: 0,
    },
    niacin: {
        type: DataTypes.FLOAT,
        defaultValue: 0,
    },
    vitamin_c: {
        type: DataTypes.FLOAT,
        defaultValue: 0,
    },
}, {
    sequelize,
    modelName: 'Item', 
    tableName: 'items', 
    timestamps: false,
});


