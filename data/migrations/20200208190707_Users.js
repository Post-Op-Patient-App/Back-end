
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
      })
      .createTable('vitals', vitals => {
        vitals.increments();
        vitals
          .integer('patients_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('patients')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
          vitals.integer('L-CORE');
          vitals.integer('L-SURF');
          vitals.integer('L-O2');
          vitals.integer('L-BP');
          vitals.integer('SURF-STBL');
          vitals.integer('CORE-STBL');
          vitals.integer('BP-STBL');
          vitals.float('COMFORT');
          vitals.string('nurseDecision');
          vitals.string('mechineDecision');
      })

  };
  
  exports.down = function(knex, Promise) {
    return knex.schema
      .dropTableIfExists("users")
      .dropTableIfExists("patients")
      .dropTableIfExists("vitals")
  };