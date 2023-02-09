module.exports = (sequelize, DataTypes) => {
  const Evento = sequelize.define(
    "Evento",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nome_evento: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      data_evento: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      preco_evento: {
        type: DataTypes.DECIMAL(8, 2),
        allowNull: false,
      },
      descricao_event: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      fk_categoria: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      imagem_evento: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      destaque_home: {
        type: DataTypes.STRING,
      },
      destaque_carrosel: {
        type: DataTypes.STRING,
      },
      fK_funcionario: {
        type: DataTypes.INTEGER,
      }
    },
    {
      tableName: "eventos",
      timestamps: false,
    }
  );

  Evento.associate = (models) => {
    Evento.belongsTo(models.Categoria, {
      foreignKey: "fk_categoria",
      as: "categoria",
    });
  };

  Evento.associate = (models) => {
    Evento.hasMany(models.FotosEventos, {
      foreignKey: "evento_id",
      as: "fotos"
    });
  };

  Evento.associate = (models) => {
    Evento.belongsToMany(models.Pedidos, {
      as: 'pedidos',
      through: models.PedidoEventos,
      foreignKey: "evento_id",
      otherKey: "pedido_id",
    });
  };

  Evento.associate = (models) => {
    Evento.belongsTo(models.Funcionario, {
      foreignKey: "fk_funcionario",
    });
  };
  return Evento;
};
