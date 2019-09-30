import $ from 'jquery';
import api from './api';

import 'normalize.css';
import './index.css';

import store from './store';
import shoppingList from './shopping-list';

const main = function () {
  // api.getItems()
  //   .then(res => res.json())
  //   .then((items) => {
  //     const item = items[0];
  //     return api.updateItem(item.id, { name: 'foobar' });
  //   })
  //   .then(res => res.json())
  //   .then(() => console.log('updated!'));
    

  // const item = store.items[0];
  // console.log('current name: ' + item.name);
  // store.findAndUpdate(item.id, { name: 'foobar' });
  // console.log('new name: ' + item.name);

  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);