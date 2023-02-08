module.exports = (sequelize, DataTypes) => {
  const Pedidos = sequelize.define(
    "Pedidos", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    data: {
      type: DataTypes.DATE,
      allowNull: false,
    }

  },
    {
      tableName: "pedidos",
      timestamps: false,
    }
  );

  Pedidos.associate = (models) => {
    Pedidos.belongsToMany(models.Evento, {
      through: "pedido_eventos",
      foreignKey: "pedido_id"
    });
  };
  return Pedidos;
};