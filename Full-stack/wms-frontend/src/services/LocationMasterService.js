import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/location_master';

export const listLocationMaster = () => axios.get(REST_API_BASE_URL);

export const createLocation = (locationMaster) => axios.post(REST_API_BASE_URL, locationMaster);

export const getLocationMaster = (locationID) => axios.get(REST_API_BASE_URL + '/' + locationID);

export const updateLocationMaster = (locationId, locationMaster) => axios.put(REST_API_BASE_URL + '/' + locationId, locationMaster);

export const deleteLocationMaster = (locationId) => axios.delete(REST_API_BASE_URL + '/' + locationId);