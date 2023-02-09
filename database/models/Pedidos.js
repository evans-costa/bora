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
    Pedidos.belongsTo(models.User, {
      foreignKey: "user_id",
    });
  };

  Pedidos.associate = (models) => {
    Pedidos.belongsToMany(models.Evento, {
      through: models.PedidoEventos,
      foreignKey: "pedido_id",
      otherKey: "evento_id",
      as: "evento"
    });
  };



  return Pedidos;
};