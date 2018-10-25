import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

export const fetchNotes = () => {
  return axios.get('/notes').then(res => res.data);
};

export const addNote = item => {
  return axios.post('/notes', item).then(res => res.data);
};

export const updateNote = item => {
  return axios.patch(`/notes/${item.id}`, item).then(res => res.data);
};

export const removeNote = id => {
    return axios.delete(`/notes/${id}`).then(res => {
        if (res.status === 200) {
          return res.data;
        }
    });
}
