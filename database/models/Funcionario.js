module.exports = (sequelize, DataTypes) => {
    const Funcionario = sequelize.define(
        "Funcionario", {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            nome_completo: {
                type: DataTypes.STRING,
                allowNull: false
            },
            CPF: {
                type: DataTypes.TEXT, // tem que mudar no banco de dados, tá como INT
                allowNull: false,
                unique: true
            },
            dt_nascimento: { // tem que mudar o nome da coluna no BD, tá escrito errado
                type: DataTypes.DATEONLY,
                allowNull: false,
            },
            dt_admissao: { // tem que mudar o nome da coluna no BD, tá escrito errado
                type: DataTypes.DATEONLY,
                allowNull: false
            },
            cargo: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            tableName: "funcionario_pf",
            timestamps: false,
        }
    );
return Funcionario;
};