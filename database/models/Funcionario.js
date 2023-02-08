module.exports = (sequelize, DataTypes) => {
  const Funcionario = sequelize.define(
    "Funcionario",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nome_completo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email_empresa: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cnpj: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      dt_nascimento: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      cpf: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      dt_admissao: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      fk_departamento: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      cargo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      senha: {
        type: DataTypes.TEXT,
        allowNull: false,
      }
    },
    {
      tableName: "funcionario_pf",
      timestamps: false,
    }
  );

  Funcionario.associate = (models) => {
    Funcionario.belongsTo(models.Departamento, {
      foreignKey: "fk_departamento",
      as: "departamento",
    });
  };

  Funcionario.associate = (models) => {
    Funcionario.hasMany(models.Evento, {
      foreignKey: "fk_funcionario",
      as: "eventos",
    });
  };

  return Funcionario;
};
