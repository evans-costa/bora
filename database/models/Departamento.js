module.exports = (sequelize, DataTypes) => {
    const Departamento = sequelize.define(
        "Departamento", {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            depto_descr: {
                type: DataTypes.STRING,
                allowNull: false
            },
        },
        {
            tableName: "departamento",
            timestamps: false,
        }
    );
return Departamento;
};