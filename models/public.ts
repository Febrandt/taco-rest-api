import { Sequelize, DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

export class PublicModel extends Model {
 
    declare index: number;
    declare name: string;
    declare calories: number;
    declare proteins: number;
    declare fats: number;
    declare carbs: number;
    declare fibers: number;

}


PublicModel.init({
    index: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, 
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
}, {
    sequelize, 
    modelName: 'Public', 
    tableName: 'public', 
    timestamps: false, 
});

