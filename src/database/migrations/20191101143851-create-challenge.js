module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('challenges', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            title: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            description: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            points: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            need_permission: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
                allowNull: false,
            },
            start_date: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            end_date: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            user_id: {
                type: Sequelize.INTEGER,
                references: { model: 'users', key: 'id' },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
                allowNull: false,
            },
            file_id: {
                type: Sequelize.INTEGER,
                references: { model: 'files', key: 'id' },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
                allowNull: false,
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
        });
    },

    down: queryInterface => {
        return queryInterface.dropTable('comment_modules');
    },
};
