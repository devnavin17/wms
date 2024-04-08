import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/receiving';
const REST_API_BASE_URL2 = 'http://localhost:8080/api/item_storage';

// export const listLocationMaster = () => axios.get(REST_API_BASE_URL);

// export const createLocation = (locationMaster) => axios.post(REST_API_BASE_URL, locationMaster);

export const listItemStorage = () => axios.get(REST_API_BASE_URL2);

export const getReceivingStorage = (receivingID) => axios.get(REST_API_BASE_URL + '/' + receivingID);

export const updateReceivingStatus = (receivingId, receiving) => axios.put(REST_API_BASE_URL + '/' + receivingId, receiving);

export const createItemStorage = (itemStorage) => axios.post(REST_API_BASE_URL2, itemStorage);

export const updateLocationMaster = (locationId, locationMaster) => axios.put(REST_API_BASE_URL + '/' + locationId, locationId);

// export const deleteLocationMaster = (locationId) => axios.delete(REST_API_BASE_URL + '/' + locationId);