'use strict';
const { faker } = require('@faker-js/faker');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'RecentDisappearances',
      [...Array(50)].map((el) => ({
        who_missing: faker.word.adjective(2),
        title: faker.word.noun(4),
        status: faker.datatype.boolean(),
        images: JSON.stringify(
          [...Array(3)].map(
            () => `${faker.image.urlLoremFlickr({ category: 'animal' })}`,
          ),
        ),
        createdAt: new Date(),
        updatedAt: new Date(),
      })),
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('RecentDisappearances', null, {});
  },
};
