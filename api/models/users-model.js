const db = require('../../data/dbConfig');

module.exports = {
    get,
    findBy,
    insert,
    update,
    remove,
};

function get() {
    return db('users')
}

function findBy(filter) {
    return db('users')
    .where(filter)
}

function insert(user) {
    return db('users')
      .insert(user)
}

function update(id, changes) {
    return db('users')
      .where('id', id)
      .update(changes);
}

function remove(id) {
    return db('users')
      .where('id', id)
      .del();
}