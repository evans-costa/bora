module.exports = (sequelize, DataTypes) => {
    const UserEvento = sequelize.define(
        "User_evento", {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            evento_id: {
                type: DataTypes.INTEGER
            },
            user_id: {
                type: DataTypes.INTEGER
            }
            
        },
        {
            tableName: "user_evento",
            timestamps: false,
        }
    );
return UserEvento;
};