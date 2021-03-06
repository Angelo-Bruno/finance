'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.createTable('user_outcome', { 
        id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      outcome_amount :{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      outcome_description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      outcome_date: {
        type: Sequelize.STRING,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      } });
     
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.dropTable('user_outcome');
     
  }
};
