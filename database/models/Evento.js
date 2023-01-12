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
		Evento.belongsToMany(models.User, {
			as: "user_evento",
			through: "UserEvento",
			foreignKey: "user_id",
			otherKey: "evento_id",
		});
	};

	Evento.associate = (models) => {
		Evento.hasMany(models.FotosEventos, {
			foreignKey: "evento_id",
			as: "fotos"
		})
	}
	return Evento;
};
