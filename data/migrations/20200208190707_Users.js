
exports.up = function(knex, Promise) {
    return knex.schema
      .createTable("users", users => {
        users.increments();

        // Login Credentials
        users
          .string("userName")
          .notNullable()
          .unique();
        users.string("password").notNullable();
    
        // Doctor Role
        users.boolean("doctor").defaultTo(false);

      })
      .createTable('patients', patients => {
        patients.increments();
        patients.string('firstName', 125).notNullable();
        patients.string('lastName', 125).notNullable();
        patients.integer('L-CORE')
        patients.integer('L-SURF')
        patients.integer('L-O2')
        patients.integer('L-BP')
        patients.integer('SURF-STBL')
        patients.integer('CORE-STBL')
        patients.integer('BP-STBL')
        patients.float('COMFORT')
        patients.string('nurseDecision')
        patients.string('mechineDecision')
      })

  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("users");
  };