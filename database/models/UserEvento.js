module.exports = (sequelize, DataTypes) => {
    const UserEvento = sequelize.define(
        "User_evento", {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            evento_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            user_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            }
            
        },
        {
            tableName: "user_evento",
            timestamps: false,
        }
    );
return UserEvento;
};