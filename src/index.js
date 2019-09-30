/* eslint-disable no-console */
import $ from 'jquery';
import api from './api';

import 'normalize.css';
import './index.css';

import store from './store';
import shoppingList from './shopping-list';

const main = function () {
  api.getItems()
    .then(res => res.json())
    .then((items) => {
      items.forEach((item) => store.addItem(item));
      shoppingList.render();
    })
    .then(function() {
      const item = store.items[3];
      console.log('current name: ' + item.name);
      store.findAndUpdate(item.id, { name: 'foobar' });
      console.log('new name: ' + item.name);     
    });

  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);