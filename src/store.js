/* eslint-disable no-console */
import item from './item';

const items = [];
let hideCheckeditems = false;

const findById = function (id) {
  return this.items.find(currentItem => currentItem.id === id);
};

const addItem = function (item) {
  this.items.push(item);
};

/* const findAndToggleChecked = function (id) {
  const currentItem = this.findById(id);
  currentItem.checked = !currentItem.checked;
}; */

const findAndUpdate = function (id, newData) {
  console.log(`ID is ${id} and newData is ${JSON.stringify(newData)}`);
  let myObj = this.items.find(function(eachId) {
    console.log(`Each ID is ${JSON.stringify(eachId)}`);
    return eachId === id;
  });

  console.log(`MyObj is ${JSON.stringify(myObj)}`);
/*  myObj.assign(myObj, newData); */
};

/* const findAndUpdateName = function (id, name) {
  try {
    item.validateName(name);
    const currentItem = this.findById(id);
    currentItem.name = name;
  } catch (e) {
    console.log('Cannot update name: ' + e.message);
  }
}; */

const findAndDelete = function (id) {
  this.items = this.items.filter(currentItem => currentItem.id !== id);
};

const toggleCheckedFilter = function () {
  this.hideCheckedItems = !this.hideCheckedItems;
};

export default {
  items,
  hideCheckeditems,
  findById,
  addItem,
/*   findAndToggleChecked,
  findAndUpdateName, */
  findAndUpdate,
  findAndDelete,
  toggleCheckedFilter
};