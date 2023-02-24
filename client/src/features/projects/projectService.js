import axios from "axios";

const API_URL = "/api/projects/";

//create new project

const createProject = async (projectData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, projectData, config);

  return response.data;
};

//delete project

const deleteProject = async (projectId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + projectId, config);

  return response.data;
};

// get all projects
const getProjects = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

//update project

const updateProject = async (projectId, projectData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(API_URL + projectId, projectData, config);

  return response.data;
};

const projectService = {
  createProject,
  getProjects,
  deleteProject,
  updateProject,
};

export default projectService;
