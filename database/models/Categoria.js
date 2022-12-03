module.exports = (sequelize, DataTypes) => {
    const Categoria = sequelize.define(
        "Categoria", {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            tipo_evento: {
                type: DataTypes.STRING,
                allowNull: false
            },
        },
        {
            tableName: "categorias",
            timestamps: false,
        }
    );
return Categoria;
};