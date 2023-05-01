let {deleteTaskById ,createTask, findById, findAll } = require('../DEL/taskModel.js')

async function getAll() {
  return await findAll()
}

async function getByID(id) {
  return await findById(id)
}

async function addTask(VALUES = {}) {
let temp = [];
 Object.keys(VALUES).map((value) => {
   temp.push(VALUES[value])
  })
  return await createTask(temp);
}

async function deleteTask(id) {
  return await deleteTaskById(id)
}

module.exports = {deleteTask, addTask,getAll, getByID }
