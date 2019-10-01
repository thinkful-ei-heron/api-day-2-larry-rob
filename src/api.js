const BASE_URL = 'https://thinkful-list-api.herokuapp.com/robarcand';

const getItems = function () {
  return fetchWrapper(`${BASE_URL}/items`);
};

const createItem = function (name) {
  let newItem = JSON.stringify({name});

  return fetchWrapper(`${BASE_URL}/items`, {
    'method': 'post',
    'headers': {
      'Content-Type': 'application/json'
    },
    'body': newItem
  });
};

const updateItem = function (id, updateData) {
  let bodyInfo = JSON.stringify(updateData);
  return fetchWrapper(`${BASE_URL}/items/${id}`, {
    'method': 'PATCH',
    'headers': {
      'Content-Type': 'application/json'
    },
    'body': bodyInfo
  });
};

const deleteItem = function(id) {
  return fetchWrapper(`${BASE_URL}/items/${id}`, {
    'method': 'DELETE',
    'headers': {
      'Content-Type': 'application/json'
    }
  });
};

const fetchWrapper = function (...args) {
  let error; 
  return fetch(...args)
  .then(resp => {
    if(!resp.ok) {
      error = {code: resp.status};
    }
    return resp.json();
  })
  .then(respJson => {
    if(error) {
      error.message = respJson.message;
      return Promise.reject(error);
    }
    return respJson;
  });
};

export default {
  getItems,
  createItem,
  updateItem,
  deleteItem
};
