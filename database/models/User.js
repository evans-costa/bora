module.exports = (sequelize, DataTypes) => {
        const User = sequelize.define(
            "User", {
                id: {
                    type: DataTypes.INTEGER,
                    autoIncrement: true,
                    primaryKey: true,
                },
                first_name: {
                    type: DataTypes.STRING,
                    allowNull: false
                },
                last_name: {
                    type: DataTypes.STRING,
                    allowNull: false
                },
                email: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    unique: true
                },
                telefone: {
                    type: DataTypes.INTEGER,
                    allowNull: false
                },
                cpf: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    unique: true
                },
                dt_aniversario: {
                    type: DataTypes.DATEONLY,
                    allowNull: false
                },
                genero: {
                    type: DataTypes.STRING,
                    allowNull: false
                },
                cep: {
                    type: DataTypes.INTEGER,
                    allowNull: false
                },
                numero: {
                    type: DataTypes.INTEGER,
                    allowNull: false
                },
                rua: {
                    type: DataTypes.STRING,
                    allowNull: false
                },
                cidade: {
                    type: DataTypes.STRING,
                    allowNull: false
                },
                estado: {
                    type: DataTypes.STRING,
                    allowNull: false
                },
                senha: {
                    type: DataTypes.TEXT,
                    allowNull: false
                },
            },
            {
                tableName: "users",
                timestamps: false,
            }
        );
    return User;
};