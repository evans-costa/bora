module.exports = (sequelize, DataTypes) => {
    const Evento = sequelize.define(
        "Evento", {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            nome_evento: {
                type: DataTypes.STRING,
                allowNull: false
            },
            data_evento: {
                type: DataTypes.DATEONLY,
                allowNull: false
            },
            preco_evento: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },
            descricao_event: {
                type: DataTypes.TEXT,
                allowNull: false
            },
        },
        {
            tableName: "eventos",
            timestamps: false,
        }
    );

    Evento.associate = (models) => {
        Evento.belongsToMany(models.User,{
            foreignKey: "user_id",
            as: "eventos",
            through: models.UserEvento
        })
    }
return Evento;
};