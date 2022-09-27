const BASE_URL = 'http://localhost:3005';
const apiService = {}; 

apiService.register = (user) => {
  return fetch(`${BASE_URL}/register`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
apiService.addItem = (item) => {
  return fetch(`${BASE_URL}/createItem`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(item),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
apiService.uploadImage = (image) => {
  var data = new FormData();
  data.append('file', image, image.name);
  console.log(image);
  return fetch(`${BASE_URL}/image`, {
    method: 'POST',
    body: data
    // headers: { 'Content-Type': 'multipart/form-data' }
  }).then((res)=>res.json());
};
apiService.login = (user) => {
  return fetch(`${BASE_URL}/login`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

apiService.getitems = (props) => {
  //to see the products sold or change something in orders 
  const items=fetch(`${BASE_URL}/getitems`, {
    method: 'GET',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((res) => res.json())
    // .then(data => { props.setData(data); })
    .catch((err) => console.log(err));
  return items;
};

apiService.logout = () => {
  return fetch(`${BASE_URL}/logout`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export default apiService;
