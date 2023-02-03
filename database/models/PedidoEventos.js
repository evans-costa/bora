module.exports = (sequelize, DataTypes) => {
  const PedidoEventos = sequelize.define(
    "PedidoEventos", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    evento_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    pedido_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    preco: {
      type: DataTypes.DECIMAL(8, 2),
      allowNull: false,
    },
  },
    {
      tableName: "pedido_eventos",
      timestamps: false,
    }
  );
  return PedidoEventos;
};