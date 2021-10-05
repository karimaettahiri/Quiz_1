const faker = require ("faker")
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('clucks').del()
    .then(function () {
      // Inserts seed entries
      const todos = [];
      for (let i=0; i<100; i++){
        todos.push({
          username: faker.name.firstName(),
          imageUrl : faker.image.animals(),
          content:faker.company.catchPhrase(),
          createdAt:faker.date.past(),
          updatedAt: faker.date.recent()
         
            
        })
      }
        return knex('clucks').insert(todos)
    });
};

