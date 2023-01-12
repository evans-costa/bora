module.exports = (sequelize, DataTypes) => {
	const FotosEventos = sequelize.define(
		"FotosEventos",
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			foto_url: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			evento_id: {
				type: DataTypes.INTEGER,
			},
		},
		{
			tableName: "fotos_evento",
			timestamps: false,
		}
	);

	FotosEventos.associate = (models) => {
		FotosEventos.belongsTo(models.Evento, {
			foreignKey: "evento_id",
			as: "evento",
		});
	};

	return FotosEventos;
};
