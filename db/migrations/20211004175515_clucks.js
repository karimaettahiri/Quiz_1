
exports.up = function(knex) {
    return knex.schema.createTable("clucks",table=>{
        table.increments("id");
        table.string('username');
        table.text("imageUrl");
        table.text('content');
        table.timestamp("createdAt").default(knex.fn.now());
        table.timestamp("updatedAt").default(knex.fn.now());

    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable("clucks");
        
    
  
};
