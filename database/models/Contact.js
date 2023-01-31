module.exports = (sequelize, DataTypes) => {
	const Contact = sequelize.define(
		"Contact",
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			full_name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			message: {
				type: DataTypes.TEXT,
				allowNull: false,
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			fk_user: {
				type: DataTypes.INTEGER,
				allowNull: true,
			},
		},
		{
			tableName: "contact",
			timestamps: false,
		}
	);

	Contact.associate = (models) => {
		Contact.belongsTo(models.User, {
			foreignKey: "fk_user",
			as: "user",
		});
	};
	return Contact;
};
