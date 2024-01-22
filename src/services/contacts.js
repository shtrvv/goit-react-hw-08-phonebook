import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const getContactsApi = async () => {
    const response = await axios.get('/contacts');
    return response.data
}

export const createContactApi = async (body) => {
    const response = await axios.post('/contacts', body);
    return response.data
}

export const deleteContactApi = async (id) => {
    const response = await axios.delete(`/contacts/${id}`);
    return response.data
}
