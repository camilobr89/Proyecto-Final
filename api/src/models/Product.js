const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
    sequelize.define(
        "product",
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            price: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },
            image: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            category: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            stock: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            colors: {
                type: DataTypes.ARRAY(DataTypes.STRING),
            },
            sizes: {
                type: DataTypes.ARRAY(DataTypes.STRING),
            },
            created: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
                allowNull: false,
            },
            deleted: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
        },
        {
            timestamps: false,
        }
    );
};
