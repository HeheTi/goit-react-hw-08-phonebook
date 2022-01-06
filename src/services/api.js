const BASE_URL = 'https://connections-api.herokuapp.com';
const API_ENDPOINT = '/contacts';

// const BASE_URLL = 'https://connections-api.herokuapp.com';
// const post = postnewAcc => ({
//   method: 'POST',
//   body: JSON.stringify(postnewAcc),
//   headers: { 'Content-Type': 'application/json; charset=UTF-8' },
// });

// const loginUser = async newAcc => {
//   const res = await fetch(`${BASE_URLL}/users/signup`, post(newAcc));
//   if (!res.ok) {
//     return Promise.reject(new Error(res.statusText));
//   }
//   return res.json();
// };

const fetchData = async (path, options) => {
  const res = await fetch(BASE_URL + path, options);
  return res.ok ? res.json() : Promise.reject(new Error(res.statusText));
};

const loginUser = (endpoint, dataUser) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(dataUser),
    headers: { 'Content-Type': 'application/json; charset=UTF-8' },
  };

  return fetchData(endpoint, options);
};

const logoutUser = (endpoint, token) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      Authorization: `Bearer ${token}`,
    },
  };
  return fetchData(endpoint, options);
};

const takeCurrentUser = (endpoint, token) => {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      Authorization: `Bearer ${token}`,
    },
  };

  return fetchData(endpoint, options);
};

//->work with contacts

const getAllContacts = token => {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      Authorization: `Bearer ${token}`,
    },
  };
  return fetchData(API_ENDPOINT, options);
};

const saveItem = (item, token) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(item),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      Authorization: `Bearer ${token}`,
    },
  };
  return fetchData(API_ENDPOINT, options);
};

const deleteItem = (id, token) =>
  fetchData(`${API_ENDPOINT}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      Authorization: `Bearer ${token}`,
    },
  });

export {
  takeCurrentUser,
  logoutUser,
  loginUser,
  getAllContacts,
  saveItem,
  deleteItem,
};
