const items = [];
let hideCheckeditems = false;
let error = null;

const findById = function (id) {
  return this.items.find(currentItem => currentItem.id === id);
};

const addItem = function (item) {
  // try {
  //   item.validateName(name);
  //   this.items.push(item.create(name));
  // } catch (e) {
  //   console.log(e.message);
  // }
  this.items.push(item);

};

// const findAndToggleChecked = function (id) {
//   const currentItem = this.findById(id);
//   currentItem.checked = !currentItem.checked;
// };

// const findAndUpdateName = function (id, name) {
//   try {
//     item.validateName(name);
//     const currentItem = this.findById(id);
//     currentItem.name = name;
//   } catch (e) {
//     console.log('Cannot update name: ' + e.message);
//   }
// };

const findAndUpdate = function(id, newData) {
  const newId = this.findById(id);
  Object.assign(newId, newData);
}

const findAndDelete = function(id) {
  this.items = this.items.filter(currentItem => currentItem.id !== id);
};

const toggleCheckedFilter = function () {
  this.hideCheckedItems = !this.hideCheckedItems;
};

const resetError = function () {
  this.error = null;
}

export default {
  items,
  hideCheckeditems,
  findById,
  addItem,
  // findAndToggleChecked,
  // findAndUpdateName,
  findAndUpdate,
  findAndDelete,
  toggleCheckedFilter,
  error,
  resetError
};
