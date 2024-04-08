import axios from "axios";
import http from "../utilities/http";

const REST_API_BASE_URL = 'http://localhost:8080/api/item_master';

const REST_API_BASE_URL1 = 'http://localhost:8080/api/receiving';

// const REST_API_BASE_URL2 = 'http://localhost:8080/api/location_master';

export const listItemMaster = () => axios.get(REST_API_BASE_URL);

export const createItem = (itemMaster) => axios.post(REST_API_BASE_URL, itemMaster);

export const getItemMaster = (itemId) => axios.get(REST_API_BASE_URL + '/' + itemId);

// export const getItemMaster = (itemId) => http.get(`item_master/${itemId}`);

export const updateItemMaster = (itemId, itemMaster) => axios.put(REST_API_BASE_URL + '/' + itemId, itemMaster);

export const deleteItemMaster = (itemId) => axios.delete(REST_API_BASE_URL + '/' + itemId);

export const listReceivng = () => axios.get(REST_API_BASE_URL1);

export const createReceiving = (receiving) => axios.post(REST_API_BASE_URL1, receiving);

// export const listLocationMaster = () => axios.get(REST_API_BASE_URL2);