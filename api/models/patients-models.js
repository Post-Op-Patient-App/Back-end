const db = require('../../data/dbConfig');

module.exports = {
  get,
  getPatients,
  getById,
  insertVitals,
  updateVital,
  updatePatient,
  removeVital,
};

function get() {
  return db('patients')
}

function getPatients(){
  return db('patients')
}

function getById(id) {
  return db('patients')
  .where('patients.id', id)
  .first()
}

function insertVitals(vitals) {
  return db('vitals')
    .insert(vitals)
    .where('id', id)
}

function updatePatient(id, changes) {
  return db('patients')
    .where('id', id)
    .update(changes);
}

function updateVital(id, changes) {
  return db('vitals')
    .where('id', id)
    .update(changes);
}

// function remove(id) {
//   return db('users')
//     .where('id', id)
//     .del();
// }

function removeVital(id){
  return db('vitals')
  .where('id', id)
  .del();
}