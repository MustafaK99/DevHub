import axios from "axios";

const API_URL = "/api/epics/";

//create new project

const createEpic = async (epicData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, epicData, config);

  return response.data;
};

//delete project

const deleteEpic = async (epicId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + epicId, config);

  return response.data;
};

// get all projects
const getEpics = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL + id, config);

  return response.data;
};

//update project

const updateEpic = async (epicData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(
    API_URL + epicData.epicId,
    epicData.epicData,
    config
  );

  return response.data;
};

const epicService = {
  createEpic,
  getEpics,
  deleteEpic,
  updateEpic,
};

export default epicService;
