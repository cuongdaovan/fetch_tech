'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('JobSkills', {
      skillId: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'Skills',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      jobId: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'Jobs',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      isRequired: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()'),
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('JobSkills');
  }
};