module.exports = (sequelize, DataTypes) => {
    const Contact = sequelize.define(
        "Contact", {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            nome: {
                type: DataTypes.STRING,
                allowNull: false
            },
            message: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            tableName: "contact",
            timestamps: false,
        }
    );
return Contact;
};